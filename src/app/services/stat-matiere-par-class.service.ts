import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatMatiereParClassService {

  public url: string = "http://192.168.1.60:1852/"; //Glenn
  // //public url: string = "192.168.1.62:1852/"; //Anjara

  constructor(private http: HttpClient) { }
 
  getStatMatiereParClass(idClassroom: number){
    return this.http.get(this.url + 'statistique/statistiqueMatiereParClass/' + idClassroom + '/2008/2011')
    .toPromise();
  }
}
