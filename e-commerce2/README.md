<h1 align="center">
🛒 E-Commerce React
</h1>

<p align="center">

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Firestore](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-61DAFB?logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</p>

<p align="center">

Aplicación E-Commerce desarrollada con **React**, **Vite** y **Firebase Firestore**, que permite explorar productos, filtrarlos por categorías, visualizar su detalle, administrar un carrito de compras y generar órdenes de compra de forma dinámica.

</p>

---

# 📚 Índice

- [📖 Descripción](#-descripción)
- [✨ Características principales](#-características-principales)
- [🛠 Tecnologías utilizadas](#-tecnologías-utilizadas)
- [🏛 Arquitectura de la aplicación](#-arquitectura-de-la-aplicación)
- [📂 Estructura del proyecto](#-estructura-del-proyecto)

---

# 📖 Descripción

Este proyecto consiste en una aplicación **E-Commerce** desarrollada utilizando **React** como biblioteca principal para la construcción de interfaces de usuario y **Firebase Firestore** como base de datos NoSQL.

La aplicación simula el funcionamiento de una tienda online, permitiendo al usuario navegar entre distintas categorías, consultar el detalle de cada producto, agregar artículos al carrito de compras y completar un proceso de compra que genera una orden almacenada en Firestore.

El proyecto fue desarrollado siguiendo una arquitectura basada en componentes reutilizables, gestión global del estado mediante **Context API** y navegación utilizando **React Router DOM**, priorizando la modularidad, reutilización de código y escalabilidad.

---

# ✨ Características principales

## 🛍️ Gestión de productos

- Visualización de todos los productos.
- Filtrado por categorías.
- Consulta del detalle de cada producto.
- Información obtenida dinámicamente desde Firestore.
- Actualización automática de la interfaz al cambiar de categoría.

---

## 🛒 Carrito de compras

- Agregar productos.
- Eliminar productos individuales.
- Vaciar completamente el carrito.
- Actualización automática del total.
- Cálculo dinámico de cantidades.
- Contador de productos en la barra de navegación.

---

## 💳 Checkout

- Formulario de compra.
- Validación de datos.
- Generación automática de una orden.
- Almacenamiento de la compra en Firestore.
- Consulta posterior mediante el ID de la orden.

---

## 🔥 Firebase Firestore

La aplicación utiliza **Cloud Firestore** como sistema de persistencia de datos.

Desde Firestore se gestionan:

- Productos.
- Categorías.
- Stock.
- Órdenes de compra.

Durante el proceso de compra el stock disponible se actualiza automáticamente para reflejar la nueva cantidad de unidades disponibles.

---

## 🎨 Interfaz

La aplicación presenta una interfaz moderna y responsive construida mediante **Tailwind CSS** y **DaisyUI**.

Incluye:

- Navbar fija.
- Sidebar de categorías.
- Cards de productos.
- Vista de detalle.
- Formularios estilizados.
- Componentes reutilizables.
- Diseño adaptable para distintos tamaños de pantalla.

---

# 🛠 Tecnologías utilizadas

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 19 |
| **Build Tool** | Vite |
| **Base de datos** | Firebase Firestore |
| **Enrutamiento** | React Router DOM |
| **Estado Global** | Context API |
| **Estilos** | Tailwind CSS + DaisyUI |
| **Iconografía** | React Icons |
| **Lenguaje** | JavaScript (ES6+) |

---

# 🏛 Arquitectura de la aplicación

La aplicación fue desarrollada utilizando una arquitectura basada en componentes reutilizables.

```text
                    App

                     │

         ┌───────────┴────────────┐

         ▼                        ▼

     Navbar                  Sidebar

         │                        │

         └───────────┬────────────┘

                     ▼

               React Router

                     │

      ┌──────────────┼────────────────┐

      ▼              ▼                ▼

 ItemList      ItemDetail         Cart

                     │

                     ▼

               Context API

                     │

                     ▼

                Firestore
```

Esta organización permite desacoplar la lógica de negocio de la interfaz, facilitando el mantenimiento y la incorporación de nuevas funcionalidades.

---

# 📂 Estructura del proyecto

```text
📦 e-commerce2

│

├── 📂 public

│

├── 📂 src

│   ├── 📂 assets
│   ├── 📂 components
│   ├── 📂 Context
│   ├── 📂 Firebase
│   ├── 📂 Hook
│   ├── 📂 Routes
│   ├── 📄 App.jsx
│   ├── 📄 App.css
│   ├── 📄 index.css
│   └── 📄 main.jsx

│

├── 📄 package.json

├── 📄 vite.config.js

└── 📄 README.md
```

## Descripción de cada carpeta

| Carpeta | Función |
|----------|----------|
| **assets/** | Recursos estáticos como imágenes e íconos. |
| **components/** | Componentes reutilizables de la aplicación. |
| **Context/** | Gestión global del carrito mediante Context API. |
| **Firebase/** | Configuración y consultas a Firestore. |
| **Hook/** | Hooks personalizados utilizados por la aplicación. |
| **Routes/** | Configuración de React Router DOM. |
| **App.jsx** | Componente principal de la aplicación. |
| **main.jsx** | Punto de entrada del proyecto. |

---

# 🚀 Instalación y ejecución

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm
- Git

---

## Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar a la carpeta del proyecto:

```bash
cd e-commerce2
```

---

## Instalar dependencias

```bash
npm install
```

---

## Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Una vez iniciado el servidor podrás acceder desde:

```text
http://localhost:5173
```

> El puerto puede variar dependiendo de la configuración de Vite.

---

# 📦 Dependencias principales

| Dependencia | Función |
|-------------|----------|
| React | Construcción de la interfaz |
| React Router DOM | Navegación entre páginas |
| Firebase Firestore | Base de datos NoSQL |
| Context API | Estado global del carrito |
| Tailwind CSS | Estilos |
| DaisyUI | Componentes visuales |
| React Icons | Iconografía |
| Vite | Entorno de desarrollo y compilación |

---

# 📜 Scripts disponibles

| Script | Descripción |
|----------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Vite. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Permite visualizar la versión compilada localmente. |

---

# 🌐 Navegación de la aplicación

La aplicación utiliza **React Router DOM** para ofrecer una navegación dinámica sin necesidad de recargar la página.

## Rutas implementadas

| Ruta | Componente | Descripción |
|-------|------------|-------------|
| `/` | ItemListContainer | Muestra todos los productos disponibles. |
| `/categorias/:categoriaId` | ItemListContainer | Filtra productos según la categoría seleccionada. |
| `/item/:id` | ItemDetailContainer | Muestra el detalle completo de un producto. |
| `/cart` | Cart | Visualiza el carrito de compras. |
| `/checkout` | FormCheckOut | Formulario para finalizar la compra. |
| `/order` | OrderContainer | Búsqueda de órdenes de compra. |
| `/order/:orderId` | Order | Muestra la información de una orden específica. |
| `*` | NotFound | Página de error para rutas inexistentes. |

---

# 🛒 Flujo de navegación

```text
Inicio

 │

 ▼

Listado de Productos

 │

 ▼

Detalle del Producto

 │

 ▼

Agregar al Carrito

 │

 ▼

Carrito

 │

 ▼

Checkout

 │

 ▼

Orden Generada

 │

 ▼

Consulta de la Orden
```

Este flujo representa el recorrido completo que realiza un usuario desde que ingresa a la aplicación hasta la generación de una orden de compra.

---

# 🌍 Gestión del estado global

La aplicación utiliza **Context API** para administrar el carrito de compras de forma global.

Esto permite que cualquier componente pueda acceder al estado del carrito sin necesidad de enviar propiedades manualmente entre múltiples componentes.

El contexto centraliza operaciones como:

- Agregar productos.
- Eliminar productos.
- Vaciar el carrito.
- Calcular el total.
- Calcular la cantidad total de productos.
- Verificar si un producto ya existe en el carrito.

---

## Flujo del carrito

```text
Producto

    │

Agregar al carrito

    │

    ▼

CartContext

    │

    ▼

Actualización del estado

    │

    ▼

Navbar

Cart

Checkout
```

Gracias a Context API todos los componentes permanecen sincronizados automáticamente.

---

# 🔥 Integración con Firebase Firestore

La información de la tienda se almacena en **Cloud Firestore**, permitiendo mantener los datos persistentes y centralizados.

La aplicación realiza operaciones de lectura y escritura directamente sobre Firestore.

---

## Colecciones utilizadas

| Colección | Contenido |
|------------|-----------|
| **productos** | Catálogo de productos disponibles. |
| **orders** | Órdenes generadas por los usuarios. |

---

## Operaciones implementadas

### Productos

- Obtener todos los productos.
- Obtener un producto por ID.
- Filtrar productos por categoría.

---

### Órdenes

- Crear una nueva orden.
- Consultar una orden mediante su ID.
- Guardar los datos del comprador.
- Guardar los productos comprados.
- Guardar el total de la compra.

---

### Stock

Durante la confirmación de una compra la aplicación actualiza automáticamente el stock disponible de cada producto en Firestore.

Este proceso garantiza que la cantidad disponible permanezca sincronizada después de cada operación.

---

# 📦 Componentes principales

La aplicación está organizada en componentes reutilizables para facilitar el mantenimiento y la escalabilidad.

Entre los principales componentes se encuentran:

| Componente | Función |
|------------|----------|
| Navbar | Navegación principal y acceso al carrito. |
| Sidebar | Navegación por categorías. |
| ItemListContainer | Obtiene y muestra los productos. |
| Item | Tarjeta individual de producto. |
| ItemDetailContainer | Obtiene el detalle de un producto. |
| ItemDetail | Información detallada del producto. |
| ItemCount | Selector de cantidad. |
| Cart | Gestión del carrito de compras. |
| CartItem | Producto individual dentro del carrito. |
| FormCheckOut | Formulario para completar la compra. |
| Order | Visualización de una orden. |
| OrderContainer | Consulta de órdenes. |
| Loader | Indicador de carga durante operaciones asíncronas. |
| Footer | Pie de página de la aplicación. |

---

# ⚡ Experiencia de usuario

Durante el desarrollo se priorizó ofrecer una experiencia de usuario fluida mediante:

- Navegación sin recargas.
- Carga dinámica de información.
- Componentes reutilizables.
- Actualización inmediata del carrito.
- Diseño responsive.
- Organización visual mediante Sidebar.
- Iconografía consistente utilizando React Icons.
- Interfaz moderna gracias a Tailwind CSS y DaisyUI.

---

# 🔄 Flujo completo de una compra

El siguiente diagrama resume el recorrido que realiza un usuario desde que ingresa a la aplicación hasta que se genera una orden de compra en Firebase Firestore.

```text
                     Usuario
                        │
                        ▼
                Lista de Productos
                        │
                        ▼
               Selecciona un Producto
                        │
                        ▼
                 Detalle del Producto
                        │
                        ▼
               Selecciona la Cantidad
                        │
                        ▼
              Agregar al Carrito
                        │
                        ▼
                 Context API (Cart)
                        │
                        ▼
             Actualización del Navbar
                        │
                        ▼
              Visualización del Carrito
                        │
                        ▼
             Completar Checkout
                        │
                        ▼
          Generación de la Orden
                        │
                        ▼
           Firebase Firestore
          ┌─────────────┴─────────────┐
          ▼                           ▼
   Guarda la Orden          Actualiza el Stock
          │                           │
          └─────────────┬─────────────┘
                        ▼
          Confirmación de Compra
                        │
                        ▼
           Consulta mediante Order ID
```

Este flujo representa el recorrido principal de la aplicación y muestra cómo interactúan React, Context API y Firebase Firestore durante el proceso de compra.

# 🏗️ Decisiones de arquitectura

Durante el desarrollo del proyecto se priorizó la construcción de una aplicación organizada, escalable y fácil de mantener.

Para ello se aplicaron distintos principios de desarrollo, buscando separar correctamente las responsabilidades de cada componente y evitar la duplicación de código.

---

# 🧩 Arquitectura basada en componentes

React permite construir interfaces dividiendo la aplicación en componentes independientes.

Cada componente posee una responsabilidad específica y puede reutilizarse en diferentes partes del sistema.

```text
                    App

                     │

     ┌───────────────┼────────────────┐

     ▼               ▼                ▼

 Navbar          Sidebar         AppRoutes

                                     │

      ┌──────────────┼────────────────────────────┐

      ▼              ▼              ▼             ▼

 ItemList      ItemDetail        Cart       Checkout

                                     │

                                     ▼

                               Context API

                                     │

                                     ▼

                               Firebase
```

Esta organización permite desacoplar la lógica de la interfaz y facilita el crecimiento futuro de la aplicación.

---

# ⚙️ Organización del proyecto

La aplicación sigue una estructura modular donde cada carpeta posee una responsabilidad concreta.

- Componentes reutilizables.
- Hooks personalizados.
- Estado global centralizado.
- Configuración independiente de Firebase.
- Enrutamiento desacoplado.
- Recursos estáticos organizados.

Esta organización facilita el mantenimiento del código y permite incorporar nuevas funcionalidades sin afectar el resto del proyecto.

---

# 🎯 Funcionalidades implementadas

## 🛍️ Productos

- Listado dinámico de productos.
- Filtrado por categorías.
- Vista detallada.
- Consulta individual por ID.
- Información obtenida desde Firestore.

---

## 🛒 Carrito

- Agregar productos.
- Eliminar productos.
- Vaciar carrito.
- Calcular cantidades.
- Calcular importe total.
- Persistencia durante toda la navegación utilizando Context API.

---

## 💳 Checkout

- Formulario de compra.
- Validación de datos.
- Generación de orden.
- Actualización automática del stock.
- Confirmación de compra.

---

## 📄 Órdenes

- Consulta mediante ID.
- Visualización completa de la compra.
- Información del comprador.
- Productos adquiridos.
- Total abonado.

---

## 🌐 Navegación

- React Router DOM.
- Navegación SPA.
- Cambio entre rutas sin recargar la página.
- Página personalizada para rutas inexistentes (404).

---

# 💡 Principios aplicados

Durante el desarrollo del proyecto se aplicaron distintos principios de programación para mejorar la calidad del código.

- Separación de responsabilidades.
- Componentes reutilizables.
- Estado global centralizado.
- Código modular.
- Reutilización de Hooks.
- Escalabilidad.
- Organización por carpetas.
- Bajo acoplamiento entre componentes.

---

# 📱 Diseño Responsive

La interfaz fue diseñada para adaptarse correctamente a distintos tamaños de pantalla.

Se utilizaron las utilidades de Tailwind CSS y los componentes de DaisyUI para lograr una experiencia consistente tanto en dispositivos móviles como en escritorio.

Entre las características implementadas se destacan:

- Sidebar adaptable.
- Grid responsive.
- Cards flexibles.
- Navegación optimizada.
- Espaciado uniforme.
- Componentes reutilizables.

---

# 🚀 Posibles mejoras futuras

La arquitectura del proyecto permite incorporar nuevas funcionalidades de forma sencilla.

Algunas mejoras posibles son:

- Sistema de autenticación mediante Firebase Authentication.
- Panel de administración.
- Favoritos.
- Historial de compras.
- Buscador avanzado.
- Paginación.
- Sistema de reseñas.
- Integración con pasarelas de pago.
- Lista de deseos.
- Persistencia del carrito entre sesiones.
- Variables de entorno para la configuración de Firebase.
- Pruebas unitarias y de integración.
- Despliegue en producción mediante Vercel o Firebase Hosting.

---

# 📸 Capturas de la aplicación

Se recomienda agregar imágenes que muestren el funcionamiento de las principales pantallas.

Ejemplo:

```text
README/

├── home.png
├── categories.png
├── detail.png
├── cart.png
├── checkout.png
└── order.png
```

Luego pueden mostrarse utilizando Markdown.

```md
## 🏠 Inicio

![Inicio](./README/home.png)

---

## 📦 Detalle del producto

![Detalle](./README/detail.png)

---

## 🛒 Carrito

![Carrito](./README/cart.png)

---

## 💳 Checkout

![Checkout](./README/checkout.png)
```

---

# 📈 Roadmap

## ✔️ Funcionalidades implementadas

- React Router.
- Context API.
- Firebase Firestore.
- Carrito de compras.
- Checkout.
- Generación de órdenes.
- Actualización de stock.
- Consulta de órdenes.
- Diseño responsive.
- Componentes reutilizables.

---

## 🔜 Próximas funcionalidades

- Login.
- Registro de usuarios.
- Panel administrador.
- Favoritos.
- Historial de compras.
- Dashboard de ventas.

---

# 👨‍💻 Autor

**Emiliano Fioquetti**

Proyecto desarrollado como entrega final del curso de **React JS**, aplicando conceptos fundamentales como componentes reutilizables, React Router DOM, Context API, Firebase Firestore y consumo de datos en tiempo real.

---

# 🙌 Agradecimientos

A los profesores, tutores y compañeros del curso por el acompañamiento durante el aprendizaje y a la comunidad de React y Firebase por la excelente documentación disponible.

---

<div align="center">

## ⭐ ¡Gracias por visitar este proyecto!

Si este repositorio te resultó interesante o te sirvió como referencia para aprender React, no olvides dejar una ⭐ en GitHub.

</div>