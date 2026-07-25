import json


class ResponseFormatter:

    @staticmethod
    def format_response(response: str):

        try:
            return json.loads(response)

        except Exception:

            return {
                "summary": response,
                "reasons": [],
                "recommendation": "Manual review recommended."
            }