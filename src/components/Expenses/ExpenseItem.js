import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../styles/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <h2 className=".expense-item__description">{props.title}</h2>
      <div className="expense-item__price">₹{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
