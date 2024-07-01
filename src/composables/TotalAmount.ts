const totalAmount = (expenses: any[]) =>
{

    return{
        'totalExpenses':expenses.filter(expense => expense.status == 1).reduce((sum =0,expense) => sum + expense.amount,0),
        'totalIncome':expenses.filter(expense => expense.status == 0).reduce((sum =0,expense) => sum + expense.amount,0),
        'TotalGroceries':0
    }
}

export default totalAmount;