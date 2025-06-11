import DateNavigator from "./components/date-navigator";
import MonthlyCalendar from "./components/monthly-calendar";

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <DateNavigator />
      <MonthlyCalendar />
    </div>
  );
}
