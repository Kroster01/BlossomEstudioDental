import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProfesionalInterface } from '../shared/models/profesional.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(private readonly angularFirestore: AngularFirestore) { }

  getProfesionales() {
    return this.angularFirestore
      .collection("profesionales")
      .snapshotChanges();
  }

  getPagoById(id: string) {
    /*
    return this.angularFirestore
      .collection("profesionales")
      .doc(id)
      .valueChanges();
    */
  }

  createProfesionales(pago: any) {
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

  updateProfesionales(pago: ProfesionalInterface, id: string) {
    /*
    return this.angularFirestore
    .collection("")
    .doc(id)
    .update({
      id: pago.id
    });
    */
  }

  deletePago(pago: ProfesionalInterface) {
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
  onSavePago(pago: ProfesionalesInterface, pagoId: string): Promise<void> {
    return null;
  }

  private getPagoo(pagoId: string): void {

  }
  */

}
