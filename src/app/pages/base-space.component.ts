
import { environment } from 'src/environments/environment';
import { BaseSpaceService } from '../common/services/base-space.service';
import { Observable } from 'rxjs';
export class BaseSpaceComponent{
  baseAssetsUrl = environment.assetsUrl;
  data$: Observable<any>;
  activeIndex = 0;

  constructor(private baseService: BaseSpaceService) {
    this.data$ = this.baseService.getData();
  }

  setCurrentData(obj: any, index = 0) {
    this.activeIndex = index;
    this.baseService.changeSelectedData(obj.name)
  }

}
