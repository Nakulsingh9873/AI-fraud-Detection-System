from app.llm.llm_service import LLMService

service = LLMService()

response = service.analyze_transaction(
    prediction="Fraud",
    confidence=98.5,
    risk_level="Critical",
    amount=50000,
    merchant_category="Electronics",
    transaction_type="Online",
)

print(response)