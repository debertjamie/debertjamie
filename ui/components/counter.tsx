"use client";
import React from "react";

export function Counter({ num, speed = 5, ...props }: { num: number, speed?: number } & React.HTMLAttributes<HTMLSpanElement>) {
  const [count, setCount] = React.useState<number>(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, num));
    }, speed);
    return () => clearInterval(intervalId);
  }, []);
  return <span {...props}>{count}</span>;
}
