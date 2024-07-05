import Link from "next/link";
import { Reveal } from "./custom/reveal";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24">
            <div className="w-full max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Get In Touch
                </h2>
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                >
                    <br/>
                    <p className="leading-7">
                        If you&apos;d like to get in touch with me, feel free to reach out on LinkedIn or my email and I&apos;ll get back to you whenever I can.
                    </p>
                </Reveal>
                <div className="flex justify-center gap-4">
                    <div className="flex gap-4">
                        <Reveal initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}>
                            <a href="mailto:justinmiguel.rys03@gmail.com" target="_blank">
                                <MagicButton
                                    title="Contact Me"
                                    icon={<IoIosMail />}
                                    position="right"
                                />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
