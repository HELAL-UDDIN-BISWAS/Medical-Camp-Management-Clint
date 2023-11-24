
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { Avatar, Card } from "keep-react";

const ContactUs = () => {
    return (
        <div className="w-full text-center ">
            <div>
                <h2 className='text-3xl font-bold text-center my-7'>Contact Us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3 items-center my-10 justify-center text-center">
                <div >
                    <Card className="max-w-[250px] p-6">
                        <Card.Container className="flex items-center justify-center">
                            <p className="text-3xl">
                                <CgMail />
                            </p>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
                                <p>Mdhelal@gmail.com</p>
                               
                            </Card.Title>
                        </Card.Container>

                    </Card>
                </div>
                <div>
                    <Card className="max-w-[250px] p-6">
                        <Card.Container className="flex items-center justify-center">
                            <p>
                                <FaPhoneVolume />
                            </p>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
                                <p>+ 123456778</p>
                                <p>+01858179115</p>
                            </Card.Title>
                        </Card.Container>

                    </Card>
                </div>
                <div>
                    <Card className="max-w-[250px] p-6">
                        <Card.Container className="flex items-center justify-center">
                            <p>
                                <IoLocationOutline/>
                            </p>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
                                <p>Dhaka Bangladesh</p>
                            </Card.Title>
                        </Card.Container>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;