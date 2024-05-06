import React from 'react'
import Heading from '@/src/components/backoffice/Heading';
import LargeCards from '@/src/components/backoffice/Cards/large/LargeCards';
import SmallCards from '@/src/components/backoffice/Cards/small/SmallCards';
import DashboardChart from '@/src/components/backoffice/Charts/DashboardChart';
import CustomDataTable from '@/src/components/backoffice/Tables/CustomDataTable';



const page = () => {
  return (
    <div className=''>
      <Heading title="Dashboard overview" />
      <LargeCards />
      <SmallCards />
      <DashboardChart />
      <CustomDataTable />
    </div>
  )
}

export default page