//view chat grupal
export const ChatGroup = () => {
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <div class="container">
    <div class="chat-window">
        <div class="chat-header">
            <h2>Chat Grupal</h2>
        </div>
        <div class="chat-messages" id="chat-messages">
            <!-- Aquí se mostrarán los mensajes -->
        </div>
        <div class="chat-input">
            <input type="text" id="message-input" placeholder="Escribe un mensaje...">
            <button id="send-button">Enviar</button>
        </div>
    </div>
</div>
    `;

    /* Aplicar estilos CSS
    div.style.maxWidth = '800px';
    div.style.margin = '20px auto';
    div.style.backgroundColor = '#fff';
    div.style.padding = '20px';
    div.style.borderRadius = '8px';
    div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    div.style.textAlign = 'center';
    div.querySelector('h1').style.color = 'white';
    div.querySelectorAll('.detail').forEach((detail) => {
        detail.style.marginBottom = '10px';
        detail.querySelector('label').style.fontWeight = 'bold';
        detail.querySelector('label').style.color = 'white';
        detail.querySelector('span').style.color = 'white';
    });*/

    return div2;
};