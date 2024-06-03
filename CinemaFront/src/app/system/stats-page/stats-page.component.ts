import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';
import { Observable } from 'rxjs';
import Highcharts from 'highcharts';
import { SeanceService } from '../shared/services/seance.service';
import { DistributorService } from '../shared/services/distributor.service';
import { FilmService } from '../shared/services/film.service';
import { Distributor } from '../shared/models/distributor.model';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.css'
})
export class StatsPageComponent implements OnInit {
  orders: Order[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  constructor(
    private seanceService: SeanceService,
    private distService: DistributorService,
    private filmService: FilmService
  ) {}
  ngOnInit(): void {
    this.seanceService.CountTypeSeances.subscribe((counts: number[]) => { 
      counts;
      this.chartOptions1 = {
        chart: {
          type: 'column'
        },
        xAxis: {    // the 'x' axis or 'category' axis.
            categories: ['Утренний', 'Дневной', 'Вечерний', 'Ночной']
        },
        title: {
            text: 'Количество сеансов разных типов'
        },
        series: [
          { "name": "Число фильмов", "data": [counts[0], counts[1], counts[2], counts[3]] },
        ],
        colors: ['crimson','#000', 'rgb(102,203,22)'],
        tooltip: {
            backgroundColor: '#FCFFC5'
        }
      }
      Highcharts.chart('div-container1', this.chartOptions1)
    });
    this.distService.Distributors.subscribe((distributors: Distributor[])  =>  {
      this.filmService.CountFilmsByDistributor.subscribe((counts: number[])   =>   {
        this.chartOptions2 = {
          chart : {
            plotBorderWidth: null,
            plotShadow: false
         },
         title : {
            text: 'Доля фильмов у каждого дистрибьютера'   
         },
         tooltip : {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         series : [{
          type: 'pie',
          name: 'Browser share',
          data: [
             [distributors[0].company,   counts[0]],
             [distributors[1].company,   counts[1]],
             {
                name: distributors[2].company,
                y: counts[2],
                sliced: true,
                selected: true
             },
             [distributors[3].company,   counts[3]],
             [distributors[4].company,   counts[4]]
          ]
       }]
        }
        Highcharts.chart('div-container2', this.chartOptions2)
      });
    });
  }
  chartOptions1!: any;
  chartOptions2!: any;
}
