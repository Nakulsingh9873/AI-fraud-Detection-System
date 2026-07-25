from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    PROJECT_NAME = "Kavach AI"
    VERSION = "2.0.0"

    API_PREFIX = "/api"

    MONGO_URI = os.getenv("MONGO_URI")
    DATABASE_NAME = os.getenv("DATABASE_NAME")


settings = Settings()