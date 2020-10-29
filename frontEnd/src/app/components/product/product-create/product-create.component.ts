import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    nome: '',
    marca: '',
    modelo: '',
    preco: null,
    link_foto: '',
    descricao: ''
  }

  formulario: FormGroup;
  productCreate: Product = new Product();


  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm();
  }

   
createProduct() {
    this.productService.create(this.product).subscribe(() => {
      alert('Produto criado com Sucesso')     
     
    })

}

submitForm() {
  const dadosFormulario = this.formulario.value;
  const productCreate = new Product();

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
