export interface CreateRevenue {
  imageUrl?: string;
  title: string;
  description: string;
  presentation: string;
  userId: string;
  preparationInformation: {
    preparation: number;
    cooking: number;
    total: number;
  };
  typeRevenue: string;
  category: string;
  income: {
    quantity: number;
    type: string;
  };
  calories: number;
  methodPreparation: string;
  ingredients: string;
  createAt?: Date;
  updateAt?: Date;
  userId: string;
}

export interface GetRevenue {
  slug: string;
  userId: string | null;
  imageUrl: string;
  title: string;
  description: string;
  presentation: string;
  userId: string;
  preparation: number;
  cooking: number;
  total: number;
  category: string;
  incomeQuantity: number;
  incomeType: string;
  calories: number;
  typeRevenue: string;

  methodPreparation: string;
  ingredients: string;
  createAt?: Date;
  updateAt?: Date;
  userId: string;
  incomeQuantity: string;
  incomeType: string;
}
export interface RevenueView {
  revenue: GetRevenue[];
}

export interface User {
  id: string;
  avatarUrl: string;
  name: string;
  function: string;
  email: string;
}
