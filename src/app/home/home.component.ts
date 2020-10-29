import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from '../../_services/crud.service';
import { AlertService } from '../../_services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Crud } from 'src/_models/crud.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public list_products: any;

  public date_product: Crud;

  private sub: Subscription;

  public p: number = 1;

  public formNew: FormGroup;

  public price_required: boolean;


  constructor(private service: CrudService,
    private alert: AlertService,
    private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProducts();
    this.initialForm();
  }

  public initialForm() {
    this.formNew = this.fb.group({
      name: [this.date_product?.nome, Validators.required],
      brand: [this.date_product?.marca, Validators.required],
      model: [this.date_product?.modelo, Validators.required],
      price: [this.date_product?.preco, Validators.required],
      link: [this.date_product?.link_foto],
      description: [this.date_product?.descricao]
    });
  }

  public getProducts() {
    this.alert.show('Carregando produtos...');
    this.sub = this.service.list().subscribe(res => {
      this.alert.hide();
      this.list_products = res;
    },
      err => {
        this.alert.hide();
        this.list_products = [];
      });
  }

  public deleteProduct(id: string) {
    this.alert.question('Deseja realmente excluir este produto ?', () => {
      this.alert.show('Validando...');
      this.service.delete(id).subscribe(res => {
        this.alert.show('Produto excluido com sucesso!');
        setTimeout(() => {
          this.getProducts();
        }, 2000);
      },
        err => {
          this.alert.hide();
          this.getProducts();
        });
    });
  }

  public open(content: any, item: any) {
    this.date_product = item;
    this.formNew.patchValue({
      name: this.date_product?.nome,
      brand: this.date_product?.marca,
      model: this.date_product?.modelo,
      price: this.date_product?.preco,
      link: this.date_product?.link_foto,
      description: this.date_product?.descricao
    });
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  public verifyPass() {
    if (this.formNew.value.price == null || this.formNew.value.price == 0) {
      this.price_required = false;
    }
    else {
      this.price_required = true;
    }
  }


  public updateProduct() {
    let form = this.formNew.value;
    this.alert.show('Validando...');
    this.service.update(this.date_product._id, form.name, form.brand, form.model, form.price, form.link, form.description).subscribe(res => {
      setTimeout(() => {
        this.alert.hide();
      }, 1500);
    },
      err => {
        setTimeout(() => {
          this.getProducts();
          this.alert.hide();
        }, 2000);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
