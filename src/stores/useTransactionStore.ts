import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export interface Transaction {
  id: number;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

export const useTransactionStore = defineStore('transactions',() => {
  const transactions: Ref<Transaction[]> = ref([{ id: 1, amount: 100, category: 'food', type: 'expense' }]);
  const addTransaction = (transaction: Transaction) => transactions.value.push(transaction)

  return { transactions, addTransaction }
});