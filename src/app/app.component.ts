import { Component } from '@angular/core';

//importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(

    //Injenta dependĂȘncias
    public auth: AngularFireAuth
  ) {}
}
