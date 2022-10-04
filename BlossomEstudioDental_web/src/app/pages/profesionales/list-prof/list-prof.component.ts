import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProfesionalInterfae } from 'src/app/shared/models/profesional.interface';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  navigationExtras: ProfesionalInterfae = {};

  fakeData: ProfesionalInterfae[] = [{
    id: 0,
    nombre: 'Marcela',
    apellido: 'Huina',
    rut: 'xx.xxx.xxx-x',
    especialidad: 'esp 0',
    estado: true,
    createReg: '01/03/2022',
  }, {
    id: 1,
    nombre: 'Fernando',
    apellido: 'Curihual',
    rut: 'xx.xxx.xxx-x',
    especialidad: 'esp 1',
    estado: true,
    createReg: '01/03/2022',
  }, {
    id: 2,
    nombre: 'Nicole',
    apellido: 'Coñuepan',
    rut: 'xx.xxx.xxx-x',
    especialidad: 'esp 2',
    estado: false,
    createReg: '01/03/2022',
  }, {
    id: 3,
    nombre: 'Andrea',
    apellido: 'Morales',
    rut: 'xx.xxx.xxx-x',
    especialidad: 'esp 3',
    estado: true,
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
