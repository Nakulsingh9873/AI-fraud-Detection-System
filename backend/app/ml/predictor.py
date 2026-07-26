from pyexpat import features

import pandas as pd

from app.ml.model_loader import pipeline, threshold


def predict_transaction(transaction: dict):
    """
    Predict whether a transaction is fraudulent using the trained pipeline.
    """

    # Convert request into DataFrame
    features = pd.DataFrame([transaction])
    print("\n========== FEATURES ==========")
    print(features)
    print("==============================\n")    # Predict fraud probability
    probability = float(pipeline.predict_proba(features)[0][1])

    # Apply saved threshold
    prediction = probability >= threshold

    # Risk level
    if probability >= 0.80:
        risk_level = "High"
    elif probability >= 0.50:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "prediction": "Fraud" if prediction else "Legitimate",
        "risk_level": risk_level,
        "fraud_probability": round(probability * 100, 2),
        "confidence": round(max(probability, 1 - probability) * 100, 2),
    }