import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    telefono: new FormControl('', Validators.required),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  datosRegistrados: any = null;

  registrar() {
    if (this.formulario.valid) {
      this.datosRegistrados = this.formulario.value;
      console.log('Datos registrados:', this.datosRegistrados);
      this.formulario.reset();
    }
  }
}