import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [{
    nombre: 'Marcela',
    apellido: 'Huina',
    descripcion: 'Derscripción trabajo Marce',
    fecha: '03/03/2022',
    monto: '10000',
    estado: 1,
    observacion: 'N/A Marcela',
    pagoHonorario: false,
    createReg: '01/03/2022',
  },{
    nombre: 'Fernando',
    apellido: 'Curihual',
    descripcion: 'Derscripción trabajo Fernando',
    fecha: '05/05/2022',
    monto: '30000',
    estado: 0,
    observacion: 'N/A Fernando',
    pagoHonorario: false,
    createReg: '01/03/2022',
  },{
    nombre: 'Nicole',
    apellido: 'Coñuepan',
    descripcion: 'Derscripción trabajo Nicole',
    fecha: '04/04/2022',
    monto: '50000',
    estado: 2,
    observacion: 'N/A Nicole',
    pagoHonorario: true,
    createReg: '01/03/2022',
  },{
    nombre: 'Andrea',
    apellido: 'Morales',
    descripcion: 'Derscripción trabajo Andrea',
    fecha: '08/08/2022',
    monto: '70000',
    estado: 1,
    observacion: 'N/A Andrea',
    pagoHonorario: true,
    createReg: '01/03/2022',
  },
];

  showLista = true;
  showEdit = false;
  showDetails = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showLista = true;
    this.showEdit = false;
    this.showDetails = false;
  }

  onGoToEdit(item: any): void {
    console.log('onGoToEdit');
    this.navigationExtras!.state!['value'] = item;
    this.showLista = false;
    this.showEdit = true;
    this.showDetails = false;
  }

  onGoToSee(item: any): void {
    console.log('onGoToSee');
    this.navigationExtras!.state!['value'] = item;
    this.showLista = false;
    this.showEdit = false;
    this.showDetails = true;
  }

  onGoToDelete(item: any): void {
    console.log('onGoToDelete');
    alert('se elimina el item: ' + item);
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
