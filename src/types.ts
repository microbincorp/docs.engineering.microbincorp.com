
import { ReactNode } from "react";

export interface SidebarItem {
  title: string;
  link?: string;
  icon?: ReactNode;
  children?: SidebarItem[];
}
