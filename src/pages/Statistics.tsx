import React,{useState,useEffect} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import axios from "axios";

interface JobData {
    company_name: string;
    title: string;
    remote: boolean;
    location: string;
    job_types: string[];
    description: string;
    url: string;
}
export default function Statistics()  {

    const [jobData, setJobData] = useState<JobData[]>([]);
    const getData = async () => {
        const response = await axios.get('/api/job-board-api');
        if (Array.isArray(response.data.data)) {
            setJobData(response.data.data);
        } else {
            console.error('Unexpected data structure:', response.data);
        }
    }
    useEffect(() => {
       getData();

    }, [jobData]);
    const jobMap = new Map<string, number>();

    if (jobData.length !== 0) {
        jobData.forEach(job => {
            job.job_types.forEach((jobType: string) => {
                if (jobMap.has(jobType)) {
                    jobMap.set(jobType, jobMap.get(jobType)! + 1);
                } else {
                    jobMap.set(jobType, 1);
                }
            });
        });
    }

    const jobDataFormatted = Array.from(jobMap.entries()).map(([jobType, count], index) => ({
        id: index,
        value: count,
        label: jobType,
    }));
    const topJobTypes = jobDataFormatted
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);


  return (
      <>
      <div className="grid grid-cols-1 mt-10">
      <div className="grid grid-cols-2 gap-1 mt-10">
          <PieChart
              series={[
                  {
                      data: topJobTypes,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
              ]}
              width={750}
              height={300}
          />
      </div>
         </div>
          <span className="flex items-center mt-5">
    <span className="h-px flex-1 bg-black"></span>
    <span className="shrink-0 px-6">top 5 job offers posts numbers</span>
    <span className="h-px flex-1 bg-black"></span>
          </span>
    <div className="grid grid-cols-1 ">
      <div className='grid grid-cols-5 gap-1 mt-10 ml-10'>
          <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 1, md:5 }}
          >
              <h3 className="min-w-32">Number of Jobs:</h3>
              {topJobTypes.map((job, index) => (
                  <div key={index}>
                      <h2 className="items-center text-center">{job.label}</h2>
                      <Gauge width={200} height={80} value={job.value} valueMax={jobData.length} />
                  </div>
              ))}
          </Stack>
      </div>
      </div>
</>
  );
};