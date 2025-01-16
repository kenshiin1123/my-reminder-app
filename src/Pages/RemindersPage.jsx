import Cards from "../components/Cards";
import Container from "../components/Container";
import EditReminderDialog from "../components/EditReminderDialog";
import { ToastContainer, Slide } from "react-toastify";
import reminderStore from "../store/reminderStore";
import { useEffect } from "react";
export default function RemindersPage() {
  const { setOpenEditDialog } = reminderStore();

  useEffect(() => {
    // set the dialog to false whenever this page is rendered
    setOpenEditDialog(false);
  }, [setOpenEditDialog]);

  return (
    <Container>
      <Cards />
      <EditReminderDialog />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </Container>
  );
}
