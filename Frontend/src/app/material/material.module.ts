import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFileUploadModule } from 'mat-file-upload';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule ,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatFileUploadModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
