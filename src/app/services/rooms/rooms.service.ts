import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private roomApiUrl = "http://localhost:8080/room";

  constructor(private http: HttpClient) { }

  createRoom(): Observable<String>{
    return this.http.post<string>(this.roomApiUrl+"/create",{});
  }

  getRoom():Observable<String> {
    return this.http.get<{id: string}>(this.roomApiUrl+"/list").pipe(map(response => response.id));
  }
}
