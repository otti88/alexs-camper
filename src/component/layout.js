import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
        <title>{pageTitle}</title>
        <h2>Alexs Camper</h2>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/infos">Informationen</Link></li>
                <li><Link to="/galery">Galerie</Link></li>
                <li><Link to="/calendar">Buchen</Link></li>
                <li><Link to="/terms">Mietbedingungen</Link></li>
            </ul>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
        <p>Impressum und Kontakt</p>
    </main>
  )
}
export default Layout