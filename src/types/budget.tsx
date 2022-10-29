// all money in pennies

export enum Category {
  Rent = "Rent",
  Utilites = "Utilites",
  Food = "Food",
  Transport = "Transport",
  Leisure = "Leisure",
  Misc = "Misc",
}

export interface Purchase {
  category: Category,
  cost: number,
}

export interface UserData {
  income: number,
  costByCategory: Record<Category, number>,
  purchases: Purchase[],
}
