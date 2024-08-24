"use client"
import React from 'react';

// 3 Principais
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const Page = () => {
  const href = "/dashboard/customers/new";
  const linkTitle = "Novo cliente";

  return (
    <div>
      <PageHeader title="Clientes"  href={href} linkTitle={linkTitle}/>
      <TableActions title="Clientes"/>
      <div className="py-6">
        {/* TODO: Table datas to mockup */}
        <DataTable />
      </div>
    </div>
  );
};

export default Page;