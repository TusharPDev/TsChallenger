export interface Item {
  id: number;
  name: string;
  quantity: number;
  active: boolean;
}

export function filterItems<T extends Item, K extends keyof T>(items: T[], property: K, value: T[K]): T[] {
  return items.filter(item => item[property] === value);
}



