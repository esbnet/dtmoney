import { useEffect, useState } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";

interface Transaction{
  id: number;
  title: String;
  amount: string;
  type: string;
  category: string;
  createAt: string
}

export function TrasactionTables() {
  const [transactions, setTransactions] = useState<Transaction[]> ([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
