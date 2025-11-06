import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CheckoutForm } from '../../core/models/checkout.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private cartService = inject(CartService);
  private orderService = inject(OrderService);

  cartItems = this.cartService.items;
  totalPrice = this.cartService.totalPrice;
  isSubmitting = signal(false);

  // Form Groups
  customerInfoForm: FormGroup;
  shippingAddressForm: FormGroup;
  paymentForm: FormGroup;

  constructor() {
    // Redirect if cart is empty
    if (this.cartItems().length === 0) {
      this.router.navigate(['/cart']);
    }

    // Initialize forms
    this.customerInfoForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['091555610', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]]
    });

    this.shippingAddressForm = this.fb.group({
      street: ['', Validators.required],
      ward: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.pattern(/^[0-9]{5,6}$/)]]
      
    });

    this.paymentForm = this.fb.group({
      paymentMethod: ['cod', Validators.required],
      note: ['']
    });
  }

  onSubmit() {
    if (this.customerInfoForm.invalid || 
        this.shippingAddressForm.invalid || 
        this.paymentForm.invalid) {
      this.markFormGroupTouched(this.customerInfoForm);
      this.markFormGroupTouched(this.shippingAddressForm);
      this.markFormGroupTouched(this.paymentForm);
      return;
    }

    this.isSubmitting.set(true);

    const checkoutData: CheckoutForm = {
      customerInfo: this.customerInfoForm.value,
      shippingAddress: this.shippingAddressForm.value,
      paymentMethod: this.paymentForm.value.paymentMethod,
      note: this.paymentForm.value.note
    };

    const newOrder = this.orderService.createOrder({
      customerInfo: checkoutData.customerInfo,
      shippingAddress: checkoutData.shippingAddress,
      paymentMethod: checkoutData.paymentMethod,
      note: checkoutData.note,
      items: this.cartItems(),
      totalAmount: this.totalPrice()
    });

    console.log(newOrder);

    this.cartService.clearCart();

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.router.navigate(['/order-success', newOrder.id]);
    }, 2000);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(formGroup: FormGroup, fieldName: string): string {
    const control = formGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('email')) return 'Invalid email format';
    if (control.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `Minimum ${minLength} characters required`;
    }
    if (control.hasError('pattern')) {
      if (fieldName === 'phone') return 'Invalid phone number (10-11 digits)';
      if (fieldName === 'zipCode') return 'Invalid zip code (5-6 digits)';
    }
    return '';
  }

  goBack() {
    this.router.navigate(['/cart']);
  }
}