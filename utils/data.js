const PRODUCT_TYPE = {
  FULL_SIZED = 'full-sized',
  IN_EAR = 'in-ear',
  TRUE_WIRELESS = 'true-wireless',
  EAR_BUD = 'ear-bud',
}

const PRODUCT_BRANDS = {
  FOCAL = 'Focal',
  HIFIMAN = "HiFiMan",
  MOONDROP = "MOONDROP",
  SONY = "SONY",
  APPLE = "Apple",
}
const PRODUCTS = [
  {
    id: 1,
    name: "HiFiMan HE400SE",
    price: 3990000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.HIFIMAN,
    image: "../assets/images/products/hifiman_he400se.jpg"
  },
  {
    id: 2,
    name: "Focal Celestee",
    price: 23000000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.FOCAL,
    image: "../assets/images/products/focal_celestee.jpg"
  },
  {
    id: 3,
    name: "Focal Radiance",
    price: 29990000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.FOCAL,
    image: "../assets/images/products/focal_radiance.jpeg"  
  },
  {
    id: 4,
    name: "Apple AirPods Max",
    price: 11900000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.APPLE,
    image: "../assets/images/products/airpod_max.png"
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    price: 6390000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/wh1000xm4.jpg"
  },
  {
    id: 6,
    name: "HiFiMan Sundara",
    price: 8500000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.HIFIMAN,
    image: "../assets/images/products/hifiman_sundara.jpg"
  },
  {
    id: 7,
    name: "Focal Clear",
    price: 29290000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.FOCAL,
    image: "../assets/images/products/focal_clear.jpg"
  },
  {
    id: 8,
    name: "Apple Airpod Pro VN/A",
    price: 4990000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.HIFIMAN.APPLE,
    image: "../assets/images/products/airpod_pro.jpg"
  },
  {
    id: 9,
    name: "Apple Airpod 3",
    price: 4750000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.APPLE,
    image: "../assets/images/products/airpod_3.jpg"
  },
  {
    id: 10,
    name: "Sony WF-1000XM4",
    price: 5490000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/wf1000xm4.jpeg"
  },
  {
    id: 11,
    name: "Sony WF-C500",
    price: 1990000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/wfc500.jpg"
  },
  {
    id: 12,
    name: "Sony WF-1000XM3",
    price: 3150000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/wf100xm3.jpg"
  },
  {
    id: 13,
    name: "Apple Airpod 2",
    price: 3185000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.APPLE,
    image: "../assets/images/products/airpod_2.jpg"
  },
  {
    id: 14,
    name: "Focal Sphear S",
    price: 3390000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.FOCAL,
    image: "../assets/images/products/focal_sphear_s.jpg"
  },
  {
    id: 15,
    name: "HiFiMan TWS600",
    price: 4900000,
    type: PRODUCT_TYPE.TRUE_WIRELESS,
    brand: PRODUCT_BRANDS.HIFIMAN,
    image: "../assets/images/products/hifiman_tws600.jpg"
  },
  {
    id: 16,
    name: "HiFiMan RE-600S V2",
    price: 4900000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.HIFIMAN,
    image: "../assets/images/products/hifiman_re600s.jpg"
  },
  {
    id: 17,
    name: "HiFiMan Deva Pro",
    price: 7950000,
    type: PRODUCT_TYPE.FULL_SIZED,
    brand: PRODUCT_BRANDS.HIFIMAN,
    image: "../assets/images/products/hifiman_deva_pro.jpg"
  },
  {
    id: 18,
    name: "Moondrop KATO",
    price: 4350000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_kato.jpg"
  },
  {
    id: 19,
    name: "Moondrop KXXS",
    price: 3990000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_kxxs.jpg"
  },
  {
    id: 20,
    name: "Moondrop Starfield",
    price: 2890000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_starfield.png"
  },
  {
    id: 21,
    name: "Moondrop Aria",
    price: 1900000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_aria.jpg"
  },
  {
    id: 22,
    name: "Moondrop SSP",
    price: 799000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_ssp.jpg"
  },
  {
    id: 23,
    name: "Moondrop Blessing 2",
    price: 7250000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_blessing2.jpg"
  },
  {
    id: 24,
    name: "Moondrop Solis",
    price: 22500000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_solis.jpg"
  },
  {
    id: 25,
    name: "Moondrop S8",
    price: 14500000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_s8.jpg"
  },
  {
    id: 26,
    name: "Sony Z1R",
    price: 41990000,
    type: PRODUCT_TYPE.IN_EAR,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/z1r.jpg"
  },
  {
    id: 27,
    name: "Moondrop Liebesleid 2.5mm Bln",
    price: 6300000,
    type: PRODUCT_TYPE.EAR_BUD,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_liebesleid_2.jpg"
  },
  {
    id: 28,
    name: "Moondrop VX Classic",
    price: 1290000,
    type: PRODUCT_TYPE.EAR_BUD,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_vx.jpg"
  },
  {
    id: 29,
    name: "Moondrop Liebesleid 2.5mm Bln",
    price: 6300000,
    type: PRODUCT_TYPE.EAR_BUD,
    brand: PRODUCT_BRANDS.MOONDROP,
    image: "../assets/images/products/moondrop_liebesleid_2.jpg"
  },
  {
    id: 30,
    name: "Sony MDR_E9LP",
    price: 150000,
    type: PRODUCT_TYPE.EAR_BUD,
    brand: PRODUCT_BRANDS.SONY,
    image: "../assets/images/products/mdr_e9lp.jpg"
  },
];
