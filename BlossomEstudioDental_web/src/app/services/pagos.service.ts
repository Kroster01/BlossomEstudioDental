import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { PagosInterface } from '../shared/models/pago.interface';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  pagos!: Observable<PagosInterface[]>;

  constructor(private readonly angularFirestore: AngularFirestore) { }

  getPagos() {
    return this.angularFirestore
      .collection("pagos")
      .snapshotChanges();
  }

  getPagoById(id: string) {
    /*
    return this.angularFirestore
      .collection("pagos")
      .doc(id)
      .valueChanges();
    */
  }

  createPagos(pago: any) {
    /*
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("dfgd")
        .doc(pago.monto)
        .then((respose: any) => {
          console.log(respose);
        },
        (error) => {
          reject(error)
        })
    });
    */
  }

  updatePagos(pago: PagosInterface, id: string) {
    /*
    return this.angularFirestore
    .collection("")
    .doc(id)
    .update({
      id: pago.id
    });
    */
  }

  deletePago(pago: PagosInterface) {
    /*
    return this.angularFirestore
    .collection("")
    .doc(pago.id)
    .delete();
    */
  }

  /*
  onDeletePago(pagoId: string): Promise<void> {
    return null;
  }

  onSavePago(pago: PagosInterface, pagoId: string): Promise<void> {
    return null;
  }

  private getPagoo(pagoId: string): void {

  }
  */

}
