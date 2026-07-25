from app.database.connection import db


class TransactionRepository:

    @staticmethod
    def create(transaction: dict):
        db.transactions.insert_one(transaction)
        return transaction

    @staticmethod
    def get_all():
        return list(db.transactions.find({}, {"_id": 0}))

    @staticmethod
    def get_by_id(transaction_id: str):
        return db.transactions.find_one(
            {"transaction_id": transaction_id},
            {"_id": 0}
        )