import { setActivePinia, createPinia } from 'pinia';
import { useTransactionStore, type Transaction } from '../useTransactionStore';
import { describe, expect, it, beforeEach } from 'vitest';

describe('useTransactionStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('добавляет новую транзакцию', () => {
    const store = useTransactionStore();
    const transaction: Transaction = { id: 1, amount: 100, category: 'food', type: 'expense' };
    
    store.addTransaction(transaction);
    expect(store.transactions).toContainEqual(transaction);
  });
});