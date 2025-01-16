import { differenceInCalendarDays, differenceInSeconds } from "date-fns";

function calculateTimeLeft(goalTime) {
  const startTime = new Date();
  const totalSeconds = differenceInSeconds(goalTime, startTime);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = differenceInCalendarDays(goalTime, startTime);

  const remainingSeconds = totalSeconds % 60;
  const remainingMinutes = totalMinutes % 60;
  const remainingHours = totalHours % 24;

  const components = [];

  if (totalDays > 0)
    components.push(`${totalDays} day${totalDays > 1 ? "s" : ""}`);
  if (remainingHours > 0)
    components.push(`${remainingHours} hour${remainingHours > 1 ? "s" : ""}`);
  if (remainingMinutes > 0)
    components.push(
      `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`
    );
  if (remainingSeconds > 0)
    components.push(
      `${remainingSeconds} second${remainingSeconds > 1 ? "s" : ""}`
    );

  return components.length > 0
    ? `${components.join(", ")} left`
    : "No time left";
}

export default calculateTimeLeft;
