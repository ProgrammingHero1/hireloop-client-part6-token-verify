import React from 'react';
import { getJobs } from '@/lib/api/jobs';

const BrowseJobsPage = async ({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) => {

    const search = await searchParams;
    const urlSearch = new URLSearchParams(search as Record<string, string>);
    const query = urlSearch.toString();

    console.log('Search params:', query);
    const jobs = await getJobs(query);
    

    return (
        <div>
            <h1>Browse Jobs</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job._id}>{job.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseJobsPage;


// https://www.linkedin.com/jobs/search-results/?currentJobId=4472942002&keywords=nextjs&origin=JOB_SEARCH_PAGE_JOB_FILTER&referralSearchId=j6ngejDhx5wA2DZwixWr0Q%3D%3D&f_SAL=f_SA_id_227001%3A277001%24f_SA_id_226001%3A273001