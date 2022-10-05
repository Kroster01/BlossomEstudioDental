import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionalInterface } from '../models/profesional.interface';

@Component({
  selector: 'app-profesional-form',
  templateUrl: './profesional-form.component.html',
  styleUrls: ['./profesional-form.component.scss']
})
export class ProfesionalFormComponent implements OnInit {

  @Input() item!: ProfesionalInterface;
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
    console.log('guardar app-edit-prof');
    if (this.element) {
      alert('se guarda el item: ' + this.element.id);
    } else {
      alert('se guarda el item.. ');
    }
  }

  private initForm(): void {
    this.pagosForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
  }

}
