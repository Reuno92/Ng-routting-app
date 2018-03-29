import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
    styles: [`
        img {
            max-width: 20rem;
            margin: 1.125rem auto;
        }
    `],
    template: `
        <div class="jumbotron text-center" *ngIf="user">
            <section class="actionbar container">
                <a (click)="goBack()" class="btn btn-info">Retour</a>
            </section>
            <img [src]="user.avatar" class="img-responsive img-circle" alt="">
            <h1>{{ user.name }}</h1>
            <small><a href="https://twitter.com/{{ user.username }}" target="_blank">@{{ user.username }}</a></small>
        </div>
    `
})

export class AboutUserComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private service: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.data.forEach((data: { user: User }) =>  this.user = data.user );
    }

    private goBack() {
        this.router.navigate(['/about']);
    }
}
