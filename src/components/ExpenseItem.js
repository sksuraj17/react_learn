import "../styles/ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <h2 className=".expense-item__description">{props.title}</h2>
      <div className="expense-item__price">₹{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
