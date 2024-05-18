import {
  ExternalLink,
  SquareUser,
  Truck,
  Users,
  Warehouse,
  Settings,
  ContactRound,
} from "lucide-react";
export const catalogueLinks = [
  {
    title: "Attributes",
    href: "/dashboard/attributes",
  },
  {
    title: "Banners",
    href: "/dashboard/banners",
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
  },
  {
    title: "Coupons",
    href: "/dashboard/coupons",
  },
  {
    title: "Products",
    href: "/dashboard/products",
  },
  {
    title: "Sliders",
    href: "/dashboard/sliders",
  },
];

export const sidebarLinks = [
  {
    title: "Customers",
    icon: Users,
    href: "/dashboard/customers",
  },
  {
    title: "Markets",
    icon: Warehouse,
    href: "/dashboard/markets",
  },
  {
    title: "Pedidos",
    icon: Truck,
    href: "/dashboard/orders",
  },
  {
    title: "Farmers",
    icon: SquareUser,
    href: "/dashboard/farmers",
  },
  {
    title: "Staff",
    icon: ContactRound,
    href: "/dashboard/staff",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/dashboard/settings",
  },
  ,
  {
    title: "Online Store",
    icon: ExternalLink,
    href: "/dashboard/online_store",
  },
];
