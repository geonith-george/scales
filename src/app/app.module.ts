import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScaleComponentComponent } from './scale-component/scale-component.component';
import { OptionsComponent } from './scale-components/options/options.component';
import { FretboardComponent } from './scale-components/fretboard/fretboard.component';
import { StringComponent } from './scale-components/string/string.component';
import { FretNumberComponent } from './scale-components/string/fret-number/fret-number.component';
import { ElementColorComponent } from './element-color/element-color.component';
import { FretNoteComponent } from './fret-note/fret-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScaleComponentComponent,
    OptionsComponent,
    FretboardComponent,
    StringComponent,
    FretNumberComponent,
    ElementColorComponent,
    FretNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
