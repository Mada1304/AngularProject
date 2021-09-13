import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getChannels():Observable<any>{
    const API_KEY = "AIzaSyDtOJ9xeN8tiAVucwpdGJi5SBIKHzj0_bM";
    const url ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=any&type=video&key="+API_KEY+"&maxResults=1";
  return this.http.get<any>(url);
  }
}
