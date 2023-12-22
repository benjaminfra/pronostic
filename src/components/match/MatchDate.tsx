import { DateTime } from "luxon";
import React from "react";
import DivSkeleton from "../skeleton/DivSkeleton";

interface MatchDateProps {
  date: string;
  isLoading?: boolean;
}

const MatchDate: React.FC<MatchDateProps> = ({ date, isLoading = false }) => {
  return isLoading ? (
    <DivSkeleton className="w-28 h-2.5 m-auto" />
  ) : (
    <div className="text-center text-2xl">
      {DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
    </div>
  );
};

export default MatchDate;
