import React, { useEffect } from "react";
import { recipes } from "../assets/recipes";
import { useAppContext } from "../context/AppContext";

const Recipes = () => {
  const { cartItems = {}, setCartItems, products } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get actual product names from cart IDs
  const availableProducts = Object.keys(cartItems)
    .map(productId => {
      const product = products.find(p => p._id === productId);
      return product ? product.name.toLowerCase() : null;
    })
    .filter(Boolean);

  // Match recipes where most ingredients are available (at most 1 missing)
  const suggestedRecipes = recipes.filter(recipe => {
    const totalIngredients = recipe.ingredients.length;
    const matchedIngredients = recipe.ingredients.filter(ing => 
      availableProducts.includes(ing.name.toLowerCase())
    ).length;
    
    const missingCount = totalIngredients - matchedIngredients;
    
    // Show recipe only if 0 or 1 ingredient is missing
    return missingCount <= 1;
  });

  const addRecipeToCart = (recipe) => {
    setCartItems(prev => {
      const updated = { ...prev };
      recipe.ingredients.forEach(ingredient => {
        const product = products.find(p => 
          p.name.toLowerCase() === ingredient.name.toLowerCase()
        );
        if (product) {
          updated[product._id] = updated[product._id] ? updated[product._id] + 1 : 1;
        }
      });
      return updated;
    });
  };

  if (!products || products.length === 0) {
    return <div className="p-6 mt-8 max-w-4xl mx-auto">Loading recipes...</div>;
  }

  return (
    <div className="p-6 mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Suggested Recipes</h2>

      {suggestedRecipes.length > 0 ? (
        suggestedRecipes.map(recipe => {
          const missingIngredients = recipe.ingredients.filter(ing => 
            !availableProducts.includes(ing.name.toLowerCase())
          );

          return (
            <div key={recipe.id} className="border p-4 mb-4 rounded bg-gray-50 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">{recipe.name}</h3>
              
              <h4 className="font-medium mt-3">Ingredients:</h4>
              <ul className="list-disc list-inside mb-3">
                {recipe.ingredients.map((i, idx) => {
                  const isInCart = availableProducts.includes(i.name.toLowerCase());
                  return (
                    <li 
                      key={idx}
                      className={isInCart ? "text-green-600 font-medium" : "text-gray-500"}
                    >
                      {i.name} ({i.quantity})
                      {isInCart && " ✓"}
                    </li>
                  );
                })}
              </ul>

              {missingIngredients.length > 0 && (
                <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Missing:</strong> {missingIngredients.map(ing => ing.name).join(", ")}
                  </p>
                </div>
              )}

              <h4 className="font-medium">Instructions:</h4>
              <ol className="list-decimal list-inside text-gray-700 mb-3 space-y-1">
                {recipe.steps.map((step, idx) => (
                  <li key={idx} className="mb-1">{step}</li>
                ))}
              </ol>

              <button
                className="bg-primary text-white px-4 py-2 mt-2 rounded hover:bg-primary-dull transition"
                onClick={() => addRecipeToCart(recipe)}
              >
                {missingIngredients.length > 0 
                  ? "Add Missing Ingredients to Cart" 
                  : "Add All Ingredients Again"}
              </button>
            </div>
          );
        })
      ) : (
        <div className="p-6 bg-gray-100 rounded">
          <p className="text-lg font-medium mb-2">No recipes match your current cart items</p>
          <p className="text-sm text-gray-600">
            Add items to your cart to see recipe suggestions. We'll show recipes where you have most ingredients ready!
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipes;



















// import React, { useEffect } from "react";
// import { recipes } from "../assets/recipes";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";

// const Recipes = () => {
//   const { cartItems = {}, setCartItems } = useAppContext();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const availableProducts = Object.keys(cartItems).map(item => item.toLowerCase());

//   const suggestedRecipes = recipes.filter(recipe =>
//     recipe.ingredients.some(ing => availableProducts.includes(ing.name.toLowerCase()))
//   );

//   const addRecipeToCart = (recipe) => {
//     setCartItems(prev => {
//       const updated = { ...prev };
//       recipe.ingredients.forEach(item => {
//         updated[item.name] = updated[item.name] ? updated[item.name] + 1 : 1;
//       });
//       return updated;
//     });
//   };

//   if (!cartItems) return <p>Loading recipes...</p>;

//   return (
//     <div className="p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Suggested Recipes</h2>
//       {suggestedRecipes.length > 0 ? (
//         suggestedRecipes.map(recipe => (
//           <div key={recipe.id} className="border p-4 mb-4 rounded bg-gray-50">
//             <h3 className="text-2xl font-semibold mb-2">{recipe.name}</h3>
//             <div className="flex space-x-2 mb-3">
//               {recipe.imageKeys?.map((key, index) => (
//                 <img
//                   key={index}
//                   src={assets[key]}
//                   alt={key}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               ))}
//             </div>
//             <h4 className="font-medium">Ingredients:</h4>
//             <ul className="list-disc list-inside mb-3">
//               {recipe.ingredients.map((i, idx) => (
//                 <li key={idx}>{i.name} ({i.quantity})</li>
//               ))}
//             </ul>
//             <h4 className="font-medium">Instructions:</h4>
//             <ol className="list-decimal list-inside text-gray-700 mb-3">
//               {recipe.steps.map((step, idx) => (
//                 <li key={idx} className="mb-1">{step}</li>
//               ))}
//             </ol>
//             <button
//               className="bg-primary text-white px-3 py-2 mt-2 rounded hover:bg-primary-dull transition"
//               onClick={() => addRecipeToCart(recipe)}
//             >
//               Add Ingredients to Cart
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No recipes available with current products.</p>
//       )}
//     </div>
//   );
// };

// export default Recipes;

