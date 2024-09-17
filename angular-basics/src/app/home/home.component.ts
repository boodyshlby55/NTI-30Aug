import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from '../pipes/custom.pipe';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, CustomPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  title: string = 'Welcome to Home';
  imgSrc = 'images/iPhone.svg';
  isTrue: boolean = false;
  users: any[] = [];
  products: any[] = [];
  productsSub: any;
  testBanana: string = '';

  constructor(private _UsersService: UsersService) { }

  testClick() {
    this.isTrue = !this.isTrue;
  }

  ngOnInit(): void {
    this.users = this._UsersService.users;
    this.productsSub = this._UsersService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
  ngOnDestroy(): void {
    console.log('destroy component');
    this.productsSub.unsubscribe();
  }
}
