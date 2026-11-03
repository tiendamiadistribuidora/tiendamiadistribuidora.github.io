/* ============================================================
   PRODUCTOS DE MIA DISTRIBUIDORA
   Para agregar uno, copiá un bloque { ... }, pegalo con una coma
   y cambiá los datos.
   categorias: skincare, protectores-solares, capilares, maquillaje, perfumes
   variante: poné null si el producto no tiene opciones (tono, aroma, etc.)
   ============================================================ */

const CATEGORIAS = {
  "skincare": "Skin Care",
  "protectores-solares": "Protectores Solares",
  "capilares": "Productos Capilares",
  "maquillaje": "Maquillaje",
  "perfumes": "Perfumes",
};

const PRODUCTOS = [
  {
    id: "dermaglos-fps50",
    nombre: "Protector Solar Corporal Dermaglós",
    precio: 19000,
    categorias: ["skincare", "protectores-solares"],
    imagen: "imagenes/ProtectorSolarDermaglos.jpeg",
    descripcion: "Protector solar corporal FPS 50 con protección alta contra rayos UVB y UVA. Hidrata con vitamina E y es apto para piel sensible.",
    detalles: [
      "Protección alta FPS 50 (UVB y UVA)",
      "Humectación con vitamina E",
      "Para piel sensible",
      "Resistente al agua",
      "Testeado dermatológicamente",
      "Presentación de 250 ml",
    ],
    variante: null,
  },
  {
    id: "cicaplast-baume",
    nombre: "Bálsamo Cicaplast La Roche Posay Baume",
    precio: 55000,
    categorias: ["skincare"],
    imagen: "imagenes/cicaplast.jpeg",
    imagenAlt: ["imagenes/cicaplast.jpg", "imagenes/Cicaplast.jpeg", "imagenes/Cicaplast.jpg", "imagenes/cicaplast.JPG", "imagenes/cicaplast.JPEG", "imagenes/cicaplast.png", "imagenes/cicaplast.webp"],
    descripcion: "Bálsamo reparador de La Roche-Posay para calmar y proteger la piel sensibilizada o irritada.",
    detalles: [
      "Textura rica y reconfortante",
      "Ideal para piel sensible o irritada",
    ],
    variante: null,
  },

  /* precio: 0         -> la tienda muestra "Consultar precio" y el cliente te escribe por WhatsApp.
     variante.precios  -> (opcional) un precio distinto por cada opción. */
  {
    id: "celimax-sun-stick",
    nombre: "Protector Solar en Barra Celimax Oil Control",
    precio: 45000,
    categorias: ["skincare", "protectores-solares"],
    imagen: "imagenes/SunStickCelimax.jpeg",
    descripcion: "Protector solar en barra de Celimax con efecto mate, pensado para piel mixta o grasa. Fácil de aplicar y de llevar a todos lados.",
    detalles: [
      "FPS 50+ / PA++++",
      "Para piel mixta o grasa",
      "Con Anti Sebum P, Alpha-Bisabolol y Centella Asiática",
      "Presentación de 19 g",
    ],
    variante: null,
  },
  {
    id: "bagovit-solar",
    nombre: "Protector Solar Bagovit Solar Emulsión Hidratante",
    precio: 18000,
    categorias: ["skincare", "protectores-solares"],
    imagen: "imagenes/BagovitSolar.jpeg",
    descripcion: "Emulsión hidratante de textura liviana con protección solar alta contra rayos UV-B y UV-A. Disponible en FPS 30 y FPS 50.",
    detalles: [
      "Protección solar alta UV-B y UV-A",
      "Hipoalergénica",
      "Libre de aceites",
      "Resistente al agua",
      "Presentación de 200 ml",
    ],
    variante: { nombre: "Factor", opciones: ["FPS 30", "FPS 50"] },
  },
  {
    id: "loreal-glycolic-bright",
    nombre: "Crema Mate-Iluminadora L'Oréal Paris Glycolic-Bright",
    precio: 35000,
    categorias: ["skincare"],
    imagen: "imagenes/GlycolicBrightLoreal.jpeg",
    descripcion: "Crema facial con acabado mate que ilumina la piel. Combina Melasyl y ácido glicólico para ayudar a reducir las manchas.",
    detalles: [
      "Con Melasyl y ácido glicólico",
      "Acabado mate",
      "El envase indica 88% de manchas reducidas*",
      "Presentación de 50 ml",
    ],
    variante: null,
  },
  {
    id: "cerave-locion-intensiva",
    nombre: "Loción de Hidratación Intensiva CeraVe",
    precio: 32000,
    categorias: ["skincare"],
    imagen: "imagenes/LocionIntensivaCeraVe.jpeg",
    descripcion: "Loción para piel muy seca e irritada. Ayuda a restaurar la barrera cutánea, hidrata de manera continua y suaviza el picor causado por la sequedad.",
    detalles: [
      "Con 3 ceramidas esenciales y manteca de karité",
      "5% Hydro-Urea",
      "Absorción rápida",
      "Desarrollada con dermatólogos",
      "Presentación de 236 ml",
    ],
    variante: null,
  },
  {
    id: "aveno-jabon-diario",
    nombre: "Jabón de Uso Diario Aveno",
    precio: 12000,
    categorias: ["skincare"],
    imagen: "imagenes/JabonAveno.jpeg",
    descripcion: "Jabón de uso diario con extracto de avena sativa, pensado para el balance natural de las pieles sensibles.",
    detalles: [
      "Con extracto de avena sativa",
      "Hipoalergénico",
      "Avalado por dermatólogos",
      "Emoliente obtenido a partir de sustancias naturales",
      "Presentación de 120 g",
    ],
    variante: null,
  },


  /* ===== PRODUCTOS IMPORTADOS DEL EXCEL ===== */
  {
    id: "protector-solar-dermaglos-50g-or-fps-50",
    nombre: "Protector Solar Dermaglos 50g - FPS 50",
    precio: 21000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarDermaglos50gFPS50.jpeg",
    descripcion: "Protector Solar de alta calidad",
    detalles: [
      "Marca: Dermaglos",
      "Peso: 50g",
      "Factor: 50 FPS"
    ],
    variante: {
      nombre: "Color",
      opciones: [
        "Fluido Invisible (sin color)",
        "Fluido con Color (Tono 1)"
      ]
    },
  },
  {
    id: "protector-solar-isdin-fps-50",
    nombre: "Protector Solar ISDIN COLOR FPS 50",
    precio: 48000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarISDINCOLORFPS50.jpeg",
    descripcion: "",
    detalles: [],
    variante: {
      nombre: "Color",
      opciones: [
        "Color Light",
        "Color Medium"
      ]
    },
  },
  {
    id: "protector-solar-rostrola-roche-posay-fps-50-or-50ml",
    nombre: "Protector Solar Rostro La Roche Posay FPS 50 - 50ml",
    precio: 45000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarRostroLaRochePosayFPS5050ml.jpeg",
    descripcion: "Ayuda a prevenir los daños celulares",
    detalles: [
      "Accion antioxidante contra IR-A",
      "Acabado toque seco +12h efecto matificante",
      "Para pieles grasas y sensibles."
    ],
    variante: {
      nombre: "Color",
      opciones: [
        "Fluido Color Oil Control",
        "Fluido Oil Control"
      ]
    },
  },
  {
    id: "protector-solar-anti-manchas-la-roche-posay-or-fps-50",
    nombre: "Protector Solar Anti Manchas La Roche Posay - FPS 50",
    precio: 49000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarAntiManchasLaRochePosayFPS50.jpeg",
    descripcion: "Protector Antimanchas sin perfume",
    detalles: [
      "Peso: 50g",
      "Factor: FPS 50"
    ],
    variante: null,
  },
  {
    id: "gel-booster-facial-medicube-300-ml",
    nombre: "Gel Booster Facial Medicube 300 ml",
    precio: 45000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/GelBoosterFacialMedicube300Ml.jpeg",
    descripcion: "Gel facial coreano de gran formato formulado para hidratar, reafirmar y mejorar la elasticidad de la piel",
    detalles: [],
    variante: null,
  },
  {
    id: "sedum-facial-medicube-retinol",
    nombre: "Sérum Facial Medicube Retinol",
    precio: 45000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/SerumFacialMedicubeRetinol.jpeg",
    descripcion: "Un potente sérum facial antiedad de 30 ml diseñado para mejorar la textura de la piel, reducir líneas de expresión, marcas de acné y unificar el tono",
    detalles: [],
    variante: null,
  },
  {
    id: "collagen-jelly-cream-medicure-110-ml",
    nombre: "Collagen Jelly Cream Medicure 110 ml",
    precio: 49000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/CollagenJellyCreamMedicure110Ml.jpeg",
    descripcion: "Una crema hidratante coreana con textura tipo gel transparente que busca aportar elasticidad, firmeza y un acabado luminoso",
    detalles: [],
    variante: null,
  },
  {
    id: "spray-all-body-mayar-150-ml",
    nombre: "Spray all body Mayar 150 ml",
    precio: 29000,
    categorias: [
      "perfumes"
    ],
    imagen: "imagenes/SprayAllBodyMayar150Ml.jpeg",
    descripcion: "Una bruma aromática ligera y refrescante creada para el cuerpo, el cabello y la ropa.",
    detalles: [],
    variante: null,
  },
  {
    id: "booster-pro-medicube-mini-pink",
    nombre: "Booster Pro Medicube Mini Pink",
    precio: 180000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/BoosterProMedicubeMiniPink.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "corrector-de-orejas-rimmel-7-ml",
    nombre: "Corrector de Orejas Rimmel 7 ml",
    precio: 17000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/CorrectorDeOrejasRimmel7Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "corrector-rimmel-match-perfection-x-30-ml",
    nombre: "Corrector Rimmel Match Perfection x 30 ml",
    precio: 25000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/CorrectorRimmelMatchPerfectionX30Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "contorno-maybelline-lifter-stix",
    nombre: "Contorno Maybelline Lifter Stix",
    precio: 0,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/ContornoMaybellineLifterStix.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "labial-revlon-colorstay-limitless-matte",
    nombre: "Labial Revlon Colorstay Limitless Matte",
    precio: 25000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/LabialRevlonColorstayLimitlessMatte.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "labial-matte-maybelline",
    nombre: "Labial Matte Maybelline",
    precio: 25000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/LabialMatteMaybelline.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "labial-maybelline-superstay-vinyl",
    nombre: "Labial Maybelline Superstay Vinyl",
    precio: 25000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/LabialMaybellineSuperstayVinyl.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "corrector-loreal-paris-15percent-acido-hialuronico",
    nombre: "Corrector L'Oréal Paris 1,5% Acido Hialuronico",
    precio: 22000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/CorrectorLOrealParis15AcidoHialuronico.jpeg",
    descripcion: "",
    detalles: [],
    variante: {
      nombre: "Tono",
      opciones: [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ]
    },
  },
  {
    id: "impronta-tratamiento-capital-5-en-1-x-250-gr",
    nombre: "Impronta Tratamiento Capital 5 en 1 x 250 gr",
    precio: 6500,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/ImprontaTratamientoCapital5En1X250Gr.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "acondicionador-karsell",
    nombre: "Productos Karsell",
    precio: 16000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/ProductosKarsell.jpeg",
    descripcion: "",
    detalles: [],
    variante: {
      nombre: "Producto",
      opciones: [
        "Acondicionador",
        "Aceite",
        "Mascara"
      ],
      precios: [
        18000,
        16000,
        21000
      ]
    },
  },
  {
    id: "shampoo-matizador-la-puissance-x-300-ml",
    nombre: "Shampoo Matizador La Puissance x 300 ml",
    precio: 21000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/ShampooMatizadorLaPuissanceX300Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "shampoo-y-acondicionador-la-puissance-x-300-ml",
    nombre: "Shampoo y Acondicionador La Puissance x 300 ml",
    precio: 18000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/ShampooYAcondicionadorLaPuissanceX300Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: {
      nombre: "Tipo",
      opciones: [
        "Shampoo",
        "Acondicionador"
      ]
    },
  },
  {
    id: "perfume-capilar-la-puissance",
    nombre: "Perfume Capilar La Puissance",
    precio: 11900,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/PerfumeCapilarLaPuissance.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "shampoo-reparador-absolut-loreal-paris-x-300-ml",
    nombre: "Shampoo Revitalizante Absolut L'Oréal Paris x 300 ml",
    precio: 45000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/ShampooRevitalizanteAbsolutLOrealParisX300Ml.jpeg",
    descripcion: "Con quinoa dorada + proteína, la fórmula profesional del shampoo revitalizante instantáneo limpia inmediatamente y reestructura el cabello dañado, al tiempo que lo deja con un tacto ligero. Combinado con Absolut Repair acondicionador, mascarilla o mascarilla dorada, el cabello queda más brillante y liso.",
    detalles: [],
    variante: null,
  },
  {
    id: "acondicionador-para-cabello-danado-loreal-paris-x-200-ml",
    nombre: "Acondicionador para Cabello Dañado L'Oréal Paris x 200 ml",
    precio: 45000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/AcondicionadorParaCabelloDanadoLOrealParisX200Ml.jpeg",
    descripcion: "Con QUINOA DORADA + PROTEÍNA, la fórmula profesional del acondicionador revitalizante instantáneo es el tratamiento perfecto para reestructurar inmediatamente el cabello dañado. Su fórmula cremosa nutre la fibra con un toque ligero. Después de utilizar Absolut Repair shampoo y acondicionador, el cabello está más brillante, liso y resistente, y la superficie capilar está menos dañada.",
    detalles: [],
    variante: null,
  },
  {
    id: "aceite-oleo-de-palta-la-puissance",
    nombre: "Aceite Oleo de Palta La Puissance",
    precio: 12000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/AceiteOleoDePaltaLaPuissance.jpeg",
    descripcion: "Óleo diseñado para reparar puntas, controlar el encrespamiento y potenciar la nutrición del cabello. Su fórmula enriquecida con aceite de palta y ácidos grasos Omega 6 y 9 aporta una emoliencia intensa que hidrata desde el primer uso. Ayuda a proteger las puntas más dañadas, reduce los enredos y mejora visiblemente la suavidad, el brillo y el aspecto saludable del cabello, sin dejar sensación pesada.",
    detalles: [],
    variante: null,
  },
  {
    id: "acqua-di-gioia-de-giorgio-armani-x-100-ml",
    nombre: "Acqua Di Gioia de Giorgio Armani x 100 ml",
    precio: 120000,
    categorias: [
      "perfumes"
    ],
    imagen: "imagenes/AcquaDiGioiaDeGiorgioArmaniX100Ml.jpeg",
    descripcion: "Acqua di Gioia de Giorgio Armani es una fragancia de la familia olfativa Floral Acuática para Mujeres. Las Notas de Salida son limón de Amalfi (lima de Amalfi) y menta; la Nota de Corazón es jazmín de agua; las Notas de Fondo son cedro de Virginia, azúcar moreno y ládano francés.",
    detalles: [],
    variante: null,
  },
  {
    id: "shine-killer-primer-x-20ml",
    nombre: "Shine Killer Primer x 20ml",
    precio: 17000,
    categorias: [
      "maquillaje"
    ],
    imagen: "imagenes/ShineKillerPrimerX20ml.jpeg",
    descripcion: "Tu aliado perfecto en la guerra contra los brillos. Suaviza el rostro antes de aplicar tu prebase de maquillaje favorita con un maravilloso acabado mate y fresco. Aplica una cantidad una pequeña cantidad directamente en el rostro con una brocha o los dedos. Espera unos minutos antes de aplicar la base de maquillaje.",
    detalles: [],
    variante: null,
  },
  {
    id: "acondicionador-anticaida-karsell-x-500-ml",
    nombre: "Acondicionador Anticaida Karsell x 500 ml",
    precio: 18000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/AcondicionadorAnticaidaKarsellX500Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "mascara-nutritiva-la-puissance-x-250-ml",
    nombre: "Mascara Nutritiva La Puissance x 250 ml",
    precio: 16000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/MascaraNutritivaLaPuissanceX250Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "serum-triple-accion-anti-signos-de-edad-revitalift",
    nombre: "Serum Triple Accion Anti-Signos de Edad L'Oréal Paris",
    precio: 37000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/SerumTripleAccionAntiSignosDeEdadLOrealParis.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "serum-anti-manchas-loreal-paris",
    nombre: "Serum Anti Manchas L'Oréal Paris",
    precio: 28000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/SerumAntiManchasLOrealParis.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "gel-limpieza-profunda-loreal-paris",
    nombre: "Gel Limpieza Profunda L'Oréal Paris",
    precio: 17000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/GelLimpiezaProfundaLOrealParis.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "limpiador-purificante-anti-imperfecciones-garnier-x-200-ml",
    nombre: "Limpiador Purificante Anti Imperfecciones Garnier x 200 ml",
    precio: 18000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/LimpiadorPurificanteAntiImperfeccionesGarnierX200Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "glass-skin-crema-liquida-loreal-paris",
    nombre: "Glass Skin Crema Liquida L'Oréal Paris",
    precio: 27000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/GlassSkinCremaLiquidaLOrealParis.jpeg",
    descripcion: "100 hs de hidratacion y luminosidad. Reduce lineas de expresión.",
    detalles: [],
    variante: null,
  },
  {
    id: "barra-antitranspirante-coconut-secret-x-45-gr",
    nombre: "Barra Antitranspirante Coconut Secret x 45 gr",
    precio: 11000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/BarraAntitranspiranteCoconutSecretX45Gr.jpeg",
    descripcion: "Barra invisible antitranspirante, aplicación seca",
    detalles: [],
    variante: null,
  },
  {
    id: "fotoprotector-uv-water-isdin-fps-50",
    nombre: "Fotoprotector UV ISDIN FPS 50",
    precio: 48000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/FotoprotectorUVISDINFPS50.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "protector-invisible-vichy-fps-50-fluido-hidratante",
    nombre: "Protector Invisible Vichy FPS 50 Fluido Hidratante",
    precio: 55000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorInvisibleVichyFPS50FluidoHidratante.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "protector-fluido-invisible-cerave-fps-50-x-50-ml",
    nombre: "Protector Fluido Invisible CeraVe FPS 50 x 50 ml",
    precio: 25000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorFluidoInvisibleCeraVeFPS50X50Ml.jpeg",
    descripcion: "Protector Solar facial diario ligero e hidratante que ayuda a mantener la barrera cutanea.",
    detalles: [],
    variante: null,
  },
  {
    id: "protector-solar-facial-aveno-fps-50-x-50-gr",
    nombre: "Protector Solar Facial Aveno FPS 50 x 50 gr",
    precio: 22000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarFacialAvenoFPS50X50Gr.jpeg",
    descripcion: "Alta proteccion avalado por dermatologos, hipoalergénico y resistente al agua. Pieles sensibles, acabado sedoso no graso y textura ultra ligera",
    detalles: [],
    variante: null,
  },
  {
    id: "protector-solar-uv-sport-la-roche-posay-fps-50",
    nombre: "Protector Solar UV Sport La Roche Posay FPS 50",
    precio: 55000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarUVSportLaRochePosayFPS50.jpeg",
    descripcion: "Muy alta proteccion. Muy resistente y facil de aplicar sobre la piel humeda y sudorosa.",
    detalles: [],
    variante: null,
  },
  {
    id: "protector-solar-facial-con-color-fps-45-bagovit",
    nombre: "Protector Solar Facial con Color FPS 45 Bagovit",
    precio: 18000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/ProtectorSolarFacialConColorFPS45Bagovit.jpeg",
    descripcion: "Crema Facial con color. Provee una apariencia bronceada en la piel. Previene arrugas y manchas solares.",
    detalles: [],
    variante: null,
  },
  {
    id: "tratamiento-capiral-repair-absolute-loreal-paris",
    nombre: "Tratamiento Capilar Repair Absolute L'Oréal Paris",
    precio: 45000,
    categorias: [
      "capilares"
    ],
    imagen: "imagenes/TratamientoCapilarRepairAbsoluteLOrealParis.jpeg",
    descripcion: "Este shampoo patentado, formulado con adhesivo de péptidos y 5 aminoácidos, repara la estructura macromolecular del cabello.Sin sulfatos, la textura lujosa de la fórmula se transforma en una espuma rica que limpia, desenreda el cabello y proporciona un alto nivel de cuidado.El cabello está más fuerte y nutrido, con elasticidad mejorada, movimiento y +86;% de suavidad.",
    detalles: [],
    variante: null,
  },
  {
    id: "barra-cerave-stick-solar-invisible",
    nombre: "Barra CeraVe Stick Solar Invisible",
    precio: 18000,
    categorias: [
      "skincare",
      "protectores-solares"
    ],
    imagen: "imagenes/BarraCeraVeStickSolarInvisible.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "crema-corporal-triple-effect-eucerin",
    nombre: "Crema Corporal Triple Effect Eucerin",
    precio: 55000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/CremaCorporalTripleEffectEucerin.jpeg",
    descripcion: "Crema Para pieles grasas + Manchas post-acne",
    detalles: [
      "Anti-Imperfecciones.",
      "Anti-Manchas",
      "Calma e hidrata"
    ],
    variante: null,
  },
  {
    id: "spray-all-body-yara-150-ml",
    nombre: "Spray all body Yara 150 ml",
    precio: 29000,
    categorias: [
      "perfumes"
    ],
    imagen: "imagenes/SprayAllBodyYara150Ml.jpeg",
    descripcion: "",
    detalles: [],
    variante: null,
  },
  {
    id: "madagascar-centella-poremizing-mask",
    nombre: "Madagascar Centella Poremizing Mask",
    precio: 45000,
    categorias: [
      "skincare"
    ],
    imagen: "imagenes/MadagascarCentellaPoremizingMask.jpeg",
    descripcion: "Madagascar Centella Poremizing Quick Clay Stick Mask de SKIN1004 es una mascarilla facial en formato stick que ayuda a limpiar profundamente los poros, absorber el exceso de oleosidad y dejar la piel más suave y equilibrada, de una forma práctica y sin complicaciones. Su fórmula combina Arcillas Naturales y Extracto de Centella Asiática de Madagascar, ingredientes que ayudan a eliminar impurezas, reducir la apariencia de los poros y calmar la piel mientras mantienen su hidratación natural. Gracias a su innovador formato en barra, se aplica de manera uniforme, sin ensuciar las manos y con una textura cremosa que se enjuaga fácilmente, convirtiéndose en el complemento ideal para una rutina de limpieza profunda.",
    detalles: [],
    variante: null,
  },

  /* EJEMPLO con variantes (maquillaje). Para usarlo, borrá esta línea y la de cierre:
  {
    id: "base-ejemplo",
    nombre: "Base de maquillaje",
    precio: 12000,
    categorias: ["maquillaje"],
    imagen: "imagenes/base.jpg",
    descripcion: "Descripción del producto.",
    detalles: ["Cobertura media", "Acabado natural"],
    variante: { nombre: "Tono", opciones: ["Claro", "Beige", "Moreno"] },
  },
  FIN DEL EJEMPLO */
];
