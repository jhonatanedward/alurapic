import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'  
})
export class PhotoService{

    constructor(private http: HttpClient){
    }

    listFromUser(userName:string){
        const observable = this.http.get<Photo[]>(`${API}/${userName}/photos`);
        return observable;
    }

    listFromUserPaginated(userName:string, page: number): Observable<Photo[]>{
      const params = new HttpParams().append('page', page.toString());
      const observable = this.http.get<Photo[]>(`${API}/${userName}/photos`, {params});
      return observable;
  }
}