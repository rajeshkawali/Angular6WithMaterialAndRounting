import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { UserSettingComponent } from './dashboard/user-setting/user-setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo :'/user',
    pathMatch : 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {path:'userprofile' ,component:UserProfileComponent},
      {path: 'usersetting' ,component:UserSettingComponent}
    ]
  }
  /*
  {
    path: 'details/:id',
    component: DetailsComponent
  }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

