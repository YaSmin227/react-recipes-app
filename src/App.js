import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Recipes from "./Recipes";
function App() {
  const app_id = "my-id";
  const app_key = "my-app-key	";
  // recipes data
  const [recipes, setRecipes] = useState([]);
  // search
  const [search, setSearch] = useState("chicken");
  // submit search-type
  const [searchType, setSearchType] = useState("chicken");
  // get data
  const getRecipes = async () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchType}&app_id=${app_id}&app_key=${app_key}`
      )
      .then((res) => {
        setRecipes(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // handel search input
  const handelSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  // handel submit form
  const handelSubmit = (e) => {
    e.preventDefault();
    setSearchType(search);
    setSearch("");
  };
  // useEffect
  useEffect(() => {
    getRecipes();
    console.log("enter useEffcet");
  }, [searchType]);

  return (
    <div className="App">
      <form className="search-form" onSubmit={handelSubmit}>
        <input
          className="input-search my-5"
          onChange={handelSearch}
          value={search}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="row w-100 m-auto">
        {recipes.map((recipe) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-3 d-flex justify-content-center">
              <Recipes 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                country={recipe.recipe.cuisineType[0]}
              /></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
