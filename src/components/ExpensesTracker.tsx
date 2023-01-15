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
    <div className="">
      <BudgetMonitor budget={budget} totalExpenses={totalExpenses} />

      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            className=""
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span className="">Amount:</span>
          <input
            className=""
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
      <button onClick={handleModal}>Set Budget</button>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Set Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BudgetForm onSubmit={handleBudgetChange} onClose={handleModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExpensesTracker;
