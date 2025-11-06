import { Injectable, signal } from "@angular/core";
import { Order } from "../core/models/checkout.model";

@Injectable({ providedIn: 'root' })
export class OrderService {
    private _orders = signal<Order[]>([]);

    orders = this._orders.asReadonly();

    createOrder(order:  Omit<Order, 'id' | 'orderDate' | 'status'>): Order {
        const newOrder: Order = {
            ...order,
            id: this.generateOrderId(),
            orderDate: new Date(),
            status: 'pending'
        }

        this._orders.update(orders => [...orders, newOrder]);
        this.saveOrdersToStorage();

        return newOrder;
    }

    totalOrdersCount() {
        return this._orders().length;
    }

    private generateOrderId(): string {
        return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    getOrderById(id: string): Order | undefined {
        return this._orders().find(order => order.id === id);
    }

    private saveOrdersToStorage() {
        localStorage.setItem('orders', JSON.stringify(this._orders()));
    }

    loadOrdersFromStorage() {
        const ordersData = localStorage.getItem('orders');
        if (ordersData) {
            this._orders.set(JSON.parse(ordersData));
        }
    }
}
