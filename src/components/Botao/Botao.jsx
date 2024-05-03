
import './Botao.css'

function Botao({ titulobotao, ativo, onClick }) {
    return (
        <button className={`botao ${ativo ? 'ativo' : ''}`} onClick={onClick}>
            {titulobotao}
        </button>
    );
}

export default Botao