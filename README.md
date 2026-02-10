# Abrizo - Sitio Web

Este es el sitio web para **Abrizo**, la marca de polvorones artesanales.

## Estructura del Proyecto

- `index.html`: Página principal (Landing Page).
- `historia.html`: Nuestra historia y origen.
- `catalogo.html`: Catálogo de productos con enlaces a WhatsApp.
- `styles.css`: Estilos visuales (colores, tipografía, animaciones).
- `script.js`: Efectos de partículas (azúcar) y lógica de la página.
- `assets/`: Carpeta para imágenes (actualmente usa placeholders de Unsplash).

## Cómo subir a GitHub Pages

1. **Crea un repositorio en GitHub**:
   - Ve a [GitHub.com](https://github.com) y crea un nuevo repositorio llamado `abrizo-web` (o similar).
   - Asegúrate de que sea "Public".

2. **Sube los archivos**:
   - Si tienes Git instalado:
     ```bash
     git init
     git add .
     git commit -m "Versión inicial del sitio Abrizo"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/abrizo-web.git
     git push -u origin main
     ```
   - O usa la opción "Upload files" en la web de GitHub y arrastra todos los archivos de esta carpeta.

3. **Activar GitHub Pages**:
   - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
   - En el menú lateral izquierdo, busca la sección **Pages**.
   - En "Source", selecciona `Deploy from a branch`.
   - En "Branch", elige `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.

4. **¡Listo!**
   - En unos minutos, GitHub te dará un enlace (ej: `https://tu-usuario.github.io/abrizo-web/`) donde tu sitio estará vivo.

## Personalización

- **Imágenes**: Reemplaza las imágenes de Unsplash en los archivos HTML con tus propias fotos reales de los polvorones. Guárdalas en la carpeta `assets/images/` y actualiza las rutas (ej: `src="assets/images/mis-polvorones.jpg"`).
- **WhatsApp**: Edita el número de teléfono en `script.js` (Línea 86) para que los mensajes lleguen a tu celular real.
