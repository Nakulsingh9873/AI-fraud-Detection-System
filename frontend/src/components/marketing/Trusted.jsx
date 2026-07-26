import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Shield,
  Cpu,
  Globe,
} from "lucide-react";

const companies = [
  {
    icon: <Building2 size={34} />,
    name: "FinTech",
  },
  {
    icon: <Landmark size={34} />,
    name: "Banking",
  },
  {
    icon: <Shield size={34} />,
    name: "Cyber Security",
  },
  {
    icon: <Cpu size={34} />,
    name: "Artificial Intelligence",
  },
  {
    icon: <Globe size={34} />,
    name: "Global Businesses",
  },
];

export default function Trusted() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
        >
          Trusted Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-4xl font-bold text-slate-900"
        >
          Built for Modern Digital Finance
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {companies.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-teal-500 hover:shadow-xl"
            >
              <div className="flex justify-center text-teal-500">
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold text-slate-800">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}