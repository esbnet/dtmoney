import { Summary } from "../Summary";
import { TrasactionTables } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionTables />
    </Container>
  );
}
