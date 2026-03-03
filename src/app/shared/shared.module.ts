import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]

})
export class SharedModule { }
