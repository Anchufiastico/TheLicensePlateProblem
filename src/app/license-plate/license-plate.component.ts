import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Base36ParserComponent } from '../base36-parser/base36-parser.component';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.scss',
  imports: [
    MatCardModule,
    Base36ParserComponent
  ],
})
export class LicensePlateComponent {
  @Input() userInput: number = 0;  
}
