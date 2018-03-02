import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table'

import { StoreRoutingModule } from './store-routing.module';
import { StoreService } from './store.service';
import { StoreComponent } from './store.component';
import { HttpClientModule} from '@angular/common/http'
import { HttpModule} from '@angular/http'
@NgModule({
  imports: [ThemeModule,StoreRoutingModule,Ng2SmartTableModule],
  declarations: [StoreComponent],
  providers: [StoreService]
})
export class StoreModule { 
  
}
