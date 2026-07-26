from app.database.connection import db


class MerchantRepository:

    @staticmethod
    def get(merchant_id):

        return db.merchants.find_one(
            {"merchant_id": merchant_id},
            {"_id": 0}
        )

    @staticmethod
    def create(merchant):

        db.merchants.insert_one(merchant)

        return merchant

    @staticmethod
    def update(merchant_id, values):

        db.merchants.update_one(
            {"merchant_id": merchant_id},
            {"$set": values}
        )