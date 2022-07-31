import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {

  expURL = 'https://shielded-oasis-42182.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.expURL + '/api/habilidad/vertodos');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.expURL + `/api/habilidad/ver/${id}`);
  } 

  public save(habilidad: Skills): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/api/habilidad/crear', habilidad);
  }

  public update(id: number, habilidad: Skills): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/api/habilidad/editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/api/habilidad/delete/${id}`);
  }
}
