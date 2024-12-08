import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProduitAddEditComponent } from '../produit-add-edit/produit-add-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);

  constructor(private _dialog: MatDialog){}

  openAddEditPropForm() {
    this.dialog.open(ProduitAddEditComponent);
  }
}
