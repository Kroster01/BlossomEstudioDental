import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionalInterface } from '../models/profesional.interface';

@Component({
  selector: 'app-profesional-form',
  templateUrl: './profesional-form.component.html',
  styleUrls: ['./profesional-form.component.scss']
})
export class ProfesionalFormComponent implements OnInit {

  @Input() itemOriginal!: ProfesionalInterface;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;
  pagosForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Init app-edit : itemOriginal');
    console.log(JSON.stringify(this.itemOriginal));
    this.element = this.itemOriginal;
    this.setDatForm();
  }

  setDatForm() {
    if (typeof this.element == 'undefined') {
      // redirigir o mostrar un mensaje.
      // TODO: re dirigir a new
      this.initForm();
    } else {
      this.initFormData(this.itemOriginal);
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
    if (this.element) {
      console.log('guardar app-edit-prof');
      alert('se guarda el itemOriginal app-edit-prof: ' + this.element.id);
    } else {
      console.log('guardar app-new-prof');
      alert('se guarda el itemOriginal app-new-prof.. ');
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

  private initFormData(param: ProfesionalInterface): void {
    this.pagosForm = this.fb.group({
      nombre: [param.nombre, [Validators.required]],
      apellido: [param.apellido, [Validators.required]],
      rut: [param.rut, [Validators.required]],
      especialidad: [param.especialidad, [Validators.required]],
      estado: [param.estado, [Validators.required]]
    });
  }

}
