import React from "react";

interface Budget {
  budget: number;
  totalExpenses: number;
}

const BudgetMonitor: React.FC<Budget> = ({ budget, totalExpenses }) => {
  return (
    <div className="flex flex-col text-4xl justify-center items-center p-5 bg-slate-200 text-red-500 font-bold">
      <p className="pb-4 text-green-500 w-80 text-left">Budget: {budget}</p>
      <p className="pb-4 w-80 text-left">Total Expenses: {totalExpenses}</p>
      <p className="pb-4 text-yellow-500 w-80 text-left">Remaining: {budget - totalExpenses}</p>
    </div>
  );
};

export default BudgetMonitor;
