from uuid import uuid4
from datetime import datetime


class Customer:

    @staticmethod
    def create(customer_id: str):

        return {
            "customer_id": customer_id,
            "account_age_days": 365,
            "credit_score_band": 2,
            "kyc_level": 3,
            "avg_monthly_spend": 0,
            "txn_count_1h": 0,
            "txn_count_24h": 0,
            "failed_txn_count_24h": 0,
            "last_transaction": None,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }