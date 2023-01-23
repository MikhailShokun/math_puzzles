import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import { Button } from "@mui/material";

const FireWorks = ({ setScores }) => {
  const ref = useRef(null);

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "4px", zIndex: 1 }}>
        <Button onClick={() => document.location.reload()} color="warning" variant="outlined">
          New game
        </Button>
      </div>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          // background: '#000'
        }}
      />
    </>
  );
};

export default FireWorks;
