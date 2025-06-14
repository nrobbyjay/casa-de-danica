"use client";
export default function Hero(){
    return(
        <>
            <section className="hero-section d-flex justify-content-center align-items-center text-center">
                <div className="container text-white">
                    <h1 className="display-4">Pride of the Philippines</h1>
                    <p className="lead">A paradise for relaxation and adventure</p>
                    <a href="#contact" className="btn btn-primary btn-lg">Book Your Stay</a>
                </div>
            </section>

            <style jsx>{`
                .hero-section {
                    background: url("/img/hero.jpg") no-repeat center center;
                    background-size: cover;
                    height: 100vh;
                    position: relative;
                }

                .hero-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text readability */
                }

                .hero-section .container {
                    position: relative;
                    z-index: 2;
                }            
            `}

            </style>
        </>

    )
}