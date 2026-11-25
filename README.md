# BookHaven — Angular 22 / Node.js 24

Responsive Angular standalone-component bookstore frontend.

## Node compatibility
Angular 22 supports Node.js `^24.15.0` according to the official Angular version compatibility table. This project declares Node `>=24.15.0 <25`, so Node.js 24.18.0 is in range.

## Run on Windows
Extract the ZIP, open CMD in this folder (the folder containing package.json), then run:
```cmd
node -v
npm install
npm start
```
Open http://localhost:4200

Build for production:
```cmd
npm run build
```

## Included
- Responsive desktop, tablet and mobile design
- Search by title, author or category
- Category filters and sorting
- Wishlist toggle
- Shopping bag, quantity controls, remove item and subtotal
- Demo checkout and newsletter UI
- Sample book catalogue and remote cover images

This is a frontend demo. Real authentication, inventory, orders, payment and email subscriptions require backend/service integration.

## Publish to GitHub
Create an empty repository named `bookhaven-angular-node24`, then:
```cmd
git init
git add .
git commit -m "Create BookHaven Angular 22 storefront"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bookhaven-angular-node24.git
git push -u origin main
```
Replace YOUR_USERNAME with your GitHub username.
