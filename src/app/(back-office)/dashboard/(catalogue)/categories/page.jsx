import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/dashboard/categories/new";
  const linkTitle = "Add Category";
  return (
    <div>
      <PageHeader heading="Categories" href={href} linkTitle={linkTitle} />
      <TableActions title="Categories" />
      <div className="py-6">
        {/* TODO: Table */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
