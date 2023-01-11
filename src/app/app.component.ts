import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Tour of Heroes';

  onSave():void{
    alert('welcome to my site');
  }
  Toggle():void{
    this.title = this.title?'':'Tour of Heroes';
  }
}
