import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // 3) Atributos
  private itemDoc: AngularFirestoreDocument<any>;
  public item: Observable<any>;
  private id: string;

  constructor(

    // 2) Injeta dependências
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {

    // Obtér o ID do artigo a ser exibido
    this.id = this.route.snapshot.paramMap.get('id');

    // Consulta o banco de dados
    this.itemDoc = afs.doc<any>(`articles/${this.id}`);
    this.item = this.itemDoc.valueChanges();
   }

  ngOnInit() {
  }

}
