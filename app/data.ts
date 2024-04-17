import { matchSorter } from "match-sorter";

export interface DataOptionType {
  id: string;
  label: string;
  description: string;
  referenceUrl: string;
  initialViewState: {
    longitude: number;
    latitude: number;
    zoom: number;
    pitch?: number;
    bearing?: number;
  };
  dataUrl: string;
}

const DATASET: DataOptionType[] = [
  {
    id: "sf-mobile-food-permit-data",
    label: "SF Mobile Food Permit Data",
    description: "Mobile Food Facility Permits in the city of San Francisco.",
    referenceUrl:
      "https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/about_data",
    initialViewState: {
      longitude: -122.437186,
      latitude: 37.759101,
      zoom: 11.3,
      pitch: 30,
      bearing: 0,
    },
    dataUrl: "https://data.sfgov.org/resource/rqzj-sfat.json",
  },
  {
    id: "la-traffic-collision-data-2010-present",
    label: "LA Traffic Collision Data",
    description:
      "Traffic collision incidents in the City of Los Angeles, dating back to 2010.",
    referenceUrl:
      "https://data.lacity.org/Public-Safety/Traffic-Collision-Data-from-2010-to-Present/d5tf-ez2w/about_data",
    initialViewState: {
      longitude: -118.370933,
      latitude: 33.96,
      zoom: 9.5,
      pitch: 50,
      bearing: 0,
    },
    dataUrl: "https://data.lacity.org/resource/d5tf-ez2w.json",
  },
];

export function getAllData(query?: string | null): DataOptionType[] {
  if (query) {
    return matchSorter(DATASET, query, {
      keys: ["label"],
    });
  }
  return DATASET;
  // if query exisits matching result assigned, if not entire dataset returned
}

export function getData(dataId: string): DataOptionType | undefined {
  return DATASET.find((data) => data.id === dataId);
}
