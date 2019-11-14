import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListStudentsService {

  //public url: string = "http://192.168.1.60:1852/"; //Glenn
  public url: string = "http://192.168.1.62:1852/"; //Anjara

  constructor(private http: HttpClient) { }
 
  getListStudents(idClassroom: number){
    return this.http.get(this.url + 'students/findByIdClassroom/' + idClassroom )
    .toPromise();
  }

  getStudentById(idStudent: number){
    return this.http.get(this.url + 'students/findById/' + idStudent )
    .toPromise();
  }

  getNiveauStudentById(idStudent: number){
    return this.http.get(this.url + 'students/findById/' + idStudent )
    .toPromise();
  }
}
