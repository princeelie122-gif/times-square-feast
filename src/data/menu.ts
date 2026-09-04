/**
 * MENU DATA — single source of truth.
 * To update the menu, edit the items below (name, price, description).
 * Prices sourced from the restaurant's own online ordering menu.
 */

import greekOmelette from "@/assets/greek-omelette.jpg";
import loadedBreakfast from "@/assets/loaded-breakfast.jpg";
import frenchToast from "@/assets/french-toast.jpg";
import timesSquareBurger from "@/assets/times-square-burger.jpg";
import friedChickenSandwich from "@/assets/fried-chicken-sandwich.jpg";
import cubanSandwich from "@/assets/cuban-sandwich.jpg";
import hangerSteak from "@/assets/hanger-steak.jpg";
import salmon from "@/assets/salmon.jpg";
import pancakes from "@/assets/pancakes.jpg";
import eggsBenedict from "@/assets/eggs-benedict.jpg";
import gyro from "@/assets/gyro.jpg";
import pasta from "@/assets/pasta.jpg";
import fries from "@/assets/fries.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import greekSalad from "@/assets/greek-salad.jpg";

export const images = {
  greekOmelette,
  loadedBreakfast,
  frenchToast,
  timesSquareBurger,
  friedChickenSandwich,
  cubanSandwich,
  hangerSteak,
  salmon,
  pancakes,
  eggsBenedict,
  gyro,
  pasta,
  fries,
  cheesecake,
  greekSalad,
};

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  image?: string;
  ageRestricted?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "omelettes",
    name: "Specialty Omelettes",
    note: "Served with potatoes and toast. Substitute egg whites for an extra charge.",
    items: [
      { name: "Western Omelette", price: "$17.95", desc: "Ham, onions and peppers." },
      {
        name: "Greek Omelette",
        price: "$18.95",
        desc: "Feta, tomato and onions.",
        image: greekOmelette,
      },
      { name: "Florentine Omelette", price: "$18.95", desc: "Feta and spinach." },
      {
        name: "California Omelette",
        price: "$18.95",
        desc: "Avocado, tomato and cheddar cheese.",
      },
      {
        name: "Veggie Omelette",
        price: "$18.95",
        desc: "Mushroom, tomato, onions and peppers.",
      },
      { name: "Spanish Omelette", price: "$16.95", desc: "Onions, peppers and salsa rojo." },
      { name: "Trio Omelette", price: "$18.95", desc: "Ham, bacon and sausage." },
      {
        name: "Athenian Omelette",
        price: "$18.95",
        desc: "Spinach, feta cheese, black olives and tomatoes.",
      },
      { name: "L.E.O. Omelette", price: "$19.95", desc: "Nova Scotia lox, egg and onions." },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast Anytime",
    items: [
      { name: "2 Eggs Any Style", price: "$13.95", desc: "Served with potatoes and toast." },
      {
        name: "Create Your Own 3 Egg Omelette",
        price: "$14.95",
        desc: "Served with potatoes and toast.",
      },
      { name: "Steak and Eggs", price: "$25.95", desc: "Served with potatoes and toast." },
      { name: "Egg Sandwich", price: "$5.95" },
      {
        name: "Loaded Times Square Breakfast",
        price: "$23.95",
        desc: "Extra hungry? French toast or pancakes, eggs, bacon, sausage and ham.",
        image: loadedBreakfast,
      },
      {
        name: "Classic Eggs Benedict",
        price: "$19.95",
        desc: "Hollandaise sauce, ham on an English muffin and a side of potatoes.",
        image: eggsBenedict,
      },
      {
        name: "Smoked Salmon Benedict",
        price: "$21.95",
        desc: "Hollandaise sauce, smoked salmon on an English muffin and a side of potatoes.",
      },
      {
        name: "Smoked Salmon Gyro Sandwich",
        price: "$20.95",
        desc: "Served with tzatziki sauce, capers, onions, tomato and arugula.",
      },
      {
        name: "Bagel All the Way",
        price: "$20.95",
        desc: "Nova Scotia lox, cream cheese, toasted bagel and garnishes.",
      },
      { name: "Greek Yogurt with Honey", price: "$9.95" },
      { name: "Hot Bowl of Oatmeal", price: "$5.95" },
      {
        name: "California Benedict",
        price: "$21.95",
        desc: "Hollandaise sauce, avocado, grilled tomatoes on an English muffin and a side of potatoes.",
      },
      {
        name: "Times Square Benedict",
        price: "$21.95",
        desc: "Hollandaise sauce, spicy chicken cutlet on an English muffin and a side of potatoes.",
      },
    ],
  },
  {
    id: "griddle",
    name: "Off the Griddle",
    items: [
      { name: "Buttermilk Pancakes", price: "$14.95", image: pancakes },
      { name: "Granola Pancakes", price: "$16.95" },
      { name: "Chocolate Chip Pancakes", price: "$16.95" },
      { name: "French Toast", price: "$14.95", image: frenchToast },
      {
        name: "Strawberry Sensation French Toast",
        price: "$21.95",
        desc: "Strawberries, walnuts and cream cheese.",
      },
      {
        name: "Banana Blast French Toast",
        price: "$21.95",
        desc: "Nutella, graham crackers and bananas.",
      },
      { name: "Waffle", price: "$14.95", desc: "Belgian style waffle." },
      { name: "Chocolate Chip Waffle", price: "$16.95", desc: "Belgian style waffle." },
      {
        name: "The Greek Stuffed French Toast",
        price: "$21.95",
        desc: "Blueberries, tahini and house granola.",
      },
      { name: "Buttered Toast", price: "$2.95" },
      { name: "Fresh Baked Muffin", price: "$3.75" },
      { name: "English Muffin", price: "$3.55" },
      { name: "Toasted Bagel", price: "$2.95" },
      { name: "Toasted Croissant", price: "$3.95" },
    ],
  },
  {
    id: "breakfast-sides",
    name: "Breakfast Sides",
    items: [
      { name: "Side of Ham", price: "$7.95" },
      { name: "Side of Bacon", price: "$7.95" },
      { name: "Side of Sausage", price: "$7.95" },
      { name: "Side of Turkey Bacon", price: "$8.95" },
      { name: "Side of Canadian Bacon", price: "$8.95" },
      { name: "Homefries", price: "$7.95" },
      { name: "Corned Beef Hash", price: "$11.95" },
      { name: "Fresh Cut French Fries", price: "$7.95" },
      { name: "Sweet Potato Fries", price: "$8.95" },
      { name: "Melon (1/2)", price: "$5.95" },
      { name: "Fruit Platter", price: "$8.95" },
      { name: "Seasonal Berries", price: "$8.45" },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        name: "Homemade Mozzarella Sticks",
        price: "$12.95",
        desc: "Served with marinara sauce.",
      },
      {
        name: "Chicken Wings",
        price: "$14.95",
        desc: "Chipotle BBQ, lemon parmesan or buffalo sauce.",
      },
      {
        name: "Nachos Supreme",
        price: "$14.95",
        desc: "Beef chili, jalapeños, 3 cheeses, tomato, red onions and sour cream.",
      },
      {
        name: "Homemade Chicken Fingers",
        price: "$15.95",
        desc: "Served with a side of honey mustard.",
      },
      {
        name: "Chicken Bites",
        price: "$13.95",
        desc: "Tossed with jalapeños, garlic and fresh herbs. Side of chipotle aioli.",
      },
      { name: "Fried Meatballs", price: "$13.95", desc: "Served with a side of tzatziki." },
      {
        name: "Mac and Cheese Appetizer",
        price: "$13.95",
        desc: "3 cheese and toasted breadcrumbs.",
      },
      {
        name: "Greek Style Tzatziki Spread",
        price: "$12.95",
        desc: "Greek yogurt, cucumber, garlic and toasted pita bread.",
      },
      {
        name: "Beef Chili con Carne",
        price: "$7.55+",
        desc: "Served over rice with tomatoes, red onions and scallions.",
      },
    ],
  },
  {
    id: "soups-salads",
    name: "Soups & Salads",
    note: "Soups made daily. All dressings made in house.",
    items: [
      { name: "Chicken Soup", price: "$5.99+" },
      { name: "French Onion Soup", price: "$5.99+" },
      {
        name: "Spinach Salad",
        price: "$16.95",
        desc: "Candied walnuts, apples, dried cranberries and house dressing.",
      },
      {
        name: "Greek Salad",
        price: "$16.95",
        desc: "Romaine hearts, cucumbers, cherry tomatoes, olives, feta and lemon dressing.",
        image: greekSalad,
      },
      {
        name: "Caesar Salad",
        price: "$15.95",
        desc: "Romaine, croutons, Parmesan and Caesar dressing.",
      },
      {
        name: "Garden Salad",
        price: "$14.95",
        desc: "Romaine hearts, cherry tomato, peppers, onions, cucumbers and house dressing.",
      },
      {
        name: "Cobb Salad",
        price: "$20.95",
        desc: "Choice of sliced turkey or grilled chicken. Romaine hearts, cherry tomato, avocado, bacon.",
      },
    ],
  },
  {
    id: "burgers",
    name: "Specialty 8 oz. Burgers",
    items: [
      {
        name: "Create Your Own 8 oz. Burger",
        price: "$14.95",
        desc: "Burgers are made with a special house blend.",
      },
      {
        name: "The Times Square Burger",
        price: "$16.95",
        desc: "Swiss cheese, mushrooms and caramelized onions.",
        image: timesSquareBurger,
      },
      { name: "Gyro Spiced Burger", price: "$16.95", desc: "Tzatziki, red onions and tomato." },
      {
        name: "Cobb Burger",
        price: "$17.95",
        desc: "Avocado, bacon, arugula and crumbled blue cheese.",
      },
      {
        name: "Southern Burger",
        price: "$16.95",
        desc: "Pepper jack cheese, grilled peppers and onions.",
      },
      {
        name: "BBQ Burger",
        price: "$16.95",
        desc: "Bacon, caramelized onions and BBQ sauce.",
      },
      {
        name: "Turkey Burger",
        price: "$15.95",
        desc: "House made turkey burger with lettuce and tomato.",
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches & Wraps",
    items: [
      {
        name: "Crispy Fried Chicken Sandwich",
        price: "$16.95",
        desc: "Bacon, avocado, American cheese, chipotle aioli and arugula.",
        image: friedChickenSandwich,
      },
      { name: "Fish Tacos", price: "$15.95", desc: "Jalapeño aioli, salsa rojo and coleslaw." },
      {
        name: "Hanger Steak Sandwich",
        price: "$19.95",
        desc: "Arugula, mushrooms, caramelized onions and garlic aioli.",
      },
      {
        name: "Chicken Gyro Sandwich",
        price: "$16.95",
        desc: "Stuffed with french fries, tomato, red onions and tzatziki.",
        image: gyro,
      },
      {
        name: "Beef Gyro Sandwich",
        price: "$16.95",
        desc: "Stuffed with french fries, tomato, red onions and tzatziki.",
      },
      {
        name: "Pulled Pork Sandwich",
        price: "$15.95",
        desc: "Comes with coleslaw and BBQ sauce.",
      },
      {
        name: "Grilled American Cheese Sandwich",
        price: "$8.45",
        desc: "Melted cheese on your choice of bread.",
      },
      { name: "B.L.T. Sandwich", price: "$8.95", desc: "Bacon, arugula, tomato and garlic aioli." },
      {
        name: "Fresh Tuna Salad Sandwich",
        price: "$10.95",
        desc: "Tuna salad made daily, served with lettuce, tomatoes and mayo.",
      },
      {
        name: "Grilled Chicken Caesar Wrap",
        price: "$15.95",
        desc: "Grilled chicken, romaine heart, croutons and Parmesan.",
      },
      {
        name: "Greek Chicken Wrap",
        price: "$15.95",
        desc: "Grilled chicken, tzatziki sauce and Greek salad.",
      },
      {
        name: "Texas Chicken Wrap",
        price: "$15.95",
        desc: "Rice, peppers, caramelized onions and BBQ sauce.",
      },
      {
        name: "Cuban Sandwich",
        price: "$16.95",
        desc: "Roasted pork, ham, Swiss cheese, pickles and honey mustard.",
        image: cubanSandwich,
      },
      {
        name: "Reuben Sandwich",
        price: "$17.95",
        desc: "Corned beef, Swiss cheese, sauerkraut and 1000 island dressing.",
      },
      { name: "Quesadilla", price: "$12+" },
      {
        name: "Bacon Loaf Sandwich",
        price: "$15.95",
        desc: "Caramelized onions, mozzarella cheese and brown gravy.",
      },
      { name: "Fresh Tuna Salad Wrap", price: "$12.95", desc: "Lettuce and tomato." },
    ],
  },
  {
    id: "triple-deckers",
    name: "Triple Deckers",
    note: "Served with fresh cut french fries.",
    items: [
      { name: "Turkey Club", price: "$20.95", desc: "Comes with bacon, romaine heart and tomato." },
      {
        name: "Grilled Chicken Avocado Sandwich",
        price: "$20.95",
        desc: "Comes with romaine heart and tomato.",
      },
      {
        name: "Fresh Tuna Salad Club",
        price: "$20.95",
        desc: "Comes with hard boiled egg, romaine heart and tomato.",
      },
      {
        name: "Ham, Swiss and Avocado Sandwich",
        price: "$20.95",
        desc: "Comes with romaine heart and tomato.",
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrées",
    note: "Served with a cup of soup.",
    items: [
      {
        name: "Grilled Hanger Steak",
        price: "$30.95",
        desc: "Served with baked potato and grilled asparagus.",
        image: hangerSteak,
      },
      {
        name: "Fresh Turkey Dinner",
        price: "$26.95",
        desc: "Served with mashed potato, brown gravy and sauteed spinach.",
      },
      {
        name: "Fillet of Tilapia",
        price: "$26.95",
        desc: "Served with rice pilaf, broccolini and puttanesca sauce.",
      },
      {
        name: "Gyro Platter",
        price: "$25.95",
        desc: "Chicken or beef. Served with Greek salad and fresh cut french fries.",
      },
      {
        name: "Chicken Parmigiana",
        price: "$25.95",
        desc: "Served with spaghetti and homemade tomato sauce.",
      },
      {
        name: "Meatballs and Spaghetti",
        price: "$24.95",
        desc: "Served with homemade tomato sauce and Parmesan cheese.",
        image: pasta,
      },
      {
        name: "Pasta Spinaka",
        price: "$23.95",
        desc: "Bacon, spinach and fresh herbs tossed in a white wine garlic sauce, topped with bread crumbs.",
      },
      {
        name: "Sausage and Peppers",
        price: "$23.95",
        desc: "Cavatappi pasta, garlic, onions, red pepper flakes and arugula in a light tomato broth.",
      },
      {
        name: "Bacon Wrapped Meatloaf",
        price: "$28.95",
        desc: "Served with brown gravy, mac and cheese and charred broccoli.",
      },
      {
        name: "Grilled Fillet of Salmon",
        price: "$29.95",
        desc: "Served with rice pilaf and sauteed broccolini.",
        image: salmon,
      },
      {
        name: "Grilled Shrimp (6)",
        price: "$30.95",
        desc: "Served with rice pilaf and sauteed spinach.",
      },
      {
        name: "Shrimp Scampi (6)",
        price: "$30.95",
        desc: "Served over rice pilaf and charred broccoli.",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      { name: "Fresh Cut French Fries", price: "$7.95" },
      { name: "Cajun Fire Fries", price: "$8.95" },
      { name: "Greek Fries", price: "$9.95", desc: "Comes with feta and oregano." },
      {
        name: "Pizza Fries",
        price: "$8.95",
        desc: "Comes with marinara sauce and mozzarella cheese.",
      },
      {
        name: "Disco Fries",
        price: "$8.95",
        desc: "Comes with brown gravy and mozzarella cheese.",
        image: fries,
      },
      { name: "Sweet Potato Fries", price: "$8.95" },
      { name: "Roasted Garlic Mashed Potato", price: "$7.95" },
      { name: "Side of Mac and Cheese", price: "$8.55" },
      { name: "Rice Pilaf", price: "$8.55" },
      { name: "Sauteed Broccolini", price: "$8.55" },
      { name: "Charred Broccoli", price: "$8.55" },
      { name: "Homemade Coleslaw", price: "$5.95" },
      { name: "Side Garden Salad", price: "$6.95" },
      { name: "Sauteed Spinach", price: "$8.55" },
      { name: "Grilled Asparagus", price: "$8.55" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Chocolate Peanut Butter Brownie",
        price: "$9.95",
        desc: "Served with vanilla ice cream and fresh whipped cream.",
      },
      {
        name: "Homemade Cheese Cake",
        price: "$9.95",
        desc: "Graham cracker crust, berry compote, fresh whipped cream.",
        image: cheesecake,
      },
      {
        name: "Homemade Carrot Cake",
        price: "$9.95",
        desc: "With cream cheese walnut frosting.",
      },
      {
        name: "Apple Caramel Crumb Tart",
        price: "$9.95",
        desc: "Served with vanilla ice cream and fresh whipped cream.",
      },
    ],
  },
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    note: "Add whipped cream for an extra charge.",
    items: [
      { name: "Coffee", price: "$3.45" },
      { name: "Decaf Coffee", price: "$3.45" },
      { name: "Tea & Assorted Herbal Teas", price: "$3.45" },
      { name: "Café Americano", price: "$4.95" },
      { name: "Espresso", price: "$4.95" },
      { name: "Latte", price: "$6.95" },
      { name: "Cappuccino", price: "$6.95" },
      { name: "Hot Chocolate", price: "$4.95" },
    ],
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    items: [
      { name: "Iced Coffee", price: "$3.95" },
      { name: "Frappe Coffee", price: "$4.55" },
      { name: "Iced Tea Unsweetened", price: "$3.95" },
      { name: "Fountain Soda", price: "$3.95" },
      { name: "Freshly Squeezed Lemonade", price: "$4.55" },
      { name: "Milk", price: "$3.25" },
      { name: "Chocolate Milk", price: "$3.55" },
      { name: "Egg Cream", price: "$3.25" },
      { name: "Milk Shake", price: "$7.55" },
      { name: "Ice Cream Soda", price: "$7.55", desc: "Häagen-Dazs ice cream." },
      { name: "Bottled Water", price: "$2.25" },
    ],
  },
  {
    id: "juices",
    name: "Juices",
    items: [
      { name: "Freshly Squeezed Orange Juice", price: "$4.95+" },
      { name: "Apple Juice", price: "$4.95+" },
      { name: "Pineapple Juice", price: "$4.95+" },
      { name: "Cranberry Juice", price: "$4.95+" },
      { name: "Grapefruit Juice", price: "$4.95+" },
      { name: "Tomato Juice", price: "$4.95+" },
    ],
  },
  {
    id: "drinks-21",
    name: "21+ Drinks",
    note: "Must be 21 or older to purchase. Valid ID required.",
    items: [
      { name: "Budweiser", price: "$8", ageRestricted: true },
      { name: "Bud Light", price: "$8", ageRestricted: true },
      { name: "Corona", price: "$9", ageRestricted: true },
      { name: "Stella Artois", price: "$9", ageRestricted: true },
      { name: "Heineken", price: "$8", ageRestricted: true },
      { name: "McKenzie's Apple Ale (Hard Cider)", price: "$8", ageRestricted: true },
      { name: "Montauk Juicy I.P.A.", price: "$8", ageRestricted: true },
      { name: "Meteor Pilsner", price: "$8", ageRestricted: true },
      { name: "Harpoon IPA", price: "$8", ageRestricted: true },
      { name: "Ebbs Stout", price: "$8", ageRestricted: true },
      {
        name: "Pinot Noir",
        price: "$36",
        desc: "Mirassou, California, 2017.",
        ageRestricted: true,
      },
      { name: "Malbec", price: "$36", desc: "Alamos, Argentina, 2018.", ageRestricted: true },
      {
        name: "Cabernet Sauvignon",
        price: "$36",
        desc: "Story Point, California, 2017.",
        ageRestricted: true,
      },
      { name: "Pinot Grigio", price: "$36", desc: "Gabbiano, Italy, 2018.", ageRestricted: true },
      {
        name: "Sauvignon Blanc",
        price: "$36",
        desc: "Montespina, Spain, 2018.",
        ageRestricted: true,
      },
      {
        name: "Chardonnay",
        price: "$36",
        desc: "William Hill, Central Coast, 2018.",
        ageRestricted: true,
      },
      {
        name: "Vodka Strawberry Lemonade (16 oz)",
        price: "$16",
        desc: "Vodka, strawberry purée, lemon juice, thyme infused simple syrup.",
        ageRestricted: true,
      },
      {
        name: "Pineapple Rum Punch (16 oz)",
        price: "$16",
        desc: "Rum, fresh pineapple, cranberry, grapefruit, fresh mint.",
        ageRestricted: true,
      },
      {
        name: "Rose's Apple Jack (16 oz)",
        price: "$16",
        desc: "Whiskey, apple juice, lemon juice, rosemary infused simple syrup.",
        ageRestricted: true,
      },
      {
        name: "Blueberry Mojito (16 oz)",
        price: "$16",
        desc: "Rum, fresh blueberry purée, lemon, lime, mint infused syrup.",
        ageRestricted: true,
      },
      { name: "Mimosa (16 oz)", price: "$14", ageRestricted: true },
      { name: "Bellini (16 oz)", price: "$14", ageRestricted: true },
    ],
  },
];

/** Homepage "NYC Favorites" — pulled straight from the menu above. */
export const favorites: MenuItem[] = [
  "Greek Omelette",
  "Loaded Times Square Breakfast",
  "French Toast",
  "The Times Square Burger",
  "Crispy Fried Chicken Sandwich",
  "Cuban Sandwich",
  "Grilled Hanger Steak",
  "Grilled Fillet of Salmon",
]
  .map((n) => menu.flatMap((c) => c.items).find((i) => i.name === n))
  .filter((i): i is MenuItem => Boolean(i));
