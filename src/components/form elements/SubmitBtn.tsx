import React from 'react'
import { NewMember } from '../../types';

type Props = {
    newMember: NewMember;
    errorMessage: {
        nameError: string,
        qualifierError: string
    };
    handleSubmit: (e: React.SyntheticEvent) => void;
}

const SubmitBtn = ({ newMember, errorMessage, handleSubmit }: Props) => {
    return (
        <>
            {
                newMember.name === '' || errorMessage.nameError !== '' ?
                    <p className='new-qualifier-btn desactived'>Ajouter à l'équipage</p>
                    :
                    <button className='new-qualifier-btn submit-btn' onClick={(e) => handleSubmit(e)} >Ajouter à l'équipage</button>
            }
        </>
    )
}

export default SubmitBtn