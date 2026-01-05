import CV from './assets/CaitlinResume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CaitlinResume.pdf" className='btn' aria-label="Download Caitlin Sisilli's Resume">Download Resume</a>
        <a href='#contact' className='btn btn-primary' aria-label="Navigate to contact section">Contact</a>
    </div>     
  )
}

export default CTA