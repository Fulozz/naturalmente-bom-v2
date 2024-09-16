import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/dashboard/sliders/new";
  const linkTitle = "Add slider";
  return (
    <div>
      <PageHeader heading="Sliders" href={href} linkTitle={linkTitle} />
      <TableActions title="sliders" />
      <div className="py-6">
        {/* TODO: Table */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
