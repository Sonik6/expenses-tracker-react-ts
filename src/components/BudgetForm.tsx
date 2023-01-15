import React, { useState } from "react";

interface BudgetFormProps {
  onSubmit: (budget: number) => void;
  onClose: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(budget);
    setBudget(0);
    onclose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Budget:
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </label>
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
