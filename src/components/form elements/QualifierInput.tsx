import React from 'react'

type Props = {
    setQualifier: React.Dispatch<React.SetStateAction<string>>;
    addQualifierToList: (e: React.SyntheticEvent) => void;
}

const QualifierInput = ({ setQualifier, addQualifierToList }: Props) => {
    return (
        <div className='new-qualifier-container'>
            <input className='form-input' type="text" onChange={(e) => setQualifier(e.target.value)} />
            <button className='new-qualifier-btn' onClick={(e) => addQualifierToList(e)} >Ajouter</button>
        </div>
    )
}

export default QualifierInput