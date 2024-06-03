import {
  ExternalLink,
  SquareUser,
  Truck,
  Users,
  Warehouse,
  Settings,
  ContactRound,
  Boxes,
  LayoutList,
  SendToBack,
  ScanSearch,
  MonitorPlay,
  CircleDollarSign,
  Building2
} from "lucide-react";

export const catalogueLinks = [
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Boxes 
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: LayoutList
  },
  {
    title: "Attributes",
    href: "/dashboard/attributes",
    icon: SendToBack
  },
  {
    title: "Coupons",
    href: "/dashboard/coupons",
    icon: ScanSearch
  },
  {
    title: "Store Sliders",
    href: "/dashboard/sliders",
    icon: MonitorPlay
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
    title: "Community",
    icon: Building2,
    href: "/dashboard/community",
  },
  {
    title: "Wallet",
    icon: CircleDollarSign ,
    href: "/dashboard/wallet",
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
