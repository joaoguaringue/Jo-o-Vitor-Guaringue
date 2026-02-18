import { LucideIcon } from 'lucide-react';

export interface Product {
  name: string;
  description: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  products: Product[];
}

export interface NavItem {
  label: string;
  href: string;
}