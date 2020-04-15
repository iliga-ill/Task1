import{

} from "@angular/core";
import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task1';

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
        i["Status"]=Math.round(Math.random())==1;
      }
    }
  }

  addD(event){
    let Id = parent.document.getElementById("input1");
    let Name = parent.document.getElementById("input2");
    let ID=false;
    for (let i=0;i<this.arr.length;i++) {
      console.log(this.arr[i].ID+"=="+Id.value);
      if (this.arr[i].ID==Id.value){
        ID=i;
        break;
      }
    }
    console.log(ID);
    if (ID!=false){
      this.arr[ID].Name=Name.value;
      this.arr[ID].Block=true;
      console.log(this.arr[ID].Name);
      console.log(this.arr[ID].Block);
    }
    else{
      this.arr.push({"ID":Id.value,"Name":Name.value,"Block":true,"Status":(Math.round(Math.random())==1)});
    }
  }

  removeD(event){
    console.log(event);
    console.log(event.toElement);
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
        console.log(this.arr[J].ID);
        this.arr[this.arr.length-1]=bufer1
        console.log(this.arr);
        break;
      }
    }

  }

}
