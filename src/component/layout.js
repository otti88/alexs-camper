import * as React from 'react'
import { Link } from 'gatsby'
import { menubar, menuitem, menuitemlink } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
        <title>{pageTitle}</title>
        <h2>Alexs Camper</h2>
        <ul className={menubar} >
            <li className={menuitem}><Link className={menuitemlink} to="/">Home</Link></li>
            <li className={menuitem}><Link className={menuitemlink} to="/infos">Informationen</Link></li>
            <li className={menuitem}><Link className={menuitemlink} to="/galery">Galerie</Link></li>
            <li className={menuitem}><Link className={menuitemlink} to="/calendar">Buchen</Link></li>
            <li className={menuitem}><Link className={menuitemlink} to="/terms">Mietbedingungen</Link></li>
        </ul>
        <h3>{pageTitle}</h3>
        {children}
        <p>Impressum und Kontakt</p>
    </main>
  )
}
export default Layout