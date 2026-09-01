# Coffees & Barbers Co. — Landing Page

Landing page de una sola página para una barbería, inspirada en la paleta de colores
(verde salvia, negro y crema) y el logo circular del local (café + sombrero de bombín).

## Contenido

- `index.html` — estructura de la página (hero, servicios, nosotros, galería, testimonios, ubicación y formulario de reserva).
- `styles.css` — estilos, paleta de colores y responsive.
- `script.js` — menú móvil, animaciones al hacer scroll y formulario de reserva (demo, sin backend).
- `assets/logo.svg` — logo recreado en SVG a partir del diseño del local.

## Cómo verlo

Es un sitio estático, sin dependencias ni build. Basta con abrir `index.html` en el navegador,
o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
# o
python3 -m http.server
```

## Personalización

- Colores: variables CSS al inicio de `styles.css` (`--sage`, `--ink`, `--cream`, etc.).
- Textos, precios, horario y datos de contacto: directamente en `index.html`.
- El formulario de reserva es una demo visual; para producción hay que conectarlo a un
  backend, servicio de email o integración de WhatsApp real.
