import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListStudentsService } from '../services/list-students.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  public student;
  public niveau;
  BarChart;
  polarChart;
  polarChartOrientation;
  public selectedClass = '';
  public listClass = [];

  constructor(
              private route: ActivatedRoute, 
              private router: Router,
              private listStudentsService : ListStudentsService
  ) 
  { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listStudentsService.getStudentById(params.id).then((response) => {
          this.student = response['data'];
          console.log(this.student);
        }).catch((error) => {
          console.log(error);
        });
        this.listStudentsService.getNiveauStudentById(params.id).then((response) => {
          this.niveau = response['data'];
          console.log(this.niveau);
        }).catch((error) => {
          console.log(error);
        });
      }
    );
    this.BarChart = this.addChart();
    this.polarChart = this.addPolarChart();
    this.polarChartOrientation = this.addPolarChartOrientation();
  }

  addChart() {
    return new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ['Physique-Chimie', 'Mathématiques', 'Français', 'Anglais', 'Dessin', 'EPS'],
     datasets: [{
         label: 'Note',
         data: [14, 12, 15.25, 10.5, 7.33, 14],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Histogramme des moyennes par matière",
         display:false
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

  addPolarChart() {
    return new Chart('polarChart', {
      type: 'polarArea',
    data: {
     labels: ['Physique-Chimie', 'Mathématiques', 'Français', 'Anglais', 'Dessin', 'EPS'],
     datasets: [{
         
         data: [85, 57, 62, 78, 25, 67],
         backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],

     }]
    },
    options: {
      title:{
          text:"Pourcentage de maîtrise des matières par l'élève",
          display:false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
     }
    
    });
  }

  addPolarChartOrientation() {
    return new Chart('polarChartOrientation', {
      type: 'polarArea',
    data: {
     labels: ['Science', 'Linguistique', 'Art', 'Sport'],
     datasets: [{
        
         data: [76, 54, 20, 68],
         backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],

     }]
    },
    options: {
      title:{
          text:"Pourcentage de maîtrise des matières par l'élève",
          display:true
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
     }
    
    });
  }

}
