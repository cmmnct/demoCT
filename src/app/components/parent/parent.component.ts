import { Component, OnInit } from '@angular/core';
import { BiService } from 'src/app/bi.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public name!:string;
  public cards!:[any];

  public time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(public bi:BiService) { }

  ngOnInit(): void {
    this.name = this.bi.name
    this.bi.getCards().subscribe(cards => this.cards = cards);
  }

 

  onClickCard(card:any){
    console.log(`U klikte ${card.card1}`)
  }

}
