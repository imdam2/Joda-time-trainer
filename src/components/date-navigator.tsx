import { useLocalDate } from "../hooks/use-local-date";

export default function DateNavigator() {
  const { date, goToNextDay, goToPreviousDay, goToToday } = useLocalDate();

  return (
      <div className="flex items-center gap-4 bg-white px-6 py-4 rounded shadow">
        <button onClick={goToPreviousDay} className="px-2 py-1 bg-gray-500 rounded">
          ◀ 이전
        </button>
        <span className="font-semibold text-xl text-blue-500">{date.toString()}</span>
        <button onClick={goToNextDay} className="px-2 py-1 bg-gray-500 rounded">
          다음 ▶
        </button>
        <button onClick={goToToday} className="px-2 py-1 bg-blue-500 rounded">
          오늘
        </button>
      </div>
  );
}
