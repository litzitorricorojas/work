import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankListComponent } from './bank-list/bank-list.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankAddComponent } from './bank-add/bank-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BankListComponent, BankEditComponent, BankAddComponent]
})
export class BankModule { }
