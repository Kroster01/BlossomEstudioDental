import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionalesService } from 'src/app/services/profesionales.service';
import { PagosInterface } from '../models/pago.interface';
import { ProfesionalInterface } from '../models/profesional.interface';

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent implements OnInit {

  @Input() itemOriginal!: PagosInterface;
  @Output() ButtonClick = new EventEmitter<any>();
  element: any;
  pagosForm!: FormGroup;
  profesionales: ProfesionalInterface[] = [];

  constructor(
    private fb: FormBuilder,
    private profesionalesService: ProfesionalesService
  ) { }

  ngOnInit(): void {
    console.log('Init app-edit : itemOriginal');
    console.log(JSON.stringify(this.itemOriginal));
    this.element = this.itemOriginal;
    this.setDatForm()
    this.setProfecionales();
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

  setProfecionales() {
    this.profesionalesService.getProfesionales()
      .subscribe((res: any) => {
        this.profesionales = this.convertToModelPagos(res.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as ProfesionalInterface)
          };
        }))
      });
  }

  convertToModelPagos(item: any): ProfesionalInterface[] {
    return item;
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
      console.log('guardar app-edit');
      alert('se guarda el itemOriginal app-edit: ' + this.element.id);
    } else {
      console.log('guardar app-new');
      alert('se guarda el itemOriginal app-new.. ');
    }
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

  private initFormData(param: PagosInterface): void {
    this.pagosForm = this.fb.group({
      NomProfecional: [param.nombre, [Validators.required]],
      descripcion: [param.descripcion, [Validators.required]],
      fecha: ['', [Validators.required]],
      monto: [param.monto, [Validators.required]],
      estado: [param.estado, [Validators.required]],
      observacion: [param.observacion, [Validators.required]],
      pagoHonorarios: [param.pagoHonorario, [Validators.required]]
    });
    //this.pagosForm.controls.controlName.setValue(formatDate(date,'yyyy-MM-dd','en'));

    this.pagosForm.get('fecha')?.patchValue(this.formatDate(new Date()));
  }

  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
  }

}
