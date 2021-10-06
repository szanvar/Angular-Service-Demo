import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private obj : MarvellousService) 
  {
    this.fun1();
  }

  fun1()
  {
     this.obj.timepass();
  }

  ngOnInit(): void {
  }

}
