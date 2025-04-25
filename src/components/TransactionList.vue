<template>
  <DataTable :value="transactions">
    <Column field="amount" header="Name"></Column>
    <Column field="category" header="Price"></Column>
    <Column field="type" header="Category"></Column>
  </DataTable>
</template>
  
  <script setup lang="ts">
  import { useTransactionStore } from '../stores/useTransactionStore';
  
  const store = useTransactionStore();
  const { transactions } = store;
  
  </script>