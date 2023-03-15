import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { LoginComponent } from '../app/login/login.component';
import { ProductComponent } from '../app/product/product.component';
import { ParentComponent } from '../app/parent/parent.component';
import { ChildComponent } from '../app/child/child.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent  },
  { path: 'parent', component: ParentComponent  },
  { path: 'child', component: ChildComponent  },
  { path: '**', component:HomeComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
