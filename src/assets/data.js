import goanSalad from "./pics/goanSalad.jpg";
import butterChicken from "./pics/butterChicken.jpg";
import margPizza from "./pics/margPizza.jpg";
import sorpotel from "./pics/sorpotel.jpg";
import chickenRoll from "./pics/chickenRoll.webp";
import cake from "./pics/cake.webp";
import prawnVindaloo from "./pics/prawnVindaloo.jpg";
import rossOm from "./pics/rossOmlette.webp";
import chorisPao from "./pics/chorisPao.jpg";

export const food_list = [
  {
    _id: "1",
    name: "Goan Salad",
    image: goanSalad,
    price: 12,
    description: "A fresh salad with Goan spices and flavors.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Margherita Pizza",
    image: margPizza,
    price: 15,
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
    category: "Pizza",
  },
  {
    _id: "3",
    name: "Butter Chicken",
    image: butterChicken,
    price: 18,
    description: "Tender chicken cooked in a rich and creamy tomato sauce.",
    category: "Mains",
  },
  {
    _id: "4",
    name: "Prawn Vindaloo",
    image: prawnVindaloo,
    price: 120,
    description:
      "Shrimp Vindaloo (Prawn Vindaloo) is a Goan style curry made using fresh shrimp simmered in a sweet, spicy and tangy curry.",
    category: "Mains",
  },
  {
    _id: "5",
    name: "Ross Omelette",
    image: rossOm,
    price: 80,
    description:
      "Goan omelet, with its rich and comforting, fiery gravy, for breakfast, lunch, or dinner",
    category: "Mains",
  },
  {
    _id: "6",
    name: "Choris Pao",
    image: chorisPao,
    price: 100,
    description:
      "Choris-Pão has the sausages chopped (sometimes with onions and a dash of curry) and placed inside a Poi or the local bun",
    category: "Mains",
  },
  {
    _id: "7",
    name: "Paella",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 22,
    description:
      "Traditional Spanish rice dish with seafood, chicken, and vegetables.",
    category: "Mains",
  },
  {
    _id: "8",
    name: "Cheeseburger",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 12,
    description:
      "Juicy beef patty topped with cheese, lettuce, tomato, and pickles in a toasted bun.",
    category: "Mains",
  },
  {
    _id: "9",
    name: "Ramen",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 14,
    description:
      "Japanese noodle soup with a savory broth, meat, and vegetables.",
    category: "Mains",
  },
  {
    _id: "10",
    name: "Falafel Wrap",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 9,
    description:
      "Crispy falafel balls wrapped in pita bread with hummus and fresh veggies.",
    category: "Rolls",
  },
  {
    _id: "11",
    name: "Chocolate Cake",
    image: cake,
    price: 150,
    description: "Chocolate cake made with creamy white chocolate and love :)",
    category: "Cake",
  },
  {
    _id: "12",
    name: "Chicken Caesar Wrap",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 11,
    description:
      "Grilled chicken, romaine lettuce, and Caesar dressing in a wrap.",
    category: "Mains",
  },
  {
    _id: "13",
    name: "Veggie Burger",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 10,
    description:
      "Plant-based patty with lettuce, tomato, and avocado in a whole grain bun.",
    category: "Mains",
  },
  {
    _id: "14",
    name: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 13,
    description: "Soft tacos filled with seasoned beef, lettuce, and cheese.",
    category: "Mains",
  },
  {
    _id: "15",
    name: "Caprese Salad",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 12,
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    category: "Salad",
  },
  {
    _id: "16",
    name: "Shrimp Scampi",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 18,
    description:
      "Shrimp sautéed in garlic, butter, and white wine served over pasta.",
    category: "Mains",
  },
  {
    _id: "17",
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 13,
    description:
      "Cucumber, tomato, olives, and feta cheese with a lemon-oregano dressing.",
    category: "Salad",
  },
  {
    _id: "18",
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 8,
    description:
      "Rich and moist chocolate cake with a creamy chocolate frosting.",
    category: "Dessert",
  },
  {
    _id: "19",
    name: "Apple Pie",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 7,
    description:
      "Classic apple pie with a flaky crust and spiced apple filling.",
    category: "Dessert",
  },
  {
    _id: "20",
    name: "Mango Smoothie",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 6,
    description:
      "Refreshing mango smoothie made with fresh mangoes and yogurt.",
    category: "Beverage",
  },
  {
    _id: "21",
    name: "Iced Coffee",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    price: 5,
    description: "Chilled coffee with milk and ice, perfect for a hot day.",
    category: "Beverage",
  },
  {
    _id: "22",
    name: "Chicken Roll",
    image: chickenRoll,
    price: 100,
    description:
      "Rolls filled with chicken and salad, tastes really good with sauce!",
    category: "Rolls",
  },
  {
    _id: "23",
    name: "Sorpotel",
    image: sorpotel,
    price: 350,
    description:
      "Goan Pork Sorpotel is an essential Indian pork Curry from the former Portuguese colony and the west Indian state of Goa.",
    category: "Mains",
  },
];

export const menu_list = [
  "Beverage",
  "Dessert",
  "Salads",
  "Mains",
  "Rolls",
  "Cake",
  "Pizza",
  "Pasta",
];
