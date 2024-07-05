import Link from "next/link";
import { Reveal } from "./custom/reveal";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export default function Contact() {
    return (
        <div className="h-100 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        {/* <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
       
        <Boxes />
        <section id="contact" className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24">
            <div className="w-full max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={cn("text-white relative z-20 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl")}>
                    Get In Touch
                </h2>
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                >
                    <br/>
                    <p className={cn("leading-7 text-s text-white relative z-20 scroll-m-20 tracking-tight")}>
                        If you&apos;d like to get in touch with me, feel free to reach out on email and I&apos;ll get back to you whenever I can.
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
     </div>
    );
}
