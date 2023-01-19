import { Helmet } from "react-helmet";
import ExpensesTracker from "./components/ExpensesTracker";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>My Expenses Tracker</title>
      </Helmet>
      <ExpensesTracker />
    </div>
  );
};

export default App;
