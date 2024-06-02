import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderComponent } from '../shared/forms/add-order/add-order.component';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';
import { User } from '../../auth/shared/models/user.model';
import { UserService } from '../../auth/shared/services/user.service';
import { EditOrderComponent } from '../shared/forms/edit-order/edit-order.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  orders$!: Observable<Order[]>;
  users$!: Observable<User[]>;
  user?: User;

  constructor(
    private dialog: MatDialog,
    private orderService: OrderService,
    private userService: UserService,
  ){} 

  ngOnInit(): void {
    this.userService.CurrentUser.subscribe((user: User) => this.user = user);
    this.orders$ = this.orderService.getOrderByUserId(this.user?.id!);
    this.users$  = this.userService.Users;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddOrderComponent, { 
      width: '520px',
      height: '720px'
    }); 
    dialogRef.afterClosed().subscribe((newOrder: boolean) => {
      
    });
  }

  getListTicketsOrder(idOrder: string) : void {
    let dialogRef = this.dialog.open(EditOrderComponent, { 
      data: {orderId: idOrder},
      width: '520px',
      height: '720px'
    }); 
    dialogRef.afterClosed().subscribe((newOrder: boolean) => {
      
    });
  }

}
