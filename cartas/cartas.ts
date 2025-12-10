import { Component } from '@angular/core';
import { time } from 'console';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-cartas',
  standalone: false,
  templateUrl: './cartas.html',
  styleUrl: './cartas.css',
})
export class Cartas {
  cartas = [
    {icon: '👽', estaVolteada: false, estaEmparejada: false},
    {icon: '☢️', estaVolteada: false, estaEmparejada: false},
    {icon: '🥸', estaVolteada: false, estaEmparejada: false},
    {icon: '⭐', estaVolteada: false, estaEmparejada: false},
    {icon: '🙊', estaVolteada: false, estaEmparejada: false},
    {icon: '🎃', estaVolteada: false, estaEmparejada: false},
    {icon: '🎄', estaVolteada: false, estaEmparejada: false},
    {icon: '🎱', estaVolteada: false, estaEmparejada: false},
    {icon: '👽', estaVolteada: false, estaEmparejada: false},
    {icon: '☢️', estaVolteada: false, estaEmparejada: false},
    {icon: '🥸', estaVolteada: false, estaEmparejada: false},
    {icon: '⭐', estaVolteada: false, estaEmparejada: false},
    {icon: '🙊', estaVolteada: false, estaEmparejada: false},
    {icon: '🎃', estaVolteada: false, estaEmparejada: false},
    {icon: '🎄', estaVolteada: false, estaEmparejada: false},
    {icon: '🎱', estaVolteada: false, estaEmparejada: false},
    {icon: '🏆', estaVolteada: false, estaEmparejada: false},
    {icon: '🗞️', estaVolteada: false, estaEmparejada: false},
    {icon: '🏆', estaVolteada: false, estaEmparejada: false},
    {icon: '🗞️', estaVolteada: false, estaEmparejada: false},
    
  ]
  cartaSeleccionada: any = null;
  intentos = 0;
  bloqueado = false;
  ganaste = false;
  perdiste = false;
  maxintentos = 100;
  contador = 0;
  v = false;
  inicio = true;

  constructor() {
    this.barajarCartas();
  }

  barajarCartas() {
    this.cartas.sort(() => Math.random() - 0.5);
  }

  // Acción al hacer clic en una carta
  clickCarta(carta: any) {
    if (this.bloqueado || carta.estaVolteada || carta.estaEmparejada || this.ganaste) return;

    carta.estaVolteada = true;
    this.v = false;

    if (!this.cartaSeleccionada) {
      this.cartaSeleccionada = carta;
    } else {
      this.intentos++;
      if (this.intentos >= this.maxintentos) { 
        this.terminarJuego();
        return;
      }

      if (this.cartaSeleccionada.icon === carta.icon) {
        // Emparejadas
        carta.estaEmparejada = true;
        this.cartaSeleccionada.estaEmparejada = true;
        this.cartaSeleccionada = null;
        this.contador++;
        this.verificarVictoria();
      
      
      } else {
        // No coinciden → se voltean de nuevo
        this.bloqueado = true;
        setTimeout(() => {
          carta.estaVolteada = false;
          this.cartaSeleccionada.estaVolteada = false;
          this.cartaSeleccionada = null;
          this.bloqueado = false;
        }, 800);
      }
    }
  }
  // Verifica si ya ganaste
  verificarVictoria() {
    if (this.contador = 9){
          this.ganaste = true
    }
  }

  // Reinicia el juego
  reiniciar() {
    this.cartas.forEach(c => {
      c.estaVolteada = false;
      c.estaEmparejada = false;
    });
    this.intentos = 0;
    this.cartaSeleccionada = null;
    this.ganaste = false;
    this.barajarCartas();
    this.perdiste = false;
    this.inicio = true;
  }
  terminarJuego() {
  this.perdiste = true;
}

 quitar(){
  this.inicio = false;
 }
}  
