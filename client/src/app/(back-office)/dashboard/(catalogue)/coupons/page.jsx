import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/dashboard/coupons/new";
  const linkTitle = "Adicionar Coupon";
  return (
    <div>
      <PageHeader heading="coupons" href={href} linkTitle={linkTitle} />
      <TableActions title="coupons" />
      <div className="py-6">
        {/* TODO: Table */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
