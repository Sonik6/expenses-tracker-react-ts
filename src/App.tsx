import { Helmet } from "react-helmet";
import ExpensesTracker from "./components/ExpensesTracker";
import "./style.css";
import icon from "./assets/expenses.png";
const App = () => {
  return (
    <div>
      <Helmet>
        <title>My Expenses Tracker</title>
        <link rel="icon" href={icon} />
      </Helmet>
      <ExpensesTracker />
    </div>
  );
};

export default App;
