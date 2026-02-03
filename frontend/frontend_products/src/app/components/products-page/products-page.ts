import { Component, EventEmitter, Output, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products.model';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductsFormComponent } from '../products-form/products-form.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ProductsListComponent, ProductsFormComponent],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage implements OnInit {

  activeTab: 'form' | 'list' = 'form';

  @Input() products: Products[] = [];

  @Output() editProduct = new EventEmitter<Products>();
  @Output() deleteProduct = new EventEmitter<number>();

  @ViewChild(ProductsFormComponent) productsFormComponent!: ProductsFormComponent;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts()
    .subscribe((data => this.products = data));
  }

  onProductCreated(product: Products): void {
    this.products.unshift(product);
    this.activeTab = 'list';
    this.loadProducts();
  }

  onEditProduct(product: Products): void {
    this.activeTab = 'form';
    setTimeout(() => {
      this.productsFormComponent.loadProduct(product);
    });
  }

  onDeleteProduct(id: number): void {
    this.productsService.deleteProduct(id)
    .subscribe(() => this.loadProducts());
  }
}