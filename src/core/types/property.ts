export type PropertyType =
  | "RESIDENTIAL_PLOT"
  | "FARM_LAND"
  | "VILLA"
  | "APARTMENT"
  | "COMMERCIAL";

export interface Property {
  id: string;
  title: string;
  description: string;
  property_type: PropertyType;

  price: number;
  area: number;

  city: string;
  state: string;

  featured_image: string;

  created_at: string;
}