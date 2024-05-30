from openai import OpenAI
from typing import Optional

class ChatOpenAI:
    def __init__(self, system_msg) -> None:
        self.client = OpenAI()
        self.system_msg = system_msg
        self.modelName = None
        self.params = {
            "temperature": 1,
            "max_tokens": 500
        }

    def completion(self, model: str, user_content: str, hyperparams: Optional[dict] = None):
        if not model:
            raise ValueError("Model id is missing")
        
        if not user_content:
            raise ValueError("No input prompt message")
        
        full_msg = [
            { "role": "system", "content": self.system_msg },
            { "role": "user", "content": user_content }
        ]
        if hyperparams:
            self.params["temperature"] = hyperparams["temperature"]
            self.params["max_tokens"] = hyperparams["max_tokens"]
        self.modelName = model
        
        try:
            response = self.client.chat.completions.create(
                model=self.modelName,
                messages=full_msg,
                temperature=self.params["temperature"],
                max_tokens=self.params["max_tokens"]
            )
            return response.choices[0].message.content
        except Exception as e:
            raise ValueError(f"Chat creation failed, no response from model {model}, {e}")
