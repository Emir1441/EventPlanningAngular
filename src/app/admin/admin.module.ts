import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthGuard } from "../guards/auth.guard";
import { AddPageComponent } from "./add-page/add-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterListComponent } from "./register-list/register-list.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";


@NgModule({
    declarations: [
        LoginPageComponent,
        AdminLayoutComponent,
        ListPageComponent,
        AddPageComponent,
        EditPageComponent,
        RegisterListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'admin', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                    { path: 'list', component: ListPageComponent, canActivate: [AuthGuard] },
                    { path: 'add', component: AddPageComponent, canActivate: [AuthGuard] },
                    { path: 'event', component: RegisterListComponent, canActivate: [AuthGuard] },
                    { path: 'edit/:eventId', component: EditPageComponent, canActivate: [AuthGuard] },

                ]

            },
            { path: 'admin/login', component: LoginPageComponent }

        ])
    ],
    exports: [RouterModule]
})
export class AdminModule {
}