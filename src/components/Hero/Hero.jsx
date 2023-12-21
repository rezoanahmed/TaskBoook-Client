import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Empower Your Productivity with TaskBoook</h1>
                        <div className="mb-5">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Elevate Your Efficiency Today!',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Let the Magic of Productivity Begin!',
                                    1000,
                                    'Organize, Prioritize, Achieve.',
                                    1000,
                                    'Your Task, Your Rules, Your Success!',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <Link to='/login' className="btn btn-success">Let's Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;