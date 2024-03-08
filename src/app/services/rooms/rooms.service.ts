import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private roomApiUrl = "http://localhost:8080/room";

  constructor(private http: HttpClient) { }

  createRoom(): Observable<any>{
    return this.http.post<any>(this.roomApiUrl+"/create",{});
  }

  getRoom(codigo:string):Observable<any> {
    return this.http.get<any>(`${this.roomApiUrl}/getRoom?codigo=${codigo}`);
  }
}
