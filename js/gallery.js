const templates = {
  'weekly-meal-prep': `Whole Foods,Produce,Spinach,true
Whole Foods,Produce,Kale
Whole Foods,Produce,Sweet potatoes,true
Whole Foods,Produce,Broccoli,true
Whole Foods,Produce,Bell peppers,true
Whole Foods,Produce,Zucchini
Whole Foods,Produce,Cauliflower
Whole Foods,Produce,Cherry tomatoes
Whole Foods,Produce,Cucumbers
Whole Foods,Produce,Garlic
Whole Foods,Produce,Ginger root
Whole Foods,Produce,Lemons
Whole Foods,Produce,
Whole Foods,Protein,Chicken breast,true,true
Whole Foods,Protein,Ground turkey,true
Whole Foods,Protein,Salmon filets
Whole Foods,Protein,Eggs,true
Whole Foods,Protein,Tofu
Whole Foods,Protein,
Whole Foods,Bulk,Brown rice
Whole Foods,Bulk,Quinoa
Whole Foods,Bulk,Almonds
Whole Foods,Bulk,Chia seeds
Whole Foods,Bulk,Oats
Whole Foods,Bulk,Chickpeas
Whole Foods,Dairy,Greek yogurt,true
Whole Foods,Dairy,Cottage cheese
Whole Foods,Dairy,Almond milk
Whole Foods,Dairy,Feta cheese
Whole Foods,Pantry,Olive oil
Whole Foods,Pantry,Soy sauce
Whole Foods,Pantry,Coconut oil
Whole Foods,Pantry,Honey
Whole Foods,Household,Paper towels
Whole Foods,Household,Dish soap
Whole Foods,Household,Sponges
Whole Foods,Household,Trash bags`,

  'taco-tuesday': `Safeway,Produce - Front,Cilantro
Safeway,Produce - Front,Limes,true
Safeway,Produce - Front,Avocados,true
Safeway,Produce - Front,Tomatoes,true
Safeway,Produce - Front,Jalape\u00f1os
Safeway,Produce - Front,White onion
Safeway,Produce - Front,Red onion
Safeway,Produce - Front,Garlic
Safeway,Produce - Front,
Safeway,Produce - Back,Lettuce
Safeway,Produce - Back,Cabbage
Safeway,Produce - Back,Radishes
Safeway,Meat Counter,Ground beef,true,true
Safeway,Meat Counter,Chicken thighs
Safeway,Meat Counter,Chorizo
Safeway,Aisle 2 - International,Taco seasoning
Safeway,Aisle 2 - International,Taco shells,true
Safeway,Aisle 2 - International,Flour tortillas,true
Safeway,Aisle 2 - International,Corn tortillas
Safeway,Aisle 2 - International,Tortilla chips,true
Safeway,Aisle 2 - International,Salsa
Safeway,Aisle 2 - International,Hot sauce
Safeway,Aisle 2 - International,Refried beans
Safeway,Aisle 2 - International,Black beans
Safeway,Dairy,Sour cream
Safeway,Dairy,Shredded cheese,true
Safeway,Dairy,Mexican crema
Safeway,Frozen,Margarita mix
Safeway,Bakery,Lime wedges
Safeway,Household,Napkins,true
Safeway,Household,Paper plates`,

  'breakfast-essentials': `Trader Joe's,,Bagels,true
Trader Joe's,,Cream cheese
Trader Joe's,,Orange juice
Trader Joe's,,Coffee beans,false,true
Trader Joe's,,Granola
Trader Joe's,,Maple syrup
Trader Joe's,,English muffins
Trader Joe's,,Jam
Trader Joe's,,Peanut butter
Trader Joe's,,Honey
Trader Joe's,,Oatmeal
Trader Joe's,,Fresh berries
Trader Joe's,,Bananas
Trader Joe's,,
Costco,,Eggs,true
Costco,,Bacon,true
Costco,,Sausage links
Costco,,Butter
Costco,,Milk
Costco,,Half and half
Costco,,Bread loaves,true
Costco,,Pancake mix
Costco,,Syrup
Costco,,Hash browns
Costco,,Paper towels
Costco,,Coffee filters
Local Bakery,,Croissants,true
Local Bakery,,Muffins
Local Bakery,,Cinnamon rolls
Local Bakery,,Scones`,

  'date-night': `Whole Foods,Produce,Fresh basil
Whole Foods,Produce,Garlic
Whole Foods,Produce,Cherry tomatoes
Whole Foods,Produce,Arugula
Whole Foods,Produce,Lemons
Whole Foods,Produce,Shallots
Whole Foods,Produce,Fresh thyme
Whole Foods,Produce,
Whole Foods,Seafood,Fresh scallops,false,true
Whole Foods,Seafood,Shrimp
Whole Foods,Cheese Counter,Burrata
Whole Foods,Cheese Counter,Parmesan wedge
Whole Foods,Cheese Counter,Gorgonzola
Whole Foods,Bakery,Sourdough bread
Whole Foods,Wine Section,White wine,false,true
Whole Foods,Wine Section,Red wine,false,true
Whole Foods,Desserts,Dark chocolate
Whole Foods,Household,Candles
Whole Foods,Household,Fresh flowers,false,true
Wine Shop,,Prosecco
Italian Deli,,Fresh pasta
Italian Deli,,Prosciutto
Italian Deli,,Truffle oil
Italian Deli,,Pesto
Bakery,,Fresh baguette
Bakery,,Tiramisu
Bakery,,Amaretti cookies`,

  'kids-lunch': `Target,Front - Produce,Apples,true
Target,Front - Produce,Grapes
Target,Front - Produce,Baby carrots
Target,Front - Produce,Clementines
Target,Front - Produce,Strawberries
Target,Front - Produce,Celery sticks
Target,Front - Produce,
Target,Aisle 3 - Snacks,Goldfish crackers
Target,Aisle 3 - Snacks,Granola bars,true
Target,Aisle 3 - Snacks,Fruit pouches,true
Target,Aisle 3 - Snacks,Cheese crackers
Target,Aisle 3 - Snacks,Pretzels
Target,Aisle 3 - Snacks,Animal crackers
Target,Aisle 3 - Snacks,Fruit snacks
Target,Aisle 3 - Snacks,Trail mix
Target,Aisle 5 - Bread,Sandwich bread
Target,Aisle 5 - Bread,Bagels
Target,Aisle 5 - Bread,Hot dog buns
Target,Deli,Turkey slices
Target,Deli,Ham slices
Target,Deli,Hummus cups
Target,Dairy,String cheese,true
Target,Dairy,Yogurt tubes,true
Target,Dairy,Juice boxes,true
Target,Dairy,Chocolate milk
Target,Condiments,Peanut butter
Target,Condiments,Jelly
Target,Household,Sandwich bags,true
Target,Household,Napkins
Target,Household,Lunch boxes ice packs`,

  'game-day': `Costco,Produce,Veggie tray
Costco,Produce,Salsa,true
Costco,Produce,Guacamole,true
Costco,Produce,Pico de gallo
Costco,Produce,
Costco,Frozen,Chicken wings,true,true
Costco,Frozen,Mozzarella sticks
Costco,Frozen,Pizza rolls,true
Costco,Frozen,Jalape\u00f1o poppers
Costco,Frozen,Mini tacos
Costco,Frozen,French fries
Costco,Snacks,Tortilla chips,true
Costco,Snacks,Potato chips,true
Costco,Snacks,Pretzels
Costco,Snacks,Popcorn,true
Costco,Snacks,Mixed nuts
Costco,Snacks,Candy bowl mix
Costco,Drinks,Soda variety pack,true
Costco,Drinks,Beer,true,true
Costco,Drinks,Energy drinks
Costco,Drinks,Water bottles,true
Costco,Drinks,Sports drinks
Costco,Household,Paper plates,true
Costco,Household,Napkins,true
Costco,Household,Plastic cups,true
Costco,Household,Trash bags
Local Deli,,Buffalo sauce
Local Deli,,Ranch dip
Local Deli,,Blue cheese dip
Local Deli,,BBQ sauce
Local Deli,,Honey mustard`
};

function downloadCSV(templateName) {
  const csv = templates[templateName];
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${templateName}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

function renderPreview(templateName) {
  const csv = templates[templateName];
  const data = parseCSV(csv);
  const organized = organizeData(data);

  const preview = document.getElementById(`preview-${templateName}`);
  preview.innerHTML = '';
  renderList(preview, organized);
}

// Render all previews on page load
Object.keys(templates).forEach(templateName => {
  document.getElementById(`csv-${templateName}`).textContent = templates[templateName];
  renderPreview(templateName);
});
