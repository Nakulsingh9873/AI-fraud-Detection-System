from fastapi import APIRouter

from app.schemas.transaction import (
    TransactionCreate,
    TransactionResponse,
)

from app.services.transaction_service import TransactionService

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.post(
    "/",
    response_model=TransactionResponse
)
def create_transaction(
    transaction: TransactionCreate
):

    created_transaction = TransactionService.create_transaction(
        transaction.model_dump()
    )

    return created_transaction