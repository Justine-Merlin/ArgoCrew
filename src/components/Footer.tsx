import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>
      <p>Projet réalisé dans le cadre du "
        <span>Dev Tech Challenge</span>
        "  de la
        <a href="https://www.wildcodeschool.com/fr-FR"
          target="_blank"
          rel='noreferrer'> Wild Code School </a>
        - Justine Merlin, 2022.</p>
    </div>
  )
}

export default Footer