"use client";
import React from "react";

export function Counter({ num, ...props }: { num: number } & React.HTMLAttributes<HTMLSpanElement>) {
  const [count, setCount] = React.useState<number>(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, num));
    }, 5);
    return () => clearInterval(intervalId);
  }, []);
  return <span {...props}>{count}</span>;
}
