import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AppStateService {
  isHavingAsyncProcess$ = new BehaviorSubject<boolean>(false)

  constructor() {}
}
