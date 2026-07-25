from app.llm.prompt_builder import PromptBuilder

prompt = PromptBuilder.build(
    prediction="Fraud",
    confidence=98.5,
    risk_level="Critical",
    amount=50000,
    merchant_category="Electronics",
    transaction_type="Online"
)

print(prompt)