from datetime import datetime


class Merchant:

    @staticmethod
    def create(merchant_id: str):

        return {
            "merchant_id": merchant_id,
            "transaction_count": 0,
            "fraud_count": 0,
            "merchant_risk_score": 0.05,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }