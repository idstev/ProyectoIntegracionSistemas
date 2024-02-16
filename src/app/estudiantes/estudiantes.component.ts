import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/assets/data/estudiantes.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: any[] = [];

  constructor(private estudiantesService: EstudiantesService) {}

  ngOnInit() {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estudiantesService.cargarEstudiantes().subscribe(data => {
      this.estudiantes = data;
    });
  }

  eliminarEstudiante(id: number) {
    this.estudiantesService.eliminarEstudiante(id).subscribe(() => {
      console.log('Estudiante eliminado correctamente');
      this.cargarEstudiantes();
    }, error => {
      console.error('Error al eliminar estudiante:', error);
    });
  }
}