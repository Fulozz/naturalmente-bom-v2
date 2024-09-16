import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/dashboard/products/new";
  const linkTitle = "Adicionar Produto";
  return (
    <div>
      <PageHeader heading="Produtos" href={href} linkTitle={linkTitle} />
      <TableActions title="Produtos" />
      <div className="py-6">
        {/* TODO: Table */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
