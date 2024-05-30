import os
import openai
import uvicorn
from typing import Optional
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from chatbot import ChatOpenAI

load_dotenv()

app_env = os.getenv("APP_ENV")
app = FastAPI(debug=False if app_env == 'production' else True)
origins = [
    "http://localhost:3000",  # Adjust this to your frontend's URL
]

# Set up CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow access from origins listed above
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

openai.api_key = os.getenv("OPENAI_API_KEY")
system_msg = """You are a helpful assistant dedicated to personalizing your clients' everyday lives. 
You access client information and search for details, including, 
but not limited to, various topics that cater to their unique needs and preferences."""
model = ChatOpenAI(system_msg)

class ChatCompletionRequest(BaseModel):
    model: str
    user_content: str
    temperature: Optional[int] = 1
    max_tokens: Optional[int] = 500

@app.post('/chat/completion')
async def completion(req: ChatCompletionRequest):
    if req.temperature < 0:
        return JSONResponse(content={"error": "FREEZING!!!"}, status_code=400)
    elif req.temperature > 2:
        return JSONResponse(content={"error": "BURNING!!!"}, status_code=400)

    try:
        response = model.completion(
            model=req.model,
            user_content=req.user_content,
            hyperparams={
                "temperature": req.temperature,
                "max_tokens": req.max_tokens
            }
        )
        return JSONResponse(content={"content": response})
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    uvicorn.run("main:app", host="0.0.0.0", port=port, log_level="debug")