"use client";
import { useState, useEffect } from "react";
import { Row } from "../ui/layout";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <Row className="w-56 select-none" gap={1} role="timer">
      <span className="text-7xl font-bold">
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </span>
      <span className="text-lg font-medium" suppressHydrationWarning>{`${
        time.getSeconds() < 10 ? 0 : ""
      }${time.getSeconds()}`}</span>
    </Row>
  );
}
