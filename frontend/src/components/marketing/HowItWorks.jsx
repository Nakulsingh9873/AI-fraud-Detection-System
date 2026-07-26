import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "1. Collect Transaction",
    description:
      "The user submits transaction details through the Kavach AI platform.",
  },
  {
    icon: BrainCircuit,
    title: "2. AI Analysis",
    description:
      "Our Machine Learning model analyzes patterns, risk factors, and transaction behavior in real time.",
  },
  {
    icon: ShieldCheck,
    title: "3. Fraud Decision",
    description:
      "Kavach AI predicts whether the transaction is Safe or Fraud and provides a confidence score.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Workflow
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How Kavach AI Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every transaction passes through our AI engine before a fraud
            prediction is generated.
          </p>
        </div>

        <div className="relative mt-24 grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>

                <div className="absolute right-6 top-6 text-6xl font-extrabold text-slate-100">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}