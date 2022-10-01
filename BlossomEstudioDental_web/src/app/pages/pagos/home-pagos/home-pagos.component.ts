import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pagos',
  templateUrl: './home-pagos.component.html',
  styleUrls: ['./home-pagos.component.scss']
})
export class HomePagosComponent implements OnInit {

  showLisar: boolean = true;
  showCrear: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.showLisar = true;
    this.showCrear = false;
  }

  listar(): void {
    this.showLisar = true;
    this.showCrear = false;
  }

  crear(): void {
    this.showLisar = false;
    this.showCrear = true;
  }

}
