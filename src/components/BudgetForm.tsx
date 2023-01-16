import React, { useState } from "react";

interface BudgetFormProps {
  onClose: () => void;
  onSubmit: (budget: number) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit, onClose }) => {
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(budget);
    setBudget(0);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="">
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
