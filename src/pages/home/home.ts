import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { dateSortValue } from '../../../node_modules/ionic-angular/umd/util/datetime-util';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  constructor(
    public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTareas: TareaProvider
  ) {
    this.tareas=servicioTareas.obtenerTareas();
  }
  agragarTarea() {
    let alert = this.alerta.create({
      title: "agregarTarea",
      inputs: [{
        name: "textoTarea",
        type: "text"
      }],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Agregar",
          handler: (datos) => {
            console.log(datos);
            //this.tareas.push(datos.textoTarea);
            this.servicioTareas.agregarTarea(datos.textoTarea)
          }

        }
      ]
    })
    alert.present();
  }
}
