import MemberCard from "./MemberCard"
import { Member } from '../types';
type Props = {
  members: Member[]
}

const MemberList = ({ members }: Props) => {
  return (
    <div className="member-list-container">
      <div className="box-inner">
        <div className='members-list'>
          {members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemberList