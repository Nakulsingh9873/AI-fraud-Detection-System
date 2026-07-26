from app.database.connection import db


class CustomerRepository:

    @staticmethod
    def get(customer_id):

        return db.customers.find_one(
            {"customer_id": customer_id},
            {"_id": 0}
        )

    @staticmethod
    def create(customer):

        db.customers.insert_one(customer)

        return customer

    @staticmethod
    def update(customer_id, values):

        db.customers.update_one(
            {"customer_id": customer_id},
            {"$set": values}
        )