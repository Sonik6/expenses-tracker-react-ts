import React, { useState } from "react";
import BudgetMonitor from "./BudgetMonitor";
import BudgetForm from "./BudgetForm";
import Modal from "react-bootstrap/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);

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

  const handleBudgetChange = (budget: number) => {
    setBudget(budget);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  //*** Return ***//
  return (
    <div className="main">
      <div className="left">
        <BudgetMonitor budget={budget} totalExpenses={totalExpenses} />
        <button onClick={handleModal}>Set Budget</button>

        <Modal show={showModal} onHide={handleModal} centered>
          <Modal.Header>
            <Modal.Title>Set Budget</Modal.Title>
          </Modal.Header>
          <BudgetForm onSubmit={handleBudgetChange} onClose={handleModal} />
        </Modal>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label>Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder=""
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={1}
            />
            <label>Amount (zł):</label>
          </div>

          <button type="submit" className="btn btn-success">
            Add Expense
          </button>
        </form>
        <details>
          <summary role="button">Expenses</summary>
          {expenses.map((expense, index) => (
            <article key={index}>
              {expense.description}: {expense.amount}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </article>
          ))}
        </details>
      </div>
    </div>
  );
};

export default ExpensesTracker;
