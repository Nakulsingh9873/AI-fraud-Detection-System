import pandas as pd

from app.ml.model_loader import feature_names


def preprocess_transaction(transaction: dict) -> pd.DataFrame:
    """
    Convert incoming transaction data into the exact format
    expected by the trained LightGBM model.
    """

    data = {}

    # Keep feature order exactly the same as training
    for feature in feature_names:
        data[feature] = transaction.get(feature, 0)

    return pd.DataFrame([data], columns=feature_names)