import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  expURL = 'https://shielded-oasis-42182.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.expURL + '/api/persona/vertodos');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.expURL + `/api/persona/ver/${id}`);
  }  

  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/api/persona/crear', persona);
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/api/persona/editar/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/api/persona/delete/${id}`);
  }
}
