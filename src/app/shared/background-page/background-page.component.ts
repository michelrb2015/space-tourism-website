import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-page',
  templateUrl: './background-page.component.html',
  styleUrls: ['./background-page.component.scss']
})
export class BackgroundPageComponent implements OnInit {

  @Input('desktop') desktopBackground!: string;
  @Input('tablet') tabletBackground!: string;
  @Input('mobile') mobileBackground!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
