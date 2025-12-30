export const products = [
  // Laces
  {
    id: 'lace-001',
    name: 'Premium Cotton Lace',
    categoryId: 'laces',
    description: 'High-quality cotton lace with intricate floral patterns. Perfect for ethnic wear and designer outfits.',
    images: [
      '/images/products/lace-001-1.jpg',
      '/images/products/lace-001-2.jpg'
    ],
    specifications: {
      material: 'Cotton',
      width: '2 inches',
      pattern: 'Floral',
      color: 'White'
    }
  },
  {
    id: 'lace-002',
    name: 'Velvet Border Lace',
    categoryId: 'laces',
    description: 'Luxurious velvet border lace ideal for sarees and dupattas.',
    images: [
      '/images/products/lace-002-1.jpg'
    ],
    specifications: {
      material: 'Velvet',
      width: '1.5 inches',
      pattern: 'Border',
      color: 'Maroon'
    }
  },
  {
    id: 'lace-003',
    name: 'Sequin Embroidered Lace',
    categoryId: 'laces',
    description: 'Stunning sequin work lace for party wear and bridal outfits.',
    images: [
      '/images/products/lace-003-1.jpg'
    ],
    specifications: {
      material: 'Polyester with Sequins',
      width: '3 inches',
      pattern: 'Embroidered',
      color: 'Gold'
    }
  },
  
  // Fabrics
  {
    id: 'fabric-001',
    name: 'Silk Inline Fabric',
    categoryId: 'fabrics',
    description: 'Premium quality silk fabric with beautiful sheen. Perfect for traditional wear.',
    images: [
      '/images/products/fabric-001-1.jpg'
    ],
    specifications: {
      material: 'Pure Silk',
      width: '44 inches',
      weight: '120 GSM',
      color: 'Royal Blue'
    }
  },
  {
    id: 'fabric-002',
    name: 'Georgette Fabric',
    categoryId: 'fabrics',
    description: 'Lightweight georgette fabric suitable for sarees and kurti.',
    images: [
      '/images/products/fabric-002-1.jpg'
    ],
    specifications: {
      material: 'Georgette',
      width: '44 inches',
      weight: '80 GSM',
      color: 'Peach'
    }
  },
  {
    id: 'fabric-003',
    name: 'Embroidered Net Fabric',
    categoryId: 'fabrics',
    description: 'Delicate net fabric with embroidery work for elegant designs.',
    images: [
      '/images/products/fabric-003-1.jpg'
    ],
    specifications: {
      material: 'Net with Embroidery',
      width: '44 inches',
      weight: '60 GSM',
      color: 'Cream'
    }
  },
  
  // Buttons
  {
    id: 'button-001',
    name: 'Designer Metal Buttons',
    categoryId: 'buttons',
    description: 'Elegant metal buttons with antique finish for ethnic wear.',
    images: [
      '/images/products/button-001-1.jpg'
    ],
    specifications: {
      material: 'Metal Alloy',
      size: '15mm',
      finish: 'Antique Gold',
      quantity: '100 pieces'
    }
  },
  {
    id: 'button-002',
    name: 'Pearl Finish Buttons',
    categoryId: 'buttons',
    description: 'Classic pearl finish buttons for formal and casual wear.',
    images: [
      '/images/products/button-002-1.jpg'
    ],
    specifications: {
      material: 'Plastic with Pearl Coating',
      size: '12mm',
      finish: 'Pearl White',
      quantity: '50 pieces'
    }
  },
  {
    id: 'button-003',
    name: 'Wooden Ethnic Buttons',
    categoryId: 'buttons',
    description: 'Natural wooden buttons for ethnic and casual garments.',
    images: [
      '/images/products/button-003-1.jpg'
    ],
    specifications: {
      material: 'Natural Wood',
      size: '18mm',
      finish: 'Natural Brown',
      quantity: '25 pieces'
    }
  },
  
  // Stitching Materials
  {
    id: 'stitch-001',
    name: 'Premium Sewing Needles Set',
    categoryId: 'stitching-materials',
    description: 'Complete set of high-quality sewing needles for all fabric types.',
    images: [
      '/images/products/stitch-001-1.jpg'
    ],
    specifications: {
      material: 'Stainless Steel',
      sizes: 'Assorted (1-10)',
      quantity: '100 needles',
      packaging: 'Box'
    }
  },
  {
    id: 'stitch-002',
    name: 'Polyester Thread Spools',
    categoryId: 'stitching-materials',
    description: 'Durable polyester thread in multiple colors.',
    images: [
      '/images/products/stitch-002-1.jpg'
    ],
    specifications: {
      material: 'Polyester',
      length: '1000 meters',
      colors: 'Assorted 10 colors',
      packaging: 'Box Set'
    }
  },
  {
    id: 'stitch-003',
    name: 'Sewing Machine Oil',
    categoryId: 'stitching-materials',
    description: 'High-grade lubricating oil for smooth machine operation.',
    images: [
      '/images/products/stitch-003-1.jpg'
    ],
    specifications: {
      type: 'Lubricating Oil',
      volume: '100ml',
      packaging: 'Bottle',
      usage: 'For all sewing machines'
    }
  }
];

// Helper functions
export const getProductsByCategory = (categorySlug) => {
  return products.filter(product => product.categoryId === categorySlug);
};

export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export const getFeaturedProducts = (limit = 6) => {
  return products.slice(0, limit);
};
