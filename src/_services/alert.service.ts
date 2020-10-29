import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private timer = 2000;

  constructor() { }

  toast(message) {
    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      timer: this.timer
    })
    Toast.fire({
      icon: 'success',
      title: message
    })
  }

  success(message: string): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sucesso!',
      text: message,
      showConfirmButton: false,
      timer: this.timer
    });
  }

  error(message: string): void {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Ops!',
      text: message,
      showConfirmButton: false,
      timer: this.timer
    });
  }

  warning(message: string): void {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Aviso!',
      text: message,
      showConfirmButton: false,
      timer: this.timer
    });
  }

  info(message: string): void {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Atenção!',
      text: message,
      showConfirmButton: false,
      timer: this.timer
    });
  }

  question(message: string, callback: Function, confirmButtonText: string = 'Confirmar', cancelButtonText: string = 'Cancelar'): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Atenção',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        callback();
      }
    })
  }

  show(message: string): void {
    Swal.fire({
      title: "Aguarde!",
      text: message,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
  }

  hide(): void {
    Swal.close();
  }
}
