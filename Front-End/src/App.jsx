import { useState } from "react";
import ModalForm from "./assets/components/ModalForm";
import Navbar from "./assets/components/Navbar";
import TableList from "./assets/components/TableList";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [modalMode, setModalMode] = useState("add");

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
    <div>
      <Navbar onClick={() => handleOpen("add")} />
      <TableList onUpdate={() => handleOpen("edit")} />
      <ModalForm
        mode={modalMode}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </div> 
  );
}

export default App;
