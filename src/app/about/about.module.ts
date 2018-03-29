import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from '../shared/services/about-resolve.service';
import { AboutUserResolve } from '../shared/services/about-user-resolve.service';

@NgModule({
    imports: [
        CommonModule,
        aboutRouting
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers: [
        UserService,
        AboutUsersResolve,
        AboutUserResolve
    ]
})
export class AboutModule {}
