import { FaGithub } from 'react-icons/fa'
import './footer.css'
export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CAITLIN</a>
      <ul className='permalinks'>
        <li><a href="#" aria-label="Navigate to home">Home</a></li>
        <li><a href="#about" aria-label="Navigate to about section">About</a></li>
        <li><a href="#experience" aria-label="Navigate to experience section">Experience</a></li>
        <li><a href="#portfolio" aria-label="Navigate to portfolio section">Portfolio</a></li>
        <li><a href="#contact" aria-label="Navigate to contact me section">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/csisilli/' aria-label="Visit Caitlin's LinkedIn profile">Linkdln</a>
        <a href="mailto:caitlinsisilli@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send email to caitlinsisilli@gmail.com">Email</a>
        <a href='https://github.com/csisilli' aria-label="Visit Caitlin's GitHub profile" > <FaGithub/>&nbsp;&nbsp;GitHub  </a> 
      </div>
      <div className="footer__copyright">
        <small>&copy; Caitlin Sisilli Portfolio</small>
      </div>
    </footer>
  )
}
export default Footer