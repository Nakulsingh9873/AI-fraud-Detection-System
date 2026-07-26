from datetime import datetime, UTC
from uuid import uuid4


class Transaction:

    @staticmethod
    def create(transaction_data: dict, prediction: dict):

        return {

            "transaction_id": str(uuid4()),

            # ==========================
            # Transaction Details
            # ==========================
            "transaction_amount": transaction_data["transaction_amount"],
            "payment_channel": transaction_data["payment_channel"],
            "device_type": transaction_data["device_type"],
            "is_international": transaction_data["is_international"],

            # User Inputs
            "account_age_days": transaction_data["account_age_days"],
            "failed_txn_count_24h": transaction_data["failed_txn_count_24h"],

            # ==========================
            # AI Prediction
            # ==========================
            "prediction": prediction["prediction"],
            "risk_level": prediction["risk_level"],
            "risk_score": prediction["risk_score"],          # NEW
            "fraud_probability": prediction["fraud_probability"],
            "confidence": prediction["confidence"],
            "reasons": prediction["reasons"],                # NEW

            # ==========================
            # Timestamp
            # ==========================
            "created_at": datetime.now(tz=UTC)

        }