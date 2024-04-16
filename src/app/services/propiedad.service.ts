import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropiedadModel } from '../models/Propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8080/api/propiedades';  // Cambia esto por la URL real de tu API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Obtener todas las propiedades
  getPropiedades(): Observable<PropiedadModel[]> {
    return this.http.get<PropiedadModel[]>(this.apiUrl);
  }

  // Obtener una propiedad por su ID
  getPropiedadById(id: number): Observable<PropiedadModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PropiedadModel>(url);
  }

  // Crear una nueva propiedad
  createPropiedad(propiedad: PropiedadModel): Observable<PropiedadModel> {
    return this.http.post<PropiedadModel>(this.apiUrl, propiedad, this.httpOptions);
  }

  // Actualizar una propiedad existente
  updatePropiedad(propiedad: PropiedadModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${propiedad.id_propiedad}`, propiedad, this.httpOptions);
  }

  // Borrar una propiedad
  deletePropiedad(id: number): Observable<PropiedadModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<PropiedadModel>(url, this.httpOptions);
  }
}
