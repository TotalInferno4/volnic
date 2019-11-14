import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatMatiereParClassService {

  //public url: string = "http://192.168.1.60:1852/"; //Glenn
  public url: string = "http://192.168.1.62:1852/"; //Anjara

  constructor(private http: HttpClient) { }

  getStatMatiereParClass(idClassroom: number, years1: number, years2: number) {
    console.log(this.url + 'statistique/statistiqueMatiereParClass/' + idClassroom + '/' + years1 + '/' + years2);
    return this.http.get(this.url + 'statistique/statistiqueMatiereParClass/' + idClassroom + '/' + years1 + '/' + years2)
    .toPromise();
  }

  getLisClass() {
    return this.http.get(this.url + 'class/all ')
    .toPromise();
  }
}
