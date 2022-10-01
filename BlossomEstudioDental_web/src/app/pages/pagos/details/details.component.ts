import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() item: any;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Init app-details : item');
    console.log(JSON.stringify(this.item));
    this.element = this.item.state.value;
  }

  edit(): void {
    console.log('edit app-details');
    let btnClick = {
      origen: 'app-details',
      action: 'edit'
    };
    this.ButtonClick.emit(btnClick);
  }

  delete(): void {
    console.log('delete app-details');
    alert('se elimina el item: ' + this.element);
  }

  volver(): void {
    console.log('volver app-details');
    let btnClick = {
      origen: 'app-details',
      action: 'listar'
    };
    this.ButtonClick.emit(btnClick);
  }

}
