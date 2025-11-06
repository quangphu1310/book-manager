import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home";
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { CartComponent } from './pages/cart/cart';
import { CheckoutComponent } from './pages/checkout/checkout';
import { OrderSuccessComponent } from './pages/order-success/order-success';
import { MyOrderComponent } from './pages/my-order/my-order';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'book/:id',
        component: BookDetailComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'order-success/:id',
        component: OrderSuccessComponent
    },
    {
        path: 'my-order',
        component: MyOrderComponent
    }
];
