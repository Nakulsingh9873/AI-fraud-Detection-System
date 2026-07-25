import pandas as pd

from app.ml.model_loader import model, encoder


def predict_transaction(transaction: dict):
    """Predict whether a transaction is fraudulent."""

    transaction_type = encoder.transform([transaction["type"]])[0]

    features = pd.DataFrame([{
        "step": transaction["step"],
        "type": transaction_type,
        "amount": transaction["amount"],
        "oldbalanceOrg": transaction["oldbalanceOrg"],
        "newbalanceOrig": transaction["newbalanceOrig"],
        "oldbalanceDest": transaction["oldbalanceDest"],
        "newbalanceDest": transaction["newbalanceDest"],
        "isFlaggedFraud": transaction["isFlaggedFraud"]
    }])

    prediction = int(model.predict(features)[0])
    probabilities = model.predict_proba(features)[0]

    prediction_text = "Fraud" if prediction == 1 else "Legitimate"

    fraud_probability = round(float(probabilities[1]) * 100, 2)
    legitimate_probability = round(float(probabilities[0]) * 100, 2)

    if fraud_probability >= 80:
        risk_level = "High"
    elif fraud_probability >= 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "prediction": prediction_text,
        "risk_level": risk_level,
        "confidence": float(max(fraud_probability, legitimate_probability)),
        "fraud_probability": float(fraud_probability),
        "legitimate_probability": float(legitimate_probability),
    }