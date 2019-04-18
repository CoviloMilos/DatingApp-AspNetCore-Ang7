import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { User } from 'src/app/_models/user';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()  // Provide it also as AuthGuards
export class MemberDetailResolver implements Resolve<User> {


    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

    // Be sure that member's details are loaded correctly else redirect to another page.
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
