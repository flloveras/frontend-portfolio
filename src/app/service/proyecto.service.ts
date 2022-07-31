import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  expURL = 'https://shielded-oasis-42182.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.expURL + '/api/proyecto/vertodos');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.expURL + `/api/proyecto/ver/${id}`);
  } 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/api/proyecto/crear', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/api/proyecto/editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/api/proyecto/delete/${id}`);
  }
}
