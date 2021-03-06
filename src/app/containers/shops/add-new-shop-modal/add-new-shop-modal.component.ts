import { Component, TemplateRef,  ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-new-shop-modal',
  templateUrl: './add-new-shop-modal.component.html',
  styles: []
})
export class AddNewShopModalComponent  {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  categories = [
    { label: 'Cakes', value: 'chocolate' },
    { label: 'Cupcakes', value: 'vanilla' },
    { label: 'Desserts', value: 'strawberry' }
  ];


  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService) { }


  show(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
