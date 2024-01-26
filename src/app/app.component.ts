import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManualComponent } from './manual/manual.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
