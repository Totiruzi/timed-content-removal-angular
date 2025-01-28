import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from '../models/content.model';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service is provided globally in root injector
})
export class ContentService {
  private url = 'http://localhost:3000/contents'; // Base URL for fetching contents

  constructor(private http: HttpClient) {} // Constructor injecting HttpClient

  fetchContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.url); // Fetch contents from the server
  }
}

