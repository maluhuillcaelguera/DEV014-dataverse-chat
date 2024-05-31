# Dataverse-Chat

## Índice
1. [Introducción](#introducción)
2. [Resumen del Proyecto](#resumen-del-proyecto)
3. [Funcionalidades](#funcionalidades)
4. [Historias de Usuario y Criterios de Aceptación](#historias-de-usuario-y-criterios-de-aceptacion)
5. [Definición de Terminado](#definicion-de-terminado)
6. [Diseño de Interfaz](#diseño-de-interfaz)
7. [Responsividad](#responsividad)
8. [Uso de ChatGPT para Obtener Datos](#uso-de-chatgpt-para-obtener-datos)
9. [Lenguajes de Programación](#lenguajes-de-programacion)
10. [Herramientas Adicionales](#herramientas-adicionales)
11. [Cierre de Proyecto](#cierre-de-proyecto)

## Introducción
Bienvenid@ a Dataverse, tu guía virtual por el universo de "El Señor de los Anillos". Este proyecto, que es una versión mejorada del proyecto anterior, te permite explorar a los personajes más icónicos de la saga, filtrarlos, ordenarlos y realizar cálculos estadísticos sobre sus datos. Además, podrás interactuar con los personajes a través de un sistema de chat impulsado por la API de OpenAI, obteniendo respuestas personalizadas e informativas. La demo del proyecto está desplegada en Vercel.

## Resumen del Proyecto
El proyecto Dataverse-Chat convierte una aplicación desarrollada en Dataverse en una Single Page Application (SPA). La SPA mantiene funcionalidades de visualización, filtrado, ordenamiento y cálculo de estadísticas, añadiendo una vista para consultar información detallada de cada personaje/entidad. Además, permite la interacción con personajes/entidades a través de un sistema de chat impulsado por la API de OpenAI.

## Funcionalidades
1. **Desarrollar una SPA:**
   - Navegación entre vistas mediante un router.
   - Carga dinámica de vistas con JavaScript.
   - Actualización de la URL y el título del documento según la vista.

2. **Mantener Funcionalidades de Dataverse:**
   - Visualizar, filtrar, ordenar y calcular estadísticas de la data.

3. **Vista Detallada de Personajes/Entidades:**
   - Redirección a una vista específica con información detallada al hacer clic en una tarjeta.

4. **Interacción mediante Chat:**
   - Configuración de API Key para interactuar con la API de OpenAI.
   - Sistema de chat para conversar con personajes/entidades.

## Historias de Usuario y Criterios de Aceptación
### Historia de Usuario 1
**Como** usuaria, **quiero** visualizar, filtrar, ordenar y calcular estadísticas de la data, **para** obtener insights y detalles específicos.

**Criterios de Aceptación:**
- La data puede ser visualizada en forma de lista o tarjetas.
- Opciones de filtrado y ordenamiento disponibles.
- Funcionalidad para calcular estadísticas básicas (por ejemplo, promedio, máximo, mínimo).

### Historia de Usuario 2
**Como** usuaria, **quiero** ver información detallada de un personaje/entidad, **para** conocer más sobre su contribución e historia.

**Criterios de Aceptación:**
- Al hacer clic en una tarjeta, la aplicación redirige a una vista detallada.
- La URL y el título del documento se actualizan adecuadamente.

### Historia de Usuario 3
**Como** usuaria, **quiero** interactuar con un personaje/entidad a través de un chat, **para** obtener información personalizada sobre ellos.

**Criterios de Aceptación:**
- Posibilidad de configurar la API Key de OpenAI.
- Sistema de chat funcional que responde con información relevante y precisa.

## Definición de Terminado
- La aplicación debe ser una SPA completamente funcional.
- Implementación de enrutamiento y carga dinámica de vistas.
- Responsividad asegurada en todas las vistas.
- Funcionalidades de visualización, filtrado, ordenamiento y cálculo de estadísticas implementadas.
- Integración de la API de OpenAI para interacción mediante chat.
- Suite de pruebas unitarias para código asíncrono implementada y aprobada.

## Diseño de Interfaz
El diseño de la interfaz seguirá principios modernos y amigables al usuario, asegurando una experiencia intuitiva y accesible. Las vistas estarán organizadas de manera clara, con un menú de navegación visible para facilitar el acceso a diferentes secciones.

## Responsividad
La aplicación será completamente responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos. Esto se logrará mediante el uso de CSS flexible y técnicas de diseño adaptativo.

## Uso de ChatGPT para Obtener Datos
La integración con la API de OpenAI permitirá a las usuarias interactuar con personajes o entidades de la data. Esta funcionalidad se basará en la inteligencia artificial de OpenAI para proporcionar respuestas informativas y personalizadas.

## Lenguajes de Programación
- **JavaScript:** Para la lógica de la aplicación y la manipulación del DOM.
- **HTML/CSS:** Para estructurar y dar estilo a la aplicación.
- **Node.js:** Para el backend y la integración con la API de OpenAI.
- **React/Vue/Angular:** Para la creación de componentes y manejo del estado de la SPA.

## Herramientas Adicionales
- **React Router/Vue Router:** Para el manejo de rutas en la SPA.
- **Axios/Fetch:** Para realizar solicitudes HTTP asíncronas.
- **Jest/Mocha:** Para la creación de pruebas unitarias.
- **Bootstrap/TailwindCSS:** Para facilitar el desarrollo responsivo.

## Cierre de Proyecto
Al finalizar el proyecto, se entregará una SPA completamente funcional que permite la visualización, filtrado, ordenamiento y cálculo de estadísticas de la data, junto con una vista detallada de cada personaje y la capacidad de interactuar con ellos a través de un chat impulsado por la API de OpenAI. El proyecto incluirá documentación completa y una suite de pruebas unitarias para asegurar la calidad del código.
