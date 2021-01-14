import React from 'react';
import {TransactionProvider} from './context/TransactionContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
      <TransactionProvider>
          <AppNavigator />
      </TransactionProvider>
  );
}
