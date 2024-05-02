import './TextField.css'
import { useState } from 'react'

const TextField = (props) => {

    const placeholderModified = `${props.placeholder}...`

    const onWrite = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={onWrite} required={props.obrigatorio} placeholder={placeholderModified}/>
        </div>
    )

}

export default TextField