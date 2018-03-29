import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';


@Injectable()
export class AboutUserResolve implements Resolve<UserService> {

    constructor(private service: UserService,
                private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) {
        const username = route.params['username'];

        return this.service.getUser(username).then(user => {
            if (user) {
                return user;
            } else {
                // navigate the user back to the about page
                this.router.navigate(['/about']);
                return false;
            }
        });
    }

}
