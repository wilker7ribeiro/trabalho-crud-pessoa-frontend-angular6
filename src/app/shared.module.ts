import { NgModule } from '@angular/core';
import { MatTableModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule,MatDatepickerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
  ],
  imports: [
    MatTableModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class SharedModule { }