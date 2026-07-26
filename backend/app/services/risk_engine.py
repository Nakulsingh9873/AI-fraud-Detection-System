class RiskEngine:

    @staticmethod
    def calculate(transaction: dict):

        score = 0
        reasons = []

        # -----------------------------
        # Transaction Amount
        # -----------------------------
        amount = transaction["transaction_amount"]

        if amount > 500000:
            score += 40
            reasons.append("Very high transaction amount")
        elif amount > 200000:
            score += 30
            reasons.append("High transaction amount")
        elif amount > 50000:
            score += 20
            reasons.append("Moderately high transaction amount")
        elif amount > 5000:
            score += 10
            reasons.append("Above normal transaction amount")

        # -----------------------------
        # International Transaction
        # -----------------------------
        if transaction["is_international"] == 1:
            score += 25
            reasons.append("International transaction")

        # -----------------------------
        # Account Age
        # -----------------------------
        age = transaction["account_age_days"]

        age_score = {
            "Less than 30 Days": (40, "Very new account"),
            "1-6 Months": (30, "New account"),
            "6-12 Months": (20, "Recently created account"),
            "1-2 Years": (10, "Young account"),
            "2-5 Years": (5, "Moderately old account"),
            "More than 5 Years": (0, "")
        }

        pts, reason = age_score.get(age, (0, ""))

        score += pts

        if reason:
            reasons.append(reason)

        # -----------------------------
        # Failed Transactions
        # -----------------------------
        failed = transaction["failed_txn_count_24h"]

        if failed > 10:
            score += 35
            reasons.append("Many failed transactions")
        elif failed >= 6:
            score += 25
            reasons.append("Several failed transactions")
        elif failed >= 3:
            score += 15
            reasons.append("Multiple failed transactions")
        elif failed >= 1:
            score += 5
            reasons.append("Previous failed transaction")

        # -----------------------------
        # Payment Method
        # -----------------------------
        payment_score = {
            "UPI": 5,
            "Debit Card": 5,
            "Credit Card": 10,
            "Net Banking": 15,
            "Wallet": 20
        }

        score += payment_score.get(
            transaction["payment_channel"],
            0
        )

        # -----------------------------
        # Device Type
        # -----------------------------
        device_score = {
            "Mobile": 0,
            "Laptop": 5,
            "Tablet": 5,
            "Desktop": 10
        }

        score += device_score.get(
            transaction["device_type"],
            0
        )

        # -----------------------------
        # Final Decision
        # -----------------------------
        if score <= 30:
            prediction = "Legitimate"
            risk_level = "Low"

        elif score <= 60:
            prediction = "Legitimate"
            risk_level = "Medium"

        elif score <= 90:
            prediction = "Suspicious"
            risk_level = "High"

        else:
            prediction = "Fraud"
            risk_level = "Critical"

        probability = round((score / 170) * 100, 2)

        return {
            "prediction": prediction,
            "risk_level": risk_level,
            "risk_score": score,
            "fraud_probability": probability,
            "reasons": reasons,
        }