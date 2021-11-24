import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  onEmitSome(){
    console.log("emitted")
  }
  onClickGrandcild(){
    alert("some event from grandchild")
  }
}
