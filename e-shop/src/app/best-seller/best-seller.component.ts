import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent implements OnInit, OnDestroy {
  subscription: any;
  products: any[] = [];
  imgDomain: string = '';
  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.imgDomain = this._ProductsService.productImages;
    this.subscription = this._ProductsService.getAllProducts(16, 1, '-sold', '').subscribe({
      next: (res) => { this.products = res.data },
      error: (err) => { }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
