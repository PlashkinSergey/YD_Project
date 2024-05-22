import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderComponent } from '../shared/forms/add-order/add-order.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddOrderComponent, { 
      width: '520px',
      height: '100%'
    }); 
    dialogRef.afterClosed().subscribe((newOrder: boolean) => {
      
    });
  }
}
