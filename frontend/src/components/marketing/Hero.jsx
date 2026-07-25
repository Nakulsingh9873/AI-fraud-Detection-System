import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="absolute -top-32 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-teal-100 blur-3xl opacity-50" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 lg:px-10">

        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm"
          >
            <ShieldCheck size={18} />
            AI Powered Fraud Detection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl"
          >
            Smart Fraud Detection
            <br />
            <span className="text-teal-600">
              For a Safer Tomorrow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-2xl text-xl leading-9 text-slate-600"
          >
            Kavach AI uses Machine Learning and Artificial Intelligence
            to analyse financial transactions in real time and detect
            suspicious activity before fraud happens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              to="/checker"
              className="flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-teal-600"
            >
              Try Prediction
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-lg font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
            >
              Learn More
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}