import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfesionalInterface } from 'src/app/shared/models/profesional.interface';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  @Input() item!: ProfesionalInterface;
  @Output() ButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickChild(event: any) {
    this.ButtonClick.emit(event);
  }
}
