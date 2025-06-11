import { LocalDate } from "@js-joda/core";
import { useState } from "react";

export function useLocalDate() {
  const [date, setDate] = useState(LocalDate.now());  // 타입 지정(LocalDate → 날짜(시간 제외))

  const goToNextDay = () => setDate(date.plusDays(1));  // 다음 버튼
  const goToPreviousDay = () => setDate(date.minusDays(1)); // 이전 버튼
  const goToToday = () => setDate(LocalDate.now()); // 오늘 버튼

  return { date, goToNextDay, goToPreviousDay, goToToday };
}
