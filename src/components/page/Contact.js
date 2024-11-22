import React, { useState, useEffect  } from 'react';
import CountrySelect from '../database/CountrySelect'
import CountryCodeSelect from '../database/CountryCodeSelect'

function Contact(){
        const [formData, setFormData] = useState({
        name: '',
        country: '',
        position: '',
        phoneCode: '+1',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/manybkpo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset();
                window.location.reload();
            } else {
                const result = await response.json();
                console.error('Failed to submit the form:', result);
                alert('Failed to submit the form');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            alert('An unexpected error occurred!');
        }
    };

    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/aq7xm-hh20y.webp`} alt="contact-banner"></img>
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
                          <option value="boss">Boss</option>
                          <option value="Manager">Manager</option>
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
                        placeholder="WHAT DO YOU WHAT TO SAY"
                      ></textarea>
                    </div>
                    <button className='submit-btn' type="submit">SUBMIT
                      <img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next-box"></img>
                    </button>
                </form>
                </div>
                <div className="contact-add">
                    <div className="contact-add__img">
                        <img src={`${process.env.PUBLIC_URL}/img/am8bx-v2r8r.svg`} alt="contact-add-img"></img>
                    </div>
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
