import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DailogExpComponent} from '../component/dailog-exp.component';

export interface PeriodicElement {
  firstName: string;
  position: number;
  email: string;
  lastName: string;
  address:string;
  state:string;
  city:string;
  country:string;
  action:string;
  t:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, firstName: 'Hydrogen', lastName: 'Oxigen', email:'ram@gmail.com',address:'skadkjhasdflkj',action:'Edit Delete'},
];


@Component({
  selector: 'app-user-curd',
  templateUrl: '../html/user-curd.component.html',
  styleUrls: ['../css/user-curd.component.css']
})
export class UserCurdComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email','address','action'];
  dataSource = ELEMENT_DATA;

  constructor(public dailog:MatDialog) { }

  ngOnInit(): void {
  }

  openDailog(){
    this.dailog.open(DailogExpComponent);
  }


}
