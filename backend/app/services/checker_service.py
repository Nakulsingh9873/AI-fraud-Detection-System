from app.services.fraud_engine import FraudEngine
from app.llm.llm_service import LLMService


class CheckerService:

    @staticmethod
    def check_transaction(transaction: dict):
        """
        Validate and analyze a transaction.
        """

        # XGBoost Prediction
        result = FraudEngine.analyze(transaction)

        # AI Explanation
        llm = LLMService()

        ai_response = llm.analyze_transaction(
            prediction=result["prediction"],
            confidence=result["confidence"],
            risk_level=result["risk_level"],
            amount=transaction["amount"],
            merchant_category=transaction["type"],
            transaction_type=transaction["type"],
        )

        return {
            "status": "success",
            "analysis": result,
            "ai": ai_response,
        }