import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  formulario: FormGroup;
  productUpdate: Product = new Product();

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    })

    this.validateForm();
  }


  updateProduct(){
    this.productService.update(this.product).subscribe(() => {
       alert('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    })
  
  }

  
  cancel() {
    this.router.navigate(['/products'])

}

submitForm() {
  const dadosFormulario = this.formulario.value;
  const productUpdate = new Product();
}

validateForm(){
  this.formulario = this.fb.group({
  nome: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50), Validators.required])],
  marca: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50), Validators.required])],
  modelo: ['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(50)])],
  preco: ['', Validators.compose([Validators.required])] ,
  link_foto: ['', Validators.compose([Validators.email, Validators.minLength(9), Validators.maxLength(100), Validators.required])],
  descricao:['', Validators.compose([Validators.email, Validators.minLength(9), Validators.maxLength(100), Validators.required])],
  })
}

get nome() {
  return this.formulario.get('nome');
}

get marca() {
  return this.formulario.get('marca');
}

get modelo() {
  return this.formulario.get('modelo');
}

get preco() {
  return this.formulario.get('preco');
}

get link_foto() {
  return this.formulario.get('link_foto');
}

get descricao() {
  return this.formulario.get('descricao');
}

  

}
