from pydantic import BaseModel, Field
from typing import Literal
from datetime import datetime


class Location(BaseModel):
    city: str
    country: str


class Device(BaseModel):
    device_id: str
    device_type: Literal["Mobile", "Laptop", "Desktop", "Tablet"]
    is_new_device: bool


class TransactionCreate(BaseModel):
    customer_id: str
    merchant_id: str

    amount: float = Field(gt=0)

    currency: str = "INR"

    payment_method: Literal[
        "UPI",
        "Credit Card",
        "Debit Card",
        "Net Banking",
        "Wallet"
    ]

    transaction_type: Literal[
        "Online",
        "POS",
        "ATM"
    ]

    merchant_category: str

    location: Location

    device: Device


class TransactionResponse(BaseModel):
    transaction_id: str

    customer_id: str

    amount: float

    prediction: str

    risk_score: float

    confidence: float

    status: str

    created_at: datetime