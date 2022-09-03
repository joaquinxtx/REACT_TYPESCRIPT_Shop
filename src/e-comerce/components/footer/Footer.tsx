import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='footerDiv1'>
                <h2>Descripcion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus quod fugit exercitationem dolores molestias et reprehenderit qui ut consequuntur nulla facilis iure sint eaque nihil nisi. Quasi, dolorum aliquid?</p>
            </div>
            <div className='footerDiv2'>
                <h2>Ayuda</h2>
                <li>¿Como realizar compra?</li>
                <li>¿En que consiste la pagina?</li>
                <li>Bugs y problemas</li>
            </div>
            <div className='footerDiv3'>
                <h2>Contacto</h2>
                <li>Linkedin</li>
                <li>GitHub</li>
                <li>Gmail</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </div>
        </div>
    )
}
