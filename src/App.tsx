import { useEffect, useState } from 'react';
import AddToListForm from './components/AddToListForm';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import MemberList from './components/MemberList';
import Separator from './components/Separator';
import { addMember, deleteMember, getMembers, qualifiersToString } from './functions';
import { ErrorMessage, Member, NewMember } from './types';

function App() {

  const [members, setMembers] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState<NewMember>({
    name: '',
    qualifiers: []
  })
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    nameError: 'Veuillez entrer un nom.',
    qualifierError: '',
  })

  const fetchData = async () => {
    const response = await getMembers();
    setMembers(response);
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const answer = window.confirm(`Souhaitez-vous ajouter ${newMember.name.trim()} ${qualifiersToString(newMember)} à votre équipage ?`);
    if (answer) {
      await addMember(newMember);
      setNewMember({
        name: '',
        qualifiers: []
      })
      setErrorMessage({ ...errorMessage, nameError: 'Veuillez entrer un nom.' });
      fetchData();
    }
  }
  const handleDelete = async (e: React.SyntheticEvent, member: Member) => {
    e.preventDefault();
    const answer = window.confirm(`Souhaitez-vous supprimer ${member.name} de votre équipage ?`);
    if (answer) {
      await deleteMember(member._id);
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header />
      <Body members={members}>
        <MemberList members={members} handleDelete={handleDelete} />
        <Separator />
        {
          members.length === 50 ?
            <h3 className='alert-message'>Nombre de membres atteint !</h3>
            :
            <AddToListForm
              newMember={newMember}
              setNewMember={setNewMember}
              handleSubmit={handleSubmit}
              members={members}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
        }

      </Body>
      <Footer />
    </div>
  );
}

export default App;