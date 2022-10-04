import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfesionalInterfae } from 'src/app/shared/models/profesional.interface';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  @Input() item!: ProfesionalInterfae;
  @Output() ButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickChild(event: any) {
    this.ButtonClick.emit(event);
  }
}
