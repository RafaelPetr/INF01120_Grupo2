import { Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { QueryOptionsAPI } from "infra/infra"
import { ExpenseI } from "infra/model"
import { ExpenseCard } from "interface/components/expense-card/expense-card.component"
import { useParams } from "react-router-dom"

const defaultExpense: ExpenseI = {
  id: 0,
  title: '',
  amount: 0,
  payer: {
    id: 0,
    name: '',
  },
  participants: [],
}

const ListGroupExpensesPage = () => {

  const { id } = useParams()

  const {
    data: expensesData,
    isLoading,
  } = useQuery(QueryOptionsAPI.expenseByGroupId(Number(id)))

  if (isLoading || !expensesData) {
    return (
      <Stack px={2.5} py={3} gap={2}>
        <ExpenseCard {...defaultExpense} isWaiting />
        <ExpenseCard {...defaultExpense} isWaiting />
        <ExpenseCard {...defaultExpense} isWaiting />
        <ExpenseCard {...defaultExpense} isWaiting />
        <ExpenseCard {...defaultExpense} isWaiting />
        <ExpenseCard {...defaultExpense} isWaiting />
      </Stack>
    )
  }

  return (
    <Stack px={2.5} py={3} gap={2}>
      {expensesData.map(ex => (
        <ExpenseCard
          key={ex.id}
          {...ex}
        />
      ))}
    </Stack>
  )
}

export default ListGroupExpensesPage