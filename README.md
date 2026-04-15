# Genius Landings

Panel interno de Genius Agency para gestionar las landing pages de cada cliente. Cada landing es un archivo HTML independiente, creado y mantenido manualmente por el equipo de desarrollo.

## Contexto del proyecto

Genius Agency trabaja con marcas LATAM de distintos rubros. Para cada campaña o lanzamiento, el equipo crea una landing page en HTML y CSS puro que se entrega directamente al cliente o se publica en un servidor estático.

Este repositorio centraliza todas esas landings bajo una interfaz de navegación interna. El panel permite que cualquier integrante del equipo encuentre, revise y edite las landings existentes sin necesidad de recordar rutas de archivo.

**Clientes activos:**

| Cliente | Rubro | Landings |
|---|---|---|
| SueñoSimple | Colchones | 1 |
| TechStore | Electrónica | 2 |
| ModaLatam | Moda femenina | 2 |

## Estructura del proyecto

```
genius-landings/
├── index.html                        Inicio — lista de clientes
├── css/
│   └── styles.css                    Estilos compartidos del panel
├── suenosimple/
│   ├── index.html                    Landings de SueñoSimple
│   └── economica-pro.html            Landing: Economica Pro
├── techstore/
│   ├── index.html                    Landings de TechStore
│   ├── black-friday.html             Landing: Black Friday 2026
│   └── summer-tech.html              Landing: Summer Tech Sale
├── modalatam/
│   ├── index.html                    Landings de ModaLatam
│   ├── nueva-coleccion.html          Landing: Colección Invierno 2026
│   └── cyber-monday.html             Landing: Cyber Monday 2025
├── README.md
├── .gitignore
└── requerimientos.html               Solo para el coordinador
```

## Cómo ver el panel

No se requiere servidor ni herramienta adicional. Abrí directamente el archivo en el navegador:

1. Descargá o cloná el repositorio
2. Navegá a la carpeta del proyecto
3. Abrí `index.html` en tu navegador (doble clic o arrastrar al navegador)
4. Desde ahí podés navegar a cada cliente y acceder a cada landing

Para ver una landing individual, podés abrirla directamente también. Por ejemplo: `suenosimple/economica-pro.html`.

## Cómo agregar una nueva landing

Cada landing es un archivo HTML independiente con sus propios estilos en un bloque `<style>` interno. No depende de ningún framework ni de `styles.css`.

**Pasos:**

1. Creá el archivo HTML dentro de la carpeta del cliente correspondiente.
   Ejemplo: `suenosimple/mundial-2026.html`

2. Escribí el HTML de la landing. Podés tomar como referencia cualquiera de las landings existentes del mismo cliente para mantener consistencia visual.

3. Agregá la barra de retorno al comienzo del archivo para facilitar la navegación:

```html
<div class="back-bar">
  <a href="index.html">← Volver a SueñoSimple</a>
</div>
```

4. Abrí el archivo `index.html` del cliente (por ejemplo `suenosimple/index.html`) y agregá una tarjeta nueva dentro del `<div class="landing-grid">`:

```html
<div class="landing-card">
  <div class="landing-card-top">
    <div>
      <h3>Mundial 2026 — SueñoSimple</h3>
      <span class="landing-type">Evento especial</span>
    </div>
    <span class="badge badge-active">Activa</span>
  </div>
  <p class="landing-date">Publicada el DD mmm AAAA</p>
  <a href="mundial-2026.html" class="btn btn-outline">Ver landing</a>
</div>
```

5. Si el cliente aún no figura en `index.html` (home), agregá una tarjeta nueva al `<div class="client-grid">` del archivo raíz.

## Estados de las landings

Usá el badge correspondiente en cada tarjeta del panel:

| Estado | Clase CSS | Significado |
|---|---|---|
| Activa | `badge-active` | Landing publicada y en producción |
| Borrador | `badge-draft` | En preparación, no publicada |
| Finalizada | `badge-inactive` | Campaña terminada, se mantiene como referencia |

## Cómo obtener el proyecto

**Clonar con Git:**
```bash
git clone <url-del-repositorio>
```

**Descargar ZIP:**
En GitHub, hacé clic en el botón verde "Code" y luego en "Download ZIP". Descomprimí el archivo y abrí `index.html`.

## Equipo

Genius Agency — Área de Desarrollo Frontend  
Uso interno. No distribuir fuera del equipo.
