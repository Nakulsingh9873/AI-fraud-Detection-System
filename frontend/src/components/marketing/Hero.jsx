import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-100 blur-3xl opacity-60"></div>

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2 lg:px-12">

        {/* LEFT */}
        <div className="max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow"
          >
            <ShieldCheck size={18} />
            AI Powered Fraud Detection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
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
            className="mt-8 text-xl leading-9 text-slate-600"
          >
            Kavach AI leverages Machine Learning and Artificial Intelligence
            to detect fraudulent financial transactions in real time before
            they become a threat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              to="/checker"
              className="flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-teal-600"
            >
              Try Prediction
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-lg font-semibold text-slate-700 transition duration-300 hover:border-teal-500 hover:text-teal-600"
            >
              Learn More
            </Link>
          </motion.div>

        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  AI Prediction
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Fraud Analysis
                </h2>
              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-600">
                SAFE
              </div>

            </div>

            <div className="mt-10">

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Confidence
                </span>

                <span className="font-bold">
                  99.24%
                </span>

              </div>

              <div className="mt-3 h-3 rounded-full bg-slate-200">

                <div className="h-3 w-[99%] rounded-full bg-teal-500"></div>

              </div>

            </div>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Accuracy
                </p>

                <h3 className="mt-3 text-4xl font-bold">
                  99.2%
                </h3>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Response
                </p>

                <h3 className="mt-3 text-4xl font-bold">
                  18ms
                </h3>

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-slate-500">
                  Transactions Today
                </span>

                <span className="font-bold">
                  12,458
                </span>

              </div>

              <div className="flex h-40 items-end gap-3">

                {[40,65,55,90,60,100,75,95].map((h, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    className="flex-1 rounded-t-xl bg-teal-500"
                  />
                ))}

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -right-10 -top-10 rounded-2xl bg-white p-5 shadow-xl"
          >

            <p className="text-sm text-slate-500">
              Fraud Probability
            </p>

            <h2 className="mt-2 text-4xl font-bold text-red-500">
              2.1%
            </h2>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}