import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/glogal";

import { TransactionsProvider } from "./TrasactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] =
    useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTrasactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
