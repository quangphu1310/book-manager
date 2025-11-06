# Book Manager 📚

A modern online bookstore application built with Angular 20 and Angular Material.

## Project Overview

Book Manager is a web application that allows users to:
- Browse book catalog
- View detailed book information
- Add books to shopping cart
- Manage cart (add, remove, adjust quantities)
- Complete checkout process
- View order history

## Technologies Used

- **Angular**: 20.3.0
- **Angular Material**: 20.2.10 (UI Components)
- **Angular CDK**: 20.2.10
- **TypeScript**: 5.9.2
- **RxJS**: 7.8.0
- **SCSS**: Styling

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── models/          # Data models (Book, Cart, Checkout)
│   ├── layout/              # Layout components
│   │   ├── header/          # Header component
│   │   └── footer/          # Footer component
│   ├── pages/               # Feature pages
│   │   ├── home/            # Home page - book catalog
│   │   ├── book-detail/     # Book detail page
│   │   ├── book-card/       # Book card component
│   │   ├── cart/            # Shopping cart page
│   │   ├── checkout/        # Checkout page
│   │   ├── order-success/   # Order confirmation page
│   │   └── my-order/        # Order management page
│   └── services/            # Services
│       ├── book.service.ts  # Book data management
│       ├── cart.service.ts  # Cart management
│       └── order.service.ts # Order management
```

## Key Features

### 1. Book Management
- Display book catalog with basic information
- View book details (title, author, year, price)
- Thumbnail image for each book

### 2. Shopping Cart
- Add books to cart
- Adjust book quantities
- Remove books from cart
- Calculate total order value

### 3. Checkout
- Enter customer information
- Confirm order
- Order success confirmation page

### 4. Order Management
- View order history
- View detailed order information

## Installation and Running

### Requirements
- Node.js (version 18.x or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>

# Navigate to project directory
cd book-manager

# Install dependencies
npm install
```

### Run Development Server

```bash
npm start
# or
ng serve
```

Open your browser and navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
# or
ng build
```

Build artifacts will be stored in the `dist/` directory

### Run Unit Tests

```bash
npm test
# or
ng test
```

## Routes

- `/` - Home page (book catalog)
- `/book/:id` - Book details
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/order-success/:id` - Order confirmation
- `/my-order` - My orders

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7.

### Code Scaffolding

To generate a new component:
```bash
ng generate component component-name
```

For a full list of available schematics:
```bash
ng generate --help
```

## Documentation

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [Angular CLI](https://angular.dev/tools/cli)

## License

This project is for educational purposes.
