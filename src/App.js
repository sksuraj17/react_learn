import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Bike Service",
      amount: 3000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New UHD TV",
      amount: 45000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "New Smart Watch",
      amount: 9800,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Mobile Phone",
      amount: 73000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2 className="heading">My Expense Tracker 📈</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
