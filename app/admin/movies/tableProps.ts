interface ITableHeader {
  title: string;
  key: string;
}

export const tableHeaders: ITableHeader[] = [
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Director",
    key: "director",
  },
  {
    title: "Producer",
    key: "producer",
  },
  {
    title: "Distributor",
    key: "distributor",
  },
  {
    title: "Time (in minutes)",
    key: "time",
  },
  {
    title: "Genres",
    key: "genres",
  },
  {
    title: "Status (Showing)",
    key: "nowShowing",
  },
  {
    title: "Actions",
    key: "actions",
  },
];
