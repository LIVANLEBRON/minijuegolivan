import requests
import os
from PIL import Image
from io import BytesIO

# Lista de URLs de imágenes y sus nombres de archivo
game_images = {
    'shell-shockers': 'https://i.imgur.com/2NqK3Zt.jpg',  # Shell Shockers gameplay
    'venge-io': 'https://i.imgur.com/YwL5ZRq.jpg',  # Venge.io screenshot
    'war-brokers': 'https://i.imgur.com/QX3d4Kp.jpg',  # War Brokers action
    'ninja-clash': 'https://i.imgur.com/L8f6nHm.jpg',  # Ninja Clash Heroes
    'time-shooter': 'https://i.imgur.com/P9mK4Rw.jpg',  # Time Shooter 2
    'pixel-warfare': 'https://i.imgur.com/vZr7WxB.jpg',  # Pixel Warfare
    '1v1-lol': 'https://i.imgur.com/nD8hZL7.jpg',  # 1v1.LOL building
    'zombs-royale': 'https://i.imgur.com/K4mLZ9q.jpg',  # Zombs Royale action
    'surviv-io': 'https://i.imgur.com/JfK8v5M.jpg',  # Surviv.io battle
    'table-tennis': 'https://i.imgur.com/RmXfzY6.jpg',  # Table Tennis World Cup
    'words-of-wonders': 'https://i.imgur.com/Hs9LMNQ.jpg',  # Words of Wonders puzzle
    'kirka-io': 'https://i.imgur.com/Tc4hpVB.jpg'  # Kirka.io FPS
}

def download_and_save_image(url, game_name):
    try:
        # Agregar User-Agent para evitar bloqueos
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            # Crear el nombre del archivo
            filename = f"{game_name}.jpg"
            
            # Abrir la imagen desde los bytes
            img = Image.open(BytesIO(response.content))
            
            # Convertir a RGB si es necesario
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Redimensionar la imagen a 300x300 manteniendo la proporción
            size = (300, 300)
            img.thumbnail(size, Image.Resampling.LANCZOS)
            
            # Crear un fondo negro del tamaño deseado
            background = Image.new('RGB', size, (0, 0, 0))
            
            # Calcular la posición para centrar la imagen
            pos = ((size[0] - img.size[0]) // 2, (size[1] - img.size[1]) // 2)
            
            # Pegar la imagen en el fondo
            background.paste(img, pos)
            
            # Guardar la imagen final
            background.save(filename, 'JPEG', quality=85)
            print(f'Imagen guardada: {filename}')
        else:
            print(f'Error descargando {game_name}: Status code {response.status_code}')
    except Exception as e:
        print(f'Error procesando {game_name}: {str(e)}')

# Crear directorio si no existe
if not os.path.exists('images'):
    os.makedirs('images')

# Descargar cada imagen
for game_name, url in game_images.items():
    filepath = os.path.join('images', f"{game_name}.jpg")
    download_and_save_image(url, game_name)
