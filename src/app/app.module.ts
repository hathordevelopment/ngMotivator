import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule, FirebaseAppConfig } from 'angularFire2';
import { AngularFireDatabaseModule } from 'angularFire2/database';

import { AppComponent } from './app.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyC35-3FsUBO3vOviMfLJ5rzTcAv-cXe84Q",
  authDomain: "ngmotivatordb.firebaseapp.com",
  databaseURL: "https://ngmotivatordb.firebaseio.com",
  projectId: "ngmotivatordb",
  storageBucket: "ngmotivatordb.appspot.com",
  messagingSenderId: "297731174004"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
