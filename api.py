import requests
import json
import random
import time
from datetime import datetime

# URL de l'API Loki (remplacez par l'URL de votre instance Loki)
LOKI_URL = "http://localhost:3100/loki/api/v1/push"

# Génération d'un log aléatoire au format spécifié
def generate_log_entry():
    log_types = ["pull_request", "commit", "issue"]
    
    log = {
        "streams": [
            {
                "stream": {
                    "job": "example_job"
                },
                "values": []
            }
        ]
    }
    
    for _ in range(10):  # Nombre de logs à envoyer dans chaque requête
        log_entry = {
            "id": random.randint(1000000000000, 9999999999999),
            "lat": random.uniform(-90, 90),
            "lng": random.uniform(-180, 180),
            "type": random.choice(log_types),
            "timestamp": datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%fZ')
        }
        
        log["streams"][0]["values"].append([
            str(int(time.time() * 1000000000)),  # Timestamp pour Loki en nanosecondes
            json.dumps(log_entry)  # Le log sous forme JSON
        ])
    
    return log

# Fonction pour envoyer les logs à Loki
def send_logs_to_loki():
    logs = generate_log_entry()
    response = requests.post(LOKI_URL, data=json.dumps(logs), headers={"Content-Type": "application/json"})
    
    if response.status_code == 204:
        print("Logs envoyés avec succès à Loki.")
    else:
        print(f"Erreur lors de l'envoi des logs à Loki : {response.status_code} - {response.text}")

# Envoi des logs toutes les 5 secondes
while True:
    send_logs_to_loki()
    time.sleep(5)  # Attente de 5 secondes avant d'envoyer les logs suivants
