import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BiService } from 'src/app/bi.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Output() some = new EventEmitter<string>();

  constructor(public bi:BiService) { }

  public name!: string;

  ngOnInit(): void {
    this.some.emit("Hello");
    this.name = this.bi.name;
  }

  onBtnClick(){
    alert("grandchild clicked");
    this.some.emit("Hello");
  }
  updateName(){
   this.bi.setName(this.name);
  }
}
