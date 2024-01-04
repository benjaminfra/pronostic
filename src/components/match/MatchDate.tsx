import { DateTime } from "luxon";
import React from "react";

interface MatchDateProps {
  date: string;
}

const MatchDate: React.FC<MatchDateProps> = ({ date }) => {
  return (
    <div className="text-center text-2xl">
      {DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
    </div>
  );
};

export default MatchDate;
