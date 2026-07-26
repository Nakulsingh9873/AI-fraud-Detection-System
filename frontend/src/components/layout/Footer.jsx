import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500">
                <ShieldCheck />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Kavach AI
                </h2>

                <p className="text-slate-400">
                  Intelligent Fraud Detection
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-400">
              AI-powered fraud detection platform built using
              React, FastAPI, XGBoost and MongoDB.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>Home</li>
              <li>Features</li>
              <li>How It Works</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Tech Stack
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>React</li>
              <li>FastAPI</li>
              <li>MongoDB</li>
              <li>XGBoost</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 Kavach AI. Built by Nakul Singh.
        </div>

      </div>

    </footer>
  );
}