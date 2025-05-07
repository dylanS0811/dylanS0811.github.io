// Optional utility function that fetches recipe names from an API
async function fetchRecipeNames() {
  const res = await fetch('https://dummyjson.com/recipes'); // Send request
  const data = await res.json(); // Parse JSON
  return data.recipes.map((recipe) => recipe.name); // Extract recipe names
}
