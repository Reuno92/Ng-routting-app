import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
    selector: 'about-page',
    styles: [`
        .profile-card {
            background: #F3F3F3;
            border-radius: 4px;
            padding: 1.725rem;
            text-align: center;
            transition : background ease-in .5s;
        }

        .profile-card:hover {
            background: #dfdfdf;
            transition : background ease-out .5s;
        }

        .profile-card img {
            max-width: 50%;
            margin: 0.825rem auto;
            filter: sepia(100%);
            transition : filter ease-in .3s;
        }

        .profile-card img:hover {
            filter: sepia(0%);
            object-fit: contain;
            transition : filter ease-out .3s;
        }
    `],
    template: `
        <div class="row">
            <div class="col-sm-4" *ngFor="let user of users">
                <div class="profile-card avatar" [routerLink]="['/about', user.username]">
                    <img [src]="user.avatar" class="img-responsive img-circle">
                    <h2>{{ user.name }}</h2>
                    <p><a href="https://twitter.com/{{ user.username }}" target="_blank">@{{user.username}}</a></p>
                </div>
            </div>
        </div>
    `
})

export class AboutComponent implements OnInit {
    users: User[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
    }

}
