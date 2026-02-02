import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private mobileService: MobileService) { }
  public mobiles = [];
  public headers = ['Mobile', 'Price(Rs)', 'RAM', 'Storage', '', ''];

  // Modal state
  public showModal = false;
  public editMobileData: any = {};

  ngOnInit() {
    this.mobileService.fetchMobiles().subscribe((data) => {
      this.mobiles = data;
    });
  }
  addMobile() {
    this.editMobileData = { name: '', price: 0, RAM: 0, storage: 0 };
    this.showModal = true;
    this.editMobileData.isNew = true; // Flag to indicate new mobile  
  }
  
  editMobile(mobile: any) {
    this.editMobileData = { ...mobile };
    this.showModal = true;
  }

  saveMobile() {
    const index = this.mobiles.findIndex(m => m.name === this.editMobileData.name);
    if (index !== -1) {
      this.mobiles[index] = { ...this.editMobileData };
    } else {
      this.mobiles.push(this.editMobileData);
    }
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
    this.editMobileData = {};
  }

  deleteMobile(mobile: any) {
    const index = this.mobiles.findIndex(m => m.name === mobile.name);
    if (index !== -1) {
      this.mobiles.splice(index, 1);
    }
  }
}