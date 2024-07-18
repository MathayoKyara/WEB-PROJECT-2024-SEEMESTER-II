// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements RegistrationService{

  private baseURL = "http://localhost:8081/api/v1/registration";

  constructor(private httpClient: HttpClient) { }
  createRegistration(registration: Registration): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, registration);
  }

  getRegistrationsList(): Observable<Registration[]> {
    return this.httpClient.get<Registration[]>(`${this.baseURL}/getAll`);
  }



  getRegistrationById(id: number): Observable<Registration> {
    return this.httpClient.get<Registration>(`${this.baseURL}/${id}`);
  }

  updateRegistration(id: number, registration: Registration): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, registration);
  }

  deleteRegistration(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
