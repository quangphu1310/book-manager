import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home";
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { CartComponent } from './pages/cart/cart';

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
    }
];
