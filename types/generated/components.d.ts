import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandTypsBrand extends Schema.Component {
  collectionName: 'components_brand_typs_brands';
  info: {
    displayName: 'brand';
  };
  attributes: {
    typeID: Attribute.Enumeration<['yumeng', 'yangpengfei']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brand-typs.brand': BrandTypsBrand;
    }
  }
}
