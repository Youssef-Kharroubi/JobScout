import React from 'react';
interface JobDataProps {
    company_name: string;
    title: string;
    remote: string;
    location: string;
    job_types: string[];
    description: string;
    url: string;
    image_src:string;
}

const JobCards: React.FC<{ jobData: JobDataProps }> = ({ jobData }) => {
    const {
        company_name,
        title,
        url,
        location,
        description,
        remote,
        job_types = [],
        image_src
    } = jobData;


    const typeDisplay = job_types.length > 0 ? job_types[0] : 'N/A';

    return (
        <section>
            <a
                href={url}
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white shadow-lg hover:shadow-xl transition-shadow w-74 h-80 flex flex-col"
            >
        <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {title.length > 43 ? title.substring(0, title.indexOf('',45)) : title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-gray-600">By {company_name}</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt="Company logo"
                                    src={image_src}
                                    className="w-16 h-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <dl className="flex flex-wrap gap-4 mt-14 ml-10">
                            <div className="flex flex-col">
                                <dt className="text-sm font-medium text-gray-600">IN {location}</dt>
                                <dd className="text-xs text-gray-500">Remote {remote ? 'YES' : 'NO'}</dd>
                            </div>

                            <div className="flex flex-col ml-12">
                                <dt className="text-sm font-medium text-gray-600">TYPE</dt>
                                <dd className="text-xs text-gray-500">{typeDisplay}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="mt-2">
                        <button
                            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-400 hover:text-black"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </a>

        </section>


    );
};
export default JobCards;