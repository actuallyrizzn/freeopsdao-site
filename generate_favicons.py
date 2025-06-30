from PIL import Image
import os

SRC = 'public/assets/images/fodai-logo.png'
DST_DIR = 'public/assets/images/'
SIZES = [16, 32, 48, 64, 180, 192, 512]

img = Image.open(SRC).convert('RGBA')

# Generate PNGs
for size in SIZES:
    out = img.resize((size, size), Image.LANCZOS)
    out.save(os.path.join(DST_DIR, f'favicon-{size}x{size}.png'))

# Generate ICO (multi-size)
ico_sizes = [(16,16), (32,32), (48,48), (64,64)]
img.save(os.path.join(DST_DIR, 'favicon.ico'), format='ICO', sizes=ico_sizes)

print('Favicons generated.') 