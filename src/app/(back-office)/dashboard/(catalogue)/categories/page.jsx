import React from "react";
import PageHeader from "@/src/components/backoffice/reusableComponents/PageHeader";
import TableActions from "@/src/components/backoffice/reusableComponents/TableActions";
import DataTable from "@/src/components/backoffice/reusableComponents/components/DataTable";

const page = () => {
  const href = "/dashboard/categories/new";
  const linkTitle = "Nova Categoria";
  return (
    <div>
      <PageHeader heading="Categorias" href={href} linkTitle={linkTitle} />
      <TableActions title="Categorias" />
      <div className="py-6">
        {/* TODO: Table datas to mockup */}
        <DataTable />
      </div>
    </div>
  );
};

export default page;
