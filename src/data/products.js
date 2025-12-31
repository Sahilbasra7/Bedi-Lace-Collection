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
  {
    id: 'lace-004',
    name: 'Silk Thread Lace',
    categoryId: 'laces',
    description: 'Delicate silk thread lace with traditional motifs.',
    images: ['/images/products/lace-004-1.jpg'],
    specifications: { material: 'Silk Thread', width: '2.5 inches', pattern: 'Traditional', color: 'Cream' }
  },
  {
    id: 'lace-005',
    name: 'Zari Border Lace',
    categoryId: 'laces',
    description: 'Elegant zari border lace for ethnic wear.',
    images: ['/images/products/lace-005-1.jpg'],
    specifications: { material: 'Zari', width: '2 inches', pattern: 'Border', color: 'Silver' }
  },
  {
    id: 'lace-006',
    name: 'Chiffon Lace Trim',
    categoryId: 'laces',
    description: 'Lightweight chiffon lace trim for delicate work.',
    images: ['/images/products/lace-006-1.jpg'],
    specifications: { material: 'Chiffon', width: '1.5 inches', pattern: 'Scalloped', color: 'Pink' }
  },
  {
    id: 'lace-007',
    name: 'Pearl Beaded Lace',
    categoryId: 'laces',
    description: 'Luxurious pearl beaded lace for premium designs.',
    images: ['/images/products/lace-007-1.jpg'],
    specifications: { material: 'Polyester with Pearls', width: '3 inches', pattern: 'Beaded', color: 'White' }
  },
  {
    id: 'lace-008',
    name: 'Gota Patti Lace',
    categoryId: 'laces',
    description: 'Traditional gota patti work lace.',
    images: ['/images/products/lace-008-1.jpg'],
    specifications: { material: 'Gota', width: '2 inches', pattern: 'Patti', color: 'Golden' }
  },
  {
    id: 'lace-009',
    name: 'Net Embroidered Lace',
    categoryId: 'laces',
    description: 'Fine net with embroidered patterns.',
    images: ['/images/products/lace-009-1.jpg'],
    specifications: { material: 'Net', width: '4 inches', pattern: 'Embroidered', color: 'Black' }
  },
  {
    id: 'lace-010',
    name: 'Mirror Work Lace',
    categoryId: 'laces',
    description: 'Traditional mirror work lace for ethnic designs.',
    images: ['/images/products/lace-010-1.jpg'],
    specifications: { material: 'Cotton with Mirrors', width: '2.5 inches', pattern: 'Mirror Work', color: 'Multi' }
  },
  {
    id: 'lace-011',
    name: 'Crochet Lace Trim',
    categoryId: 'laces',
    description: 'Handmade crochet lace for vintage looks.',
    images: ['/images/products/lace-011-1.jpg'],
    specifications: { material: 'Cotton Thread', width: '3 inches', pattern: 'Crochet', color: 'Beige' }
  },
  {
    id: 'lace-012',
    name: 'Ribbon Lace',
    categoryId: 'laces',
    description: 'Satin ribbon lace for decorative purposes.',
    images: ['/images/products/lace-012-1.jpg'],
    specifications: { material: 'Satin', width: '1 inch', pattern: 'Plain', color: 'Red' }
  },
  {
    id: 'lace-013',
    name: 'Stone Work Lace',
    categoryId: 'laces',
    description: 'Premium stone work lace for bridal wear.',
    images: ['/images/products/lace-013-1.jpg'],
    specifications: { material: 'Polyester with Stones', width: '3.5 inches', pattern: 'Stone Work', color: 'Gold' }
  },
  {
    id: 'lace-014',
    name: 'Pom Pom Lace',
    categoryId: 'laces',
    description: 'Fun pom pom lace for casual and kids wear.',
    images: ['/images/products/lace-014-1.jpg'],
    specifications: { material: 'Cotton', width: '2 inches', pattern: 'Pom Pom', color: 'Multi' }
  },
  {
    id: 'lace-015',
    name: 'Tassel Lace Trim',
    categoryId: 'laces',
    description: 'Elegant tassel lace for saree borders.',
    images: ['/images/products/lace-015-1.jpg'],
    specifications: { material: 'Polyester', width: '2.5 inches', pattern: 'Tassel', color: 'Green' }
  },
  {
    id: 'lace-016',
    name: 'Cutwork Lace',
    categoryId: 'laces',
    description: 'Intricate cutwork lace for premium garments.',
    images: ['/images/products/lace-016-1.jpg'],
    specifications: { material: 'Cotton', width: '3 inches', pattern: 'Cutwork', color: 'White' }
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
  {
    id: 'fabric-004',
    name: 'Chanderi Fabric',
    categoryId: 'fabrics',
    description: 'Premium chanderi fabric with subtle shine.',
    images: ['/images/products/fabric-004-1.jpg'],
    specifications: { material: 'Chanderi', width: '44 inches', weight: '100 GSM', color: 'Mint Green' }
  },
  {
    id: 'fabric-005',
    name: 'Brocade Fabric',
    categoryId: 'fabrics',
    description: 'Rich brocade fabric for festive wear.',
    images: ['/images/products/fabric-005-1.jpg'],
    specifications: { material: 'Brocade', width: '44 inches', weight: '200 GSM', color: 'Maroon' }
  },
  {
    id: 'fabric-006',
    name: 'Rayon Fabric',
    categoryId: 'fabrics',
    description: 'Smooth rayon fabric for comfortable wear.',
    images: ['/images/products/fabric-006-1.jpg'],
    specifications: { material: 'Rayon', width: '44 inches', weight: '110 GSM', color: 'Navy Blue' }
  },
  {
    id: 'fabric-007',
    name: 'Cotton Silk Blend',
    categoryId: 'fabrics',
    description: 'Perfect blend of cotton and silk for daily wear.',
    images: ['/images/products/fabric-007-1.jpg'],
    specifications: { material: 'Cotton Silk', width: '44 inches', weight: '130 GSM', color: 'Mustard' }
  },
  {
    id: 'fabric-008',
    name: 'Organza Fabric',
    categoryId: 'fabrics',
    description: 'Sheer organza fabric for layered designs.',
    images: ['/images/products/fabric-008-1.jpg'],
    specifications: { material: 'Organza', width: '44 inches', weight: '50 GSM', color: 'Lavender' }
  },
  {
    id: 'fabric-009',
    name: 'Velvet Fabric',
    categoryId: 'fabrics',
    description: 'Luxurious velvet fabric for winter wear.',
    images: ['/images/products/fabric-009-1.jpg'],
    specifications: { material: 'Velvet', width: '44 inches', weight: '250 GSM', color: 'Burgundy' }
  },
  {
    id: 'fabric-010',
    name: 'Linen Fabric',
    categoryId: 'fabrics',
    description: 'Breathable linen fabric for summer collection.',
    images: ['/images/products/fabric-010-1.jpg'],
    specifications: { material: 'Linen', width: '44 inches', weight: '150 GSM', color: 'Beige' }
  },
  {
    id: 'fabric-011',
    name: 'Satin Fabric',
    categoryId: 'fabrics',
    description: 'Glossy satin fabric for evening wear.',
    images: ['/images/products/fabric-011-1.jpg'],
    specifications: { material: 'Satin', width: '44 inches', weight: '90 GSM', color: 'Champagne' }
  },
  {
    id: 'fabric-012',
    name: 'Jacquard Fabric',
    categoryId: 'fabrics',
    description: 'Intricately woven jacquard fabric.',
    images: ['/images/products/fabric-012-1.jpg'],
    specifications: { material: 'Jacquard', width: '44 inches', weight: '180 GSM', color: 'Royal Blue' }
  },
  {
    id: 'fabric-013',
    name: 'Modal Fabric',
    categoryId: 'fabrics',
    description: 'Soft modal fabric with excellent drape.',
    images: ['/images/products/fabric-013-1.jpg'],
    specifications: { material: 'Modal', width: '44 inches', weight: '120 GSM', color: 'Coral' }
  },
  {
    id: 'fabric-014',
    name: 'Chiffon Dupatta Fabric',
    categoryId: 'fabrics',
    description: 'Light chiffon fabric perfect for dupattas.',
    images: ['/images/products/fabric-014-1.jpg'],
    specifications: { material: 'Chiffon', width: '44 inches', weight: '70 GSM', color: 'Turquoise' }
  },
  {
    id: 'fabric-015',
    name: 'Crepe Fabric',
    categoryId: 'fabrics',
    description: 'Textured crepe fabric for formal wear.',
    images: ['/images/products/fabric-015-1.jpg'],
    specifications: { material: 'Crepe', width: '44 inches', weight: '100 GSM', color: 'Black' }
  },
  {
    id: 'fabric-016',
    name: 'Tussar Silk Fabric',
    categoryId: 'fabrics',
    description: 'Natural tussar silk with rich texture.',
    images: ['/images/products/fabric-016-1.jpg'],
    specifications: { material: 'Tussar Silk', width: '44 inches', weight: '140 GSM', color: 'Copper' }
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
  {
    id: 'button-004',
    name: 'Crystal Buttons',
    categoryId: 'buttons',
    description: 'Sparkling crystal buttons for party wear.',
    images: ['/images/products/button-004-1.jpg'],
    specifications: { material: 'Crystal', size: '14mm', finish: 'Clear', quantity: '20 pieces' }
  },
  {
    id: 'button-005',
    name: 'Brass Designer Buttons',
    categoryId: 'buttons',
    description: 'Premium brass buttons with intricate designs.',
    images: ['/images/products/button-005-1.jpg'],
    specifications: { material: 'Brass', size: '20mm', finish: 'Antique', quantity: '30 pieces' }
  },
  {
    id: 'button-006',
    name: 'Coconut Shell Buttons',
    categoryId: 'buttons',
    description: 'Eco-friendly coconut shell buttons.',
    images: ['/images/products/button-006-1.jpg'],
    specifications: { material: 'Coconut Shell', size: '16mm', finish: 'Natural', quantity: '40 pieces' }
  },
  {
    id: 'button-007',
    name: 'Fabric Covered Buttons',
    categoryId: 'buttons',
    description: 'Customizable fabric covered buttons.',
    images: ['/images/products/button-007-1.jpg'],
    specifications: { material: 'Fabric on Metal', size: '18mm', finish: 'Assorted', quantity: '15 pieces' }
  },
  {
    id: 'button-008',
    name: 'Horn Buttons',
    categoryId: 'buttons',
    description: 'Natural horn buttons for luxury garments.',
    images: ['/images/products/button-008-1.jpg'],
    specifications: { material: 'Horn', size: '22mm', finish: 'Polished', quantity: '10 pieces' }
  },
  {
    id: 'button-009',
    name: 'Resin Decorative Buttons',
    categoryId: 'buttons',
    description: 'Colorful resin buttons for kids wear.',
    images: ['/images/products/button-009-1.jpg'],
    specifications: { material: 'Resin', size: '15mm', finish: 'Glossy Multi', quantity: '50 pieces' }
  },
  {
    id: 'button-010',
    name: 'Toggle Buttons',
    categoryId: 'buttons',
    description: 'Classic toggle buttons for coats and jackets.',
    images: ['/images/products/button-010-1.jpg'],
    specifications: { material: 'Wood/Metal', size: '30mm', finish: 'Natural', quantity: '12 pieces' }
  },
  {
    id: 'button-011',
    name: 'Snap Buttons',
    categoryId: 'buttons',
    description: 'Convenient snap buttons for easy fastening.',
    images: ['/images/products/button-011-1.jpg'],
    specifications: { material: 'Metal', size: '10mm', finish: 'Silver', quantity: '100 pieces' }
  },
  {
    id: 'button-012',
    name: 'Shank Buttons',
    categoryId: 'buttons',
    description: 'Professional shank buttons for suits.',
    images: ['/images/products/button-012-1.jpg'],
    specifications: { material: 'Plastic', size: '18mm', finish: 'Black', quantity: '25 pieces' }
  },
  {
    id: 'button-013',
    name: 'Rhinestone Buttons',
    categoryId: 'buttons',
    description: 'Glamorous rhinestone buttons for evening wear.',
    images: ['/images/products/button-013-1.jpg'],
    specifications: { material: 'Rhinestone', size: '16mm', finish: 'Diamond', quantity: '15 pieces' }
  },
  {
    id: 'button-014',
    name: 'Leather Buttons',
    categoryId: 'buttons',
    description: 'Genuine leather buttons for jackets.',
    images: ['/images/products/button-014-1.jpg'],
    specifications: { material: 'Leather', size: '25mm', finish: 'Brown', quantity: '8 pieces' }
  },
  {
    id: 'button-015',
    name: 'Shell Buttons',
    categoryId: 'buttons',
    description: 'Natural shell buttons with iridescent finish.',
    images: ['/images/products/button-015-1.jpg'],
    specifications: { material: 'Shell', size: '12mm', finish: 'Natural Iridescent', quantity: '35 pieces' }
  },
  {
    id: 'button-016',
    name: 'Embossed Metal Buttons',
    categoryId: 'buttons',
    description: 'Embossed metal buttons with detailed patterns.',
    images: ['/images/products/button-016-1.jpg'],
    specifications: { material: 'Metal Alloy', size: '20mm', finish: 'Bronze', quantity: '20 pieces' }
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
  },
  {
    id: 'stitch-004',
    name: 'Elastic Tape Roll',
    categoryId: 'stitching-materials',
    description: 'High-quality elastic tape for waistbands.',
    images: ['/images/products/stitch-004-1.jpg'],
    specifications: { material: 'Elastic', width: '1 inch', length: '10 meters', color: 'White' }
  },
  {
    id: 'stitch-005',
    name: 'Tailor Chalk Set',
    categoryId: 'stitching-materials',
    description: 'Essential marking chalk for pattern making.',
    images: ['/images/products/stitch-005-1.jpg'],
    specifications: { material: 'Chalk', colors: 'White, Blue, Yellow', quantity: '3 pieces', type: 'Washable' }
  },
  {
    id: 'stitch-006',
    name: 'Measuring Tape',
    categoryId: 'stitching-materials',
    description: 'Professional measuring tape with both metric and imperial.',
    images: ['/images/products/stitch-006-1.jpg'],
    specifications: { material: 'Fiberglass', length: '150 cm / 60 inches', type: 'Dual Scale' }
  },
  {
    id: 'stitch-007',
    name: 'Seam Ripper',
    categoryId: 'stitching-materials',
    description: 'Sharp seam ripper for quick stitch removal.',
    images: ['/images/products/stitch-007-1.jpg'],
    specifications: { material: 'Stainless Steel', type: 'Ergonomic Handle', color: 'Red' }
  },
  {
    id: 'stitch-008',
    name: 'Thimble Set',
    categoryId: 'stitching-materials',
    description: 'Protective thimbles in assorted sizes.',
    images: ['/images/products/stitch-008-1.jpg'],
    specifications: { material: 'Metal', sizes: 'S, M, L', quantity: '3 pieces', finish: 'Chrome' }
  },
  {
    id: 'stitch-009',
    name: 'Bobbin Case Set',
    categoryId: 'stitching-materials',
    description: 'Universal bobbin cases for sewing machines.',
    images: ['/images/products/stitch-009-1.jpg'],
    specifications: { material: 'Metal', quantity: '10 pieces', type: 'Universal Fit' }
  },
  {
    id: 'stitch-010',
    name: 'Fabric Scissors',
    categoryId: 'stitching-materials',
    description: 'Professional fabric cutting scissors.',
    images: ['/images/products/stitch-010-1.jpg'],
    specifications: { material: 'Stainless Steel', length: '9 inches', type: 'Tailor Scissors', finish: 'Sharp Edge' }
  },
  {
    id: 'stitch-011',
    name: 'Zipper Assortment',
    categoryId: 'stitching-materials',
    description: 'Various lengths and colors of zippers.',
    images: ['/images/products/stitch-011-1.jpg'],
    specifications: { material: 'Nylon', lengths: '6-18 inches', colors: 'Assorted 10', quantity: '20 pieces' }
  },
  {
    id: 'stitch-012',
    name: 'Velcro Tape',
    categoryId: 'stitching-materials',
    description: 'Hook and loop fastening tape.',
    images: ['/images/products/stitch-012-1.jpg'],
    specifications: { material: 'Nylon', width: '1 inch', length: '5 meters', color: 'Black' }
  },
  {
    id: 'stitch-013',
    name: 'Bias Tape Maker',
    categoryId: 'stitching-materials',
    description: 'Tool for creating perfect bias tape.',
    images: ['/images/products/stitch-013-1.jpg'],
    specifications: { material: 'Metal', sizes: '12mm, 18mm, 25mm', quantity: '3 pieces', type: 'Professional' }
  },
  {
    id: 'stitch-014',
    name: 'Embroidery Floss',
    categoryId: 'stitching-materials',
    description: 'Colorful embroidery thread for decorative work.',
    images: ['/images/products/stitch-014-1.jpg'],
    specifications: { material: 'Cotton', colors: 'Assorted 50 colors', length: '8 meters per skein' }
  },
  {
    id: 'stitch-015',
    name: 'Pin Cushion',
    categoryId: 'stitching-materials',
    description: 'Classic tomato pin cushion with emery.',
    images: ['/images/products/stitch-015-1.jpg'],
    specifications: { material: 'Fabric Filled', color: 'Red/Green', type: 'With Sharpener', size: 'Standard' }
  },
  {
    id: 'stitch-016',
    name: 'Tracing Wheel',
    categoryId: 'stitching-materials',
    description: 'Pattern tracing wheel for fabric marking.',
    images: ['/images/products/stitch-016-1.jpg'],
    specifications: { material: 'Metal', type: 'Serrated Edge', handle: 'Wooden', color: 'Natural' }
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
