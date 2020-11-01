import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import {faEdit} from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  faEdit = faEdit;

  product: Product[];
  

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.productService.read().subscribe((resp: Product[]) => {
      this.product = resp;
            
    });
    

  }



}
