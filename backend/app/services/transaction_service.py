from app.models.transaction import Transaction
from app.repositories.transaction_repository import TransactionRepository


class TransactionService:

    @staticmethod
    def create_transaction(transaction_data: dict):

        transaction = Transaction.create(transaction_data)

        return TransactionRepository.create(transaction)