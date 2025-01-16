import { FcAlarmClock } from "react-icons/fc";
import reminderStore from "../store/reminderStore";
import { useEffect, useRef } from "react";

export default function ReminderAlarm() {
  const { activateTimer, setActivateTimer } = reminderStore();
  const audioRef = useRef(null);

  // Function to handle the audio playback when the timer is activated
  const handleAudioPlay = () => {
    if (audioRef.current && activateTimer) {
      audioRef.current.currentTime = 0; // Reset to the beginning
      audioRef.current.muted = false; // Unmute the audio
      audioRef.current.play(); // Play the audio
    }
  };

  // Effect to handle audio playback when `activateTimer` changes
  useEffect(() => {
    if (activateTimer) {
      if (audioRef.current && activateTimer) {
        audioRef.current.currentTime = 0; // Reset to the beginning
        audioRef.current.muted = false; // Unmute the audio
        audioRef.current.play(); // Play the audio
      }
    }
  }, [activateTimer]); // Re-run when `activateTimer` changes

  // Function to mute or pause the audio
  const muteAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = true; // Mute the audio
    }
    setActivateTimer(false); // Deactivate the timer
  };

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
