import { useState } from "react";
import ModalForm from "./assets/components/ModalForm";
import Navbar from "./assets/components/Navbar";
import TableList from "./assets/components/TableList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staletime: 0,
      },
    },
  });

  const handleOpen = (mode) => {
    setIsOpened(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("Add");
    } else console.log("edit");
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar onClick={() => handleOpen("add")} />
        <TableList onUpdate={() => handleOpen("edit")} />
        <ModalForm
          mode={modalMode}
          isOpened={isOpened}
          onClose={() => setIsOpened(false)}
        />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
