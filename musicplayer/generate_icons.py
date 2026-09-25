import math
from PIL import Image, ImageDraw

def create_icon(size):
    # Create image with transparent background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer rounded square / squircle background
    radius = size // 5
    # Gradient simulation with concentric rounded rectangles
    for i in range(size // 2):
        factor = i / (size // 2)
        # Deep Indigo to Rich Violet gradient
        r = int(24 + factor * 70)
        g = int(20 + factor * 20)
        b = int(60 + factor * 160)
        draw.rounded_rectangle([i, i, size - i, size - i], radius=max(2, radius - i), fill=(r, g, b, 255))
        if i >= 15:
            break
            
    # Inner background
    draw.rounded_rectangle([15, 15, size - 15, size - 15], radius=radius - 10, fill=(15, 23, 42, 255))
    
    # Center Vinyl Record
    center = size // 2
    vinyl_radius = int(size * 0.38)
    
    # Outer vinyl ring
    draw.ellipse([center - vinyl_radius, center - vinyl_radius, center + vinyl_radius, center + vinyl_radius], fill=(20, 24, 39, 255), outline=(99, 102, 241, 180), width=max(2, size // 60))
    
    # Vinyl grooves
    for groove in range(int(vinyl_radius * 0.45), int(vinyl_radius * 0.95), max(4, size // 40)):
        draw.ellipse([center - groove, center - groove, center + groove, center + groove], outline=(40, 48, 70, 150), width=1)
        
    # Vinyl label center (Gradient circle)
    label_r = int(vinyl_radius * 0.42)
    draw.ellipse([center - label_r, center - label_r, center + label_r, center + label_r], fill=(99, 102, 241, 255), outline=(168, 85, 247, 255), width=max(2, size // 80))
    
    # Center spindle hole
    hole_r = int(vinyl_radius * 0.12)
    draw.ellipse([center - hole_r, center - hole_r, center + hole_r, center + hole_r], fill=(15, 23, 42, 255), outline=(255, 255, 255, 220), width=max(1, size // 120))
    
    # Soundwaves / musical note accents
    wave_r = int(vinyl_radius * 0.7)
    for angle_deg in range(30, 151, 30):
        rad = math.radians(angle_deg)
        x1 = center + int(math.cos(rad) * (vinyl_radius + 4))
        y1 = center + int(math.sin(rad) * (vinyl_radius + 4))
        x2 = center + int(math.cos(rad) * (vinyl_radius + size // 25))
        y2 = center + int(math.sin(rad) * (vinyl_radius + size // 25))
        draw.line([x1, y1, x2, y2], fill=(129, 140, 248, 220), width=max(2, size // 90))
        
    for angle_deg in range(210, 331, 30):
        rad = math.radians(angle_deg)
        x1 = center + int(math.cos(rad) * (vinyl_radius + 4))
        y1 = center + int(math.sin(rad) * (vinyl_radius + 4))
        x2 = center + int(math.cos(rad) * (vinyl_radius + size // 25))
        y2 = center + int(math.sin(rad) * (vinyl_radius + size // 25))
        draw.line([x1, y1, x2, y2], fill=(192, 132, 252, 220), width=max(2, size // 90))

    return img

create_icon(192).save('icons/icon-192.png', 'PNG')
create_icon(512).save('icons/icon-512.png', 'PNG')
create_icon(64).save('icons/favicon.png', 'PNG')
print("Generated icons successfully!")
