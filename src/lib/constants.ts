export const REFERENCES = [
  {
    id: 1,
    sourceName: "GetDX (2025)",
    url: "https://newsletter.getdx.com/p/ai-cuts-developer-onboarding-time-in-half"
  },
  {
    id: 2,
    sourceName: "Document360 (2026)",
    url: "https://document360.com/blog/developer-onboarding-best-practices/"
  },
  {
    id: 3,
    sourceName: "Click Boarding (2021)",
    url: "https://www.clickboarding.com/automation-efficiency/18-jaw-dropping-onboarding-stats-you-need-to-know/"
  },
  {
    id: 4,
    sourceName: "Full Scale (2025)",
    url: "https://fullscale.io/blog/fast-developer-onboarding-framework/"
  },
  {
    id: 5,
    sourceName: "Axify (2025)",
    url: "https://axify.io/blog/developer-productivity-metrics"
  },
  {
    id: 6,
    sourceName: "Jellyfish (2025)",
    url: "https://jellyfish.co/library/developer-productivity/"
  },
  {
    id: 7,
    sourceName: "Jellyfish (2025)",
    url: "https://jellyfish.co/blog/how-to-measure-developer-productivity/"
  },
  {
    id: 8,
    sourceName: "Devsu (2025)",
    url: "https://devsu.com/blog/navigating-software-developer-turnover-challenges"
  }
];

export const getRef = (id: number) => REFERENCES.find(r => r.id === id);
