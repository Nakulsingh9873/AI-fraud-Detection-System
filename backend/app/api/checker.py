from fastapi import APIRouter
from pydantic import BaseModel

from app.services.checker_service import CheckerService

router = APIRouter(
    prefix="/checker",
    tags=["Checker"]
)


class TransactionRequest(BaseModel):
    step: int
    type: str
    amount: float
    oldbalanceOrg: float
    newbalanceOrig: float
    oldbalanceDest: float
    newbalanceDest: float
    isFlaggedFraud: int


@router.post("/")
def check_transaction(transaction: TransactionRequest):
    return CheckerService.check_transaction(transaction.model_dump())