import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutview',
  templateUrl: './aboutview.page.html',
  styleUrls: ['./aboutview.page.scss'],
})
export class AboutviewPage implements OnInit {

// 3) Atributos
private itemDoc: AngularFirestoreDocument<any>;
public item: Observable<any>;
private id: string;

constructor(

  // 2) Injeta dependências
  private afs: AngularFirestore,
  private route: ActivatedRoute
) {

  // Obtér o ID do sobre a ser exibido
  this.id = this.route.snapshot.paramMap.get('id');

  // Consulta o banco de dados
  this.itemDoc = afs.doc<any>(`about/${this.id}`);
  this.item = this.itemDoc.valueChanges();
 }

ngOnInit() {
}

}
