# FlowCart

Grocery list generator that creates printable, store-organized shopping lists from CSV files.

## Project Structure

- `index.html` — Main page: upload a CSV, generate a printable list (two copies, landscape)
- `gallery.html` — Template gallery with example CSVs and live previews
- `css/common.css` — Shared styles (reset, body, header, store/region/item layout, checkbox)
- `css/grocery-list.css` — Upload form, buttons, print styles, error display
- `css/gallery.css` — Gallery grid, template cards, CSV preview, download button
- `js/shared.js` — `parseCSV()`, `organizeData()`, `renderList()` used by both pages
- `js/grocery-list.js` — File upload handling, `generateList()`, error display
- `js/gallery.js` — Template data, `downloadCSV()`, `renderPreview()`
- `templates/grocery-template.csv` — Example CSV template

## CSV Format

```
Store, Region, Item, Count, Note
```

- **Store** (required): Store name, used as section header
- **Region** (optional): Aisle/area within store, used as sub-header
- **Item** (optional): Item name. Empty = blank line for handwriting
- **Count** (optional): Boolean (`true`/`1`/`x`/`yes`) — adds a "Qty:" field with blank line
- **Note** (optional): Boolean — adds a blank note line after the item

## Tech Stack

Static HTML/CSS/JS. No build system, no dependencies, no framework. Open the HTML files directly in a browser.

## Key Behaviors

- Print layout is landscape with two identical list copies side-by-side
- Items are auto-capitalized (first letter of each word)
- The gallery page renders live previews of all templates on load
- `parseCSV()` skips empty lines and `#` comments, throws on invalid lines
