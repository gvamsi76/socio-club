import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
    const sendEmail=(e)=>{
        console.log(e.name);
        e.preventDefault();

        emailjs.sendForm('service_mng1g0l', 'template_mpa8mir', e.target, 'CaYrJ0antm_V8Tch-')
        .then((result) => {
            console.log(result.text);
            alert("Form submitted Successfully!")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            alert("Oops! Something went wrong.");
        });
    }
  return (
    <div className="mt-5 conatiner">
    <div className="text-center">
        <h3 className="text-primary">How Can We Help You?</h3>
        <p className="lead">Feel free to ask us anything</p>
    </div>
    <div className=" d-flex align-items-center justify-content-center">
        <div className="bg-white col-md-4">
            <form className="p-4 rounded shadow-md" onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" name="name" className="form-control" placeholder="name" required />
                </div>
                <div className="mt-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="text" name="email" className="form-control" placeholder="email" required />
                </div>
                <div className="mt-3 mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" cols="20" rows="6" className="form-control"
                        placeholder="message" ></textarea>
                </div>
                <button className="btn btn-primary">
                    Submit Form
                </button>
            </form>
        </div>
    </div>
</div>
  )
};

export default Contactus;