import {Component, OnInit, ViewChild} from '@angular/core';
import {TypeService} from "../../services/type.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: String[] = [];
  @ViewChild('f') form: NgForm;

  constructor(private tservice:TypeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  save(f: NgForm) {
    this.tservice.save(f.value).subscribe(r => {
      if (r) {
        alert('Job Type Saved');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  getAll() {
    this.tservice.getAll().subscribe(r => {
      this.types = r;
    });
  }

  search(id) {
    this.tservice.search(id).subscribe(r => {
      this.form.setValue(r);
    });
  }

  delete(f) {
    this.tservice.delete(f.value.id).subscribe(r => {
      if (r) {
        alert('Job Type Removed');
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

}
