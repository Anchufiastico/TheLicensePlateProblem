import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlateCustomizerComponent } from './plate-customizer/plate-customizer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PlateCustomizerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheLicensePlateProblem-HernandezDavid';
}
