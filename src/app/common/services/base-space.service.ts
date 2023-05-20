import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, combineLatest, map, throwError } from 'rxjs';

export class BaseSpaceService {
  private spaceSelectedAction = new BehaviorSubject<any>(null);
  private _baseUrl: string;

  constructor(private http: HttpClient, baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  changeSelectedData(data: any) {
    this.spaceSelectedAction.next(data);
  }

  getSelectedAction():Observable<any> {
    return this.spaceSelectedAction.asObservable();
  };

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this._baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getData() {
    return combineLatest([
      this.getSelectedAction(),
      this.getList(),
    ]).pipe(
      map(([selectedName, list]) => ({
        selected: selectedName ? list.find(s => s.name === selectedName) : list[0],
        list
      })),
    )
  }

  handleError(err: HttpErrorResponse):Observable<never> {
    const errorMessage = `An error occurred: ${err.error.message}`;
    return throwError(() => errorMessage)
  }
}
