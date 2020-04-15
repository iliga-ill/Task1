import{

} from "@angular/core";
import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends Component {
  title = 'Task1';

  arr = [
    {"ID":0,"Name":1,"Disabled":false,"Block":false},
    {"ID":1,"Name":2,"Disabled":false,"Block":false},
    {"ID":2,"Name":3,"Disabled":false,"Block":false},
    {"ID":3,"Name":4,"Disabled":false,"Block":false},
    {"ID":4,"Name":5,"Disabled":false,"Block":false},
    {"ID":5,"Name":6,"Disabled":false,"Block":false},
    {"ID":6,"Name":7,"Disabled":false,"Block":false},
    {"ID":7,"Name":8,"Disabled":false,"Block":false},
    {"ID":8,"Name":9,"Disabled":false,"Block":false},
    {"ID":9,"Name":10,"Disabled":false,"Block":false},
  ];


  Build() {
    let field = parent.document.getElementById("field");
    this.RandStatus();
    this.clear(field);
    for (let i of this.arr) {
      if (!i.Disabled){
        let newElm = parent.document.createElement('div')
        if (i.Status==true){newElm.setAttribute('class', 'card col-sm-12 col-md-6 col-lg-3 bg-success')}
        else{newElm.setAttribute('class', 'card col-sm-12 col-md-6 col-lg-3 bg-danger w-25')}
        i["Block"] = newElm;
        field.append(newElm)
        //let bodyItem = document.getElementById(${item.id})
        let bodyItem = document.createElement('div')
        bodyItem.setAttribute('class', 'card-body')
        newElm.append(bodyItem)
        //let headerItem = document.getElementById(b${item.id})
        let ID = document.createElement('h5')
        ID.setAttribute("class", 'card-title')
        ID.innerHTML = `ID:${i.ID}`;
        bodyItem.append(ID);
        let Br1 = document.createElement('br');
        bodyItem.append(Br1);
        let Name = document.createElement('a')
        Name.setAttribute("class", 'card-title pl-0 ml-0')
        Name.innerHTML = `Name:${i.Name}`;
        bodyItem.append(Name);
        let Br2 = document.createElement('br');
        bodyItem.append(Br2);
        let Status = document.createElement('a')
        Status.setAttribute("class", 'card-title')
        Status.innerHTML = `Status:<br>${i.Status}`;
        bodyItem.append(Status);
        let Br3 = document.createElement('br');
        bodyItem.append(Br3);
        let Button = document.createElement('div')
        Button.setAttribute("type", 'button')
        Button.setAttribute("ID", `${i.ID}`)
        Button.setAttribute("class", 'btn btn-secondary')
        //Button.setAttribute("(click)", "removeD(event)")
        Button.innerHTML = `off`;
        bodyItem.append(Button);
    }}
  };

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
      this.arr[ID].Disabled=false;
      console.log(this.arr[ID].Name);
      console.log(this.arr[ID].Block);
    }
    else{
      this.arr.push({"ID":Id.value,"Name":Name.value,"Disabled":false,"Block":false,"Status":(Math.round(Math.random())==1)});
    }
  }

  removeD(event){
    let field = parent.document.getElementById("field");
    let id=event.target.id;
    if (id!=""){
      this.arr[id].Disabled=true;
      field.removeChild(this.arr[id].Block);
      this.arr[id].Block=false;
    }
  }

  clear(field){
      for (let i of this.arr) {
        if (i.Disabled==false&&i.Block!=false){
          field.removeChild(i.Block);
        }
      }
  }

  RandStatus(){
    if (this.arr[0]["Status"]==null){
      for (let i of this.arr) {
        i["Status"]=Math.round(Math.random())==1;
      }
    }
  }

}
