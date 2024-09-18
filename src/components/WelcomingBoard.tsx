import React from 'react';

export default function WelcomingBoard() {
    return(
        <section>
            <div className="mx-auto max-w-screen-xl mt-20  mb-4 px-3 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-black p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Are you a student seeking a remote job or internship opportunity?
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                You've come to the right place! With JobScout, you'll discover all the latest opportunities in Germany's thriving tech industry, helping you take the next step in your career.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}