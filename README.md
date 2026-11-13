# Gym-Storefront (IronForge Fitness)
Status: Complete 

## What it does
Gym-Storefront is a modern, interactive e-commerce user interface built for a fictional fitness equipment brand, IronForge Fitness. The application dynamically renders a catalog of 30 fitness products[cite: 16], allowing users to browse, filter by category (Strength, Cardio, Accessories, Recovery), and sort by price or rating[cite: 16]. It features a fully functional frontend shopping cart that tracks quantities, calculates subtotals, and applies conditional shipping logic[cite: 16, 17]. 

## Technologies
* **HTML5:** Semantic structure and layout[cite: 17].
* **CSS3:** Custom CSS variables, Flexbox/Grid layouts, and responsive media queries[cite: 18].
* **Vanilla JavaScript:** ES6+ array manipulation, DOM updates, and state management (cart and wishlist arrays)[cite: 16].

## Core Features
* **Dynamic Rendering:** Products are injected into the DOM dynamically from a JavaScript data array[cite: 16].
* **Interactive Cart & Wishlist:** Users can add/remove items, update quantities, and toggle wishlist status without page reloads[cite: 16].
* **Quick-View Modals:** Clicking a product opens a detailed modal with original pricing, discounts, and product features[cite: 16, 17].
* **Responsive UI:** The layout adapts to mobile, tablet, and desktop screens, including a mobile navigation drawer[cite: 18].

## How to get started
1. Clone this repository to your local machine: `git clone https://github.com/PetaOcto/gym-storefront.git`
2. Navigate to the project folder.
3. Open `index.html` in any modern web browser. (No build tools, `npm`, or servers are required).

## Known limitations
* **No Database:** Product data is hardcoded in `app.js`[cite: 16].
* **State Persistence:** The shopping cart and wishlist empty if the page is refreshed (no `localStorage` implemented yet).
* **Demo Checkout:** The "Proceed to Checkout" button triggers a toast notification but does not process real payments[cite: 16].

## Help
If you encounter any UI bugs or issues, please open an issue in the repository. 
Maintained by Shambhu Kumar (@PetaOcto).
