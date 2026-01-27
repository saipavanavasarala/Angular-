import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from "./error/error.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseDurationComponent } from "./course-duration/course-duration.component";
import { CourseFeeComponent } from "./course-fee/course-fee.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminAccessGuard } from "./admin-access.guard";


const routes: Routes = [
    { path: '', component: StudentComponent },
    { path: 'admin', component: AdminHomeComponent,  canActivate: [AdminAccessGuard]},
    { path: 'course-list', component: StudentComponent },
    { path: 'profile', component: ProfileComponent },
    {
        path: 'course-list/:id',
        component: CourseDetailsComponent,
        children: [
            { path: 'duration', component: CourseDurationComponent },
            { path: 'fee', component: CourseFeeComponent }
        ]
    },
    {
        path: 'faculty',
        loadChildren: () =>
            import('./faculty/faculty.module').then(m => m.FacultyModule)
    },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }