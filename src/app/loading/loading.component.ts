import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }
  
  loadingProgress = 0;
  interval: any;
  
  ngOnInit(): void {
    this.loadingProgress = 0;
    this.interval = setInterval(() => {
      this.loadingProgress += .1;
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
