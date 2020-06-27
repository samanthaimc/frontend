import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from "../../services/department.service";
import {TypeService} from "../../services/type.service";
import {NgForm} from "@angular/forms";
import {EmployerService} from "../../services/employer.service";
import {FamilyService} from "../../services/family.service";
import {Family} from "../../model/Family";
import {Department} from "../../model/Department";
import {JType} from "../../model/Type";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  @ViewChild('cusForm') employerForm: NgForm;
  @ViewChild('family') familyForm: NgForm;
  departments: String[] = [];
  types: String[] = [];
  selectedDepartment: Department = new Department();
  selectedJobType: JType = new JType();
  familyMembers: Family[] = [];
  searchedFamily;

  constructor(
    private dservice: DepartmentService,
    private tService: TypeService,
    private empService: EmployerService,
    private fservice: FamilyService
  ) {
  }

  ngOnInit(): void {
    this.loadAllDepartments();
    this.loadAllTypes();
  }

  loadAllDepartments() {
    this.dservice.getAll().subscribe(r => {
      this.departments = r;
    });
  }

  loadAllTypes() {
    this.tService.getAll().subscribe(r => {
      this.types = r;
    });
  }

  searchEmp(id) {
    this.empService.search(id).subscribe((r) => {
      if (r != null) {
        this.employerForm.setValue({
          'id': r.id,
          'name': r.name,
          'address': r.address,
          'tp': r.tp,
        });

        this.familyMembers = r.family;
        this.selectedDepartment = r.department;
        this.selectedJobType = r.jobType;
      }


    }, error => {
      alert(error)
    });
  }

  searchFamily(id) {
    this.fservice.search(id).subscribe((r) => {
      if (r != null) {
        this.familyForm.setValue(r);
        this.searchedFamily = r;
        this.familyMembers.push(r);
      }

    }, error => {
      alert(error)
    });
  }

  save() {
    var employer = this.employerForm.value;
    var ob = {
      ...employer,
      department: this.selectedDepartment,
      jobType: this.selectedJobType,
      family: this.familyMembers
    };
    this.empService.save(ob).subscribe(r => {
      if (r) {
        alert("Employer Updated");
      } else {
        alert("error")
      }
    }, error => {
      alert(error)
    });
  }

  selecteDepartment(d) {
    this.selectedDepartment = d.value;
  }

  selecteJobType(jt) {
    this.selectedJobType = jt.value;
  }

  removeMember(f) {
    this.familyMembers = this.familyMembers.filter((v) => v.id != f.id)

  }

  remove(f) {
    this.empService.delete(f.value.id).subscribe(r => {
      if (r) {
        alert("Eployer and All the Details Removed");
      } else {
        alert("Error");
      }
    }, error => {
      alert(error)
    });

  }

}

