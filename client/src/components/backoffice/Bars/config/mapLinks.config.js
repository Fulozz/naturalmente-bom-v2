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
  Building2,
} from "lucide-react";

export const catalogueLinks = [
  {
    title: "Produtos",
    href: "/dashboard/products",
    icon: Boxes,
  },
  {
    title: "Categorias",
    href: "/dashboard/categories",
    icon: LayoutList,
  },
  {
    title: "Coupons",
    href: "/dashboard/coupons",
    icon: ScanSearch,
  },
  {
    title: "Store Sliders",
    href: "/dashboard/sliders",
    icon: MonitorPlay,
  },
];

export const sidebarLinks = [
  {
    title: "Cliente",
    icon: Users,
    href: "/dashboard/customers",
  },
  {
    title: "Lojas",
    icon: Warehouse,
    href: "/dashboard/markets",
  },
  {
    title: "Pedidos",
    icon: Truck,
    href: "/dashboard/orders",
  },
  {
    title: "Produtores",
    icon: SquareUser,
    href: "/dashboard/farmers",
  },
  {
    title: "Equipe",
    icon: ContactRound,
    href: "/dashboard/staff",
  },
  {
    title: "Comunidade",
    icon: Building2,
    href: "/dashboard/community",
  },
  {
    title: "Carteira",
    icon: CircleDollarSign,
    href: "/dashboard/wallet",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/dashboard/settings",
  },
  ,
  {
    title: "Loja Online",
    icon: ExternalLink,
    href: "/dashboard/online_store",
  },
];
