import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meow } from './meow';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private url = `http://dog-service-${this.getMode()}/bark`;
  private url = `http://localhost:${this.getPort()}/bark`;

  constructor(
    private http: HttpClient,
  ) { }

  getMeow(): Observable<Meow> {
    return this.http.get<Meow>(this.url);
  }

  private getPort(): string {
    return location.port ? "8888" : "80"
  }
}
