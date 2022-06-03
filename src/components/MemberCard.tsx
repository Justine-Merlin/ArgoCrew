import { Member } from '../types'
import { qualifiersToString } from '../functions';
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react';
type Props = {
  member: Member;
  handleDelete: (e: React.SyntheticEvent, member: Member) => void;
  isMobile: boolean;
}

const MemberCard = ({ member, handleDelete, isMobile }: Props) => {

  const [isHover, setIsHover] = useState(false);

  let qualifiers = qualifiersToString(member);


  return (
    <div className="member-card" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <img src="https://e7.pngegg.com/pngimages/184/261/png-clipart-drawing-sword-sword-cross-cartoon.png" alt="Deux épées de pirates croisées" />
      <div>
        <h4>{member.name}</h4>
        <p className='card-qualifiers'>{qualifiers}</p>
      </div>
      <button className={isMobile || isHover ? 'delete-btn show-on' : 'delete-btn'} onClick={(e) => handleDelete(e, member)}><FaTrash /></button>
    </div>
  )
}

export default MemberCard