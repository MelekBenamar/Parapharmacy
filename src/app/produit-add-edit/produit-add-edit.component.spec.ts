import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAddEditComponent } from './produit-add-edit.component';

describe('ProduitAddEditComponent', () => {
  let component: ProduitAddEditComponent;
  let fixture: ComponentFixture<ProduitAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
