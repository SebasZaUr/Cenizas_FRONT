import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WaitRoomComponent } from './components/wait-room/wait-room.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

//colocar aqui las routas de navegación
const routes: Routes = [
  {path: "", component:HomeComponent, pathMatch: 'full' },
  {path: "buscar-sala/:id", component:SearchComponent},
  {path: "sala-espera",component:WaitRoomComponent},
  {path: "**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
