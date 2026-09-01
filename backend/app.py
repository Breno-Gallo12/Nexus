import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Libera o acesso para o seu frontend na Vercel
CORS(app, resources={r"/*": {"origins": "*"}})

# Puxa as variáveis do Render
RESEND_API_KEY = os.getenv('RESEND_API_KEY')
EMAIL_DESTINO = os.getenv('EMAIL_DESTINO')

@app.route('/api/contato', methods=['POST'])
def receber_contato():
    try:
        dados = request.json
        nome = dados.get('nome')
        email_cliente = dados.get('email')
        mensagem = dados.get('mensagem')

        # Monta as informações que a API do Resend pede
        headers = {
            'Authorization': f'Bearer {RESEND_API_KEY}',
            'Content-Type': 'application/json'
        }
        
        # O Resend exige que o remetente seja esse 'onboarding' na conta gratuita
        payload = {
            "from": "Portfolio <onboarding@resend.dev>",
            "to": [EMAIL_DESTINO],
            "subject": f"Novo Contato: {nome}",
            "html": f"<h3>Novo contato do Portfólio!</h3><p><strong>Nome:</strong> {nome}</p><p><strong>Email do cliente:</strong> {email_cliente}</p><p><strong>Mensagem:</strong><br>{mensagem}</p>"
        }

        # Envia a requisição HTTP POST para o servidor do Resend
        resposta = requests.post('https://api.resend.com/emails', json=payload, headers=headers)

        if resposta.status_code in [200, 201]:
            return jsonify({"mensagem": "Mensagem enviada com sucesso!"}), 200
        else:
            return jsonify({"erro": "Erro no servidor de e-mail."}), 500

    except Exception as e:
        return jsonify({"erro": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)