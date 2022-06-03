import MemberCard from "./MemberCard"
import { Member } from '../types';
import { useEffect, useRef } from "react";
type Props = {
  members: Member[];
  handleDelete: (e: React.SyntheticEvent, member: Member) => void;
}

const MemberList = ({ members, handleDelete }: Props) => {
  let isMobile = useRef(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      isMobile.current = true;
    }
  }, [])

  return (
    <div className="member-list-container">
      <div className="box-inner">
        <div className='members-list'>
          {members.map((member) => (
            <MemberCard key={member._id} member={member} handleDelete={handleDelete} isMobile={isMobile.current} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemberList