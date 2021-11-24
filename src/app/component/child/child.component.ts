import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { BiService } from 'src/app/bi.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name! : string;
  name$!:Observable<string>;

  constructor(public bi:BiService) { 
    }

  ngOnInit(): void {
    this.name = this.bi.name;
    this.name$ = this.bi.getName();
  }

  onEmitSome(){
    console.log("Some emitted")
  }

}
