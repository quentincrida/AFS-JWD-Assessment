import { Component, OnInit } from '@angular/core';
import * as data from '/home/quentin/Documents/Codeclan/CodeClanRevision/Angular/AFS-JWD-ASSESSMENT/src/assets/mock_data.json';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }
    listData = data;
  ngOnInit(): void {
    console.log(this.listData);
    
  }

}
