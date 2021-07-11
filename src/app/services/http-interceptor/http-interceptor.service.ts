import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { catchError, switchMap, tap } from 'rxjs/operators'
import { AppStateService } from '../app-state/app-state.service'

@Injectable()
export class CustomHttpInterceptor {
  constructor(private appStateService: AppStateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(req).pipe(
      tap(() => this.appStateService.isHavingAsyncProcess$.next(true)),
      switchMap((request) => {
        request = request.clone()
        return next.handle(request)
      }),
      catchError((error) => {
        this.appStateService.isHavingAsyncProcess$.next(false)
        return throwError(error)
      }),
      tap(
        (request: any) =>
          request.status === 200 &&
          this.appStateService.isHavingAsyncProcess$.next(false)
      )
    )
  }
}
