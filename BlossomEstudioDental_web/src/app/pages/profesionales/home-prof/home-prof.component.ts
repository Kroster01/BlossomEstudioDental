import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.component.html',
  styleUrls: ['./home-prof.component.scss']
})
export class HomeProfComponent implements OnInit {

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
