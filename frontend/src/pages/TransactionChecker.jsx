import { useState } from "react";
import { checkTransaction } from "../services/api";

function TransactionChecker() {
  const [formData, setFormData] = useState({
    transaction_amount: "",
    payment_channel: "UPI",
    device_type: "Mobile",
    is_international: 0,
    account_age_days: "",
    failed_txn_count_24h: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "transaction_amount" ||
        name === "is_international" ||
        name === "failed_txn_count_24h"
          ? (value === "" ? "" : Number(value))
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await checkTransaction(formData);

      setResult(response);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze transaction.");
    } finally {
      setLoading(false);
    }
  };

  const meterColor =
    result?.fraud_probability <= 30
      ? "bg-green-500"
      : result?.fraud_probability <= 70
      ? "bg-yellow-500"
      : "bg-red-500";

  const predictionColor =
    result?.prediction === "Fraud"
      ? "text-red-600"
      : "text-green-600";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="mb-12 text-center">

        <h1 className="text-5xl font-black text-slate-900">
          🛡️ AI Transaction Checker
        </h1>

        <p className="text-slate-500 text-lg mt-4">
          Submit your transaction details and let Kavach AI
          detect suspicious activity in real time.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 grid md:grid-cols-2 gap-6"
      >
              {/* Transaction Amount */}
        <input
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="number"
          placeholder="💰 Transaction Amount (₹)"
          name="transaction_amount"
          value={formData.transaction_amount}
          onChange={handleChange}
          required
        />

        {/* Payment Method */}
        <select
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name="payment_channel"
          value={formData.payment_channel}
          onChange={handleChange}
        >
        
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Wallet">Wallet</option>
          <option value="Net Banking">Net Banking</option>
        </select>

        {/* Device Type */}
        <select
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name="device_type"
          value={formData.device_type}
          onChange={handleChange}
        >
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Desktop">Desktop</option>
          <option value="Tablet">Tablet</option>
        </select>

        {/* International */}
        <select
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name="is_international"
          value={formData.is_international}
          onChange={handleChange}
        >
          <option value={0}>🌍 Domestic</option>
          <option value={1}>🌎 International</option>
        </select>

        {/* Account Age */}
        <select
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name="account_age_days"
          value={formData.account_age_days}
          onChange={handleChange}
        >
          <option value="" disabled>
          Account Age
          </option>
          <option value="Less than 30 Days">Less than 30 Days</option>
          <option value="1-6 Months">1–6 Months</option>
          <option value="6-12 Months">6–12 Months</option>
          <option value="1-2 Years">1–2 Years</option>
          <option value="2-5 Years">2–5 Years</option>
          <option value="More than 5 Years">More than 5 Years</option>
        </select>

        {/* Failed Transactions */}
        <input
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="number"
          placeholder="Failed Transactions (Last 24 Hours)"
          min="0"
          placeholder="No. of Failed Transactions"
          name="failed_txn_count_24h"
          value={formData.failed_txn_count_24h}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-4 text-lg font-bold transition duration-300"
        >
          {loading ? "Analyzing Transaction..." : "🚀 Analyze Transaction"}
        </button>

      </form>
            {result && (
        <div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            🛡️ AI Analysis Result
          </h2>

          {/* Prediction */}
          <div className="mb-8 text-center">

            <p className="text-slate-500 text-lg">
              Prediction
            </p>

            <h2 className={`text-5xl font-black mt-3 ${predictionColor}`}>
              {result.prediction}
            </h2>

          </div>

          {/* Fraud Meter */}

          <div className="mb-8">

            <div className="flex justify-between mb-2">

              <span className="font-semibold text-slate-700">
                Fraud Risk
              </span>

              <span className="font-bold text-slate-900">
                {result.fraud_probability}%
              </span>

            </div>

            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">

              <div
                className={`${meterColor} h-6 rounded-full transition-all duration-700`}
                style={{
                  width: `${result.fraud_probability}%`,
                }}
              />

            </div>

          </div>

          {/* Result Cards */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-100 rounded-2xl p-6">

              <p className="text-slate-500">
                Risk Level
              </p>

              <h3
                className={`text-4xl font-black mt-2 ${
                  result.risk_level === "High"
                    ? "text-red-600"
                    : result.risk_level === "Medium"
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                {result.risk_level}
              </h3>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6">

              <p className="text-slate-500">
                Confidence
              </p>

              <h3 className="text-4xl font-black text-teal-600 mt-2">
                {result.confidence}%
              </h3>

            </div>

          </div>
         {/* Explanation */}
         {result.reasons && result.reasons.length > 0 && (
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-slate-900 mb-5">
             🔍 Why did Kavach AI make this prediction?
            </h3>

          <div className="space-y-3">
             {result.reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
            >
            <span className="text-green-600 text-xl">✔</span>

            <span className="text-slate-700 text-lg">
              {reason}
            </span>
          </div>
      ))}
    </div>

  </div>
)}

    </div>
      )}

    </div>
  );
}

export default TransactionChecker;