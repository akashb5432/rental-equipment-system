import { Injectable } from '@angular/core';
import * as  catalogData from '../mockData/catalog.json';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public branchId: string;
  public locationId: string;
  public category: string;

  constructor() { }

  getCatalogList() {
    return catalogData.data.locations;
  }

  findLocationObject() {
    return this.getCatalogList().find(arrObj => arrObj.dealers_id === this.locationId);
  }

  findBranchObject() {
    return this.findLocationObject().branches.find(arrObj => arrObj.branch_id === this.branchId);
  }

  findCategoryObject(catName: string) {
    return this.findBranchObject().categories.find(arrObj => arrObj.name.toLowerCase() === catName);
  }

  addRemoveSpace(catName: string, remove: boolean) {
    if (remove) {
      return catName.toLowerCase().replace(' ', '-');
    } else {
      return catName.toLowerCase().replace('-', ' ');
    }
  }
}
