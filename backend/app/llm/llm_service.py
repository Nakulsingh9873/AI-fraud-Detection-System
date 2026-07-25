from app.llm.prompt_builder import PromptBuilder
from app.llm.ollama_client import OllamaClient
from app.llm.response_formatter import ResponseFormatter

class LLMService:

    def __init__(self):
        self.client = OllamaClient()

    def analyze_transaction(
        self,
        prediction,
        confidence,
        risk_level,
        amount,
        merchant_category,
        transaction_type,
    ):

        prompt = PromptBuilder.build(
            prediction=prediction,
            confidence=confidence,
            risk_level=risk_level,
            amount=amount,
            merchant_category=merchant_category,
            transaction_type=transaction_type,
        )

        response = self.client.generate(prompt)

        return ResponseFormatter.format_response(response)