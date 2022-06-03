import React, { useState } from 'react'
import { ErrorMessage, Member, NewMember } from '../types';
import QualifierInput from './form elements/QualifierInput';
import NewQualfierBtn from './form elements/NewQualfierBtn';
import SubmitBtn from './form elements/SubmitBtn';

type Props = {
  newMember: NewMember;
  setNewMember: React.Dispatch<React.SetStateAction<NewMember>>;
  handleSubmit: (e: React.SyntheticEvent) => void;
  members: Member[];
  errorMessage: ErrorMessage;
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>;
}

const AddToListForm = ({ newMember, setNewMember, handleSubmit, members, errorMessage, setErrorMessage }: Props) => {

  const [addQualifierBtn, setAddQualifierBtn] = useState(false);
  const [qualifier, setQualifier] = useState('');

  // Verify qualifier before add it to newMember qualifiers list and set appropriate error message
  const addQualifierToList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (qualifier !== '') {
      setNewMember({ ...newMember, qualifiers: [...newMember.qualifiers, qualifier] });
      setAddQualifierBtn(false);
      setErrorMessage({ ...errorMessage, qualifierError: '' });
      setQualifier('');
    } else {
      setErrorMessage({ ...errorMessage, qualifierError: 'Veuillez entrer un adjectif avant de valider.' })
    }
  }

  // Verify if name is valid or already exist and set appropriate error message
  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value.trim();
    setNewMember({ ...newMember, name: e.target.value })
    if (name !== '') {
      setErrorMessage({ ...errorMessage, nameError: '' })
    }
    if (name === '' && errorMessage.nameError === '') {
      setErrorMessage({ ...errorMessage, nameError: 'Veuillez entrer un nom.' })
    }
    for (let i = 0; i <= members.length; i++) {
      if (members[i].name.toLowerCase() === name.toLowerCase()) {
        setErrorMessage({ ...errorMessage, nameError: 'Ce nom est déjà pris.' })
      }
    }
  }

  return (
    <div className='add-member-section'>
      <h3>Ajouter un membre</h3>
      <form>
        <label htmlFor="name">Nom </label>
        <input
          type="text"
          id='name'
          name='name'
          className='form-input'
          value={newMember.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleName(e)}
        />
        <span className='alert-message'>{errorMessage.nameError !== '' ? errorMessage.nameError : null}</span>
        <label>Adjectifs</label>
        <ul>
          {
            newMember.qualifiers.map((qualifier, i) => (
              <li key={i}>{qualifier}</li>
            ))
          }
        </ul>
        {
          addQualifierBtn ?
            <div>
              <QualifierInput setQualifier={setQualifier} addQualifierToList={addQualifierToList} />
              {errorMessage.qualifierError !== '' ? <span className='alert-message' >{errorMessage.qualifierError}</span> : null}
            </div>
            :
            newMember.qualifiers.length <= 2 ?
              <NewQualfierBtn setAddQualifierBtn={setAddQualifierBtn} />
              :
              <span className='alert-message'>Nombre maximum d'adjectifs atteint</span>
        }
        <SubmitBtn newMember={newMember} errorMessage={errorMessage} handleSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default AddToListForm