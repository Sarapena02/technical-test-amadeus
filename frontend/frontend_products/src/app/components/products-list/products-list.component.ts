import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {

  @Input() products: Products [] = [];

  @Output() editProduct = new EventEmitter<Products>();


  constructor(private productsService: ProductsService) {}



  onEdit(product: Products){
    this.editProduct.emit(product);
  }

  ngOnInit(): void {
  }

 deleteProduct(id: number): void {
    this.productsService.deleteProduct(id)
      .subscribe();
 }

}
