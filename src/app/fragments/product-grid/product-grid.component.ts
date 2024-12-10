import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent implements OnInit{
  
  constructor(private productService: ProductService) {}

  products: any[] = [];

  ngOnInit(): void {
      this.productService.getProductList().subscribe({
        next: (response) => (this.products = response),
        error: (err) => console.error('Failed to fetch products', err)
      })
  }
}
