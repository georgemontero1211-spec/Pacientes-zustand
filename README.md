# Seguimiento de Pacientes Veterinaria

Aplicación web para que una veterinaria registre y administre a sus pacientes. Permite dar de alta a una mascota con los datos de su propietario y sus síntomas, editarla y eliminarla. Los datos se guardan en el navegador, así que siguen ahí al recargar la página.

## Funcionalidades

- Formulario de registro con validación (React Hook Form):
  - Nombre del paciente
  - Propietario
  - Email (con validación de formato)
  - Fecha de alta
  - Síntomas
- Listado de pacientes registrados.
- Edición y eliminación de pacientes.
- Notificaciones de confirmación con React Toastify.
- Persistencia en `localStorage` mediante el middleware `persist` de Zustand.

## Tecnologías

- React + TypeScript + Vite
- Zustand (estado global con `persist` y `devtools`)
- React Hook Form
- React Toastify
- Tailwind CSS

## Estructura

```
src/
├── components/   # PatientForm, PatientList, PatientDetails, Error…
├── types/        # Tipos Patient y DraftPatient
├── store.ts      # Store de Zustand (alta, edición, borrado)
└── App.tsx
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

| Script            | Descripción                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Servidor de desarrollo            |
| `npm run build`   | Compila TypeScript y genera build |
| `npm run preview` | Sirve el build de producción      |
| `npm run lint`    | Ejecuta ESLint                    |
