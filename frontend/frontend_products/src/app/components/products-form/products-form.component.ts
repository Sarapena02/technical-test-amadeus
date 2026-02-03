import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { create } from 'domain';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css',
})
export class ProductsFormComponent {

  @Output() refresh = new EventEmitter<void>();

  @Output() productCreated = new EventEmitter<any>();

  editingProductId: number | null = null;

  newProduct: Products = {
    name: '',
    description: '',
    category: '',
    brand: '',
    sku: '',
    price: 0,
    stock: 0,
    isActive: true
  };

  constructor(private productsService: ProductsService) {}

  submitForm(): void {
    if (this.editingProductId) {
      // UPDATE
      this.productsService
        .updateProduct(this.editingProductId, this.newProduct)
        .subscribe(() => {
          this.resetForm();
          this.refresh.emit();
        });
    } else {
      // CREATE
      this.productsService
        .createProduct(this.newProduct)
        .subscribe((createdProduct) => {
          this.productCreated.emit(createdProduct);
          this.resetForm();
        });
    }
  }

  /** Cargar producto para editar */
  loadProduct(product: Products): void {
    this.editingProductId = product.id!;
    this.newProduct = { ...product };
  }

  resetForm(): void {
    this.editingProductId = null;
    this.newProduct = {
      name: '',
      description: '',
      category: '',
      brand: '',
      sku: '',
      price: 0,
      stock: 0,
      isActive: true
    };
  }
}
