import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from "../../services/department.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: String[] = [];
  @ViewChild('f') form: NgForm;

  constructor(private dservice: DepartmentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  save(f: NgForm) {
    this.dservice.save(f.value).subscribe(r => {
      if (r) {
        alert('Department Saved');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  getAll() {
    this.dservice.getAll().subscribe(r => {
      this.department = r;
    });
  }

  search(id) {
    this.dservice.search(id).subscribe(r => {
      this.form.setValue(r);
    });
  }

  delete(f) {
    this.dservice.delete(f.value.id).subscribe(r => {
      if (r) {
        alert('Department Removed');
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
