import './App.scss';
import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import filters from "./filters";

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
    // const[co2,setCo2] = useState('G');

    //this works similarly to ComponentDidMount in that it is called once the component is mounted on the DOM
    useEffect(() => {
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
        const a = await fetch('https://api.edamam.com/api/recipes/v2?' + params);
        //use json format to handle response obj (an array) more easily
        const b = await a.json();
        // console.log(b);
        //change the state
        setRecipes(b.hits);
        console.log(b.hits);
    }

    //since the initial search state is set to an empty string, whenever something is input in the search bar (onChange event), we call:
    const updateSearch = e => {
        //so that the initial state is updated to the input text
        setSearch(e.target.value)
    }
    //this will run once we hit the submit button, hence it will use the whole input
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    //    to reset the search bar after clicking submit, reset the state to an empty string:
    //     setSearch('');
    }

    const reset = () =>{
        setSearch('');
    }


    return (

        <div className='App'>
            <h1 className='title'>Recipe Filter</h1>
          <form onSubmit={getSearch} className='search-form'>
              <p className='filter-text-1'>Input an ingredient:</p>
              <input
              className='search-bar'
              type='text'
              value={search}
              onChange={updateSearch}
              placeholder='e.g. lemon'
              />
              <p className='filter-text-1'>Filter by:</p>
              {/*ideally health would be checkboxes...*/}
              {/*TODO: checkboxes instead*/}
              <p className='filer-text'>Health</p>
              <select className='filter health' onChange={(e) => {setHealth(e.target.value)}}>
                  {filters.health.map(item =>
                      <option value={item}>{item}</option>)}
              </select>
              <p className='filer-text'>Diet</p>
              <select className='filter diet' onChange={(e) => {setDiet(e.target.value)}}>
                  {filters.diet.map(item =>
                      <option value={item}>{item}</option>)}
              </select>
              <p className='filer-text'>Meal type</p>
              <select className='filter meal' onChange={(e) => {setMeal(e.target.value)}}>
                  {filters.meal.map(item =>
                      <option value={item}>{item}</option>)}
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
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.url}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        sourceurl={recipe.recipe.url}/>
                ))}
            </div>
            <footer>Coded by Giulia Passoni 2022</footer>
        </div>
    );
}

export default App;
