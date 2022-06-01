import './App.css';
import React, { Component} from "react";

class App extends Component {
    render(){
        const API_id = '90c42552';
        const API_key = 'f893e4c292136ee98814146309292973';
        const API_url = 'https://api.edamam.com/api/recipes/v2?type=public&q=tofu&app_id=${API_id}&app_key=${API_key}'

    return (
        <div>
          Hello
        </div>
    );
  }
}

export default App;
