export interface Product {
  id: number;
  prod_id: number;
  name: string;
  size: string;
  unit_display: string;
  price: string;
  group_name: string;
  slug: string;
  subgroup_name?: string;
  type_name: string;
  primary_image?: string;
}
