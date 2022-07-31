import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/experience/experience.component';
import { CookieService } from 'ngx-cookie-service';
import { EditExperienciaComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { NewExperienciaComponent } from './components/experience/new-experience.component';
import { SJProgressBarModule } from 'sj-progress-bar';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditAboutmeComponent,
    EditProjectsComponent,
    EditSkillsComponent,
    NewProjectsComponent,
    NewSkillsComponent,
    NewExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SJProgressBarModule,
  ],
  providers: [
    CookieService,
    ReactiveFormsModule,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
