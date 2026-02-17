# FlowCart

A grocery list generator that creates printable, store-organized shopping lists from CSV files.

## How to Use

1. Open `grocery-list.html` in a browser
2. Upload a CSV file with your grocery list
3. Click "Generate List" to see a preview
4. Print the page — two copies print side-by-side in landscape

## CSV Format

```
Store, Region, Item, Count, Note
```

| Field  | Required | Description |
|--------|----------|-------------|
| Store  | Yes      | Store name (e.g., "Whole Foods") |
| Region | No       | Aisle or area (e.g., "Produce", "Aisle 3") |
| Item   | No       | Item name. Leave empty for a blank write-in line |
| Count  | No       | `true`, `1`, `x`, or `yes` to add a quantity field |
| Note   | No       | `true`, `1`, `x`, or `yes` to add a note field |

### Example

```csv
Whole Foods,Produce,Spinach,true
Whole Foods,Produce,Kale
Whole Foods,Protein,Chicken breast,true,true
Whole Foods,Protein,
Costco,,Eggs,true
```

- Lines starting with `#` are treated as comments
- Trailing commas are optional
- See `gallery.html` for more example templates

## Template Gallery

Open `gallery.html` to browse example shopping list templates. Each template can be downloaded as a CSV and used with the generator.
