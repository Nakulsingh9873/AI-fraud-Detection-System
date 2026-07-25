from fastapi import APIRouter

router = APIRouter()


@router.get("/health", tags=["Health"])
def health():
    return {
        "status": "Healthy",
        "message": "Kavach AI Backend is running"
    }