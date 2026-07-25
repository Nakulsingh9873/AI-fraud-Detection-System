from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "fraud_model.pkl"
ENCODER_PATH = BASE_DIR / "label_encoder.pkl"

model = joblib.load(MODEL_PATH)
encoder = joblib.load(ENCODER_PATH)