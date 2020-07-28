import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dailog-exp',
  templateUrl: '../html/dailog-exp.component.html',
  styleUrls: ['../css/dailog-exp.component.css']
})
export class DailogExpComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
