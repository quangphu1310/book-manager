import { Component, computed, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsDialog } from './order-details-dialog';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-my-order',
  imports: [MatTabsModule, DatePipe, MatAnchor],
  templateUrl: './my-order.html',
  styleUrl: './my-order.scss',
})
export class MyOrderComponent {
  private orderService = inject(OrderService);
  readonly dialog = inject(MatDialog);

  orders = computed(() => this.orderService.orders());

  constructor() {
    this.orderService.loadOrdersFromStorage();
  }

  viewDetails(orderId: string) {
    const order = this.orderService.getOrderById(orderId);
    
    if (!order) {
      console.error('Order not found');
      return;
    }

    const dialogRef = this.dialog.open(OrderDetailsDialog, {
      width: '700px',
      data: { order },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}