/// <reference types="@vitest/browser/context" />
import { render, screen } from '@testing-library/vue';
import TransactionList from 'components/TransactionList.vue';
import { useTransactionStore } from '../useTransactionStore';
import { createPinia } from 'pinia';
import { describe, expect, it } from 'vitest';

describe('TransactionList', () => {
  it('отображает список транзакций', () => {
    const pinia = createPinia();
    const store = useTransactionStore(pinia);
    
    store.transactions = [
      { id: 1, amount: 100, category: 'food', type: 'expense' },
    ];

    render(TransactionList, {
      global: {
        plugins: [pinia],
      },
    });

    expect(screen.getByText(/food/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
});