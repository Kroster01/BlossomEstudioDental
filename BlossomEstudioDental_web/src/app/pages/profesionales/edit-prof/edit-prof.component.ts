import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

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
    alert('se guarda el item: ' + this.element.id);
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


/*
https://www.youtube.com/watch?v=nEfemck6iNk
min 55.26

*/