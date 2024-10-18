import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [MyHeaderComponent]
})
export class ShareModule { }
