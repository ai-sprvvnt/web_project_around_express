# web_project_around_express

## Descripción del proyecto

Este proyecto consiste en el desarrollo del backend para la aplicación **Around The U.S.**, utilizando **Node.js**, **Express** y **MongoDB**.

El servidor expone una API RESTful para gestionar usuarios y tarjetas, permitiendo crear, consultar, actualizar y eliminar información almacenada en una base de datos MongoDB.

---

## Funcionalidad

El proyecto implementa las siguientes rutas:

### Usuarios

- `GET /users` — devuelve todos los usuarios.
- `GET /users/:userId` — devuelve un usuario por su `_id`.
- `POST /users` — crea un nuevo usuario.
- `PATCH /users/me` — actualiza el perfil del usuario actual.
- `PATCH /users/me/avatar` — actualiza el avatar del usuario actual.

### Tarjetas

- `GET /cards` — devuelve todas las tarjetas.
- `POST /cards` — crea una nueva tarjeta.
- `DELETE /cards/:cardId` — elimina una tarjeta por su `_id`.
- `PUT /cards/:cardId/likes` — agrega un like a una tarjeta.
- `DELETE /cards/:cardId/likes` — elimina un like de una tarjeta.

---

## Tecnologías y herramientas utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Nodemon**
- **ESLint** con configuración basada en **Airbnb**
- **EditorConfig**

---

## Estructura del proyecto

```bash
web_project_around_express/
├── controllers/
│   ├── cards.js
│   └── users.js
├── models/
│   ├── card.js
│   └── user.js
├── routes/
│   ├── cards.js
│   └── users.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── app.js
├── package.json
└── README.md
```

Instalación y uso

1. Clonar el repositorio
   git clone https://github.com/ai-sprvvnt/web_project_around_express.git
   cd web_project_around_express
2. Instalar dependencias
   npm install
3. Asegurarse de que MongoDB esté corriendo

El proyecto se conecta a la base de datos local:

mongodb://localhost:27017/aroundb 4. Ejecutar el servidor

Modo producción:

npm run start

Modo desarrollo con recarga automática:

npm run dev

El servidor se ejecuta en:

http://localhost:3000
Manejo de errores

El servidor devuelve los siguientes códigos de estado:

400 — datos inválidos enviados en la solicitud.
404 — recurso solicitado no encontrado.
500 — ha ocurrido un error en el servidor.

Las respuestas de error se devuelven en formato JSON con la propiedad:

{
"message": "Descripción del error"
}
Validaciones

Los esquemas incluyen validaciones para:

longitud mínima y máxima de campos name y about
URL válida en avatar
URL válida en link
campos obligatorios
uso de ObjectId para relaciones entre documentos
Notas

Actualmente, el proyecto utiliza un middleware temporal para simular la autorización del usuario mediante req.user, asignando un \_id fijo a cada solicitud. Esta solución es temporal y será reemplazada en un sprint posterior por un sistema de autorización real.

Autor
Felipe Garcia
ed.felipe.gn@gmail.com
