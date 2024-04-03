export const getPositions = (id: string) => {
  switch (id) {
    case "sf-mobile-food-permit-data":
      return (d: any) => [Number(d.longitude), Number(d.latitude)];
    case "la-traffic-collision-data-2010-present":
      return (d: any) => [
        Number(d.location_1.longitude),
        Number(d.location_1.latitude),
      ];
    default:
      throw new Error(`No data found for ${id}`);
  }
};
