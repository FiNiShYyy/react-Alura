import './DropdownList.css'

const DropdownList = (props) => {

    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="" hidden>Selecione um time...</option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )


}

export default DropdownList