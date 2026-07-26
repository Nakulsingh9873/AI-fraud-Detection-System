from pathlib import Path

# ==========================================
# Paths
# ==========================================

BASE_DIR = Path(__file__).resolve().parent

# Saved ML model
MODEL_PATH = BASE_DIR / "fraud_model.pkl"

# Saved feature order
FEATURE_NAMES_PATH = BASE_DIR / "feature_names.pkl"

# Saved prediction threshold
THRESHOLD_PATH = BASE_DIR / "threshold.pkl"

# ==========================================
# Risk Labels
# ==========================================

HIGH_RISK_THRESHOLD = 0.80
MEDIUM_RISK_THRESHOLD = 0.50