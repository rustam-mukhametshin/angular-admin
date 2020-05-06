import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill-v2';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})

export class SharedModule {

}
