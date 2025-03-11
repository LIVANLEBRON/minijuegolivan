import requests
import os
from urllib.parse import urljoin

# Lista de juegos y sus URLs de imagen
games = {
    'shell-shockers': 'https://shellshock.io/img/logo.png',
    'venge-io': 'https://venge.io/img/logo.png',
    '1v1-lol': 'https://1v1.lol/assets/images/logo.png',
    'zombs-royale': 'https://zombsroyale.io/img/logo.png',
    'surviv-io': 'https://surviv.io/img/logo.png',
    'kirka-io': 'https://kirka.io/assets/logo.png',
}

# Directorio donde guardar las imágenes
image_dir = 'images'

# Crear directorio si no existe
if not os.path.exists(image_dir):
    os.makedirs(image_dir)

# Descargar cada imagen
for game_name, url in games.items():
    try:
        response = requests.get(url)
        if response.status_code == 200:
            # Guardar la imagen
            file_path = os.path.join(image_dir, f'{game_name}.jpg')
            with open(file_path, 'wb') as f:
                f.write(response.content)
            print(f'Descargada imagen para {game_name}')
        else:
            print(f'Error descargando {game_name}: Status code {response.status_code}')
    except Exception as e:
        print(f'Error descargando {game_name}: {str(e)}')
