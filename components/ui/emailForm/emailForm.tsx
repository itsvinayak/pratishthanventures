import React from 'react';


const EmailForm = () => {
    const handleSubmit = async (event: React.FormEvent ) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            firstName: (document.getElementById("firstName") as HTMLInputElement).value,
            lastName: (document.getElementById("lastName") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            mobile: (document.getElementById("mobile") as HTMLInputElement).value,
            query: (document.getElementById("query") as HTMLInputElement).value
        }
        // api call
        let emailApi = '/api/sendMail';
         
        
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit} className="row py-4 my-4">
            <div className="mb-3 col-lg-6">
                <label htmlFor="first name" className="form-label">Your First Name</label>
                <input type="text" id="firstName" className="form-control" />
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="last name" className="form-label">Your Last Name</label>
                <input type="text" id="lastName" className="form-control" />
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="your Email" className="form-label">Your Email address</label>
                <input type="email" id="email" className="form-control" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="your mobile" id="mobile" className="form-label">Mobile No. </label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-12">
                <label htmlFor="text" className="form-label">What would you like to discuss ?</label>
                <textarea id="query" className="form-control" rows={6} ></textarea>
            </div>
            <div className="mb-3 col-lg-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary col-lg-12">Submit</button>
            </div>
        </form>
    )
};


export default EmailForm;