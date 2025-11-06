import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Order } from '../../core/models/checkout.model';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.html',
  styleUrl: './order-details-dialog.scss',
  imports: [MatDialogModule, DatePipe, UpperCasePipe, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsDialog {
  data = inject<{
    order: Order;
  }>(MAT_DIALOG_DATA);
}
