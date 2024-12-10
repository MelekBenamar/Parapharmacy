import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-produit-add-edit',
  templateUrl: './produit-add-edit.component.html',
  styleUrl: './produit-add-edit.component.scss'
})
export class ProduitAddEditComponent implements OnInit{

  productForm: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private _productService: ProductService,
    private _dialogRef: MatDialogRef<ProduitAddEditComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any 

  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      expiryDate: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.productForm.patchValue(this.data)
  }

  onFormSubmit(){
    if(this.productForm.valid) {
      if(this.data){
        this._productService.updateProdcut(this.data.id, this.productForm.value).subscribe({
          next: (val:any) => {
            this._coreService.openSnackBar('Product Updated !','done')
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error
          }
        })
      } else {
        this._productService.addProdcut(this.productForm.value).subscribe({
          next: (val:any) => {
            this._coreService.openSnackBar('Product Added Successfully !','Ok')
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error
          }
        })
      }
      
    }
  }

  onReset() {
    this.productForm.reset();
  }
}
