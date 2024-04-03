import { matchSorter } from "match-sorter";

export interface DataOptionType {
  id: string;
  label: string;
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
    initialViewState: {
      longitude: -122.437186,
      latitude: 37.759101,
      zoom: 11.5,
      pitch: 0,
      bearing: 0,
    },
    dataUrl: "https://data.sfgov.org/resource/rqzj-sfat.json",
  },
  {
    id: "la-traffic-collision-data-2010-present",
    label: "LA Traffic Collision Data Since 2010",
    initialViewState: {
      longitude: -118.370933,
      latitude: 34.020029,
      zoom: 9.15,
      pitch: 0,
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
