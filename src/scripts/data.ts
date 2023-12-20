import { TSeasons } from "./types";
import { TNewHired } from "./types";

export let seasons: TSeasons = {
  winter: {
    closeProjects: 12,
    income: 600000,
    hired: 3,
    dismissed: 15,
    newProjects: 15,
    newHired: [
      {
        name: "John",
        department: "IT",
        experience: 2,
        salary: 30000,
        exProject: 4,
      },
      {
        name: "Alice",
        department: "HR",
        experience: 3,
        salary: 20000,
        exProject: 2,
      },
      {
        name: "Niki",
        department: "AR",
        experience: 4,
        salary: 12000,
        exProject: 4,
      },
    ],
  },
  spring: {
    closeProjects: 10,
    income: 750000,
    hired: 2,
    dismissed: 10,
    newProjects: 10,
    newHired: [
      {
        name: "Bob",
        department: "HR",
        experience: 3,
        salary: 23000,
        exProject: 1,
      },
      {
        name: "Sasha",
        department: "IT",
        experience: 5,
        salary: 35000,
        exProject: 3,
      },
    ],
  },
  summer: {
    closeProjects: 10,
    income: 550000,
    hired: 5,
    dismissed: 14,
    newProjects: 13,
    newHired: [
      {
        name: "Mark",
        department: "HR",
        experience: 1,
        salary: 12000,
        exProject: 3,
      },
      {
        name: "Nas",
        department: "HR",
        experience: 5,
        salary: 100000,
        exProject: 7,
      },
      {
        name: "Marshel",
        department: "AR",
        experience: 2,
        salary: 100000,
        exProject: 3,
      },
      {
        name: "Piter",
        department: "IT",
        experience: 8,
        salary: 500000,
        exProject: 3,
      },
      {
        name: "Sam",
        department: "IT",
        experience: 2,
        salary: 50000,
        exProject: 2,
      },
    ],
  },
  autumn: {
    closeProjects: 21,
    income: 900000,
    hired: 4,
    dismissed: 11,
    newProjects: 13,
    newHired: [
      {
        name: "Emma",
        department: "AR",
        experience: 2,
        salary: 120000,
        exProject: 3,
      },
      {
        name: "Mia",
        department: "HR",
        experience: 5,
        salary: 180000,
        exProject: 3,
      },
      {
        name: "Marta",
        department: "AR",
        experience: 2,
        salary: 108000,
        exProject: 5,
      },
      {
        name: "Nora",
        department: "IT",
        experience: 2,
        salary: 100000,
        exProject: 8,
      },
    ],
  },
};
