import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit-add-edit',
  templateUrl: './produit-add-edit.component.html',
  styleUrl: './produit-add-edit.component.scss'
})
export class ProduitAddEditComponent {

  productForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      expiryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
    }
  }

  onReset() {
    this.productForm.reset();
  }

  onFormSubmit(){
    if(this.productForm.valid) {
      console.log(this.productForm.value)
    }
  }
}
