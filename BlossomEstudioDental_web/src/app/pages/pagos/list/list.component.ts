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
  }

  clickChild(event: any): void {
    console.log('eventos de edit click');
    if (event == "app-edit") {
      console.log('eventos de edit click --> app-edit');
      this.showLista = true;
      this.showEdit = false;
      this.showDetails = false;
    }
    if (event == "app-details") {
      console.log('eventos de edit click --> app-details');
      this.showLista = true;
      this.showEdit = false;
      this.showDetails = false;
    }
  }
}
