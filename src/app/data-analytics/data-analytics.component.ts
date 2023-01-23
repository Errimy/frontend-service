import {Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css']
})
export class DataAnalyticsComponent implements  OnInit{

  constructor() {
  }
  ngOnInit() :void{
    this.RenderChart();
  }
  RenderChart(){
    const myChart=new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Client C1',
          data: [12, 19, 3],
          borderColor: '#474747',
          backgroundColor: '#228f74',
          borderWidth: 1,
        },
          {
            label: 'Client C2',
            data: [2, 3, 4],
            borderColor: '#FF6384',
            backgroundColor: '#FFB1C1',
          }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales Chart'
          }
        }
      },
    });
    const myPieChart = new Chart("myPieChart", {
      type: 'pie',
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [2, 3, 4, 3, 5],
            backgroundColor: ['#ff0031','#ec490b','#ffec00','#58d35e','#89CFF0'],
          }
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Pie Chart'
          }
        }
      },
    });

    const myLineChart=new Chart("myLineChart", {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3','Week 4','Week 5','Week 6','Week 7','Week 8'],
        datasets: [{
          label: 'Stylos Bleu',
          data: [12, 19, 5, 13, 11, 16, 14, 18],
          borderColor: '#c71717',
          backgroundColor: '#c71717',
        },
          {
            label: 'Blanco',
            data: [8, 21, 7, 9 , 13, 13, 14, 10],
            borderColor: '#0e7df1',
            backgroundColor: '#0e7df1',
          }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Product Sales Per Week'
          }
        }
      },
    });

  }
}
