from datetime import datetime


class FeatureEngineeringService:

    @staticmethod
    def build_features(transaction: dict):

        now = datetime.now()

        account_age_map = {
            "Less than 30 Days": 15,
            "1-6 Months": 120,
            "6-12 Months": 300,
            "1-2 Years": 730,
            "2-5 Years": 1500,
            "More than 5 Years": 2500,
        }

        account_age_days = account_age_map.get(
            transaction["account_age_days"], 365
        )

        amount = transaction["transaction_amount"]
        failed = transaction["failed_txn_count_24h"]
        international = transaction["is_international"]

        # -----------------------------
        # Dynamic Feature Engineering
        # -----------------------------

        # Credit Score
        if account_age_days < 30:
            credit_score_band = 0
        elif account_age_days < 180:
            credit_score_band = 1
        elif account_age_days < 730:
            credit_score_band = 2
        else:
            credit_score_band = 3

        # KYC
        if account_age_days < 30:
            kyc_level = 1
        elif account_age_days < 365:
            kyc_level = 2
        else:
            kyc_level = 3

        # Monthly Spend
        avg_monthly_spend = max(amount * 2, 15000)

        # Merchant Risk
        merchant_risk_score = 0.20

        if international:
            merchant_risk_score += 0.35

        if amount > 100000:
            merchant_risk_score += 0.20

        if failed > 5:
            merchant_risk_score += 0.20

        merchant_risk_score = min(merchant_risk_score, 1.0)

        # IP Risk
        ip_risk_score = 0.10

        if international:
            ip_risk_score += 0.40

        if failed > 5:
            ip_risk_score += 0.30

        ip_risk_score = min(ip_risk_score, 1.0)

        # Transaction Counts
        txn_count_1h = max(1, failed)

        txn_count_24h = max(3, failed * 3)

        # Geo Distance
        geo_distance_from_last_txn = 5

        if international:
            geo_distance_from_last_txn = 800

        if amount > 500000:
            geo_distance_from_last_txn += 500

        amount_deviation = abs(amount - avg_monthly_spend)

        return {

            "transaction_amount": amount,
            "payment_channel": transaction["payment_channel"],
            "device_type": transaction["device_type"],

            "account_age_days": account_age_days,
            "failed_txn_count_24h": failed,
            "is_international": international,

            "credit_score_band": credit_score_band,
            "kyc_level": kyc_level,
            "avg_monthly_spend": avg_monthly_spend,
            "merchant_risk_score": merchant_risk_score,
            "ip_risk_score": ip_risk_score,
            "txn_count_1h": txn_count_1h,
            "txn_count_24h": txn_count_24h,
            "geo_distance_from_last_txn": geo_distance_from_last_txn,
            "amount_deviation_from_user_mean": amount_deviation,

            "hour": now.hour,
            "day_of_week": now.weekday(),
            "month": now.month,
        }