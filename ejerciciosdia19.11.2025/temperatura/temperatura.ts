import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatura',
  standalone: false,
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css'
})
export class Temperatura {
  temp:any='';
  clasificador:string='';

  rango(){
    const t = Number(this.temp);

    if (isNaN(t)){
      this.clasificador = 'invalido';
      return;
    } 

    if (t>30){
      this.clasificador = 'Caliente';
    }
    else if (t>= 15 && t<=30) {
      this.clasificador='Templado';
    } 
    else{
      this.clasificador='Frio';
    }
  }
}
