
import {
  Users,
  CalendarDays,
  FileText,
  UserRound,
} from "lucide-react";

import StatCard from "../components/ui/StatCard";

const statistics = [
  {
    title: "Total Patients",
    value: 1250,
    description: "Registered patient profiles",
    icon: Users,
  },
  {
    title: "Appointments",
    value: 86,
    description: "Scheduled appointments",
    icon: CalendarDays,
  },
  {
    title: "Medical Records",
    value: 3420,
    description: "Records available in the system",
    icon: FileText,
  },
  {
    title: "Healthcare Staff",
    value: 42,
    description: "Staff profiles",
    icon: UserRound,
  },
];

function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of healthcare operations
        </p>
      </div>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Welcome to your dashboard
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Use the navigation menu to access patient management,
          appointments, and medical records.
        </p>
      </section>
    </div>
  );
}

export default DashboardPage;
