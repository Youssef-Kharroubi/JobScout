import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import JobCards from '../components/JobCards';
import WelcomingBoard from '../components/WelcomingBoard';
interface JobData {
    company_name: string;
    title: string;
    remote: boolean;
    location: string;
    job_types: string[];
    description: string;
    url: string;

}

interface FilteredJobData extends JobData {
    image_src:string;
}
export default function Home(){
    const [jobData, setJobData] = useState<FilteredJobData[]>([]);
    const [keyword, setKeyword] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
    const [search, setSearch] = useState<string>('');
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    const arrayOfImages = [
       "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
        "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    ]
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setKeyword(search);
    };

    const getData = async () => {
        try {
            const response = await axios.get('/api/job-board-api');
            if (Array.isArray(response.data.data)) {
                setJobData(response.data.data);
            } else {
                console.error('Unexpected data structure:', response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [jobData]);


    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };
    const filteredJobData = jobData.filter(job =>
        keyword.split(',').some(kw =>
            job.job_types?.some(type => type.toLowerCase().includes(kw.trim().toLowerCase()))
        )
    ).map((job, index) => ({
        ...job,
        image_src: arrayOfImages[index % arrayOfImages.length], // Assign image based on index
    }));;
    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(filteredJobData.length / itemsPerPage);



    return (
        <div className="App">
            <WelcomingBoard />
            <span className="flex items-center mx-auto max-w-screen-xl mt-4 mb-4 px-3 sm:px-6 lg:px-8">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">WELCOME</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>
            <div className="relative">
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <label htmlFor="Search" className="sr-only">
                        Search
                    </label>
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for Internship, Werkstudent ..."
                        className="w-1/2 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Search
                    </button>
                </form>
            </div>
            <div className="container mx-auto max-w-screen-xl mt-4 mb-4 px-3 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {filteredJobData.slice(offset, offset + itemsPerPage).map((job, index) => (
                        <JobCards key={index} jobData={{ ...job, remote: job.remote ? 'YES' : 'NO'}} />
                    ))}
                </div>
                <div hidden={filteredJobData.length!==0}>
                    <Stack spacing={2} sx={{ width: '20%' }}>
                        <Alert severity="info">No jobs found</Alert>
                    </Stack>
                    <Box sx={{ width: '100%' }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>
                </div>

                <div hidden={filteredJobData.length===0}>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'flex justify-center mt-4'}
                    pageClassName={'mx-1'}
                    pageLinkClassName={'px-3 py-2 border rounded text-black hover:bg-gray-400 hover:text-white'}
                    activeClassName={'font-bold'}
                    previousLinkClassName={'px-3 py-2 border rounded text-black hover:bg-gray-400 hover:text-white'}
                    nextLinkClassName={'px-3 py-2 border rounded text-black hover:bg-gray-400 hover:text-white'}
                    disabledClassName={'opacity-50 cursor-not-allowed'}
                />
                </div>
            </div>
        </div>
    );
}