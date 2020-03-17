import React from 'react';
import './styles.scss';
import Resume from '../../fixtures/Shanghao(Keith)Li-resume.docx'

const AboutMe = () => {

  return (
    <div className='about-me-wrapper'>
      <div className='about-me-title'>About Me</div>
      <div className='information-wrapper'>
        <div className='about-me-name'>Name:</div>
        <div className='about-me-email'>Email:</div>
        <div className='about-me-phone'>Phone:</div>
        <div className='about-me-note'>Note:</div>
        <div className='about-me-resume'>Resume:</div>

        <div className='about-me-name-keith'>Shanghao (Keith) Li</div>
        <div className='about-me-email-keith'>keithli9395@gmail.com</div>
        <div className='about-me-phone-keith'>343-988-3668</div>
        <div className='about-me-note-keith'>Passionate about life and coding & A big fan of Toronto Raptors!!</div>
        <a className='about-me-resume-keith'
           href={Resume} download='Shanghao-Keith-Li-resume.docx'>
          Download My Resume (DOCX, 25KB)
        </a>
      </div>

    </div>
  )
};


export default AboutMe;