import { Component, ElementRef, ViewChild } from '@angular/core';
import { LicensePlateComponent } from '../license-plate/license-plate.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plate-customizer',
  imports: [
    LicensePlateComponent,
    FormsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  templateUrl: './plate-customizer.component.html',
  styleUrl: './plate-customizer.component.scss'
})
export class PlateCustomizerComponent {
  licensePlateNumber: number = 0;
}
