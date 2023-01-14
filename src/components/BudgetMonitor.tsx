import React from "react";

interface Budget {
  budget: number;
  totalExpenses: number;
}

const BudgetMonitor: React.FC<Budget> = ({ budget, totalExpenses }) => {
  return (
    <div>
      <p>Budget: {budget}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Remaining: {budget - totalExpenses}</p>
    </div>
  );
};

export default BudgetMonitor;
