import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/_services/alert.service';
import { CrudService } from 'src/_services/crud.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public formNew: FormGroup;

  public price_required: boolean;

  constructor(private fb: FormBuilder,
    private alert: AlertService,
    private service: CrudService) { }

  ngOnInit(): void {
    this.initialForm();
  }

  public initialForm() {
    this.formNew = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      link: [''],
      description: ['']
    });
  }

  public verifyPass() {
    if (this.formNew.value.price == null || this.formNew.value.price == 0) {
      this.price_required = false;
    }
    else {
      this.price_required = true;
    }
  }

  public createProduct() {
    let form = this.formNew.value;
    this.alert.show('Validando...');
    this.service.create(form.name, form.brand, form.model, form.price, form.link, form.description).subscribe(res => {
      this.formNew.reset();
      setTimeout(() => {
        this.alert.hide();
      }, 1500);
    },
      err => {
        setTimeout(() => {
          this.formNew.reset();
          this.alert.hide();
        }, 1500);
      });
  }


}
