import React from "react";
import PageHeader from "@/src/components/backoffice/category/PageHeader";
import TableActions from "@/src/components/backoffice/category/TableActions";

const page = () => {
  const href = "/dashboard/categories/new";
  const linkTitle = "Add Category";
  return (
    <div>
      <PageHeader heading="Categories" href={href} linkTitle={linkTitle} />
      <TableActions title="Categories" />
      <div className="py-6">
        {/* TODO: Table */}
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default page;
