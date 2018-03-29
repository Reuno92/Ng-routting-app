import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    /**
     * Redirection
     * @param : path(chemin), redirectTo:(destination), pathMatch('full', );
     * {path: '', redirectTo: '/about', pathMatch: 'full'}
     *
     * Routing
     * @param : path(chemin), component(componentName);
     */
    {path: '', component: HomeComponent},
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
