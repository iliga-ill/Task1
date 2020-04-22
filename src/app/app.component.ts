import{
} from "@angular/core";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Task1';
  Id;
  Name;

  arr = [
    {"ID":0,"Name":1,"Block":true},
    {"ID":1,"Name":2,"Block":true},
    {"ID":2,"Name":3,"Block":true},
    {"ID":3,"Name":4,"Block":true},
    {"ID":4,"Name":5,"Block":true},
    {"ID":5,"Name":6,"Block":true},
    {"ID":6,"Name":7,"Block":true},
    {"ID":7,"Name":8,"Block":true},
    {"ID":8,"Name":9,"Block":true},
    {"ID":9,"Name":10,"Block":true},
  ];

  constructor(){
    if (this.arr[0]["Status"]==null){
      for (let i of this.arr) {
        let St=Math.round(Math.random())==1
        i["Status"]=St;
      }
    }
  }

  addD(){
    let ID:any=false;
    for (let i=0;i<this.arr.length;i++) {
      console.log(this.arr[i].ID+"=="+this.Id);
      if (this.arr[i].ID==this.Id){
        ID=i;
        break;
      }
    }

    if (ID!=false){
      this.arr[ID].Name=this.Name;
      this.arr[ID].Block=true;
    }
    else{
      this.arr.push({"ID":this.Id,"Name":this.Name,"Block":true,"Status":(Math.round(Math.random())==1)});
    }
  }

  removeD(event){
    for (let i=0;i<this.arr.length;i++) {
      //console.log(this.arr[i].ID+"=="+event.target.id);
      if (this.arr[i].ID==event.target.id){
        this.arr[i].Block=false;
        let bufer1=this.arr[i]
        let J;
        for (let j=i;j<this.arr.length-1;j++) {
          this.arr[j]=this.arr[j+1];
          J=j;
        }
        this.arr[this.arr.length-1]=bufer1
        break;
      }
    }

  }

}
