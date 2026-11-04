/* ============================================================
   STOCK DE MIA DISTRIBUIDORA  (el único archivo que tenés que tocar para el stock)

   Cómo se usa:
   - "id": 5,   -> quedan 5 unidades (se muestra en la tarjeta y se limita la compra)
   - "id": 0,   -> SIN STOCK AÚN (no se puede comprar)
   - Producto con variantes (tonos, colores...): un número por opción:
       "id": { "Tono 1.0": 2, "Tono 2.0": 0 },
   - Si un producto NO está en la lista, figura como "Sin stock aún".
     Cuando te llegue mercadería, agregalo acá con su cantidad.

   Para actualizar: cambiá el número, guardá y subí el archivo a GitHub.
   ============================================================ */

const STOCK = {
  "cicaplast-baume": 1, // Bálsamo Cicaplast La Roche Posay Baume
  "celimax-sun-stick": 1, // Protector Solar en Barra Celimax Oil Control
  "cerave-locion-intensiva": 1, // Loción de Hidratación Intensiva CeraVe
  "aveno-jabon-diario": 1, // Jabón de Uso Diario Aveno
  "protector-solar-dermaglos-50g-or-fps-50": {"Fluido Invisible (sin color)": 1, "Fluido con Color (Tono 1)": 1}, // Protector Solar Dermaglos 50g - FPS 50
  "gel-booster-facial-medicube-300-ml": 1, // Gel Booster Facial Medicube 300 ml
  "sedum-facial-medicube-retinol": 1, // Sérum Facial Medicube Retinol
  "collagen-jelly-cream-medicure-110-ml": 1, // Collagen Jelly Cream Medicure 110 ml
  "booster-pro-medicube-mini-pink": 1, // Booster Pro Medicube Mini Pink
  "contorno-maybelline-lifter-stix": 0, // Contorno Maybelline Lifter Stix
  "labial-revlon-colorstay-limitless-matte": 2, // Labial Revlon Colorstay Limitless Matte
  "labial-matte-maybelline": 3, // Labial Matte Maybelline
  "labial-maybelline-superstay-vinyl": 2, // Labial Maybelline Superstay Vinyl
  "corrector-loreal-paris-15percent-acido-hialuronico": {"1.0": 1, "2.0": 1, "3.0": 1, "4.0": 1}, // Corrector L'Oréal Paris 1,5% Acido Hialuronico
  "impronta-tratamiento-capital-5-en-1-x-250-gr": 2, // Impronta Tratamiento Capital 5 en 1 x 250 gr
  "acondicionador-karsell": {"Acondicionador": 1, "Aceite": 1, "Mascara": 1}, // Productos Karsell
  "shampoo-matizador-la-puissance-x-300-ml": 2, // Shampoo Matizador La Puissance x 300 ml
  "shampoo-y-acondicionador-la-puissance-x-300-ml": {"Shampoo": 1, "Acondicionador": 1}, // Shampoo y Acondicionador La Puissance x 300 ml
  "perfume-capilar-la-puissance": 2, // Perfume Capilar La Puissance
  "shampoo-reparador-absolut-loreal-paris-x-300-ml": 1, // Shampoo Revitalizante Absolut L'Oréal Paris x 300 ml
  "acondicionador-para-cabello-danado-loreal-paris-x-200-ml": 1, // Acondicionador para Cabello Dañado L'Oréal Paris x 200 ml
  "serum-triple-accion-anti-signos-de-edad-revitalift": 1, // Serum Triple Accion Anti-Signos de Edad L'Oréal Paris
  "serum-anti-manchas-loreal-paris": 1, // Serum Anti Manchas L'Oréal Paris
  "limpiador-purificante-anti-imperfecciones-garnier-x-200-ml": 1, // Limpiador Purificante Anti Imperfecciones Garnier x 200 ml
  "crema-corporal-triple-effect-eucerin": 1, // Crema Corporal Triple Effect Eucerin
  "spray-all-body-yara-150-ml": 1, // Spray all body Yara 150 ml
  "madagascar-centella-poremizing-mask": 1, // Madagascar Centella Poremizing Mask

  // ---- PRODUCTOS SIN STOCK AÚN: cuando tengas unidades, cambiá el 0 por la cantidad ----
  "dermaglos-fps50": 1, // Protector Solar Corporal Dermaglós
  "bagovit-solar": 1, // Protector Solar Bagovit Solar Emulsión Hidratante
  "loreal-glycolic-bright": 1, // Crema Mate-Iluminadora L'Oréal Paris Glycolic-Bright
  "protector-solar-isdin-fps-50": 1, // Protector Solar ISDIN COLOR FPS 50
  "protector-solar-rostrola-roche-posay-fps-50-or-50ml": 1, // Protector Solar Rostro La Roche Posay FPS 50 - 50ml
  "protector-solar-anti-manchas-la-roche-posay-or-fps-50": 1, // Protector Solar Anti Manchas La Roche Posay - FPS 50
  "spray-all-body-mayar-150-ml": 1, // Spray all body Mayar 150 ml
  "corrector-de-orejas-rimmel-7-ml": 1, // Corrector de Orejas Rimmel 7 ml
  "corrector-rimmel-match-perfection-x-30-ml": 1, // Corrector Rimmel Match Perfection x 30 ml
  "aceite-oleo-de-palta-la-puissance": 1, // Aceite Oleo de Palta La Puissance
  "acqua-di-gioia-de-giorgio-armani-x-100-ml": 1, // Acqua Di Gioia de Giorgio Armani x 100 ml
  "shine-killer-primer-x-20ml": 0, // Shine Killer Primer x 20ml
  "acondicionador-anticaida-karsell-x-500-ml": 1, // Acondicionador Anticaida Karsell x 500 ml
  "mascara-nutritiva-la-puissance-x-250-ml": 1, // Mascara Nutritiva La Puissance x 250 ml
  "gel-limpieza-profunda-loreal-paris": 1, // Gel Limpieza Profunda L'Oréal Paris
  "glass-skin-crema-liquida-loreal-paris": 1, // Glass Skin Crema Liquida L'Oréal Paris
  "barra-antitranspirante-coconut-secret-x-45-gr": 1, // Barra Antitranspirante Coconut Secret x 45 gr
  "fotoprotector-uv-water-isdin-fps-50": 1, // Fotoprotector UV ISDIN FPS 50
  "protector-invisible-vichy-fps-50-fluido-hidratante": 1, // Protector Invisible Vichy FPS 50 Fluido Hidratante
  "protector-fluido-invisible-cerave-fps-50-x-50-ml": 1, // Protector Fluido Invisible CeraVe FPS 50 x 50 ml
  "protector-solar-facial-aveno-fps-50-x-50-gr": 1, // Protector Solar Facial Aveno FPS 50 x 50 gr
  "protector-solar-uv-sport-la-roche-posay-fps-50": 1, // Protector Solar UV Sport La Roche Posay FPS 50
  "protector-solar-facial-con-color-fps-45-bagovit": 1, // Protector Solar Facial con Color FPS 45 Bagovit
  "tratamiento-capiral-repair-absolute-loreal-paris": 1, // Tratamiento Capilar Repair Absolute L'Oréal Paris
  "barra-cerave-stick-solar-invisible": 1, // Barra CeraVe Stick Solar Invisible

  // ---- Productos nuevos (todavía sin stock) ----
  "lipfillerrevox": 1,
  "jabonuniformskindove": 1,
  "aguamicelarlimpiadoracerave": 1,
  "serumpurevitaminc10": 1,
  "serumretinolb3laroche": 1,
  "serumhyalub5laroche": 1,
  "crematoleriane": 1,
  "cremamelab3laroche": 1,
  "balsamocicaplastreparador": 1,
  "gelhidrataciondiariadermaglos": 1,
  "cremagelpararojecesdermaglos": 1,
  "serumvitaminacdermaglos": 1,
  "serumtratamientocapilartresemme": 2,
  "doveacnecontrol": 1,
  "fructisgarnier": 1,
};
