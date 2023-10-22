export interface CreateRevenue {
  imageUrl?: string;
  title: string;
  description: string;
  presentation: string;

  preparationInformation: {
    preparation: number;
    cooking: number;
    total: number;
  };

  category: string;
  income: {
    quantity: number;
    type: string;
  };
  calories: number;
  methodPreparation: string;
  ingredients: string;
}
