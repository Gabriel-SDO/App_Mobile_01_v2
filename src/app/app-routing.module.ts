import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Define a página incial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Página inicial
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  // Página de notícias
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },

  // Página de contatos
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },

  // Página sobre
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },

  // Página view qua exibe um artigo completo
  {
    path: 'view/:id',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },

  //Página de visualização de artigo completo
  {
    path: 'aboutview/:id',
    loadChildren: () =>
      import('./pages/aboutview/aboutview.module').then(
        (m) => m.AboutviewPageModule
      ),
  },

  //configurações do usuario
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./user/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },


  // Página exibida quando a rota está errada
  // DEVE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  }

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
