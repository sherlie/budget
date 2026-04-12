export interface SeedCategory {
  name: string;
  color: string;
}

export interface SeedTransaction {
  categoryName: string;
  name: string | null;
  amount: number;
  daysAgo: number;
}

export const SEED_CATEGORIES: SeedCategory[] = [
  { name: 'Groceries', color: '#4CAF50' },
  { name: 'Dining Out', color: '#FF9800' },
  { name: 'Transport', color: '#2196F3' },
  { name: 'Entertainment', color: '#9C27B0' },
  { name: 'Utilities', color: '#607D8B' },
  { name: 'Health', color: '#F44336' },
  { name: 'Shopping', color: '#E91E63' },
  { name: 'Income', color: '#00BCD4' },
];

export const SEED_TRANSACTIONS: SeedTransaction[] = [
  // Income
  { categoryName: 'Income', name: 'Monthly salary', amount: 3800.00, daysAgo: 2 },
  { categoryName: 'Income', name: 'Monthly salary', amount: 3800.00, daysAgo: 32 },
  { categoryName: 'Income', name: 'Monthly salary', amount: 3800.00, daysAgo: 62 },
  { categoryName: 'Income', name: 'Freelance project', amount: 650.00, daysAgo: 18 },

  // Groceries
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 87.50, daysAgo: 3 },
  { categoryName: 'Groceries', name: null, amount: 23.40, daysAgo: 5 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 92.10, daysAgo: 10 },
  { categoryName: 'Groceries', name: null, amount: 14.80, daysAgo: 12 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 78.30, daysAgo: 17 },
  { categoryName: 'Groceries', name: 'Farmers market', amount: 35.60, daysAgo: 19 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 101.20, daysAgo: 24 },
  { categoryName: 'Groceries', name: null, amount: 19.90, daysAgo: 27 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 83.70, daysAgo: 31 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 95.40, daysAgo: 38 },
  { categoryName: 'Groceries', name: 'Farmers market', amount: 42.10, daysAgo: 40 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 88.60, daysAgo: 45 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 76.30, daysAgo: 52 },
  { categoryName: 'Groceries', name: null, amount: 31.20, daysAgo: 55 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 90.80, daysAgo: 59 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 84.50, daysAgo: 66 },
  { categoryName: 'Groceries', name: 'Farmers market', amount: 29.70, daysAgo: 68 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 97.30, daysAgo: 73 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 81.90, daysAgo: 80 },
  { categoryName: 'Groceries', name: null, amount: 16.50, daysAgo: 85 },
  { categoryName: 'Groceries', name: 'Weekly groceries', amount: 93.20, daysAgo: 87 },

  // Dining Out
  { categoryName: 'Dining Out', name: 'Lunch with colleagues', amount: 18.50, daysAgo: 1 },
  { categoryName: 'Dining Out', name: 'Dinner', amount: 46.80, daysAgo: 4 },
  { categoryName: 'Dining Out', name: null, amount: 12.30, daysAgo: 7 },
  { categoryName: 'Dining Out', name: 'Birthday dinner', amount: 89.40, daysAgo: 9 },
  { categoryName: 'Dining Out', name: 'Lunch', amount: 15.60, daysAgo: 14 },
  { categoryName: 'Dining Out', name: 'Coffee', amount: 5.40, daysAgo: 15 },
  { categoryName: 'Dining Out', name: 'Dinner', amount: 52.10, daysAgo: 21 },
  { categoryName: 'Dining Out', name: 'Lunch', amount: 14.90, daysAgo: 28 },
  { categoryName: 'Dining Out', name: 'Dinner with friends', amount: 38.70, daysAgo: 35 },
  { categoryName: 'Dining Out', name: null, amount: 9.80, daysAgo: 41 },
  { categoryName: 'Dining Out', name: 'Dinner', amount: 44.20, daysAgo: 48 },
  { categoryName: 'Dining Out', name: 'Lunch', amount: 16.30, daysAgo: 56 },
  { categoryName: 'Dining Out', name: 'Dinner', amount: 61.50, daysAgo: 63 },
  { categoryName: 'Dining Out', name: 'Lunch with colleagues', amount: 22.80, daysAgo: 70 },
  { categoryName: 'Dining Out', name: 'Dinner', amount: 49.30, daysAgo: 77 },
  { categoryName: 'Dining Out', name: null, amount: 13.60, daysAgo: 84 },

  // Transport
  { categoryName: 'Transport', name: 'Monthly transit pass', amount: 68.00, daysAgo: 2 },
  { categoryName: 'Transport', name: 'Taxi', amount: 14.50, daysAgo: 6 },
  { categoryName: 'Transport', name: 'Gas', amount: 55.30, daysAgo: 11 },
  { categoryName: 'Transport', name: 'Parking', amount: 8.00, daysAgo: 13 },
  { categoryName: 'Transport', name: 'Taxi', amount: 11.20, daysAgo: 20 },
  { categoryName: 'Transport', name: 'Monthly transit pass', amount: 68.00, daysAgo: 33 },
  { categoryName: 'Transport', name: 'Gas', amount: 61.40, daysAgo: 37 },
  { categoryName: 'Transport', name: 'Taxi', amount: 18.90, daysAgo: 43 },
  { categoryName: 'Transport', name: 'Monthly transit pass', amount: 68.00, daysAgo: 63 },
  { categoryName: 'Transport', name: 'Gas', amount: 48.70, daysAgo: 67 },
  { categoryName: 'Transport', name: 'Parking', amount: 12.00, daysAgo: 72 },

  // Entertainment
  { categoryName: 'Entertainment', name: 'Cinema', amount: 24.00, daysAgo: 8 },
  { categoryName: 'Entertainment', name: 'Streaming subscription', amount: 15.99, daysAgo: 10 },
  { categoryName: 'Entertainment', name: 'Concert tickets', amount: 75.00, daysAgo: 16 },
  { categoryName: 'Entertainment', name: 'Book', amount: 18.50, daysAgo: 22 },
  { categoryName: 'Entertainment', name: 'Streaming subscription', amount: 15.99, daysAgo: 40 },
  { categoryName: 'Entertainment', name: 'Cinema', amount: 22.00, daysAgo: 44 },
  { categoryName: 'Entertainment', name: 'Museum', amount: 14.00, daysAgo: 50 },
  { categoryName: 'Entertainment', name: 'Streaming subscription', amount: 15.99, daysAgo: 70 },
  { categoryName: 'Entertainment', name: 'Cinema', amount: 24.00, daysAgo: 74 },

  // Utilities
  { categoryName: 'Utilities', name: 'Electricity bill', amount: 82.40, daysAgo: 5 },
  { categoryName: 'Utilities', name: 'Internet', amount: 39.99, daysAgo: 5 },
  { categoryName: 'Utilities', name: 'Phone plan', amount: 29.99, daysAgo: 5 },
  { categoryName: 'Utilities', name: 'Electricity bill', amount: 76.10, daysAgo: 35 },
  { categoryName: 'Utilities', name: 'Internet', amount: 39.99, daysAgo: 35 },
  { categoryName: 'Utilities', name: 'Phone plan', amount: 29.99, daysAgo: 35 },
  { categoryName: 'Utilities', name: 'Electricity bill', amount: 91.20, daysAgo: 65 },
  { categoryName: 'Utilities', name: 'Internet', amount: 39.99, daysAgo: 65 },
  { categoryName: 'Utilities', name: 'Phone plan', amount: 29.99, daysAgo: 65 },

  // Health
  { categoryName: 'Health', name: 'Gym membership', amount: 45.00, daysAgo: 3 },
  { categoryName: 'Health', name: 'Pharmacy', amount: 22.80, daysAgo: 15 },
  { categoryName: 'Health', name: 'Doctor visit', amount: 60.00, daysAgo: 23 },
  { categoryName: 'Health', name: 'Gym membership', amount: 45.00, daysAgo: 33 },
  { categoryName: 'Health', name: 'Vitamins', amount: 31.50, daysAgo: 46 },
  { categoryName: 'Health', name: 'Gym membership', amount: 45.00, daysAgo: 63 },
  { categoryName: 'Health', name: 'Dentist', amount: 95.00, daysAgo: 71 },
  { categoryName: 'Health', name: 'Pharmacy', amount: 18.40, daysAgo: 79 },

  // Shopping
  { categoryName: 'Shopping', name: 'Clothes', amount: 134.50, daysAgo: 9 },
  { categoryName: 'Shopping', name: 'Household items', amount: 67.30, daysAgo: 26 },
  { categoryName: 'Shopping', name: 'Electronics', amount: 249.00, daysAgo: 39 },
  { categoryName: 'Shopping', name: 'Clothes', amount: 89.90, daysAgo: 54 },
  { categoryName: 'Shopping', name: 'Household items', amount: 43.60, daysAgo: 61 },
  { categoryName: 'Shopping', name: 'Gift', amount: 55.00, daysAgo: 76 },
  { categoryName: 'Shopping', name: 'Clothes', amount: 112.40, daysAgo: 83 },
];
