import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
    <div>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label>
            Budget:
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </label>
          <Modal.Footer>
            <button type="submit" className="btn btn-primary">
              Set Budget
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </div>
  );
};

export default BudgetForm;
