import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  let expenseSum = 0;
  expenseSum = props.filteredExpenses.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);

  return (
    <div>
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      <div>
        <h2 className="expenses-list__total"> Total: {expenseSum}</h2>
      </div>
    </div>
  );
};

export default ExpensesList;
