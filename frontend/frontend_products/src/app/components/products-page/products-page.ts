import { Component, OnInit, ViewChild } from '@angular/core';
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
  products: Products[] = [];

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
    this.productsService.createProduct(product)
    .subscribe(() => this.loadProducts());
  }

  onEditProduct(product: Products): void {
    this.productsFormComponent.loadProduct(product);
  }
}