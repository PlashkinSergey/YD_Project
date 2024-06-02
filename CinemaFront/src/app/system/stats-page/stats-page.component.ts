import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';
import { Observable } from 'rxjs';
import Highcharts from 'highcharts';
import { Axis } from 'echarts';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.css'
})
export class StatsPageComponent implements OnInit {
  
  orders$!: Observable<Order[]>;
  orders: Order[] = [];

  Highcharts: typeof Highcharts = Highcharts;

   

  chartOptions: Highcharts.Options = {

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      type: 'datetime',
    },
    yAxis:  {
      type:'linear'
    },
    series: [{

      data: [50, 40, 60, 45, 70, 42, 60],

      type: 'line'

    }]

  };

  constructor(
    private orderService: OrderService
  ) {}

  getOrder(): void  {
    this.orderService.Orders.subscribe((o: Order[]) => this.orders  = o);
  }
  
  ngOnInit(): void {
    this.getOrder();

  }
}
