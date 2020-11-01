import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    _id: '',
    nome: '',
    marca: '',
    modelo: '',
    preco: null,
    link_foto: '',
    descricao: ''
  }

  formulario: FormGroup;
  productCreate: Product = new Product();


  constructor(private productService: ProductService,
     private router: Router, 
     private route: ActivatedRoute,
     private fb: FormBuilder) {

      const id = this.route.snapshot.paramMap.get('_id');
      if(id != "")
      {
        this.productService.readById(id).subscribe(product =>{
          this.product = product;
          this.formulario.patchValue({
            nome: this.product.nome,
            marca: this.product.marca,
            modelo: this.product.modelo,
            preco: this.product.preco,
            descricao: this.product.descricao,
            link_foto: this.product.link_foto
     
          });
        });
      }
     
    }
  
    

  ngOnInit(): void {
    this.validateForm();
  }

createProduct() {
    this.product = this.formulario.getRawValue();
    this.productService.create(this.product).subscribe(() => {
        this.router.navigate(['/products'])     
    }, err=>{
      alert('Ocorreu um erro, porém cadastrou corretamente'); 

      this.router.navigate(['/products'])
    });
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
    link_foto: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(100), Validators.required])],
    descricao:['', Validators.compose([ Validators.minLength(5), Validators.maxLength(100), Validators.required])],
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
