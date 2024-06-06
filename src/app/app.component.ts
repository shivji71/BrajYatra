import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BrajYatra';

  lat: number = 51.678418;
  lng: number = 7.809007;
  latc: number = 27.49937;
  lngc: number = 77.46198;
  apiKey:any = 'AIzaSyCAqm_FtqzYHcTbPZsIxHzM_BQSQNktjBk'
  crouselImgList:any;
//   imageObject: Array<object> = [{
//     image: 'assets/img/slider/1.jpg',
//     thumbImage: 'assets/img/slider/1_min.jpeg',
//     alt: 'alt of image',
//     title: 'title of image'
// }]
  constructor(public cs: CommonService){}

  ngOnInit(){
    this.cs.getData("/assets/JSON/carousel.json").subscribe(res=>{
      console.log(res);
      this.crouselImgList = res;
      
    })
  }
}
