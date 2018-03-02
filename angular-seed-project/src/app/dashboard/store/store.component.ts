import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  template:`<ng2-smart-table [settings]="settings" 
                              [source] = "Products" 
                              (editConfirm)="UpdateDatabase($event)" 
                              (createConfirm)="InsertIntoDatabase($event)" 
                              (deleteConfirm)="DeleteFromDatabase($event)">
                              </ng2-smart-table>`,
  selector: 'app-store',
  // templateUrl: './store.component.html',
  // styleUrls: ['./store.component.scss'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  Products;
  private storeService: StoreService;
  settings = {
    edit:{
      comfirmSave: true,
    },
    
    columns: {
      name: {
        title: 'name'
      },
      price: {
        title: 'price'
      },
      createdAt: {
        title: 'createdAt'
      },
      updatedAt: {
        title: 'updatedAt'
      },
      username: {
        title: 'username'
      }
      ,
      componentNo: {
        title: 'componentNo'
      }
    },
    Delete:{
      comfirmDelete: true,
    },
    add:{
      ComfirmSave: true,
    }

  };

  
  constructor() {}

  ngOnInit() {
    this.storeService.getProducts().subscribe(

      (res:any)=>{
        this.Products=res.data;
        res.subscribe();
      }
    )
    }
    UpdateDatabase(event){
      var id = event.data._Id;
      var data = {"name" : event.newData.name,
      "price" : event.newData.price,
      "createdAt" : event.newData.createdAt,
      "updatedAt": event.newData.updatedAt,
      "username": event.newData.username,
      "component": event.newData.componentNo
      };
      this.storeService.updateProduct(id,data).subscribe(
        res => {
          event.confirm.resolve(event.newData);
          })
    }
    
    InsertIntoDatabase(event) {
      var data = {"name" : event.newData.name,
      "price" : event.newData.price,
      "createdAt" : event.newData.createdAt,
      "updatedAt": event.newData.updatedAt,
      "username": event.newData.username,
      "component": event.newData.componentNo
      };
      this.storeService.createProduct(data).subscribe(
        res => {
          event.confirm.resolve(event.newData);
        }
      )
    }
    DeleteFromDatabase(event) {
      var id = event.data._id
          this.storeService.deleteProduct(id).subscribe(
          res => {
            event.confirm.resolve(event.source.Data);
        }
      )
    }
  }