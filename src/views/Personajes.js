export const Personajes = () => {
    const div3 = document.createElement('div');
    div3.innerHTML = `
    <div class="container">
        <h1 class="title">Detalles del Personaje</h1>
        <div class="character-details">
            <div class="detail">
                <label for="nombre" class="detail-label">Nombre:</label>
                <span id="nombre" class="detail-value">Nombre del personaje</span>
            </div>
            <div class="detail">
                <label for="edad" class="detail-label">Edad:</label>
                <span id="edad" class="detail-value">Edad del personaje</span>
            </div>
            <div class="detail">
                <label for="ocupacion" class="detail-label">Ocupación:</label>
                <span id="ocupacion" class="detail-value">Ocupación del personaje</span>
            </div>
            <div class="detail">
                <label for="descripcion" class="detail-label">Descripción:</label>
                <p id="descripcion" class="detail-description">Descripción del personaje</p>
            </div>
            <!-- Puedes agregar más detalles según sea necesario -->
        </div>
    </div>
    `;

    div3.classList.add('personaje-container');

    return div3;
};
