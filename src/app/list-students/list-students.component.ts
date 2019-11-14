import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListStudentsService } from '../services/list-students.service';
import { StatMatiereParClassService } from '../services/stat-matiere-par-class.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public selectedClass = '';
  public listClass = [];

  public listStudents = [];
  constructor(
              private route: ActivatedRoute, 
              private router: Router,
              private listStudentsService : ListStudentsService,
              private statMatiereParClassService: StatMatiereParClassService
  ) { }

  ngOnInit() {
    console.log('test');
    this.statMatiereParClassService.getLisClass().then((response) => {
      this.listClass = response['data'];
      console.log(this.listClass);
    });

      this.listStudentsService.getListStudents(3).then((response) => {
        this.listStudents = response['data'];
        console.log(this.listStudents);
      }).catch((error) => {
        console.log(error);
      });

  }

  onChange(classId) {
    this.selectedClass = classId;
    this.listStudentsService.getListStudents(classId).then((response) => {
      this.listStudents = response['data'];
      console.log(this.listStudents);
    }).catch((error) => {
      console.log(error);
    });

  }

}
