import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdemServicoComponent, DialogServico } from './ordem-servico/ordem-servico.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClienteService } from './services/cliente.service';
import { ServicoService } from './services/servico.service';
import { OrdemServicoService } from './services/ordem-servico.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NgxMaskModule, IConfig } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    OrdemServicoComponent,
    DialogServico
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule
  ],
  entryComponents: [
    DialogServico
  ],
  providers: [
    ClienteService,
    ServicoService,
    OrdemServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
