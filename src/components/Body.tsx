import { Member } from "../types";

type Props = {
  children: JSX.Element | JSX.Element[];
  members: Member[]
}

const Body = ({ children, members }: Props) => {
  return (
    <div className="main-section" >
      <img className="background-image" src="https://media.istockphoto.com/vectors/trireme-floating-on-the-sea-waves-intage-vector-engraving-vector-id653749756?k=20&m=653749756&s=612x612&w=0&h=jvojASiiDf_VcVqq_rrrTdTXx-_u3f857NMQwVfYUIE=" alt="Illustration de l'Argonaute" />
      <h2>L'équipage</h2>
      <p>Nombre de membres : {members.length}</p>
      {children}
    </div>
  )
}

export default Body