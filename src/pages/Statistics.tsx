import React,{useState,useEffect} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
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

    });
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
    const top5JobTypes = jobDataFormatted
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);


  return (
      <div className="grid grid-cols-2 gap-1 mt-10">
          <PieChart
              series={[
                  {
                      data: top5JobTypes,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
              ]}
              width={750}
              height={300}
          />
      </div>

  );
};