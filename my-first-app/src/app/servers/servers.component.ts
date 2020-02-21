import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = "" ;
  serverCreated = false;
  i = 0;
  isBigger = false ;
  servers = [];
  constructor() { 

  }

  ngOnInit(): void {
  }


  onCreateServer(){
    this.i++;
    if (this.i > 5){
      this.isBigger = true;
    }
    this.servers.push(this.servers.length + 1);
}

}
