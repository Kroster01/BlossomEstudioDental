import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfesionalInterfae } from 'src/app/shared/models/profesional.interface';

@Component({
  selector: 'app-details-prof',
  templateUrl: './details-prof.component.html',
  styleUrls: ['./details-prof.component.scss']
})
export class DetailsProfComponent implements OnInit {

  @Input() item!: ProfesionalInterfae;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Init app-details : item');
    console.log(JSON.stringify(this.item));
    this.element = this.item;
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
