import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {

  @Input() products: Products[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Products>();

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }

  onEdit(product: Products): void {
    this.edit.emit(product);
  }
}
