import { FcAlarmClock } from "react-icons/fc";
import reminderStore from "../store/reminderStore.js";
import PropTypes from "prop-types";

export default function ReminderAlarm({
  handleAudioPlay,
  muteAudio,
  audioRef,
}) {
  const { activateTimer, setActivateTimer } = reminderStore();

  return (
    <div
      className="alarm-activated"
      style={{ display: activateTimer ? "flex" : "none" }}
    >
      <div>
        <FcAlarmClock />
        <p>TIMES UP!</p>
        <button
          onClick={() => {
            setActivateTimer(false);
            muteAudio();
          }}
        >
          Close Reminder
        </button>
        <audio ref={audioRef} onEnded={handleAudioPlay}>
          <source src="/digital-alarm-clock.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

ReminderAlarm.propTypes = {
  handleAudioPlay: PropTypes.func,
  muteAudio: PropTypes.func,
  audioRef: PropTypes.object,
};
