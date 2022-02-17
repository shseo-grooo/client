import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meow } from './meow';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = `http://dog-service-${this.getMode()}/bark`;
  // private url = `http://${environment.backendBaseUrl}:${this.getPort()}/animal/dog/bark`;

  constructor(
    private http: HttpClient,
  ) { }

  getMeow(): Observable<Meow> {
    return this.http.get<Meow>(this.url, { headers: { "X-Mode": this.getMode() } });
  }

  private getPort(): string {
    return location.port ? location.port : "80"
  }
  private getMode(): string {
    return location.port === "8888" ? "preview" : "active"
  }
}
