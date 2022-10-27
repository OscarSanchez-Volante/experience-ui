import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treeview-parts',
  templateUrl: './treeview-parts.component.html',
  styleUrls: ['./treeview-parts.component.scss']
})
export class TreeviewPartsComponent implements OnInit{
  listChildChanged = [];
  public currentUrl;
@Input() arr:any;
constructor(private router: Router) { 
}
ngOnInit(){
  this.currentUrl = this.router.url;
}

  checkMinusSquare(item) {
    const count = item.childs.filter(x => x.checked == true).length;
    if (count > 0 && count < item.childs.length) {
      return true;
    } else if (count == 0) {
      return false;
    }
  }

  checkParent(group_i, i) {
    this.arr[group_i].items[i].checked = !this.arr[group_i].items[i].checked;
    if (this.arr[group_i].items[i].checked) {
      this.arr[group_i].items[i].childs.map(x => (x.checked = true));
    } else {
      this.arr[group_i].items[i].childs.map(x => (x.checked = false));
    }
    this.arr[group_i].items[i].childs.forEach(x => {
      if (this.listChildChanged.findIndex(el => el.id == x.id) == -1) {
        this.listChildChanged.push(x);
      }
    });
  }

  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].checked = !this.arr[group_i]
      .items[parent_i].childs[i].checked;
    const count = this.arr[group_i].items[parent_i].childs.filter(
      el => el.checked == true
    ).length;
    if (count == this.arr[group_i].items[parent_i].childs.length) {
      this.arr[group_i].items[parent_i].checked = true;
    } else {
      this.arr[group_i].items[parent_i].checked = false;
    }
    if (this.listChildChanged.findIndex(el => el.id == this.arr[group_i].items[parent_i].childs[i].id) == -1) {
      this.listChildChanged.push(this.arr[group_i].items[parent_i].childs[i]);
    }
  }

  getListChildChanged() {
  }
}
