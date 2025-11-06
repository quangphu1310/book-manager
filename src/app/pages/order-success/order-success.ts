import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-success',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './order-success.html',
  styleUrl: './order-success.scss',
})
export class OrderSuccessComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private orderService = inject(OrderService);

  orderId = signal(this.route.snapshot.params['id']);
  order = computed(() => this.orderService.getOrderById(this.orderId()));

  constructor() {
    this.orderService.loadOrdersFromStorage();
  }

  getPaymentMethodLabel(method: string): string {
    const labels: Record<string, string> = {
      'cod': 'Cash on Delivery',
      'bank': 'Bank Transfer',
      'credit': 'Credit Card'
    };
    return labels[method] || method;
  }

  formatAddress(address: any): string {
    return `${address.street}, ${address.ward}, ${address.district}, ${address.city}`;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
