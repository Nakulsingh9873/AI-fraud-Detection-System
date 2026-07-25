from app.ml.predictor import predict_transaction


class FraudEngine:
    @staticmethod
    def analyze(transaction: dict):
        """
        Analyze a transaction using the trained AI model.
        """
        return predict_transaction(transaction)