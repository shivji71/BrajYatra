import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor(public cs: CommonService){}
  crouselImgList:any;

  ngOnInit(): void {
    this.cs.getData("/assets/JSON/carousel.json").subscribe(res=>{
      console.log(res);
      this.crouselImgList = res;
      
    })
  }

}
