import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployerService} from "../../services/employer.service";
import {NgForm} from "@angular/forms";
import {Employer} from "../../model/Employer";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employers: Employer[] = [];
  @ViewChild('f') form: NgForm;

  constructor(private empService: EmployerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  saveEmployer(f: NgForm) {
    this.empService.save(f.value).subscribe(r => {
      if (r) {
        alert('Employer Saved');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  getAll() {
    this.empService.getAll().subscribe(r => {
      this.employers = r;
    });
  }

  search(id) {
    this.empService.search(id).subscribe((r) => {
      this.form.setValue({
        id: r.id,
        name: r.name,
        address: r.address,
        tp: r.tp
      });
    });
  }

  delete(f) {
    this.empService.delete(f.value.id).subscribe(r => {
      if (r) {
        alert('Employer Removed');
        this.getAll();
        f.reset();
      } else {
        alert('Error');
      }
    });
  }

  select(c:Employer) {
    this.form.setValue({
      id: c.id,
      name: c.name,
      address: c.address,
      tp: c.tp
    });
  }


}
