type mapItem = {
  name: string;
  priceInCents: number;
};

const itemMap: Map<number, mapItem> = new Map([
  [1, { priceInCents: 10000, name: "Item 1" }],
  [2, { priceInCents: 20000, name: "Item 2" }],
]);

export default itemMap;
