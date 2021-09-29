export type Product = {
  categoryID: number;
  discontinued: string;
  productID: number;
  productName: string;
  quantityPerUnit: string;
  reorderLevel: number;
  supplierID: number;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: string;
};

export type Shipper = {
  shipperID: number;
  companyName: string;
  phone: string;
};

export type Supplier = {
  supplierId: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
  homePage: string;
};
