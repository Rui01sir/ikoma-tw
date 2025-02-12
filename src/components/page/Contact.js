import React, { useState, useEffect } from 'react';
import CountrySelect from '../database/CountrySelect';
import CountryCodeSelect from '../database/CountryCodeSelect';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    position: '',
    phoneCode: '+1',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (typeof window.grecaptcha === 'undefined') {
        alert('Google reCAPTCHA script not loaded. Please try again later.');
        return;
      }
  
      const recaptchaToken = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute('6Ldn3aYqAAAAADKfHyrBl5pI3XOnWRD9eYlPm9_k', { action: 'submit' })
            .then(resolve)
            .catch(reject);
        });
      });
  
      console.log('reCAPTCHA token:', recaptchaToken);
      if (!recaptchaToken) {
        alert('Please complete the reCAPTCHA verification.');
        return;
      }
  
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append('g-recaptcha-response', recaptchaToken);
  
      const response = await fetch('https://formspree.io/f/xeoelzol', {
        method: 'POST',
        body: formDataToSend,
        headers: { Accept: 'application/json' },
      });
  
      console.log('Formspree response:', response);
  
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          country: '',
          position: '',
          phoneCode: '+1',
          phoneNumber: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Detailed error:', error);
      alert('An unexpected error occurred: ' + error.message);
    }
  };
  

  useEffect(() => {
    // 確保 reCAPTCHA 初始化時沒有問題
    const checkRecaptcha = () => {
      if (typeof window.grecaptcha === 'undefined') {
        console.error('Google reCAPTCHA script not loaded.');
      } else {
        console.log('Google reCAPTCHA script loaded successfully.');
      }
    };

    checkRecaptcha();
    window.scrollTo(0, 0);
  }, []);
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/a4k8x-94bmd.webp`} alt="contact-banner"></img>
            </div>
        <div className="contact">
            <div className="contact-page">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">NAME<span className="required">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="YOUR NAME"
                      />
                    </div>                
                    <div className="form-group__content">
                      <div className='form-group__country'>
                        <label htmlFor="country">COUNTRY<span className="required">*</span></label>
                        <CountrySelect formData={formData} handleChange={handleChange}/>
                      </div>                    
                      <div className='form-group__position'>
                        <label htmlFor="position">POSITION TITLE<span className="required">*</span></label>
                        <select id="position" name="position" value={formData.position} onChange={handleChange} required>                                          
                          <option value="">SELECT POSITION</option>
                          {/* <option value="boss">Boss</option> */}
                          <option value="G.M. Executive Assistant">G.M. Executive Assistant</option>
                          <option value="Staff">Staff</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneCode">PHONE NUMBER<span className="required">*</span></label>
                      <div className="phone-number">
                      <CountryCodeSelect value={formData.phoneCode} onChange={handleChange}/>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder="PHONE NUMBER"
                      />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">EMAIL<span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="EMAIL"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">YOUR MESSAGE<span className="required">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please leave your message and WhatsApp ID so we can contact you."
                      ></textarea>
                    </div>
                    <button className='submit-btn' type="submit">SUBMIT
                      <img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next-box"></img>
                    </button>
                </form>
                </div>
                <div className="contact-add">
                    {/* <div className="contact-add__img">
                        <img src={`${process.env.PUBLIC_URL}/img/avhqr-aqfsd.webp`} alt="contact-add-img"></img>
                    </div> */}
                    <div className="contact-add__text">
                        <p>
                        <a
                        href="https://maps.app.goo.gl/c4GWNf7Px4qRdEic9"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >No.20 Lien Cheng,Shing Ren Li,Pate City,Taoyuan,Taiwan R.O.C.</a></p>
                        <p>Tel : <a href="tel:+88633659985">+886-3-3659985</a></p>
                        <p>Fax : <a href="fax:+88633653739">+886-3-3653739</a></p>
                        <p>Email : <a href="mailto:ikoma@ikoma-tw.com">ikoma@ikoma-tw.com</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;