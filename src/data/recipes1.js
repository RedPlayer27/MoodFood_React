const recipes = [
  // STRESS
  {
    id: 1,
    mood: "Stress",
    name: "Masala Chai",
    ingredients: ["Black Tea", "Milk", "Ginger", "Cardamom", "Sugar"],
    method: "Boil tea with spices. Add milk and sugar. Simmer and serve hot."
  },
  {
    id: 2,
    mood: "Stress",
    name: "French Onion Soup",
    ingredients: ["Onions", "Butter", "Beef Stock", "Bread", "Cheese"],
    method: "Caramelize onions in butter. Add stock and simmer. Top with bread and melted cheese."
  },
  {
    id: 3,
    mood: "Stress",
    name: "Garlic Butter Pasta",
    ingredients: ["Spaghetti", "Garlic", "Butter", "Olive Oil", "Parsley"],
    method: "Cook pasta. Sauté garlic in butter and oil. Toss with pasta and parsley."
  },

  // SAD
  {
    id: 4,
    mood: "Sad",
    name: "Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
    method: "Whisk ingredients into batter. Cook on a pan until golden. Serve with butter or syrup."
  },
  {
    id: 5,
    mood: "Sad",
    name: "Tomato Basil Risotto",
    ingredients: ["Arborio Rice", "Tomatoes", "Onion", "Garlic", "Parmesan"],
    method: "Cook onion and garlic. Add rice, tomatoes, and stock gradually. Stir in parmesan."
  },
  {
    id: 6,
    mood: "Sad",
    name: "Chocolate Brownie",
    ingredients: ["Flour", "Cocoa Powder", "Butter", "Sugar", "Eggs"],
    method: "Mix ingredients into a batter. Bake until fudgy. Let cool before serving."
  },

  // BORED
  {
    id: 7,
    mood: "Bored",
    name: "Chinese Spring Rolls",
    ingredients: ["Spring Roll Wrappers", "Cabbage", "Carrot", "Soy Sauce", "Oil"],
    method: "Stir fry vegetables with soy sauce. Fill wrappers and fry until crisp."
  },
  {
    id: 8,
    mood: "Bored",
    name: "Pizza Margherita",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
    method: "Spread sauce on dough. Top with mozzarella and basil. Bake until golden."
  },
  {
    id: 9,
    mood: "Bored",
    name: "Popcorn",
    ingredients: ["Corn Kernels", "Butter", "Salt"],
    method: "Heat kernels in butter until popped. Season with salt."
  },

  // TIRED
  {
    id: 10,
    mood: "Tired",
    name: "Japanese Miso Soup",
    ingredients: ["Miso Paste", "Tofu", "Seaweed", "Spring Onion", "Water"],
    method: "Dissolve miso in hot water. Add tofu, seaweed, and spring onion. Serve warm."
  },
  {
    id: 11,
    mood: "Tired",
    name: "Egg Fried Rice",
    ingredients: ["Rice", "Eggs", "Soy Sauce", "Peas", "Oil"],
    method: "Scramble eggs. Stir fry with rice, peas, and soy sauce."
  },
  {
    id: 12,
    mood: "Tired",
    name: "Banana Smoothie",
    ingredients: ["Banana", "Milk", "Honey", "Ice"],
    method: "Blend all ingredients until smooth. Serve chilled."
  },

  // HAPPY
  {
    id: 13,
    mood: "Happy",
    name: "Fruit Tart",
    ingredients: ["Pastry Base", "Custard", "Strawberries", "Kiwi", "Blueberries"],
    method: "Fill pastry with custard. Arrange fresh fruits on top."
  },
  {
    id: 14,
    mood: "Happy",
    name: "Caprese Salad",
    ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil", "Balsamic Vinegar"],
    method: "Slice tomato and mozzarella. Layer with basil. Drizzle with oil and vinegar."
  },
  {
    id: 15,
    mood: "Happy",
    name: "Mango Lassi",
    ingredients: ["Mango", "Yogurt", "Milk", "Sugar", "Cardamom"],
    method: "Blend mango with yogurt, milk, sugar, and cardamom. Serve chilled."
  },

  // SOCIAL
  {
    id: 16,
    mood: "Social",
    name: "Nachos",
    ingredients: ["Tortilla Chips", "Cheddar", "Tomato", "Onion", "Jalapeño"],
    method: "Layer chips with toppings and cheese. Bake until melted."
  },
  {
    id: 17,
    mood: "Social",
    name: "Butter Chicken",
    ingredients: ["Chicken", "Tomato Puree", "Butter", "Cream", "Spices"],
    method: "Cook chicken in spiced tomato sauce. Stir in butter and cream."
  },
  {
    id: 18,
    mood: "Social",
    name: "Sushi Rolls",
    ingredients: ["Sushi Rice", "Nori Sheets", "Cucumber", "Avocado", "Soy Sauce"],
    method: "Spread rice on nori. Add fillings, roll tightly, and slice."
  },

  // CALM
  {
    id: 19,
    mood: "Calm",
    name: "Green Tea",
    ingredients: ["Green Tea Leaves", "Hot Water", "Honey"],
    method: "Steep tea leaves in hot water. Add honey to taste."
  },
  {
    id: 20,
    mood: "Calm",
    name: "Minestrone Soup",
    ingredients: ["Onion", "Carrot", "Celery", "Beans", "Tomatoes", "Pasta"],
    method: "Sauté vegetables. Add beans, tomatoes, pasta, and simmer until tender."
  },
  {
    id: 21,
    mood: "Calm",
    name: "Kheer",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Almonds"],
    method: "Simmer rice in milk with sugar. Add cardamom and almonds."
  },

  // CRAVE
  {
    id: 22,
    mood: "Crave",
    name: "Cheeseburger",
    ingredients: ["Bun", "Beef Patty", "Cheddar", "Lettuce", "Tomato", "Onion"],
    method: "Grill patty. Assemble burger with cheese and toppings."
  },
  {
    id: 23,
    mood: "Crave",
    name: "Chocolate Lava Cake",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    method: "Mix ingredients into batter. Bake until outside is set but center is molten."
  },
  {
    id: 24,
    mood: "Crave",
    name: "Chicken Tikka",
    ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Spices"],
    method: "Marinate chicken in spiced yogurt. Grill until smoky and tender."
  }
];

export default recipes;
