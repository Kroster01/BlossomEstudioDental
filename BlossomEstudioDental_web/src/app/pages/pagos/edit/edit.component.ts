import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() item: any;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;
  pagosForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Init app-edit : item');
    console.log(JSON.stringify(this.item));
    this.element = this.item.state.value;
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
    alert('se guarda el item: ' + this.element);
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
