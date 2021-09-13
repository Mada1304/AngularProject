import { Component } from '@angular/core';
import {YoutubeService} from './services/youtube.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  channels:any
  title = 'AngularProject';
  constructor(private youtube:YoutubeService){ }
    ngOnInit(){

   this.youtube.getChannels().subscribe((data) =>{
    console.log(data)
    this.channels=data.items;
   })


  }

}
