import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  const filterByYear = (newYearFilter) => {
    setYearFilter(newYearFilter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onYearFilterChange={filterByYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
