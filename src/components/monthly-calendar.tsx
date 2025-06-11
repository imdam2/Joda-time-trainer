import { LocalDate, YearMonth } from "@js-joda/core";

interface CalendarDay {
  date: LocalDate;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export default function MonthlyCalendar() {
  const today = LocalDate.now();
  const yearMonth = YearMonth.of(today.year(), today.month());
  const firstDayOfMonth = yearMonth.atDay(1);
  const lastDayOfMonth = yearMonth.atEndOfMonth();

  const days: CalendarDay[] = [];

  // 시작 요일 앞에 빈칸 채우기
  const startDayOfWeek = firstDayOfMonth.dayOfWeek().ordinal(); // 0: Monday → Sunday를 6으로 바꾸자
  for (let i = 0; i < (startDayOfWeek + 1) % 7; i++) {
    days.push({
      date: firstDayOfMonth.minusDays(i + 1),
      isToday: false,
      isCurrentMonth: false,
    });
  }
  days.reverse();

  // 현재 월 날짜 채우기
  for (let d = 1; d <= lastDayOfMonth.dayOfMonth(); d++) {
    const date = yearMonth.atDay(d);
    days.push({
      date,
      isToday: date.equals(today),
      isCurrentMonth: true,
    });
  }

  // 총 칸수를 7의 배수로 맞추기 (예: 35 또는 42)
  while (days.length % 7 !== 0) {
    const nextDate = days[days.length - 1].date.plusDays(1);
    days.push({
      date: nextDate,
      isToday: false,
      isCurrentMonth: false,
    });
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`p-2 border rounded text-sm ${
              day.isCurrentMonth ? "text-black" : "text-gray-400"
            } ${day.isToday ? "bg-blue-200 font-bold" : ""}`}
          >
            {day.date.dayOfMonth()}
          </div>
        ))}
      </div>
    </div>
  );
}
