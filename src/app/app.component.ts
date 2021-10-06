import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceDemo';

  constructor(private obj : MarvellousService)
  {
    this.fun();
  }

  fun()
  {
      this.obj.timepass();
  }
}
