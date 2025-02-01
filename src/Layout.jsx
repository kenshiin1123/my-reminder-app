import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReminderAlarm from "./components/ReminderAlarm";

import reminderStore from "./store/reminderStore.js";
import { useEffect, useRef } from "react";

export default function Layout() {
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
    <>
      <ReminderAlarm
        handleAudioPlay={handleAudioPlay}
        muteAudio={muteAudio}
        audioRef={audioRef}
      />
      <NavBar />
      <Outlet />
    </>
  );
}
