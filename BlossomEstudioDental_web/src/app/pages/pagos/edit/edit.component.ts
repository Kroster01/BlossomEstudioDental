import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() item: any;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Init app-edit : item');
    console.log(JSON.stringify(this.item));
    this.element = this.item.state.value;
  }

  volver(): void {
    console.log('volver app-edit');
    let btnClick = {
      origen: 'app-edit',
      action: 'listar'
    };
    this.ButtonClick.emit(btnClick);
  }

  guardar(): void {
    console.log('guardar app-edit');
    alert('se guarda el item: ' + this.element);
  }

}
