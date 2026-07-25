from app.llm.ollama_client import OllamaClient

client = OllamaClient()

response = client.generate(
    """
    You are an expert banking fraud analyst.

    Explain why a transaction with:

    Amount: 50000
    Prediction: Fraud
    Confidence: 98%

    may be considered fraudulent.

    Limit your answer to 80 words.
    """
)

print(response)