import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EquipmentCatalogComponent } from './components/equipment-catalog/equipment-catalog.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'equipment-catalog/:locationId/:branchId', component: EquipmentCatalogComponent},
  { path: 'equipment-catalog/:locationId/:branchId/:category', component: EquipmentCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
