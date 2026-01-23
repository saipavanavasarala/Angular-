import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from "./error/error.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";


const routes: Routes = [
    {path: '', component: StudentComponent},
    {path: 'course-list', component: StudentComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'course-list/:id', component: CourseDetailsComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }