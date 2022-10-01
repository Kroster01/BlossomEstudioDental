import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() item: any;
  @Output() ButtonClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('Init app-details : item');
    console.log(JSON.stringify(this.item));
  }

  volver(): void {
    console.log('volver app-details');
    this.ButtonClick.emit("app-edit");
  }

}
