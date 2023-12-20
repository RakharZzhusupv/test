export type TSeason = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
  newHired:TNewHired [];

};

export type TSeasons = {
  winter: TSeason;
  summer: TSeason;
  autumn: TSeason;
  spring: TSeason;
};

export type TNewHired = {
  name: string;
  department: string;
  experience: number;
  exProject: number;
  salary: number;
};
