interface projects {
  name: string;
  duration: string;
}

interface employee {
  name: string;
  salary: number;
  previousProjects: projects[];
  id: any;
}

export interface company extends employee {
  name: string;
  location: string | number;
}
