import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { StatMatiereParClassService } from '../services/stat-matiere-par-class.service';
import { Chart } from 'chart.js';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-class-stats',
  templateUrl: './class-stats.component.html',
  styleUrls: ['./class-stats.component.css']
})
export class ClassStatsComponent implements OnInit {

  public selectedClass = '';
  public statMatiereParClass = [];
  public listClass = [];
  public label = [];
  public data = [];
  public years1 = 2008;
  public years2 = 2011;
  BarChart;
  chartEvolutionClass;
  chartEvolutionPromotion;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private statMatiereParClassService: StatMatiereParClassService
              ) {}

  ngOnInit() {
    console.log('test');
    this.statMatiereParClassService.getLisClass().then((response) => {
      this.listClass = response['data'];
    });

    this.statMatiereParClassService.getStatMatiereParClass(1, this.years1, this.years2).then((response) => {
    // tslint:disable-next-line:no-string-literal
    this.statMatiereParClass = response['data'];
    this.setLabel();
    this.setData();
    this.BarChart = this.addChart(this.label, this.data);
    this.chartEvolutionClass = this.addChartEvolutionClass();
    this.chartEvolutionPromotion = this.addChartEvolutionPromotion();
    console.log(this.statMatiereParClass);
    }).catch((error) => {
      console.log(error);
    });
  }

  onChange(classId) {
    this.selectedClass = classId;
    this.statMatiereParClassService.getStatMatiereParClass(Number(classId), this.years1, this.years2).then(async (response) => {
      // tslint:disable-next-line:no-string-literal
      this.statMatiereParClass = response['data'];
      await this.setLabel();
      await this.setData();
      this.BarChart = this.addChart(this.label, this.setData());
      console.log(this.statMatiereParClass);
      }).catch((error) => {
        console.log(error);
      });
  }

  onChangeYears1(value) {
    console.log(value);
    this.years1 = value;
    this.statMatiereParClassService.getStatMatiereParClass(Number(this.selectedClass), this.years1, this.years2).then(async (response) => {
      // tslint:disable-next-line:no-string-literal
      this.statMatiereParClass = response['data'];
      await this.setLabel();
      await this.setData();
      this.BarChart = this.addChart(this.label, this.setData());
      console.log(this.statMatiereParClass);
      }).catch((error) => {
        console.log(error);
      });
  }

  onChangeYears2(value) {
    console.log(value);
    this.years2 = value;
    this.statMatiereParClassService.getStatMatiereParClass(Number(this.selectedClass), this.years1, this.years2).then(async (response) => {
      // tslint:disable-next-line:no-string-literal
      this.statMatiereParClass = response['data'];
      this.BarChart = this.addChart(this.label, this.setData());
      console.log(this.statMatiereParClass);
      }).catch((error) => {
        console.log(error);
      });
  }

  setData() {
    this.data = [];
    for (let i = 0; i < this.statMatiereParClass.length; i++) {
      this.data[i] = this.statMatiereParClass[i].moyenneNote;
    }
    return this.data;
  }

  setLabel() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.statMatiereParClass.length; i++) {
      this.label[i] = this.statMatiereParClass[i].subjectname;
    }
  }

  addChart(label, data) {
    return new Chart('barChart', {
      type: 'bar',
    data: {
     labels: label,
     datasets: [{
         label: 'Notes',
         data: data,
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
         text:"Bar Chart",
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

  addChartEvolutionClass() {
    return new Chart('evolutionClassChart', {
      type: 'line',
    data: {
     labels: ['2008', '2009', '2010', '2011'],
     datasets: [{

            label: 'Physique-Chimie',
            data: [15, 11.5, 12.25, 9.15],
            borderColor : 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            fill : false
          }, {
            label: 'Mathématiques',
            data: [13, 14, 11.45, 8.35],
            borderColor : 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            fill : false
          }, {
            label: 'Français',
            data: [11, 10.5, 14, 12.2],
            borderColor : 'rgb(255, 206, 86)',
            pointBackgroundColor: 'rgb(255, 206, 86)',
            fill : false
          }, {
            label: 'Anglais',
            data: [5.7, 9.25, 8, 11.7],
            borderColor : 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            fill : false
          }, {
            label: 'Dessin',
            data: [17, 16, 15.2, 13.8],
            borderColor : 'rgb(153, 102, 255)',
            pointBackgroundColor: 'rgb(153, 102, 255)',
            fill : false
          }, {
            label: 'EPS',
            data: [14.25, 15.25, 12, 10],
            borderColor : 'rgb(255, 159, 64)',
            pointBackgroundColor: 'rgb(255, 159, 64)',
            fill : false
          }
          
        ]
          
     ,
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

  addChartEvolutionPromotion() {
    return new Chart('evolutionClassPromotion', {
      type: 'line',
    data: {
     labels: ['Classe de 6ème', 'Classe de 5ème', 'Classe de 4ème'],
     datasets: [{

            label: 'Physique-Chimie',
            data: [14, 12.5, 9.15],
            borderColor : 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            fill : false
          }, {
            label: 'Mathématiques',
            data: [10, 8, 8.35],
            borderColor : 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            fill : false
          }, {
            label: 'Français',
            data: [11, 13.5, 12.2],
            borderColor : 'rgb(255, 206, 86)',
            pointBackgroundColor: 'rgb(255, 206, 86)',
            fill : false
          }, {
            label: 'Anglais',
            data: [12, 9.25, 11.7],
            borderColor : 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            fill : false
          }, {
            label: 'Dessin',
            data: [12, 10, 13.8],
            borderColor : 'rgb(153, 102, 255)',
            pointBackgroundColor: 'rgb(153, 102, 255)',
            fill : false
          }, {
            label: 'EPS',
            data: [12, 11, 10],
            borderColor : 'rgb(255, 159, 64)',
            pointBackgroundColor: 'rgb(255, 159, 64)',
            fill : false
          }
          
        ]
          
     ,
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
}
