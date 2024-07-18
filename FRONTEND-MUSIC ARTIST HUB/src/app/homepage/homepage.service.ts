import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Homepage } from './Homepage';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private apiUrl = 'http://localhost:8080/api/v2/homepage';

  constructor(private http: HttpClient) {}

  addHomepage(formData: FormData): Observable<Homepage> {
    return this.http.post<Homepage>(`${this.apiUrl}/AddDetails`, formData);
  }

  getAllHomepage(): Observable<Homepage[]> {
    return this.http.get<Homepage[]>(`${this.apiUrl}/getAllDetails`);
  }

  updateHomepage(formData: FormData): Observable<Homepage> {
    const id = formData.get('id');
    return this.http.put<Homepage>(`${this.apiUrl}/update/${id}`, formData);
  }
}
