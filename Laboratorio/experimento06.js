const botaoabrir = document.getElementById("btnabrirmodal")
const modalcontainer = document.getElementById("modalcontainer")

botaoabrir.addEventListener("click", function(){
    modalcontainer.innerHTML  = `
        <div class="modal-fundo">
            <div class="modal-caixa">
                <h2>Aviso!</h2>
                <p> Este modal inteiro foi criado 
                pelo JavaScript.</p>
                <button id="btnfechamodal">Fecha</button>
            </div>
        </div>`;

        const botaofechar = document.getElementById("btnfechamodal");
        botaofechar.addEventListener("click", function(){
            modalcontainer.innerHTML = "";
        })
})