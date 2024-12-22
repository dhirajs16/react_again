import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    console.log("About page mounted");

    return () => {
      console.log("About page unmounted");
    };
  }, [value]);

  return (
    <>
      <h1>About</h1>
      <input
        type="number"
        value={value || ""}
        onChange={(e) => setValue(Number(e.target.value))}
        className="px-5 py-2 rounded-md w-1/3"
      />
    </>
  );
};

export default About;

/*
The behavior you're observing is due to how React handles the useEffect hook when dependencies 
change.

Explanation:
Cleanup Function Execution: When the dependency (value) changes, React first runs the cleanup 
function returned from the previous effect execution. This ensures that any resources allocated 
by the previous effect are cleaned up before the new effect runs.

New Effect Execution: After the cleanup function has completed, React then runs the new effect 
with the updated dependencies.

Example Walkthrough:
Initial Render: The component mounts, and the effect runs for the first time. It logs 
"About page mounted".
State Change: When value changes (e.g., due to an input update), the following sequence occurs:
Cleanup: The cleanup function from the previous effect execution runs, logging 
"About page unmounted".
New Effect: Immediately after the cleanup, the effect re-runs due to the dependency change, 
logging "About page mounted" again.

*/
