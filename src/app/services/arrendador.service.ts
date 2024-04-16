import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrendadorModel } from '../models/Arrendador.model';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/api/arrendadores'; // Cambia esto por la URL real de tu API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Obtener todos los arrendadores
  getArrendadores(): Observable<ArrendadorModel[]> {
    return this.http.get<ArrendadorModel[]>(this.apiUrl);
  }

  // Obtener un arrendador por su ID
  getArrendadorById(id: number): Observable<ArrendadorModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ArrendadorModel>(url);
  }

  // Crear un nuevo arrendador
  createArrendador(arrendador: ArrendadorModel): Observable<ArrendadorModel> {
    return this.http.post<ArrendadorModel>(this.apiUrl, arrendador, this.httpOptions);
  }

  // Actualizar un arrendador existente
  updateArrendador(arrendador: ArrendadorModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${arrendador.id_arrendador}`, arrendador, this.httpOptions);
  }

  // Borrar un arrendador
  deleteArrendador(id: number): Observable<ArrendadorModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ArrendadorModel>(url, this.httpOptions);
  }
}
