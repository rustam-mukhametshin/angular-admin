import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() delay = 5000;

  public text: string;
  public type = 'success';


  constructor() {
  }

  ngOnInit() {

  }
}
