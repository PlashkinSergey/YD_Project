import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderComponent } from '../shared/forms/add-order/add-order.component';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  orders$!: Observable<Order>;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddOrderComponent, { 
      width: '520px',
      height: '720px'
    }); 
    dialogRef.afterClosed().subscribe((newOrder: boolean) => {
      
    });
  }
}
