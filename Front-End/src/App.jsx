import { useState } from "react";
import ModalForm from "./assets/components/ModalForm";
import Navbar from "./assets/components/Navbar";
import TableList from "./assets/components/TableList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [initialData, setInitialData] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staletime: 0,
      },
    },
  });

  const handleOpen = (mode, data = null) => {
    setIsOpened(true);
    setModalMode(mode);
    setInitialData(data);
  };

  const handleSubmit = (formData) => {
    if (modalMode === "add") {
      console.log("Add", formData);
    } else {
      console.log("Edit", formData);
    }
    setIsOpened(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar onClick={() => handleOpen("add")} />
        <TableList onUpdate={(data) => handleOpen("edit", data)} />
        <ModalForm
          mode={modalMode}
          isOpened={isOpened}
          onClose={() => setIsOpened(false)}
          onSubmit={handleSubmit}
          initialData={initialData}
        />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#9db787 ",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
