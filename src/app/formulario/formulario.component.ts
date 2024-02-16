import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from 'src/assets/data/estudiantes.service';
import { Estudiante } from '../interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  estudianteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    asignatura: new FormControl('', Validators.required),
    nota: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
  });

  constructor(private estudiantesService: EstudiantesService) {}

  onSubmit() {
    if (this.estudianteForm.valid) {
      const formData = this.estudianteForm.value;

      
      const estudiante: Estudiante = {
        nombre: formData.nombre ?? '',
        asignatura: formData.asignatura ?? '',
        nota: formData.nota ?? ''
      };

      this.estudiantesService.agregarEstudiante(estudiante).subscribe({
        next: () => {
          console.log('Estudiante agregado correctamente');
          this.estudianteForm.reset();
        },
        error: (error) => {
          console.error('Error al agregar estudiante:', error);
        }
      });
    } else {
      console.error('Formulario inválido. Verifica los campos.');
    }
  }
}