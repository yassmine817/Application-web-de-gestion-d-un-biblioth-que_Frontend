import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auteurs } from '../Models/Auteurs';
@Injectable({
  providedIn: 'root'
})
export class AuteursService {
  private baseApiUrl = 'https://localhost:44382';

  constructor(private httpClient: HttpClient) { }

  getAuteursList(): Observable<Auteurs[]> {
    return this.httpClient.get<Auteurs[]>(this.baseApiUrl + '/Auteurs');
  }
}
