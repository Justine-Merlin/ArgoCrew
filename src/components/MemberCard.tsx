import { Member } from '../types'
import { qualifiersToString } from '../functions';

type Props = {
  member: Member
}

const MemberCard = ({ member }: Props) => {
  let qualifiers = qualifiersToString(member);

  return (
    <div className="member-card" >
      <img src="https://e7.pngegg.com/pngimages/184/261/png-clipart-drawing-sword-sword-cross-cartoon.png" alt="Deux épées de pirates croisées" />
      <div>
        <h4>{member.name}</h4>
        <p className='card-qualifiers'>{qualifiers}</p>
      </div>
    </div>
  )
}

export default MemberCard