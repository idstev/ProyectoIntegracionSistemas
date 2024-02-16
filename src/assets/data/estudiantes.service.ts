import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private estudiantesUrl = 'http://localhost:3000/estudiantes';

  constructor(private http: HttpClient) {}

  cargarEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.estudiantesUrl);
  }

  agregarEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.post<any>(this.estudiantesUrl, estudiante);
  }

  eliminarEstudiante(id: number): Observable<any> {
    const url = `${this.estudiantesUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}



