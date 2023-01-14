import React, { useState } from "react";
import BudgetMonitor from "./BudgetMonitor";

interface Expense {
  description: string;
  amount: number;
}

const ExpensesTracker: React.FC = () => {
  //*** Variables ***//
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [budget, setBudget] = useState(0);

  // *** Functions ***//
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExpenses([...expenses, { description, amount }]);
    setDescription("");
    setAmount(0);
  };

  const handleDelete = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  //*** Return ***//
  return (
    <div className="bg-white p-4 m-24 flex flex-col">
      <form className="mb-4" onSubmit={handleBudgetChange}>
        <label className="block mb-2 ">
          <span className="text-gray-700 text-2xl p-2">Budget:</span>
          <input
            className="border border-gray-400 p-2 w-1/3"
            type="number"
            onChange={handleBudgetChange}
            value={budget}
          />
        </label>
      </form>
      <BudgetMonitor budget={budget} totalExpenses={totalExpenses} />

      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            className="border border-gray-400 p-2 w-1/3"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span className="text-gray-700">Amount:</span>
          <input
            className="border border-gray-400 p-2 w-1/3"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <>
            <li key={index}>
              {expense.description}: {expense.amount}
            </li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesTracker;
