import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data-resolver';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        canActivate: [HomeGuard],
        resolve: {
            userData: UserDataResolver
        },
        children: [
            {
                path: 'distributions',
                loadChildren: () =>
                    import('../pages/distributions/distributions.module').then(m => m.DistributionsPageModule)
            },
            {
                path: 'messages',
                loadChildren: () =>
                    import('../pages/messages/messages.module').then(
                        m => m.MessagesPageModule
                    )
            },
            {
                path: 'lists',
                loadChildren: () =>
                    import('../pages/lists/lists.module').then(
                        m => m.ListsPageModule
                    )
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('../pages/settings/settings.module').then(
                        m => m.SettingsPageModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter { }