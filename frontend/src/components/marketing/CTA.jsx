import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-r from-teal-500 to-cyan-500">

      <div className="absolute -top-40 left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white"
        >
          Start Detecting Fraud Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-teal-50"
        >
          Experience real-time AI powered fraud detection with Kavach AI.
          Analyze transactions instantly and make secure financial decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            to="/checker"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-teal-600 shadow-xl transition hover:scale-105"
          >
            Try Live Prediction
            <ArrowRight size={22} />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}