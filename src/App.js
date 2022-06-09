import './App.scss';
import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import filters from "./filters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' //

const App = () => {
    //API call details
    const API_id = '90c42552';
    const API_key = 'f893e4c292136ee98814146309292973';

    //set state to retrieve the recipes
    const [recipes, setRecipes] = useState([]);
    //set state to use the input text to run the search. This will be updated whenever the input text changes, even when just adding letters.
    const [search, setSearch] = useState('');
    //So, we also need another state to run the search with the final input, and will only be used after submitting the form
    const [query, setQuery] = useState('')


    //for filters:
    const [diet, setDiet] = useState('');
    const [health, setHealth] = useState('');
    const [meal, setMeal] = useState('');

    // for extra pages
    const [index, setIndex] = useState(0);
    const [pages, setPages] = useState([]);

    //this works similarly to ComponentDidMount in that it is called once the component is mounted on the DOM
    useEffect(() => {
        setQuery(search);
        getRecipes();
        //    by setting the second argument to query, useEffect will only run when query state will be set, i.e. when submitting form
    }, [query, health, diet, meal]);

    //API call is asynchronous, hence we need the await keyword.
    const getRecipes = async () =>{
        let mdict = {
            type: 'public',
            q: query,
            app_key: API_key,
            app_id: API_id
        }
        if (diet !== '') {
            mdict['diet'] = diet;
        }
        if (health !== '') {
            mdict['health'] = health;
        }
        if (meal !== '') {
            mdict['mealType'] = meal;
        }
        const params = new URLSearchParams(mdict)
        // console.log(params + ' hi');
        const link = 'https://api.edamam.com/api/recipes/v2?' + params;
        const a = await fetch(link);
        //use json format to handle response obj (an array) more easily
        console.log('a before json',a)
        const b = await a.json();
        console.log('a after json',b)
        //change the state
        setRecipes(b.hits);

        // //for pagination
        if (b._links !== undefined && b._links.next !== undefined && b._links.next.href !== '') {
            const np = [link, b._links.next.href];
            setIndex(0);
            setPages(np);
        }
    }

    const getLink = async (link) => {
        console.log(link);
        const a = await fetch(link);
        const b = await a.json();
        //console.log(b,'test text')
        return b;
    }
    //

    const nextPage = () => {
        // console.log('attempting page json ',pages, index, pages[index])
        getLink(pages[index+1]).then((b) => {
            setRecipes(b.hits);
            setIndex(index+1);
            setPages(pages.concat(b._links.next.href))
        })
    }

    const prevPage = () => {
        getLink(pages[index-1]).then((b) => {
            setRecipes(b.hits);
            setIndex(index-1);
        })
        if(index==0){
            console.log('No more pages')
        }
    }

    const firstPage = () => {
        getLink(pages[0]).then((b) => {
            setRecipes(b.hits);
            setIndex(0);
            setPages(pages)
        })
    }

    //since the initial search state is set to an empty string, whenever something is input in the search bar (onChange event), we call:
    const updateSearch = e => {
        //so that the initial state is updated to the input text
        setSearch(e.target.value)
        // console.log('search',search)
    }
    //this will run once we hit the submit button, hence it will use the whole input
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // console.log('query',query)
    //    to reset the search bar after clicking submit, reset the state to an empty string:
    //     setSearch('');
    }

    const reset = () =>{
        setSearch('');
        setQuery('');
        setHealth('');
        setDiet('');
        setMeal('');
        setRecipes([]);
    }


    return (
        <div className='App'>
            {/*{console.log(page,'pagesssss')}*/}
            <h1 className='title'>Recipe Filter</h1>
          <form
              onSubmit={getSearch}
              className='search-form'
          >
              <p className='filter-text-1'>Input an ingredient:</p>
              <input
              className='search-bar'
              type='text'
              value={search}
              onChange={updateSearch}
              onBlur={getSearch}
              placeholder='e.g. lemon'
              />
              <p className='filter-text-1'>Filter by:</p>
              <p className='filer-text'>Health</p>
              <select className='filter health' onChange={(e) => {setHealth(e.target.value)}} value={health} >
                  {filters.health.map(item =>
                      <option key={filters.health.indexOf(item)} value={item}>{item}</option>)}
              </select>
              <p className='filer-text'>Diet</p>
              <select className='filter diet' onChange={(e) => {setDiet(e.target.value)}} value={diet}>
                  {filters.diet.map(item =>
                      <option key={filters.diet.indexOf(item)} value={item}>{item}</option>)}
              </select>
              <p className='filer-text'>Meal type</p>
              <select className='filter meal' onChange={(e) => {setMeal(e.target.value)}} value={meal}>
                  {filters.meal.map(item =>
                      <option key={filters.meal.indexOf(item)} value={item}>{item}</option>)}
              </select>


              {/*<select className='filter co2'>*/}
              {/*    <option onClick={()=> setCo2('A+')}>*/}
              {/*        A+*/}
              {/*    </option>*/}
              {/*    <option onClick={()=> setCo2('A')}>*/}
              {/*        Lunch*/}
              {/*    </option>*/}
              {/*</select>*/}
              <div className='buttons'>
                  <button
                  className='search-btn'
                  type='submit'>
                      Search
                  </button>
                  <button
                      className='reset-btn'
                      onClick={()=>reset()}>
                      Reset
                  </button>
              </div>
          </form>

            <div className='recipes'>
                {recipes.length>0 ?
                    recipes.map(recipe => (
                        <Recipe
                            key={recipe.recipe.url}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            sourceurl={recipe.recipe.url}/>
                    ))
                    : query === '' ? '' :
                    <p className='sorry-msg'>Sorry, we couldn't find any recipe matching your criteria :(</p>}
            </div>
            {recipes.length>=20 ?
                <div className='page-btns'>
                    <button id='zero' onClick={firstPage}><FontAwesomeIcon icon={solid('angles-left')} /></button>
                    <button id='prev' onClick={prevPage}><FontAwesomeIcon icon={solid('angle-left')} /></button>
                    <button id='next' onClick={nextPage}><FontAwesomeIcon icon={solid('angle-right')} /></button>
                </div>
                : ''}
            <footer>Coded by Giulia Passoni 2022</footer>
        </div>
    );
}

export default App;
