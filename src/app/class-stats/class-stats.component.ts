import { Component, OnInit } from '@angular/core';
import { StatMatiereParClass } from '../models/StatMatiereParClass.model';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { StatMatiereParClassService } from '../services/stat-matiere-par-class.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-class-stats',
  templateUrl: './class-stats.component.html',
  styleUrls: ['./class-stats.component.css']
})
export class ClassStatsComponent implements OnInit {

  public statMatiereParClass = [];

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private statMatiereParClassService: StatMatiereParClassService
              ) {}

  ngOnInit() {
    console.log('test');

    this.route.params.subscribe(
      (params: Params) => {
        this.statMatiereParClassService.getStatMatiereParClass(params.id).then((response) => {
          this.statMatiereParClass = response['data'];
          console.log(this.statMatiereParClass);
        }).catch((error) => {
          console.log(error);
        });
      }
    );
      


    
  }

}
