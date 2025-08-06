import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Child care home", value: 40, color: "#C2B3FF" },
  { name: "Cleanliness program", value: 35, color: "#FFC727" },
  { name: "Helping people", value: 10, color: "#7FD87F" },
  { name: "Excursions", value: 10, color: "#FFEDB3" },
  { name: "Feeding the poor", value: 5, color: "#FF9EB3" },
];

export default function DonationSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How we spend your donations and where it goes
          </h2>
          <p className="text-gray-400 mb-6">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <ul className="text-sm space-y-2">
            {data.map((item) => (
              <li key={item.name} className="flex items-center gap-2">
                <span
                  className="w-4 h-4 inline-block rounded-sm"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.value}% {item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
