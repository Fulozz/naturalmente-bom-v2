import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";

const page = () => {
  const href = "/dashboard/coupons/new";
  const linkTitle = "Add Category";
  return (
    <div>
      <PageHeader heading="coupons" href={href} linkTitle={linkTitle} />
      <TableActions title="coupons" />
      <div className="py-6">
        {/* TODO: Table */}
        <h2>Table</h2>a
      </div>
    </div>
  );
};

export default page;
