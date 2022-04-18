import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes: string[] = ['Aquaman','Superman','Batman','Mujer Maravilla','Flash'];
  disabled: boolean = true

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event)

    const itemMove = this.heroes.splice(event.detail.from, 1)[0]
    this.heroes.splice( event.detail.to, 0, itemMove )

    event.detail.complete()
    console.log(this.heroes)
  }

  onClick(){
    this.disabled = !this.disabled
  }

}
