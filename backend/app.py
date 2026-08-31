import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

load_dotenv()

# Puxa os dados de forma segura
EMAIL_USUARIO = os.getenv('EMAIL_USER')
SENHA_EMAIL = os.getenv('EMAIL_PASS')

EMAIL_DESTINO = os.getenv('EMAIL_DESTINO')

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({"status": "API online", "message": "Backend rodando perfeitamente!"})

@app.route('/api/contato', methods=['POST'])
def receber_contato():
    dados = request.get_json()
    
    nome = dados.get('nome')
    email_remetente = dados.get('email')
    mensagem_texto = dados.get('mensagem')
    
    # Validação básica
    if not nome or not email_remetente or not mensagem_texto:
        return jsonify({"erro": "Todos os campos são obrigatórios."}), 400
        
    # Construção do E-mail
    msg = EmailMessage()
    msg['Subject'] = f"Novo Contato do Portfólio: {nome}"
    msg['From'] = EMAIL_DESTINO
    msg['To'] = EMAIL_DESTINO  # Você está enviando para você mesmo
    
    conteudo_email = f"""
    Você recebeu uma nova mensagem através do seu portfólio!
    
    De: {nome}
    E-mail para resposta: {email_remetente}
    
    Mensagem:
    {mensagem_texto}
    """
    
    msg.set_content(conteudo_email)
    
    # Envio do E-mail via SMTP do Gmail
    try:
        # Conecta ao servidor do Gmail usando SSL (porta 465)
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_DESTINO, SENHA_DO_EMAIL)
            smtp.send_message(msg)
            
        print(f"Sucesso: Email de {nome} enviado!")
        return jsonify({
            "sucesso": True, 
            "mensagem": "Sua mensagem foi enviada com sucesso! Retornarei em breve."
        }), 200
        
    except Exception as e:
        print(f"Erro ao enviar email: {e}")
        return jsonify({
            "erro": "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)