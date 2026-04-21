# web_project_around_express

## 📌 Descripción

Este proyecto consiste en la creación de un servidor backend utilizando Node.js y Express para simular una API del proyecto "Alrededor de los EE. UU.".

El servidor proporciona rutas para obtener información de usuarios y tarjetas, utilizando archivos JSON como fuente de datos.

---

## 🚀 Funcionalidad

El servidor implementa las siguientes rutas:

- `GET /users`
  Devuelve un array JSON con todos los usuarios.

- `GET /cards`
  Devuelve un array JSON con todas las tarjetas.

- `GET /users/:id`
  Devuelve un usuario específico por su `_id`.
  Si el usuario no existe, devuelve:

  ```json
  { "message": "ID de usuario no encontrado" }
  ```

- Rutas inexistentes
  Devuelven:

  ```json
  { "message": "Recurso solicitado no encontrado" }
  ```

---

## 🛠️ Tecnologías y herramientas

- Node.js
- Express
- Nodemon (hot reload)
- ESLint (Airbnb style guide)
- EditorConfig
- Módulos nativos:
  - fs (lectura de archivos)
  - path (manejo de rutas)

---

## 📁 Estructura del proyecto

```
web_project_around_express/
│
├── data/
│   ├── users.json
│   └── cards.json
│
├── routes/
│   ├── users.js
│   └── cards.js
│
├── app.js
├── package.json
├── .gitignore
├── .editorconfig
├── .eslintrc
└── README.md
```

---

## ⚙️ Instalación y uso

1. Clonar el repositorio:

```
git clone https://github.com/ai-sprvvnt/web_project_around_express.git
```

2. Instalar dependencias:

```
npm install
```

3. Ejecutar el servidor:

Modo producción:

```
npm run start
```

Modo desarrollo (con hot reload):

```
npm run dev
```

El servidor se ejecuta en:

```
http://localhost:3000
```

---

## 🧪 Ejemplos de uso

Puedes probar las rutas en el navegador o con herramientas como Postman:

- http://localhost:3000/users
- http://localhost:3000/cards
- http://localhost:3000/users/8340d0ec33270a25f2413b69

---

## ⚠️ Manejo de errores

- 404 → recurso no encontrado
- 500 → error interno del servidor

Ejemplo:

```json
{ "message": "Recurso solicitado no encontrado" }
```

---

## 📌 Notas

Este proyecto utiliza archivos JSON como base de datos temporal.
En futuros desarrollos se integrará una base de datos real.

---

## 👤 Autor

Felipe Garcia
[ai.sprvvnt@gmail.com]
