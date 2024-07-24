import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/clients/new";
  const linkTitle = "Novo Cliente";
  return (
    <div classNamee="ml-24 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
      <PageHeader heading="Clientes" href={href} linkTitle={linkTitle} />
      <TableActions title="Cliente" />
      <div className="py-6">
        {/* TODO: Table datas to mockup */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
