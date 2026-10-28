# UrbanStride — React E-commerce Storefront

A responsive sneaker storefront built with **React** and **Vite**, focused on product browsing, micro-interactions, and an end-to-end **front-end checkout demo**.

## Highlights
- Product browsing through the home page and category routes
- Add-to-cart interactions, cart drawer, item removal, and cart item count
- Checkout form with order summary and a simulated confirmation flow
- Responsive layouts and UI animation using **Framer Motion** and **AOS**
- React Router navigation and reusable storefront components

## Tech stack
React 19 · JavaScript · Vite · React Router · Tailwind CSS · Framer Motion · AOS · Lucide Icons

## Run locally
```bash
git clone https://github.com/KhurramTaimoor/urbanstride.git
cd urbanstride
npm install
npm run dev
```

Then open the local address printed by Vite.

## Project structure
- `src/pages/Home.jsx` — home storefront
- `src/pages/CategoryPage.jsx` — product category view
- `src/pages/CheckoutPage.jsx` — simulated checkout
- `src/components/CartDrawer.jsx` — interactive cart
- `src/components/` — navigation and shared storefront UI

## Scope and limitations
This is a **front-end demonstration**, not a live commerce/payment service. Cart items are held in React state, and placing an order simulates success without charging a card or persisting an order to a backend.

## Engineering focus
Responsive component design · state management · route-based UI · checkout UX · motion design.

**Maintainer:** [Khurram Taimoor](https://github.com/KhurramTaimoor)
