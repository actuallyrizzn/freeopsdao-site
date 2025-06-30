from PIL import Image
import glob
import os

for f in glob.glob('public/assets/images/*.png'):
    im = Image.open(f)
    out_path = f.replace('.png', '.webp')
    im.save(out_path, 'WEBP', quality=85)
    print(f'Converted {f} -> {out_path}') 