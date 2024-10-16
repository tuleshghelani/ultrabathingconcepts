import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BrochureViewerComponent } from './brochure-viewer.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  { path: '', component: BrochureViewerComponent }
];

@NgModule({
  declarations: [BrochureViewerComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxExtendedPdfViewerModule,
    FontAwesomeModule
  ]
})
export class BrochureViewerModule { }
