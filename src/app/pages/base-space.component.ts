
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseSpaceService } from '../common/services/base-space.service';

export abstract class BaseSpaceComponent{
  spaceData$: Observable<any[]> | undefined;
  currentSpace: any;
  activeIndex = 0;

  baseUrl = environment.assetsUrl;

  constructor(private baseService: BaseSpaceService) {}

  initializeData() {
    this.spaceData$ = this.baseService.getSpaceData().pipe(
      tap(spaces => {
        this.setCurrentSpace(spaces[0]);
      })
    )
  }

  setCurrentSpace(space: any, index = 0) {
    this.activeIndex = index;
    this.currentSpace = space;
  }

}
