import React from 'react'
import { FaPlus } from 'react-icons/fa'

type Props = {
    setAddQualifierBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewQualfierBtn = ({ setAddQualifierBtn }: Props) => {
    return (
        <button className='new-qualifier-btn' onClick={() => setAddQualifierBtn(true)}>
            <FaPlus />
            <span>Ajouter un adjectif</span>
        </button>
    )
}

export default NewQualfierBtn