import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  // 3) Atributos

  // API Key obtida de https://newsapi.org/
  private apiKey = 'f6b1d5dc3f4c47c483446e353984603f';

  // Palavra chave para buscas de notícias
  private apiQuery = 'pássaros';

  // Quantas notícias são exibidas (máx. 20 no plano gratuito)
  private apiItens = 10;

  // Endereço da API (Não altere se não souber o que faz)
  private apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;

  // Armazena todas as notícias
  public newsList: any;

  constructor(

    // 2) Injeta dependências
    public httpc: HttpClient
  ) { }

  ngOnInit() {

    
  }

}
