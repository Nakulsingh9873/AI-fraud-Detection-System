from pydantic import BaseModel, Field
from typing import Literal


class TransactionRequest(BaseModel):

    transaction_amount: float = Field(gt=0)

    payment_channel: Literal[
        "UPI",
        "Credit Card",
        "Debit Card",
        "Net Banking",
        "Wallet"
    ]

    device_type: Literal[
        "Mobile",
        "Desktop",
        "Laptop",
        "Tablet"
    ]

    is_international: int = Field(ge=0, le=1)

    account_age_days: Literal[
    "Less than 30 Days",
    "1-6 Months",
    "6-12 Months",
    "1-2 Years",
    "2-5 Years",
    "More than 5 Years"
]

    failed_txn_count_24h: int = Field(ge=0)


class TransactionResponse(BaseModel):

    prediction: str

    risk_level: str

    risk_score: int

    fraud_probability: float

    confidence: float

    reasons: list[str]