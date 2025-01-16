import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReminderAlarm from "./components/ReminderAlarm";
export default function Layout() {
  return (
    <>
      <ReminderAlarm />
      <NavBar />
      <Outlet />
    </>
  );
}
