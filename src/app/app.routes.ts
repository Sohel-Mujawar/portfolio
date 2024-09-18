import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    {path : '' , component: HomepageComponent},
    {path : 'contact' , component: ContactComponent},
    {path : 'resume' , component: ResumeComponent},
    {path : 'projects' , component: ProjectsComponent},
    {path : 'info', component:InfoComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}