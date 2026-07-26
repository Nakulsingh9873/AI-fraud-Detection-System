import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Clock3,
  Database,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "99.24%",
    title: "Detection Accuracy",
  },
  {
    icon: Database,
    value: "2.8M+",
    title: "Transactions Analysed",
  },
  {
    icon: Clock3,
    value: "<20ms",
    title: "Average Response",
  },
  {
    icon: Activity,
    value: "24/7",
    title: "AI Monitoring",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Trusted Performance
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Built for speed, accuracy and enterprise-grade reliability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-5xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.title}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}