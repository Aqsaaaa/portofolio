import { motion } from "framer-motion";

function ContactSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center" id="contact">
            <motion.div initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 max-lg:p-8 lg:p-20 glass">
                <div className='justify-center border-2 border-white rounded-2xl bg-transparent bg-neutral-800 bg-opacity-50 backdrop-filter backdrop-blur-md'>
                    <form className="space-y-4 p-6">
                        <div className='flex justify-center items-center my-8'>
                            <h1 className='text-white text-4xl'>Get in touch</h1>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="name" className="block text-white">Name</label>
                            <input type="name" id="name" name="name" className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white" />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="email" className="block text-white">Email address</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white" />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="message" className="block text-white">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white"></textarea>
                        </div>

                        <button type="submit" className="w-full px-4 py-2 bg-cyan-400 text-white rounded-md">Submit</button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactSection;