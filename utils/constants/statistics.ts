export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 27,
    label: 'LGAs Served in Imo State'
  },
  {
    value: 6,
    label: 'Ministry Departments'
  },
  {
    value: 9,
    suffix: '+',
    label: 'Completed Projects'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Emergency Response Coordination'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 9,
    label: 'Completed Special Projects'
  },
  {
    value: 6,
    label: 'Active Departments'
  },
  {
    value: 100,
    suffix: '%',
    label: 'Inter-Agency Coordination Success Rate'
  },
  {
    value: 5,
    label: 'Strategic Interventions Ongoing'
  }
];
