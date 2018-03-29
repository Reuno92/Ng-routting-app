import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { dashboardRouting } from './dashboard.routing';

import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashBoardUserDetailsComponent } from './users/dashboard-user-details.component';

import { UserService } from '../shared/services/user.service';


@NgModule({
    imports: [
        CommonModule,
        dashboardRouting,
        FormsModule
    ],
    declarations: [
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashBoardUserDetailsComponent,
    ],
    providers: [
        UserService
    ]
})
export class DashboardModule {}
