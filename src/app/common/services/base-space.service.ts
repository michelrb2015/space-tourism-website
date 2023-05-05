import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseSpaceService {
  dataUrl = environment.dataUrl;

  handleError(err: HttpErrorResponse):Observable<never> {
    let errorMessage = `An error occurred: ${err.error.message}`;
    console.log(errorMessage);
    return throwError(() => errorMessage)
  }

  abstract getSpaceData(): Observable<any[]>;
}
