import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  private followers = [];  
  constructor(private service: GithubService) { }

  // getFollowers() {
  //   console.log(this.service.getFollowers()); 
  // }
  ngOnInit() {
    this.service.getFollowers()
      .subscribe(response => {
        this.followers = response.json(); 
        console.log(this.followers); 
      }) 
  }

}
