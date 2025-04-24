<template>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.category }}: {{ transaction.amount }}
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import { useTransactionStore } from '../stores/useTransactionStore';
  
  const store = useTransactionStore();
  const { transactions } = store;
  </script>