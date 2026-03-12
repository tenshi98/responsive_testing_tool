# ResponsiveLab — Device Preview

> Herramienta de previsualización responsiva que simula distintos dispositivos (móviles, tablets y escritorios) en el navegador, sin necesidad de servidores ni dependencias externas.

---

## 📋 Tabla de Contenidos

1. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
2. [Características](#-características)
3. [Requisitos](#-requisitos)
4. [Configuración](#-configuración)
5. [Cómo Ejecutar el Proyecto](#-cómo-ejecutar-el-proyecto)
6. [Ejemplos de Uso](#-ejemplos-de-uso)
7. [Estructura de Carpetas](#-estructura-de-carpetas)
8. [Explicación de Módulos](#-explicación-de-módulos)
9. [Solución de Problemas](#-solución-de-problemas)
10. [Notas Adicionales](#-notas-adicionales)

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|---|---|---|
| HTML5 | — | Estructura de la interfaz |
| CSS3 (Vanilla) | — | Estilos, variables CSS y animaciones |
| JavaScript (Vanilla ES6+) | — | Lógica de interacción y control del iframe |
| Google Fonts | — | Tipografías `Syne` (display) y `Space Mono` (monoespaciado) |

> No se utiliza ningún framework ni librería externa. El proyecto es 100% estático.

---

## ✨ Características

- 📱 **Vista previa en dispositivos predefinidos**: iPhone SE, iPhone 14, iPhone Plus, Android, iPad, iPad Air, iPad Pro, Laptop y monitor HD.
- 📐 **Tamaño personalizado**: campos de ancho y alto para definir resoluciones arbitrarias.
- 🔄 **Rotación de pantalla**: alterna entre modo portrait y landscape con un solo clic.
- 🔍 **Control de zoom**: ajusta el nivel de escala del dispositivo simulado (30 % – 200 %).
- 🌐 **Carga de URLs**: introduce cualquier ruta local o URL y previsualízala dentro del simulador.
- 🖥 **Interfaz oscura premium**: diseño dark mode con acentos de color y textura de ruido SVG.
- ℹ️ **Info strip**: muestra en tiempo real el nombre del dispositivo y la resolución activa.
- 💡 **Indicador de scroll disponible**: notificación emergente al cargar una URL en el iframe.

---

## ✅ Requisitos

- **Navegador web moderno** compatible con:
  - `iframe` con origen local
  - CSS Custom Properties (`var()`)
  - ES6+ (`let`, `const`, arrow functions, template literals)
- **Servidor local** (recomendado) para evitar restricciones de seguridad (`X-Frame-Options`, CORS) al cargar páginas externas.

> **Navegadores recomendados**: Google Chrome 90+, Mozilla Firefox 90+, Microsoft Edge 90+, Safari 15+.

---

## ⚙️ Configuración

El proyecto no requiere instalación de dependencias ni procesos de compilación. Sin embargo, se recomienda ejecutarlo desde un servidor local para garantizar la carga correcta del iframe.

### URL de prueba por defecto

El campo de URL viene precargado con:

```
testing/index.html
```

Puedes modificar este valor por defecto directamente en `index.html`, línea 23:

```html
<input id="url-input" type="url" placeholder="testing/index.html" value="testing/index.html" ... />
```

### Dispositivo activo por defecto

El botón **iPhone 14** (390 × 844 px) es el dispositivo activo al iniciar. Para cambiar el dispositivo inicial, modifica el atributo `class="device-btn active"` en el botón deseado dentro de `index.html`.

---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# Navega a la raíz del proyecto
/responsive_testing_tool

# Abre el archivo index.html con un doble click
index.html
```



---

## 💡 Ejemplos de Uso

### 1. Previsualizar una página propia

1. Coloca tu archivo HTML en la carpeta `testing/` (o en cualquier ruta del proyecto).
2. Inicia el servidor local.
3. En el campo de URL escribe la ruta relativa: `testing/mi-pagina.html`
4. Haz clic en **▶ Cargar**.

### 2. Simular un iPhone SE

1. Haz clic en el botón **SE** en la barra de dispositivos.
2. La vista previa cambiará a 375 × 667 px con la carcasa de teléfono.

### 3. Usar una resolución personalizada

1. En los campos numéricos de la barra de herramientas, escribe el ancho y el alto deseados.
2. Haz clic en **Aplicar**.
3. El tipo de carcasa (teléfono / tablet / escritorio) se asignará automáticamente según el ancho.

### 4. Rotar el dispositivo

- Haz clic en el botón de **rotación** (ícono de flechas circulares) para alternar entre portrait y landscape.

### 5. Ajustar el zoom

- Haz clic en **−** o **+** junto al indicador de porcentaje para reducir o ampliar la vista simulada.

---

## 📁 Estructura de Carpetas

```
responsive_testing_tool/
│
├── index.html              # Aplicación principal (interfaz completa)
│
├── files/
│   ├── style.css           # Estilos globales, variables CSS y diseño de carcasas
│   └── javascript.js       # Lógica de dispositivos, zoom, rotación y carga de URL
│
└── testing/
    └── index.html          # Página de ejemplo para pruebas del iframe
```

---

## 🧩 Explicación de Módulos

### `index.html` — Aplicación principal

Contiene toda la estructura HTML de la herramienta:

| Sección | Descripción |
|---|---|
| `<header>` | Logo, barra de URL y botón **▶ Cargar** |
| `.toolbar` | Botones de dispositivos predefinidos, separadores, campos de tamaño personalizado, rotación y zoom |
| `<main>` | Contenedor de `#device-shell` con el iframe de previsualización y el info strip |
| `.scroll-hint` | Notificación flotante que informa que el iframe tiene scroll disponible |

---

### `files/style.css` — Estilos y diseño visual

Define el sistema de diseño completo de la herramienta:

| Elemento | Descripción |
|---|---|
| `:root` | Variables CSS de colores (`--accent`, `--bg`, `--surface`, etc.) y tipografías |
| `body::before` | Textura de ruido SVG superpuesta para efecto visual premium |
| `header` / `.url-bar` | Estilos del encabezado sticky con barra de URL interactiva |
| `.toolbar` | Estilos de la barra de herramientas y botones de dispositivos |
| `.shell-phone` / `.shell-tablet` / `.shell-desktop` | Carcasas CSS de cada tipo de dispositivo con bordes y sombras realistas |
| `.info-strip` / `.info-chip` | Indicadores de resolución y nombre del dispositivo activo |
| `.zoom-wrap` | Contenedor con `transform-origin` para el control de zoom |
| `.scroll-hint` | Notificación inferior derecha con animación de opacidad |
| `@media (max-width: 700px)` | Ajustes responsivos del propio panel de control |

---

### `files/javascript.js` — Lógica de la aplicación

Controla toda la interactividad de la herramienta:

| Función | Descripción |
|---|---|
| `loadURL()` | Lee la URL del input y la asigna como `src` del iframe; oculta el estado vacío |
| `setDevice(w, h, type, label)` | Cambia el dispositivo activo: actualiza dimensiones, carcasa y etiquetas |
| `applyCustom()` | Lee los campos numéricos, detecta el tipo de dispositivo según el ancho e invoca `applyFrame()` |
| `toggleRotate()` | Invierte el estado de rotación y llama a `applyFrame()` |
| `applyFrame()` | Aplica las dimensiones actuales al iframe y actualiza todas las etiquetas de información |
| `adjustZoom(delta)` | Incrementa o decrementa el zoom (entre 0.3× y 2×) y actualiza el porcentaje visible |
| `showScrollHint()` | Muestra la notificación de scroll durante 3 segundos y la oculta con una transición |

---

### `testing/index.html` — Página de prueba

Archivo HTML mínimo usado como contenido de ejemplo dentro del iframe. Sirve como punto de partida para probar tus propias páginas: simplemente reemplaza su contenido o agrega nuevos archivos en la carpeta `testing/`.

---

## 🔧 Solución de Problemas

### El iframe no carga la página

**Causa más común**: estás abriendo el archivo directamente con `file://` en lugar de un servidor local.

**Solución**: usa uno de los métodos descritos en [Cómo Ejecutar el Proyecto](#-cómo-ejecutar-el-proyecto).

---

### Se muestra el mensaje "Contenido bloqueado" o pantalla en blanco

**Causa**: la URL cargada tiene una cabecera `X-Frame-Options: DENY` o `Content-Security-Policy` que impide incrustarse en un iframe.

**Solución**: solo funciona con páginas propias o que permitan ser embebidas. Para sitios externos, usa las herramientas de desarrollo de cada navegador.

---

### Los botones de dispositivo no cambian el tamaño

**Causa posible**: JavaScript deshabilitado en el navegador.

**Solución**: verifica que `files/javascript.js` esté cargando correctamente abriendo la consola del navegador (`F12` → pestaña **Console**).

---

### La tipografía no se muestra correctamente

**Causa**: sin conexión a Internet, Google Fonts no está disponible.

**Solución**: descarga e incluye localmente las fuentes `Syne` y `Space Mono`, o cambia las fuentes en `style.css` por alternativas del sistema (ej. `sans-serif`, `monospace`).

---

### El zoom mueve el contenido fuera de la pantalla

**Causa**: al reducir mucho el zoom, el `transform-origin: top center` puede dejar el dispositivo parcialmente fuera de la vista.

**Solución**: usa el scroll horizontal/vertical del contenedor principal, o aumenta el zoom hasta que el dispositivo quede centrado.

---

## 📝 Notas Adicionales

- **Sin dependencias externas**: el proyecto solo depende de Google Fonts (CDN), que puede reemplazarse fácilmente por fuentes locales si se necesita uso offline.
- **Extensible**: para agregar nuevos dispositivos predefinidos, añade un botón `.device-btn` en `index.html` con la llamada `onclick="setDevice(ancho, alto, 'tipo', 'Nombre')"` siguiendo el patrón existente.
- **Página de prueba**: coloca tus archivos HTML en la carpeta `testing/` y escribe su ruta en el campo de URL para previsualizarlos rápidamente.
- **Compatibilidad con URLs externas**: algunas páginas externas bloquean la incrustación vía iframe por razones de seguridad. Esto es una limitación del navegador, no de la herramienta.
- **Diseño responsivo del propio panel**: la barra de herramientas se adapta a pantallas pequeñas gracias al media query incluido en `style.css`.
- **Sin cookies ni almacenamiento local**: la herramienta no guarda ningún dato entre sesiones; el estado se reinicia al recargar la página.

---
