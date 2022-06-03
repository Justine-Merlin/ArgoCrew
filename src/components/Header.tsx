type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header">
      <img src="./img/argo-boat.png" alt="Argo" />
      <div>
        <h1>Les argonautes</h1>
        <p>Construisez votre équipage</p>
      </div>
    </div>
  )
}

export default Header