import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TrasactionTables() {
  useEffect(() => {
    api.get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.500</td>
            <td>Dev</td>
            <td>25/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">R$-12.500</td>
            <td>Dev</td>
            <td>25/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.500</td>
            <td>Dev</td>
            <td>25/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
