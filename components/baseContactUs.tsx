import Link from "next/link";


const styling = {
    minHeight: "100vh"
};

const BaseContactUs = () => {
    return (
        <div style={styling} className="container p-lg-5 text-center">
            <h3>{`We're living it up in beautiful`} <b>Bangalore</b></h3>
            <hr className="my-4" />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8993519435026!2d77.58207571195952!3d12.914189987343379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157334f59545%3A0xccf50e7a046072ca!2sPratishthan%20Software%20Ventures%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1690112838802!5m2!1sen!2sin"
                max-width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                className="col-lg-12   mx-auto"
            >
            </iframe>
            <div className="m-lg-5">
                <div className="lead">
                    {`If it's a business problem that needs a technology solution, we're
                    there for you.`}
                    <br />
                    {`If it's an exciting career that you want to build across
                    technologies, we're there for you too!`}
                </div>
                <Link href="/contact" className="btn btn-lg btn-primary contact-btn m-5">Contact Us</Link>
            </div>
        </div>
    )
};


export default BaseContactUs;