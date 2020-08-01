import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-equipment-catalog',
  templateUrl: './equipment-catalog.component.html',
  styleUrls: ['./equipment-catalog.component.css']
})
export class EquipmentCatalogComponent implements OnInit {
  public equipmentList: any;
  constructor(
    private route: ActivatedRoute,
    public catalogService: CatalogService
    ) {
    this.route.paramMap.subscribe( paramMap => {
      this.catalogService.locationId = paramMap.get('locationId');
      this.catalogService.branchId = paramMap.get('branchId');
      this.catalogService.category = paramMap.get('category');
      if (this.catalogService.category) {
        this.getSubCategoryData();
      } else {
        this.equipmentList = this.catalogService.findBranchObject().categories;

      }
    });
   }

  ngOnInit(): void {
  }

  getSubCategoryData() {
    this.equipmentList = this.catalogService.findCategoryObject(
      this.catalogService.addRemoveSpace(
        this.catalogService.category, false
      )).subcategories.map(arrObj => {
      return {
        name: arrObj.name,
        image: `subcategory/${arrObj.image}`
      };
    });
  }

}
