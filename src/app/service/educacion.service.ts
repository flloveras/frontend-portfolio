import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
eduURL = 'https://shielded-oasis-42182.herokuapp.com';
  constructor(private httpClient : HttpClient) { }

public lista(): Observable<Education[]> {
  return this.httpClient.get<Education[]>(this.eduURL + '/api/educacion/vertodos');
}

public detail(id: number): Observable<Education> {
  return this.httpClient.get<Education>(this.eduURL + `/api/educacion/ver/${id}`);
}

public save(edu: Education): Observable<any> {
  return this.httpClient.post<any>(this.eduURL + '/api/educacion/crear', edu);
}

public update(id: number, edu: Education): Observable<any> {
  return this.httpClient.put<any>(this.eduURL + `/api/educacion/editar/${id}`, edu);
}

public delete(id: number): Observable<any> {
  return this.httpClient.delete<any>(this.eduURL + `/api/educacion/delete/${id}`);
}
}