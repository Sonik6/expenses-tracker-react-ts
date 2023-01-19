import React from "react";

interface Budget {
  budget: number;
  totalExpenses: number;
}

const BudgetMonitor: React.FC<Budget> = ({ budget, totalExpenses }) => {
  return (
    <div>
      <p className="h2">Budget: {budget}zł</p>
      <p className="h2">Total Expenses: {totalExpenses}zł</p>
      <p className="h2">Remaining: {budget - totalExpenses}zł</p>
    </div>
  );
};

export default BudgetMonitor;
