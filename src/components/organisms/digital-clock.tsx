"use client";
import { useState, useEffect } from "react";
import { Column, Row } from "../ui/layout";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <Column className="p-4 w-56" role="timer">
      <Row>
        <span className="text-6xl font-bold">
          {time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </span>
        <span>{`${time.getSeconds() < 10 ? 0 : ""}${time.getSeconds()}`}</span>
      </Row>
      <span className="font-medium">
        {time.toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </span>
    </Column>
  );
}
