import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantesSubject = new BehaviorSubject<any[]>([]);
  estudiantes$ = this.estudiantesSubject.asObservable();

  private estudiantes: any[] = [];

  agregarEstudiante(estudiante: any) {
    this.estudiantes.push(estudiante);
    this.estudiantesSubject.next(this.estudiantes);
  }

  obtenerEstudiantes() {
    return this.estudiantes$;
  }
}