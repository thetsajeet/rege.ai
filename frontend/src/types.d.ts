type Experience = {
  role: string;
  duration: string;
  organization: string;
  notes: string[];
  location: string;
};

type Project = {
  title: string;
  duration: string;
  notes: string[];
  refs: [
    {
      label: string;
      url: string;
    }
  ];
};
