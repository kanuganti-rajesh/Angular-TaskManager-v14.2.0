import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path:"dashboard",component:DashBoardComponent},
  {path:"about",component:AboutComponent},
  {path:"personaldetails",component:PersonalDetailsComponent},
  {path:"contactdetails",component:ContactDetailsComponent},
  {path:"skills",component:SkillsComponent},
  {path:"workexperience",component:WorkExperienceComponent},
  {path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
