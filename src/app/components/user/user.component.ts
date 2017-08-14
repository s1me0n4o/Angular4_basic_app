import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    
  name:string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit:boolean = false;

  constructor(private DataService:DataService) { 
    console.log('constructor ran...');
  }

  ngOnInit() {
      console.log('ngOnit ran...');

      this.name = 'John Snow';
      this.email = 'test@test.com';
      this.age = 42;
      this.address = {
        street: '50 Winterfall,',
        city: 'The North,',
        state: 'The Land of JS'
      }
      this.hobbies = ['Watch GoT', 'Fight with dead walkers', 'Getting allies']
      this.hello = 'hello';

      this.DataService.getPost().subscribe((posts) => {
      //  console.log(posts)
      this.posts = posts;
      });
    }

    onClick(){
      this.name='Jinggle Bells';
      this.hobbies.push('New Hobby');
    }

    addHobby(hobby){
      console.log(hobby);
      this.hobbies.unshift(hobby);
      return false;
    }

    deleteHobby(hobby){
      for (let i = 0; i <this.hobbies.length; i++){
        if(this.hobbies[i] == hobby) {
          this.hobbies.splice(i, 1);
        }
      }
    }

    toggleEdit(){
      this.isEdit = !this.isEdit;
    }

}

interface Address {
    street: string,
    city: string,
    state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userID: number;
}