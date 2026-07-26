from app.models.transaction import Transaction
from app.repositories.transaction_repository import TransactionRepository

from app.services.feature_engineering_service import FeatureEngineeringService
from app.services.fraud_engine import FraudEngine
from app.services.risk_engine import RiskEngine


class TransactionService:

    @staticmethod
    def create_transaction(transaction_data: dict):

        # ======================================
        # Build Features for ML Model
        # ======================================

        features = FeatureEngineeringService.build_features(transaction_data)

        # ======================================
        # ML Prediction
        # ======================================

        ml_prediction = FraudEngine.analyze(features)

        # ======================================
        # Rule Engine Prediction
        # ======================================

        rule_prediction = RiskEngine.calculate(transaction_data)

        # ======================================
        # Combine Results
        # ======================================

        final_prediction = {
            "prediction": rule_prediction["prediction"],
            "risk_level": rule_prediction["risk_level"],
            "fraud_probability": rule_prediction["fraud_probability"],

            # Confidence still comes from ML
            "confidence": ml_prediction["confidence"],

            "risk_score": rule_prediction["risk_score"],
            "reasons": rule_prediction["reasons"],
        }

        # ======================================
        # Create Transaction Record
        # ======================================

        transaction = Transaction.create(
            transaction_data=transaction_data,
            prediction=final_prediction,
        )

        # ======================================
        # Save Transaction
        # ======================================

        TransactionRepository.create(transaction)

        return transaction