import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(

    // Injeta dependências
    public auth: AngularFireAuth,
    public alert: AlertController,
    private router: Router,
  ) { }

  ngOnInit() { }

  // Faz login do usuário
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      (data) => {

        // Feedback
        this.feedback(data.user);
      }
    )
    .catch();
  }

   // Popup de feedback
   async feedback(user:  any) {

    const alert = await this.alert.create({
      header: `Olá ${user.displayName}!`,
      message: 'Você já pode acessar o conteúdo exclusivo do aplicativo.',
      buttons : [

        // Botão [Ok]
        {
          text: 'Ok',
          handler: () => {

            // Redireciona para   'inicio'
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}