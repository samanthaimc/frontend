import {Component, OnInit, ViewChild} from '@angular/core';
import {FamilyService} from "../../services/family.service";
import {NgForm} from "@angular/forms";
import {Family} from "../../model/Family";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  family: Family[] = [];
  @ViewChild('f') form: NgForm;

  constructor(private fservice: FamilyService) {
  }

  save(f: NgForm) {
    this.fservice.save(f.value).subscribe(r => {
      if (r) {
        alert('Member Saved');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  getAll() {
    this.fservice.getAll().subscribe(r => {
      this.family = r;
    });
  }

  search(id) {
    this.fservice.search(id).subscribe(r => {
      this.form.setValue(r);
    });
  }

  delete(f) {
    this.fservice.delete(f.value.id).subscribe(r => {
      if (r) {
        alert('Member Removed');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  select(c) {
    this.form.setValue(c);
  }

  ngOnInit(): void {
    this.getAll();
  }

}
