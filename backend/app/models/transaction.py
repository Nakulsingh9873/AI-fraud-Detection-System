from datetime import datetime, UTC
from uuid import uuid4


class Transaction:

    @staticmethod
    def create(data: dict):

        return {

            "transaction_id": str(uuid4()),

            "customer_id": data["customer_id"],

            "merchant_id": data["merchant_id"],

            "amount": data["amount"],

            "currency": data["currency"],

            "payment_method": data["payment_method"],

            "transaction_type": data["transaction_type"],

            "merchant_category": data["merchant_category"],

            "location": data["location"],

            "device": data["device"],

            "prediction": "Pending",

            "risk_score": 0,

            "confidence": 0,

            "status": "Pending",

            "created_at": datetime.now(tz=UTC)
        }