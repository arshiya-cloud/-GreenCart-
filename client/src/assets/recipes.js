import { assets } from "./assets";

export const recipes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    ingredients: [
      { name: "Paneer 200g", quantity: "1 pack" },
      { name: "Tomato 1 kg", quantity: "2" },
      { name: "Onion 500g", quantity: "1" },
    ],
    imageKeys: [assets.paneer_image, assets.tomato_image, assets.onion_image_1],
    steps: [
      "Cut paneer into cubes and set aside.",
      "Finely chop onions and tomatoes.",
      "Heat butter in a pan, sauté onions until golden brown.",
      "Add tomatoes and cook until soft and pulpy.",
      "Add spices (salt, turmeric, garam masala) and mix well.",
      "Add paneer cubes and simmer for 5–7 minutes.",
      "Garnish with fresh cream or coriander and serve hot with roti or rice."
    ]
  },
  {
    id: 2,
    name: "Aloo Curry",
    ingredients: [
      { name: "Potato 500g", quantity: "3" },
      { name: "Onion 500g", quantity: "1" },
      { name: "Tomato 1 kg", quantity: "2" },
    ],
    imageKeys: [assets.potato_image_1, assets.onion_image_1, assets.tomato_image],
    steps: [
      "Peel and dice potatoes into medium cubes.",
      "Finely chop onions and tomatoes.",
      "Heat oil in a pan, sauté onions until translucent.",
      "Add tomatoes and cook until mushy.",
      "Add spices (cumin, turmeric, chili powder, salt) and stir well.",
      "Add potatoes, cover, and cook for 15–20 minutes on low heat.",
      "Garnish with coriander leaves and serve with roti or rice."
    ]
  },
  {
    id: 3,
    name: "Veggie Salad",
    ingredients: [
      { name: "Carrot 500g", quantity: "1" },
      { name: "Spinach 500g", quantity: "1 bunch" },
      { name: "Apple 1 kg", quantity: "1" },
    ],
    imageKeys: [assets.carrot_image, assets.spinach_image_1, assets.apple_image],
    steps: [
      "Wash all vegetables and fruits thoroughly.",
      "Peel and chop carrots into thin sticks or cubes.",
      "Chop spinach leaves finely.",
      "Core and dice the apple into small cubes.",
      "Mix all ingredients in a large bowl.",
      "Add your choice of dressing (olive oil, lemon juice, salt, and pepper).",
      "Toss well and serve fresh."
    ]
  },
  {
    id: 4,
    name: "Tomato Soup",
    ingredients: [
      { name: "Tomato 1 kg", quantity: "4" },
      { name: "Onion 500g", quantity: "1" },
      { name: "Carrot 500g", quantity: "1" },
    ],
    imageKeys: [assets.tomato_image, assets.onion_image_1, assets.carrot_image],
    steps: [
      "Chop onions, tomatoes, and carrots into small pieces.",
      "Heat a little oil in a pan and sauté onions until soft.",
      "Add carrots and cook for 5 minutes.",
      "Add tomatoes, salt, and pepper, then simmer for 10–15 minutes.",
      "Blend the mixture into a smooth puree using a blender.",
      "Return to the pan, add water if needed, and simmer for another 5 minutes.",
      "Garnish with fresh cream and serve hot."
    ]
  },
  {
    id: 5,
    name: "Fruit Smoothie",
    ingredients: [
      { name: "Banana 1 kg", quantity: "2" },
      { name: "Mango 1 kg", quantity: "1" },
      { name: "Orange 1 kg", quantity: "2" },
      { name: "Amul Milk 1L", quantity: "1 cup" },
    ],
    imageKeys: [assets.banana_image_1, assets.mango_image_1, assets.orange_image, assets.amul_milk_image],
    steps: [
      "Peel bananas and oranges. Chop mango into cubes.",
      "Add all fruits into a blender.",
      "Pour in milk and blend until smooth.",
      "Check sweetness and add honey or sugar if desired.",
      "Pour into glasses and serve chilled."
    ]
  },
  {
    id: 6,
    name: "Cheese Sandwich",
    ingredients: [
      { name: "Brown Bread 400g", quantity: "2 slices" },
      { name: "Cheese 200g", quantity: "2 slices" },
      { name: "Butter 50g (optional)", quantity: "optional" },
    ],
    imageKeys: [assets.brown_bread_image, assets.cheese_image],
    steps: [
      "Spread butter evenly on one side of each bread slice (optional).",
      "Place cheese slice(s) between the bread slices.",
      "Heat a pan or sandwich maker.",
      "Grill the sandwich on both sides until golden brown and cheese melts.",
      "Slice in half and serve warm."
    ]
  },
  {
    id: 7,
    name: "Instant Maggi Noodles",
    ingredients: [
      { name: "Maggi Noodles 280g", quantity: "1 pack" },
      { name: "Carrot 500g", quantity: "1" },
      { name: "Onion 500g", quantity: "1" },
    ],
    imageKeys: [assets.maggi_image, assets.carrot_image, assets.onion_image_1],
    steps: [
      "Boil water in a pan as per Maggi packet instructions.",
      "Chop onions and carrots finely.",
      "Add the Maggi noodles to the boiling water.",
      "Add the included spice mix and chopped vegetables.",
      "Cook for 2–3 minutes until noodles are soft.",
      "Serve hot immediately."
    ]
  }
];