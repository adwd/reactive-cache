import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class ReactiveCache<T> {
  private _cache: BehaviorSubject<T>;
  public cache: Observable<T>;
}
