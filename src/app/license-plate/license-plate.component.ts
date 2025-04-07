import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Base36Pipe } from '../Pipelines/Base36/base36.pipe';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.scss',
  imports: [
    MatCardModule,
    Base36Pipe,
  ],
})
export class LicensePlateComponent {
  @Input() userInput: number = 0;  
}
