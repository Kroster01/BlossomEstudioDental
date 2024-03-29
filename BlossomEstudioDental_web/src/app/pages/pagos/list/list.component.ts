import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PagosService } from 'src/app/services/pagos.service';
import { PagosInterface } from 'src/app/shared/models/pago.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: PagosInterface = {};

/*
  fakeData: PagosInterface[] = [{
    id: '0',
    nombre: 'Marcela',
    apellido: 'Huina',
    descripcion: 'Derscripción trabajo Marce',
    fecha: '03/03/2022',
    monto: 10000,
    estado: 1,
    observacion: 'N/A Marcela',
    pagoHonorario: false,
    createReg: '01/03/2022',
  }, {
    id: '1',
    nombre: 'Fernando',
    apellido: 'Curihual',
    descripcion: 'Derscripción trabajo Fernando',
    fecha: '05/05/2022',
    monto: 30000,
    estado: 0,
    observacion: 'N/A Fernando',
    pagoHonorario: false,
    createReg: '01/03/2022',
  }, {
    id: '2',
    nombre: 'Nicole',
    apellido: 'Coñuepan',
    descripcion: 'Derscripción trabajo Nicole',
    fecha: '04/04/2022',
    monto: 50000,
    estado: 2,
    observacion: 'N/A Nicole',
    pagoHonorario: true,
    createReg: '01/03/2022',
  }, {
    id: '3',
    nombre: 'Andrea',
    apellido: 'Morales',
    descripcion: 'Derscripción trabajo Andrea',
    fecha: '08/08/2022',
    monto: 70000,
    estado: 1,
    observacion: 'N/A Andrea',
    pagoHonorario: true,
    createReg: '01/03/2022',
  }
  ];
*/

  showLista = true;
  showEdit = false;
  showDetails = false;
  pagos!: PagosInterface[];

  constructor(private pagosService: PagosService) { }

  ngOnInit(): void {
    this.showLista = true;
    this.showEdit = false;
    this.showDetails = false;

    this.pagosService.getPagos()
      .subscribe((res: any) => {
        this.pagos = this.convertToModelPagos(res.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as PagosInterface)
          };
        }))
      });
  }

  convertToModelPagos(item: any): PagosInterface[] {
    return item;
  }

  onGoToEdit(item: any): void {
    console.log('onGoToEdit');
    this.navigationExtras = item;
    this.showLista = false;
    this.showEdit = true;
    this.showDetails = false;
  }

  onGoToSee(item: any): void {
    console.log('onGoToSee');
    this.navigationExtras = item;
    this.showLista = false;
    this.showEdit = false;
    this.showDetails = true;
  }

  onGoToDelete(item: any): void {
    console.log('onGoToDelete');
    alert('se elimina el item: ' + item.id);
  }

  clickChild(event: any): void {
    console.log('eventos de edit click');
    if (event && event.action == "edit") {
      this.showLista = false;
      this.showEdit = true;
      this.showDetails = false;
    } else {
      this.showLista = true;
      this.showEdit = false;
      this.showDetails = false;
    }
  }
}
