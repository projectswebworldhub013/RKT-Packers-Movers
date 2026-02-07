import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem("visitor-count");
    return stored ? parseInt(stored, 10) : 1;
  });

  useEffect(() => {
    const newCount = count + 1;
    localStorage.setItem("visitor-count", newCount.toString());
    setCount(newCount);
  }, []);

  const formattedCount = count.toString().padStart(4, "0");

  return (
    <div className="text-[#4e2d08] text-sm md:text-base font-medium text-center mx-2">
      Visitor Count:{" "}
      <span className="text-black font-semibold">{formattedCount}</span>
    </div>
  );
}
