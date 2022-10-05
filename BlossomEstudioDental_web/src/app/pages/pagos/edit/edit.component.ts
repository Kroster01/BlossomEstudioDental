import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagosInterface } from 'src/app/shared/models/pago.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() item!: PagosInterface;
  @Output() ButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickChild(event: any) {
    this.ButtonClick.emit(event);
  }

}


