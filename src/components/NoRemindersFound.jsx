import { Link } from "react-router-dom";

export default function NoRemindersFound() {
  return (
    <div className="noRemindersFound">
      <h1>No reminders found.</h1>
      <Link to={"/reminders/new"}>
        <button>Add a Reminder.</button>
      </Link>
    </div>
  );
}
