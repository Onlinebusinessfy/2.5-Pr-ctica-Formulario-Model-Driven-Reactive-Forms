import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioReactivo } from './formulario-reactivo/formulario-reactivo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioReactivo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario-reactivo-app');
}