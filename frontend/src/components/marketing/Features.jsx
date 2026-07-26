import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Activity,
  Clock3,
  Database,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Real-Time Fraud Detection",
    description:
      "Detect suspicious transactions instantly before financial damage occurs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Engine",
    description:
      "Powered by Machine Learning to continuously analyze transaction patterns.",
  },
  {
    icon: Activity,
    title: "Risk Scoring",
    description:
      "Every transaction receives a confidence score and fraud probability.",
  },
  {
    icon: Clock3,
    title: "Fast Predictions",
    description:
      "Get fraud predictions within milliseconds using an optimized AI pipeline.",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description:
      "Prediction history and transaction records are securely stored in MongoDB.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize fraud trends, transaction insights and prediction statistics.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Everything You Need
            <br />
            to Detect Fraud
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Kavach AI combines Machine Learning, Artificial Intelligence,
            and modern analytics to provide accurate, fast and secure
            fraud detection.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}