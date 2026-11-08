import React from 'react';

const BrowseJobsPage = async ({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) => {

    const search = await searchParams;

    console.log('Search params:', search);

    return (
        <div>
            <h1>Browse Jobs</h1>
        </div>
    );
};

export default BrowseJobsPage;


// https://www.linkedin.com/jobs/search-results/?currentJobId=4472942002&keywords=nextjs&origin=JOB_SEARCH_PAGE_JOB_FILTER&referralSearchId=j6ngejDhx5wA2DZwixWr0Q%3D%3D&f_SAL=f_SA_id_227001%3A277001%24f_SA_id_226001%3A273001