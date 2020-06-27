import {Family} from "./Family";
import {Department} from "./Department";
import {JType} from "./Type";

export class Employer {
  id: string;
  name: string;
  address: string;
  tp: string;
  family: Family[] = [];
  department: Department = new Department();
  jobType: JType = new JType();
}
