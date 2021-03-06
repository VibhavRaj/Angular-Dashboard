import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { QuestionRoutingModule } from "./question.routing.module";
import { QuestionComponent } from "./question.component";

@NgModule({
  imports: [QuestionRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [QuestionComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [QuestionComponent],
})
export class QuestionModule {}
