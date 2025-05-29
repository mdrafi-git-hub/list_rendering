// import React from 'react';
// import './App.css';
// import Recipes from '../Compoents/Students/Recipes'; // if folder is 'Compoents'
//  // ✅ Adjust path as needed

// function App() {
//   return (
//     <div className="container">
//       <h1>Recipe Cards</h1>

//       {Recipes.map((recipe) => (
//         <div className="card" key={Recipes.id}>
//           <h2>{recipe.name}</h2>
//           <p><strong>Cuisine:</strong> {Recipes.cuisine}</p>
//           <p><strong>Prep Time:</strong> {Recipes.prepTimeMinutes} mins</p>
//           <p><strong>Servings:</strong> {Recipes.servings}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import React from "react";
import Recipes from "./Compoents/Recipes/Recipes"; 

const App=(()=>{
  return(
    <div>
      <Recipes/>
      </div>
  )
})


export default App;
