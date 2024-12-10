import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProduitAddEditComponent } from '../produit-add-edit/produit-add-edit.component';
import { ProductService } from '../services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../fragments/core/core.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  displayedColumns: string[] = [
      'productName',
      'category',
      'price',
      'quantity',
      'expiryDate',
      'action'
    ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog, 
    private _productService: ProductService,
    private _coreService: CoreService
  ){}

  ngOnInit(): void {
      this.getProductList();
  }

  openAddProdForm() {
    const dialogRef = this._dialog.open(ProduitAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductList();
        }
      }
    })
  }

  getProductList() {
    this._productService.getProductList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.dataSource.paginator
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(id: number){
    this._productService.deleteProduct(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Product deleted !','Ok')
        this.getProductList();
      },
      error: console.log,
    })
  }

  openEditProdForm(data : any) {
    const dialogRef = this._dialog.open(ProduitAddEditComponent,{
      data
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductList();
        }
      }
    })
  }
}
