import { useState } from "react";
import { checkTransaction } from "../services/api";

function TransactionChecker() {
  const [formData, setFormData] = useState({
    step: 1,
    type: "TRANSFER",
    amount: "",
    oldbalanceOrg: "",
    newbalanceOrig: "",
    oldbalanceDest: "",
    newbalanceDest: "",
    isFlaggedFraud: 0,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
            ? 1
            : 0
          : name === "type"
          ? value
          : Number(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await checkTransaction(formData);

      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="max-w-7xl mx-auto px-6 mt-10">

      <div className="mb-10">

    <h1 className="text-5xl font-black text-white">
       Transaction Intelligence
    </h1>

      <p className="text-gray-400 mt-3 text-lg">
        Analyze transactions using XGBoost and AI-powered explanations.
      </p>

    </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl"
      >

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        >
          <option>TRANSFER</option>
          <option>CASH_OUT</option>
          <option>PAYMENT</option>
          <option>DEBIT</option>
          <option>CASH_IN</option>
        </select>

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        />

        <input
          name="oldbalanceOrg"
          type="number"
          placeholder="Old Balance Origin"
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        />

        <input
          name="newbalanceOrig"
          type="number"
          placeholder="New Balance Origin"
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        />

        <input
          name="oldbalanceDest"
          type="number"
          placeholder="Old Balance Destination"
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        />

        <input
          name="newbalanceDest"
          type="number"
          placeholder="New Balance Destination"
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-emerald-400 outline-none transition"
        />

        <label className="flex items-center gap-3 text-gray-300">
          <input
            type="checkbox"
            name="isFlaggedFraud"
            onChange={handleChange}
          />
          Flagged Fraud
        </label>

        <button
        type="submit"
        disabled={loading}
        className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 rounded-xl py-4 font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          {loading ? "Analyzing..." : "Analyze Transaction"}
        </button>

      </form>

      {result && (
        <div className="mt-10 bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-3xl font-bold text-emerald-400 mb-6">
            Prediction Result
          </h2>

          <div className="space-y-3 text-lg">

            <div className="bg-slate-800 rounded-2xl p-6 mb-6">

              <p className="text-gray-400 text-sm">
              Prediction
              </p>

              <h2 className="text-4xl font-black text-emerald-400 mt-2">
              {result.analysis.prediction}
              </h2>

            </div>

            <p>
              <strong>Risk Level:</strong>{" "}
              {result.analysis.risk_level}
            </p>

            <p>
              <strong>Confidence:</strong>{" "}
              {result.analysis.confidence}%
            </p>

            <p>
              <strong>Fraud Probability:</strong>{" "}
              {result.analysis.fraud_probability}%
            </p>

          </div>

          <div className="mt-3 leading-8 text-gray-300">

            <h3 className="text-2xl font-semibold text-cyan-400">
              AI Summary
            </h3>

            <p className="mt-3">
              {result.ai.summary}
            </p>

            <h3 className="text-2xl font-semibold text-cyan-400 mt-6">
              Reasons
            </h3>

            <ul className="list-disc ml-6 mt-3">
             {Array.isArray(result.ai?.reasons) &&
             result.ai.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
         ))}
            </ul>

            <h3 className="text-2xl font-semibold text-cyan-400 mt-6">
              Recommendation
            </h3>

            <p className="mt-3">
              {result.ai.recommendation}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default TransactionChecker;