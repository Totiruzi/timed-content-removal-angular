import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimedContentComponent } from './timed-content/timed-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimedContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'content-displayer';
}
