import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagosInterfae } from '../models/pago.interface';

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent implements OnInit {

  @Input() item!: PagosInterfae;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;
  pagosForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Init app-edit : item');
    console.log(JSON.stringify(this.item));
    this.element = this.item;
    this.initForm();
    if (typeof this.element == 'undefined') {
      // redirigir o mostrar un mensaje.
      // TODO: re dirigir a new
    } else {
      this.pagosForm.patchValue(this.element);
    }
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
    alert('se guarda el item: ' + this.element.id);
  }

  private initForm(): void {
    this.pagosForm = this.fb.group({
      NomProfecional: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
      pagoHonorarios: ['', [Validators.required]]
    });
  }

}
