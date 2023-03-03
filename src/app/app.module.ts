import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from './securite/token.interceptor';
import { Erreur401Interceptor } from './securite/erreur-401-interceptor.interceptor';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AdminpageComponent } from './adminpage/adminpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MentionsComponent,
    FooterComponent,
    ConnexionComponent,
    MenuComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}, {provide: HTTP_INTERCEPTORS, useClass:Erreur401Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
