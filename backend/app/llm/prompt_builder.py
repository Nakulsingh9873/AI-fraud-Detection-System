from app.llm.prompts import FRAUD_ANALYSIS_PROMPT


class PromptBuilder:

    @staticmethod
    def build(
        prediction,
        confidence,
        risk_level,
        amount,
        merchant_category,
        transaction_type
    ):

        return FRAUD_ANALYSIS_PROMPT.format(
            prediction=prediction,
            confidence=confidence,
            risk_level=risk_level,
            amount=amount,
            merchant_category=merchant_category,
            transaction_type=transaction_type
        )