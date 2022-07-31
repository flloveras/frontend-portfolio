import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienciaComponent } from './components/experience/edit-experience.component';
import { NewExperienciaComponent } from './components/experience/new-experience.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
{path:'portfolio', component: PortfolioComponent},
{path : 'login', component : LoginComponent},
{path: '', redirectTo:'portfolio', pathMatch: 'full'},

{ path: 'editexp/:id', component: EditExperienciaComponent },
{ path: 'nuevaexp', component: NewExperienciaComponent },
{ path: 'editperso/:id', component: EditAboutmeComponent },
{ path: 'nuevaedu', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  { path: 'nuevoproye', component: NewProjectsComponent },
  { path: 'editproye/:id', component: EditProjectsComponent },
  { path: 'nuevahab', component: NewSkillsComponent },
  { path: 'edithab/:id', component: EditSkillsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
