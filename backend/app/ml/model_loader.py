from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent

PIPELINE_PATH = BASE_DIR / "fraud_pipeline.pkl"
THRESHOLD_PATH = BASE_DIR / "threshold.pkl"

pipeline = joblib.load(PIPELINE_PATH)
threshold = joblib.load(THRESHOLD_PATH)

print("✅ Fraud pipeline loaded successfully")