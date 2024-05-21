import requests
import json
from typing import Optional

class MemAgent:
    def __init__(self, auth_key: str):
        self.base_url = "http://localhost:8083"
        self.auth_key = auth_key
        self.headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": f"Bearer {self.auth_key}"
        }
    
    def get_role(self, role: str) -> Optional[list[dict]]:
        if role != "personas" and role != "humans":
            raise ValueError("Invalid role.")
        
        url = f"{self.base_url}/api/{role}"
        response = requests.get(url, headers=self.headers)

        roles = json.loads(response.text)[role]
        return roles
    
    def create_role(self, role: str, text: str, name: str) -> Optional[dict]:
        if not role or not text or not name:
            raise ValueError("Missing required parameters: role, text, and name must all be provided.")

        if role != "personas" and role != "humans":
            raise ValueError("Invalid role.")
        
        url = f"{self.base_url}api/{role}"
        payload = { "text": text, "name": name }
        response = requests.post(url, json=payload, headers=self.headers)

        return json.loads(response.text)
    
    def create_agent(self, name: str) -> str:
        if not name:
            raise ValueError("Missing required parameter: name")
        
        url = f"{self.base_url}/api/agents"

        payload = { "config": {"name": name}}

        response = requests.post(url, json=payload, headers=self.headers)
        agent = json.loads(response.text)["agent_state"]
        return agent["id"]
    
    def get_agents(self) -> list[dict]:

        url = f"{self.base_url}/api/agents"

        response = requests.get(url, headers=self.headers)
        agents = json.loads(response.text)["agents"]
        return agents
    
    def get_agent_memory(self, agent_id) -> dict:
        if not agent_id:
            raise ValueError("Missing required parameter: agent id")
        
        url = f"{self.base_url}/api/agents/{agent_id}/memory"
        response = requests.get(url, headers=self.headers)
        core_memory = json.loads(response.text)["core_memory"]
        return core_memory
    
    def delete_agent(self, agent_id: str):
        if not agent_id:
            raise ValueError("Missing required parameter: agent id")
        
        url = f"{self.base_url}/api/agents/{agent_id}"
        requests.delete(url, headers=self.headers)


    def send_messages(self, agent_id: str, message: str, name: Optional[str], stream: bool=False, role: str='user') -> str:
        if not agent_id or not message:
            raise ValueError("Missing required parameters: agent id and input message")
        
        url = f"{self.base_url}/api/agents/{agent_id}/messages"
        payload = {
            "role": role,
            "message": message,
            "name": name,
            "stream": stream
        }

        response = requests.post(url, json=payload, headers=self.headers)
        assistant_message = json.loads(response.text.split('data: ')[3])
        return assistant_message