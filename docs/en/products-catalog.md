# Products Catalogue

Structured product data driving the Products page. Products are deduplicated — size variants are listed under a single product entry.

> **IMPORTANT — Frontend Display Rule**: Product codes (e.g. WK1201, WK3101) are included here for internal reference only. They must **NOT** be displayed anywhere on the website. The frontend should render product name, category, image, description, ingredients, and sizes — never the code field.

---

## Categories

```yaml
categories:
  - id: "health-beverages"
    name: "Health Beverages"
    description: "Nourishing coffee blends, teas, and chocolate drinks enriched with traditional herbal ingredients"
    icon: "coffee"

  - id: "nutritional-supplements"
    name: "Nutritional Supplements"
    description: "Nutrient-dense tablets, powders, and capsules from nature's finest superfoods"
    icon: "pill"

  - id: "herbal-traditional-medicine"
    name: "Herbal & Traditional Medicine"
    description: "Time-honoured herbal formulations rooted in centuries of traditional wellness practice"
    icon: "leaf"

  - id: "immune-vitality-boosters"
    name: "Immune & Vitality Boosters"
    description: "Natural tonics, juices, and supplements traditionally valued for vitality and overall wellbeing"
    icon: "zap"

  - id: "personal-care"
    name: "Personal Care"
    description: "Skincare, oral care, and personal hygiene products formulated with natural botanical ingredients"
    icon: "sparkles"

  - id: "wellness-foods"
    name: "Wellness Foods"
    description: "Wholesome cereals, nutrition meals, and traditional food preparations for daily nourishment"
    icon: "wheat"

  - id: "agriculture"
    name: "Agriculture"
    description: "Bio-fertiliser solutions for healthier crops, gardens, and sustainable farming"
    icon: "sprout"

  - id: "home-lifestyle"
    name: "Home & Lifestyle"
    description: "Everyday wellness essentials for the home"
    icon: "home"
```

---

## Products

```yaml
products:

  # ============================================
  # HEALTH BEVERAGES
  # ============================================

  - code: "WK1201"
    name: "Instant Coffee Mix with Ginkgo & Ginseng"
    category: "Health Beverages"
    image: "Product-1201.png"
    ingredients:
      - Ginkgo Biloba
      - Ginseng
    description: "A smooth instant coffee blend enriched with Ginkgo Biloba and Ginseng — two herbs with a rich heritage in traditional Asian wellness. Ginkgo Biloba is one of the oldest living tree species on Earth, traditionally valued for supporting mental clarity and healthy circulation. Ginseng, known as 'all-healing' in Greek, has been one of the most prized herbs in Traditional Chinese Medicine for millennia, traditionally valued as an adaptogen. A flavourful way to enjoy these time-honoured herbs as part of your daily coffee ritual."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1202"
    name: "Instant Coffee Mix with Ganoderma & Green Tea"
    category: "Health Beverages"
    image: "Product-1202.png"
    ingredients:
      - Ganoderma
      - Green Tea
    description: "An aromatic coffee blend featuring Ganoderma (Lingzhi mushroom) and Green Tea extract. Ganoderma has been revered in Chinese, Japanese, and Korean traditional medicine for over 2,000 years — known as the 'mushroom of immortality' and rich in bioactive compounds including beta-glucan polysaccharides and triterpenes. Green Tea, one of the oldest beverages in human history dating back nearly 5,000 years, is naturally rich in catechins and L-theanine. A distinguished coffee experience with two of Asia's most celebrated botanical ingredients."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1203"
    name: "Instant Coffee Mix with Kacip Fatimah, Green Tea & Ganoderma"
    category: "Health Beverages"
    image: "Product-1203.png"
    ingredients:
      - Kacip Fatimah
      - Green Tea
      - Ganoderma
    description: "A unique coffee blend combining three traditional ingredients. Kacip Fatimah (Labisia pumila) is a small herbaceous plant native to Malaysian tropical forests, traditionally used by Malay women for generations for feminine wellness — it holds deep cultural significance in Malay traditional medicine and contains naturally occurring phytoestrogens. Paired with Ganoderma and Green Tea extract, this coffee offers a distinctive blend crafted with women's wellness traditions in mind."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1204"
    name: "Instant Coffee Mix with Tongkat Ali & Maca"
    category: "Health Beverages"
    image: "Product-1204.png"
    ingredients:
      - Tongkat Ali
      - Maca
    description: "A bold coffee blend featuring two celebrated traditional ingredients from opposite sides of the world. Tongkat Ali ('Ali's walking stick') is a flowering plant native to Southeast Asia, used for centuries in Malaysian and Indonesian folk medicine as a tonic for energy and vitality — it contains quassinoids, alkaloids, and bioactive steroids, and is now protected as a Malaysian national heritage plant. Maca, cultivated for over 2,000 years in the high Andes of Peru at elevations of 3,800-4,500 metres, was prized by the Inca civilisation as a nutrient-dense superfood — it contains unique compounds called macamides found in no other plant. Together, they create an invigorating coffee ritual."
    sizes:
      - "15 sachets x 21g"

  - code: "WK1205"
    name: "Instant Cappuccino Coffee Mix with Ganoderma"
    category: "Health Beverages"
    image: "Product-1205.png"
    ingredients:
      - Ganoderma
    description: "A creamy cappuccino-style coffee enriched with Ganoderma (Lingzhi mushroom). This blend offers the indulgent, frothy taste of cappuccino combined with the heritage of Ganoderma — a mushroom so highly regarded in ancient China that it was historically reserved for royalty and documented in classical texts such as the Compendium of Materia Medica. Rich and smooth, it is a satisfying way to include this traditional ingredient in your daily routine."
    sizes:
      - "15 sachets x 35g"

  - code: "WK1208"
    name: "Arabica Coffee Mix with Goat's Milk & Ganoderma"
    category: "Health Beverages"
    image: "Product-1208.png"
    ingredients:
      - Arabica Coffee
      - Goat's Milk
      - Ganoderma
    description: "A premium 6-in-1 Arabica coffee blend combining the smoothness of goat's milk with the traditional heritage of Ganoderma. Goat's milk is naturally rich in calcium and contains over 200 nutrients. This carefully crafted blend brings together quality Arabica coffee, the creamy nourishment of goat's milk, and the time-honoured Ganoderma mushroom in one convenient cup."
    sizes:
      - "20 sachets x 25g"

  - code: "WK1804"
    name: "Instant Coffee Mix with Ganoderma"
    category: "Health Beverages"
    image: "Product-1804.png"
    ingredients:
      - Ganoderma
    description: "The classic Dynapharm coffee — a smooth instant blend featuring Ganoderma (Lingzhi mushroom), one of the most extensively studied medicinal mushrooms in the world. With a rich phytochemical profile including beta-glucan polysaccharides and triterpenes, Ganoderma has been a cornerstone of Asian wellness traditions for over two millennia. This straightforward coffee blend makes it easy to enjoy Ganoderma as part of your everyday routine."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1806"
    name: "Instant Chocolate Mix with Ganoderma"
    category: "Health Beverages"
    image: "Product-1806.png"
    ingredients:
      - Chocolate
      - Ganoderma
    description: "A rich, indulgent chocolate drink enriched with Ganoderma (Lingzhi mushroom). This blend offers the comforting warmth of chocolate combined with the traditional heritage of Ganoderma — perfect for those who prefer a non-coffee option. A delicious way to incorporate this celebrated mushroom into your daily wellness routine, whether enjoyed hot or cold."
    sizes:
      - "30 sachets x 30g"

  - code: "WK1817"
    name: "President's Choice 4-in-1 Coffee & Chocolate"
    category: "Health Beverages"
    image: "Product-1817.png"
    ingredients:
      - Coffee
      - Chocolate
      - Ganoderma
    description: "A distinctive 4-in-1 blend that combines coffee and chocolate with Ganoderma in a convenient single-serve format. This signature product delivers a unique flavour profile — the depth of coffee meets the richness of chocolate, complemented by Ganoderma mushroom. A versatile beverage that can be enjoyed at any time of day."
    sizes:
      - "20 sachets x 30g"

  - code: "WK3810"
    name: "Red Coffee with Ginseng"
    category: "Health Beverages"
    image: "Product-3810.png"
    ingredients:
      - Ginseng
    description: "A distinctive red coffee blend enriched with Ginseng — one of the most valued herbs in Traditional Chinese Medicine for millennia. Ginseng (Panax ginseng), whose root often resembles a human form, contains over 30 varieties of ginsenosides and is classified as an adaptogen, traditionally valued for helping the body resist physical and mental stress. This unique red coffee offers a bold flavour with the heritage of one of the world's most studied and commercially significant herbs."
    sizes:
      - "12 sachets x 25g"

  - code: "WK4810"
    name: "Instant Coffee Mix with Tongkat Ali"
    category: "Health Beverages"
    image: "Product-4810.png"
    ingredients:
      - Tongkat Ali
    description: "An instant coffee blend featuring Tongkat Ali (Eurycoma longifolia), one of Malaysia's most prized traditional herbs. Known as 'Ali's walking stick,' Tongkat Ali has been used for centuries in Southeast Asian folk medicine. The root contains quassinoids — particularly eurycomanone — along with alkaloids and bioactive steroids. Traditionally valued as a tonic for energy and stamina, this coffee makes it convenient to enjoy this celebrated Malaysian herb daily."
    sizes:
      - "20 sachets x 21g"

  - code: "WK4810N"
    name: "Milk Tea with Tongkat Ali"
    category: "Health Beverages"
    image: "Product-4810N.png"
    ingredients:
      - Tongkat Ali
      - Milk Tea
    description: "A smooth milk tea infused with Tongkat Ali, offering an alternative to coffee for those who prefer a milder, creamier beverage. Tongkat Ali has been used for centuries in Malaysian and Indonesian traditional wellness, and this blend provides a pleasant, comforting way to include this celebrated herb in your daily routine."
    sizes:
      - "20 sachets x 21g"

  # ============================================
  # NUTRITIONAL SUPPLEMENTS
  # ============================================

  - code: "WK2806"
    name: "Spirulina Tablets"
    category: "Nutritional Supplements"
    image: "Product-2807.png"
    ingredients:
      - Spirulina
    description: "Convenient tablets made from Spirulina, an exceptionally nutrient-dense blue-green microalgae containing 60-70% protein by weight along with all essential amino acids, iron, calcium, magnesium, B-vitamins, and vitamin E. Spirulina has been consumed for centuries — by the ancient Aztecs who harvested it from Lake Texcoco in Mexico and the Kanembu people near Lake Chad in Africa who make a traditional dried cake called 'dihe.' NASA has studied Spirulina as a potential food for astronauts due to its remarkable nutritional density. Contains phycocyanin, a unique pigment-protein with natural antioxidant properties. An easy, nutrient-rich addition to your daily routine."
    sizes:
      - "100 tablets"
      - "300 tablets"
      - "1,000 tablets"

  - code: "WK2805"
    name: "Sea Water Spirulina Powder"
    category: "Nutritional Supplements"
    image: "Product-2805.png"
    ingredients:
      - Spirulina
    description: "Premium Spirulina in powder form, harvested from nutrient-rich sea water. This versatile powder contains 17 amino acids, beta-carotene at concentrations 25 times higher than carrots, GLA (gamma-linolenic acid) at 3 times the concentration of evening primrose oil, and is 58 times richer in organic iron than spinach. Ideal for mixing into smoothies, juices, or water. Suitable for vegetarians and those seeking a whole-food source of plant-based protein and natural nutrients."
    sizes:
      - "500g"

  - code: "WK3801"
    name: "Bee Pollen Capsules"
    category: "Nutritional Supplements"
    image: "Product-3802.png"
    ingredients:
      - Bee Pollen
    description: "Capsules containing Bee Pollen — granules of flower pollen collected by honeybees and mixed with nectar and bee secretions. Each granule contains over 250 biologically active substances. Documented in the Bible, ancient Egyptian texts, and Traditional Chinese Medicine, Bee Pollen was known as 'ambrosia' or 'the food of the gods' in ancient Greece. It contains a wide array of vitamins (A, B-complex, C, D, E, K), minerals (calcium, phosphorus, magnesium, potassium, iron, zinc), and approximately 25% protein including all essential amino acids. One of the most complete natural foods found in nature."
    sizes:
      - "30 capsules"
      - "100 capsules"

  - code: "WK2802"
    name: "Goat's Milk Tablets"
    category: "Nutritional Supplements"
    image: "Product-2802.png"
    ingredients:
      - Goat's Milk
    description: "Tablets made from French goat's milk, naturally rich in calcium and containing over 200 nutrients. Goat's milk is naturally alkaline, and its protein structure differs from cow's milk, making it a popular alternative in many traditional diets worldwide. These convenient tablets provide a simple way to incorporate the natural goodness of goat's milk into your daily nutrition, without the need for refrigeration."
    sizes:
      - "75 tablets"
      - "150 tablets"

  - code: "WK2804"
    name: "Soybean Powder"
    category: "Nutritional Supplements"
    image: "Product-2804.png"
    ingredients:
      - Soybean
    description: "A fine powder made from soybeans, one of the most nutrient-dense legumes in the world. Soybeans are naturally high in complete plant protein and dietary fibre, and have been a staple food in Asian diets for thousands of years. This instant powder dissolves easily in warm water, making it a convenient source of plant-based nutrition for the whole family."
    sizes:
      - "454g"

  - code: "WK2811"
    name: "Daily Vite Multi-Vitamins with Lysine"
    category: "Nutritional Supplements"
    image: "Product-2811.png"
    ingredients:
      - Multi-Vitamins
      - Lysine
    description: "A liquid multi-vitamin formula enriched with Lysine, an essential amino acid that the body cannot produce on its own. This convenient liquid format provides a spectrum of vitamins in a form that is easy to take, particularly suitable for children and those who prefer liquid supplements to tablets. A daily nutritional complement for the whole family."
    sizes:
      - "100ml"

  - code: "WK2809"
    name: "Pro-LSB Tablets"
    category: "Nutritional Supplements"
    image: "Product-2809.png"
    ingredients:
      - Probiotics
    description: "Pro-LSB tablets contain beneficial probiotic cultures — the 'friendly' microorganisms that are a natural part of a healthy digestive system. Probiotics have been consumed throughout human history through fermented foods across many cultures. These tablets provide a convenient, shelf-stable way to include probiotics in your daily routine."
    sizes:
      - "150 tablets"

  - code: "WK2815"
    name: "Instant Goat's Milk Powder Premix"
    category: "Nutritional Supplements"
    image: "Product-2815.png"
    ingredients:
      - Goat's Milk
      - EGF (Epidermal Growth Factor)
    description: "A premium instant goat's milk powder containing over 200 nutrients plus EGF (Epidermal Growth Factor). This premix dissolves easily in hot water, providing the natural goodness of goat's milk in a convenient single-serve format. Naturally rich in calcium and minerals, it is a nourishing beverage suitable for daily consumption by the whole family."
    sizes:
      - "20 sachets x 21g"

  - code: "WK3814"
    name: "Prolink"
    category: "Nutritional Supplements"
    image: "Product-3814.png"
    ingredients:
      - Bovine Colostrum
    description: "Prolink contains bovine colostrum — the first milk produced by cows after birth, naturally rich in immunoglobulins, lactoferrin, cytokines, and nano-calcium. Colostrum has been valued across many traditional cultures as a potent natural food. This powder mixes easily with warm water and is taken before meals. A concentrated source of natural proteins and growth factors in a convenient sachet format."
    sizes:
      - "10 sachets x 20g"
      - "20 sachets x 20g"

  # ============================================
  # HERBAL & TRADITIONAL MEDICINE
  # ============================================

  - code: "WK1809"
    name: "Yeegano Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-1810.png"
    ingredients:
      - Ganoderma
    description: "Herbal supplement capsules featuring concentrated Ganoderma (Lingzhi/Reishi mushroom). Revered for over 2,000 years in Chinese, Japanese, and Korean traditional medicine, Ganoderma was historically reserved for royalty and documented in classical texts such as the Compendium of Materia Medica for enhancing energy, memory, and vitality. Rich in bioactive compounds including beta-glucan polysaccharides and triterpenes, it is one of the most extensively studied medicinal mushrooms in the world. These capsules provide a concentrated, convenient way to include this celebrated traditional ingredient in your daily regimen."
    sizes:
      - "30 capsules"
      - "90 capsules"

  - code: "WK1811"
    name: "Yeegarlic Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-1811.png"
    ingredients:
      - Garlic Extract
    description: "Capsules containing concentrated garlic extract. Garlic (Allium sativum) has been used as both a food and a traditional remedy for thousands of years across virtually every major civilisation — from ancient Egypt and Greece to traditional Chinese and Ayurvedic medicine. It is one of the most widely documented herbs in human history, valued for its natural sulphur compounds, including allicin. These capsules offer the traditional benefits of garlic in a convenient, odour-reduced format."
    sizes:
      - "90 capsules"

  - code: "WK4813"
    name: "Yeeginkgo Tablets"
    category: "Herbal & Traditional Medicine"
    image: "Product-4815.png"
    ingredients:
      - Ginkgo Biloba
    description: "Tablets made from Ginkgo Biloba extract — one of the oldest living tree species on Earth, dating back over 200 million years and often called a 'living fossil.' Used in Traditional Chinese Medicine for thousands of years, Ginkgo leaves contain flavonoids (quercetin, kaempferol) and unique terpenoids (ginkgolides, bilobalide). Traditionally valued for supporting mental clarity and healthy circulation, Ginkgo is the only surviving member of an ancient order of plants, making it botanically unique. A convenient daily supplement with deep historical roots."
    sizes:
      - "30 tablets"
      - "90 tablets"
      - "300 tablets"

  - code: "WK4811"
    name: "Ginali Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-4811.png"
    ingredients:
      - Ginkgo Biloba
      - Tongkat Ali
    description: "A dual-ingredient herbal capsule combining Ginkgo Biloba and Tongkat Ali — two of Asia's most celebrated traditional herbs. Ginkgo Biloba, the 200-million-year-old 'living fossil,' brings its rich profile of flavonoids and terpenoids. Tongkat Ali, Malaysia's prized national heritage plant, contributes its unique quassinoids and alkaloids. Together, they represent a union of ancient botanical traditions from East and Southeast Asia in one convenient capsule."
    sizes:
      - "30 capsules"
      - "100 capsules"

  - code: "WK4822"
    name: "Tongkat Ali Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-4822.png"
    ingredients:
      - Tongkat Ali
    description: "Pure Tongkat Ali (Eurycoma longifolia) in capsule form. Native to Malaysia, Indonesia, Vietnam, and Thailand, Tongkat Ali has been used for centuries in Southeast Asian folk medicine. The root contains quassinoids — particularly eurycomanone — along with alkaloids and bioactive steroids. It is now protected as a Malaysian national heritage plant and remains one of the most traditionally valued herbs in Southeast Asia, prized as a tonic for energy, stamina, and overall vitality."
    sizes:
      - "30 capsules"
      - "100 capsules"

  - code: "WK3811"
    name: "Green Tea Extract Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-3812.png"
    ingredients:
      - Green Tea Extract
    description: "Capsules containing concentrated Green Tea extract, derived from the leaves of Camellia sinensis — the same plant that produces all true teas. Green tea is one of the oldest beverages in human history, first documented by Chinese King Shen Nung in approximately 2737 BCE. It is rich in catechins (polyphenol antioxidants), particularly EGCG (epigallocatechin gallate), and contains L-theanine, a unique amino acid traditionally associated with calm focus. These capsules provide a concentrated form of green tea's natural compounds without the need to brew."
    sizes:
      - "30 capsules"
      - "60 capsules"

  - code: "WK4816"
    name: "Milk Thistle Tablets"
    category: "Herbal & Traditional Medicine"
    image: "Product-4817.png"
    ingredients:
      - Milk Thistle (Silymarin)
    description: "Tablets containing Milk Thistle (Silybum marianum) extract, standardised for silymarin — a complex of flavonolignans with silybin as the most active component. Milk Thistle has been used for over 2,000 years, documented by Pliny the Elder and Dioscorides in ancient Rome and Greece. Named for the milky white fluid from its crushed leaves, it is one of the most well-studied herbs for liver-related traditional use, valued as a natural tonic for the body's detoxification processes."
    sizes:
      - "30 tablets"
      - "120 tablets"

  - code: "WK9918N"
    name: "Dyna Serenoa Tablets"
    category: "Herbal & Traditional Medicine"
    image: "Product-9919.png"
    ingredients:
      - Saw Palmetto (Serenoa repens)
    description: "Tablets featuring Saw Palmetto (Serenoa repens) extract, a small palm native to the southeastern United States. Saw Palmetto berries have been used by indigenous peoples of North America for centuries. The extract contains fatty acids and phytosterols, and is one of the most commonly used herbal preparations for men's wellness in traditional practice. A convenient daily supplement for men's health maintenance."
    sizes:
      - "30 tablets"
      - "100 tablets"

  - code: "WK6803"
    name: "Dyna RH Capsules"
    category: "Herbal & Traditional Medicine"
    image: "Product-6803.png"
    ingredients:
      - Glucosamine
      - Chondroitin
    description: "Capsules formulated for joint wellness, containing compounds that are naturally present in healthy joint cartilage and synovial fluid. These ingredients have a long history of traditional use for maintaining joint comfort and mobility. Suitable for those seeking natural joint support as part of their daily wellness routine."
    sizes:
      - "100 capsules"

  - code: "WK9923"
    name: "Eye-Max"
    category: "Herbal & Traditional Medicine"
    image: "Product-9923.png"
    ingredients:
      - Herbal Eye Formula
    description: "Eye-Max is a herbal supplement formulated with ingredients traditionally associated with eye health and visual comfort. Presented in a convenient blister-pack format, these supplements are designed for daily use as part of a holistic approach to maintaining visual wellness."
    sizes:
      - "5 x 10 tablets"

  - code: "WK3808"
    name: "Yee Yang Yen Tablets"
    category: "Herbal & Traditional Medicine"
    image: "Product-3809.png"
    ingredients:
      - Italian Grape Seed Extract (OPC)
    description: "Tablets containing 95% OPC (Oligomeric Proanthocyanidins) extracted from Italian grape seeds. OPCs are a class of naturally occurring polyphenolic compounds found in grape seeds, pine bark, and certain fruits. Grape seed extract has been used in European traditional wellness practices and is valued for its rich concentration of natural plant compounds. A potent, convenient supplement derived from one of nature's most studied botanical sources."
    sizes:
      - "30 tablets"
      - "90 tablets"

  # ============================================
  # IMMUNE & VITALITY BOOSTERS
  # ============================================

  - code: "WK1801"
    name: "Liquid Chlorophyll Plus Guarana"
    category: "Immune & Vitality Boosters"
    image: "Product-1801.png"
    ingredients:
      - Chlorophyll
      - Guarana
    description: "A vibrant green liquid supplement combining Chlorophyll and Guarana. Chlorophyll — the green pigment in all photosynthetic plants — is structurally similar to haemoglobin (the oxygen-carrying molecule in human blood), with magnesium at its centre instead of iron. It has been used since the 1940s as a natural internal deodoriser and is traditionally valued for its cleansing properties. Guarana, from the Brazilian Amazon, has been used by indigenous peoples (particularly the Guarani and Sateré-Mawé tribes) for centuries as a natural energy food. Together, they create a refreshing, invigorating daily tonic."
    sizes:
      - "150ml"

  - code: "WK1802A"
    name: "Alfalfa Plus Guarana"
    category: "Immune & Vitality Boosters"
    image: "Product-1802A.png"
    ingredients:
      - Alfalfa
      - Guarana
    description: "A liquid supplement combining Alfalfa extract with Guarana. Alfalfa (Medicago sativa), whose name means 'father of all foods' in Arabic, is a nutrient-rich plant that has been cultivated for over 1,500 years. Paired with Guarana, a natural energy ingredient used by Amazonian peoples for centuries, this blend brings together botanical traditions from the Middle East and South America in one convenient liquid format."
    sizes:
      - "150ml"

  - code: "WK5802A"
    name: "Noni Juice"
    category: "Immune & Vitality Boosters"
    image: "Product-5802A.png"
    ingredients:
      - Noni (Morinda citrifolia)
    description: "Pure Noni (Morinda citrifolia) juice — from an evergreen shrub in the coffee family used by Polynesian peoples for over 2,000 years. Considered a sacred plant in Polynesian culture, Noni contains over 160 identified phytochemical compounds, including flavonoids (kaempferol, rutin), iridoids, and scopoletin. The whole plant — fruit, juice, seeds, leaves, bark, and root — is traditionally recognised in Pacific Island cultures for its natural properties. This juice delivers the full spectrum of Noni's natural compounds in a convenient liquid form."
    sizes:
      - "500ml"
      - "1 litre"

  - code: "WK3803"
    name: "Dyna Tonic"
    category: "Immune & Vitality Boosters"
    image: "Product-3804A.png"
    ingredients:
      - Radix Codonopsis (Dang Shen)
      - Astragalus (Huang Qi)
      - Fo-Ti (He Shou Wu)
      - Cistanche (Rou Cong Rong)
      - Poria (Fu Ling)
      - Liquorice Root (Gan Cao)
      - Chinese Yam (Shan Yao)
      - Eucommia Bark (Du Zhong)
      - Sour Jujube Seed (Suan Zao Ren)
      - Oyster Shell (Mu Li)
      - Dodder Seed (Tu Si Zi)
      - Polygala Root (Yuan Zhi)
      - Alisma (Ze Xie)
      - Amomum Fruit (Sha Ren)
      - Dioscorea (Shan Yao)
    description: "Dynapharm's signature herbal tonic, formulated from 15 traditional herbs rooted in Traditional Chinese Medicine (TCM) principles. This comprehensive formula brings together Qi-tonifying herbs (Codonopsis and Astragalus — one of TCM's most important herbs), blood-nourishing herbs (Fo-Ti, traditionally valued for invigorating the liver and kidney), kidney-supporting herbs (Cistanche, known as 'desert ginseng'; Eucommia bark; and Dodder seed), and calming herbs (Poria, a 'mind tranquilliser' fungus; Sour Jujube seed, traditionally valued for promoting restful sleep; and Polygala root for mental clarity). The formula also includes Liquorice root — one of the most widely used herbs in TCM, appearing in numerous classical formulas — along with Chinese Yam, Oyster shell, Amomum fruit, and Alisma. A masterfully balanced herbal blend addressing multiple organ systems simultaneously, representing centuries of traditional herbal wisdom."
    sizes:
      - "150ml"
      - "780ml"

  - code: "WK3805"
    name: "Dyna C Vitamin C Tablets"
    category: "Immune & Vitality Boosters"
    image: "Product-3805.png"
    ingredients:
      - Vitamin C
    description: "Vitamin C tablets available in two strengths — Dyna C-100 and Dyna C-250. Vitamin C (ascorbic acid) is one of the most essential water-soluble vitamins, playing a fundamental role in the body's natural processes. As the body cannot produce or store Vitamin C, daily intake through diet or supplementation is important. These chewable tablets offer a convenient and pleasant-tasting way to supplement your daily Vitamin C intake."
    sizes:
      - "C-100: 150 tablets"
      - "C-250: 90 tablets"

  - code: "WK4805"
    name: "Ginseng Capsules"
    category: "Immune & Vitality Boosters"
    image: "Product-4805.png"
    ingredients:
      - Ginseng (Panax ginseng)
    description: "Capsules containing Panax Ginseng — one of the most valued herbs in Traditional Chinese Medicine for millennia, particularly prized in Korea, China, and Japan. The root, which often resembles a human form, contains over 30 varieties of ginsenosides (triterpene saponins), its primary bioactive compounds. Classified as an adaptogen, Ginseng is traditionally valued for helping the body resist physical and mental stress. The Korean Royal Court historically prized it as a tonic for longevity. One of the most studied and commercially significant herbs globally."
    sizes:
      - "9 x 10 capsules"

  - code: "WK4808"
    name: "Sea Cucumber Jelly"
    category: "Immune & Vitality Boosters"
    image: "Product-4808.png"
    ingredients:
      - Sea Cucumber
    description: "A unique jelly preparation made from Sea Cucumber — marine animals that have been used for centuries in Asian and Middle Eastern traditional medicine and cuisine. Known as 'gamat' in Malay tradition, Sea Cucumber is exceptionally high in protein (up to 83% on a dry-weight basis) and low in fat. It contains vitamins A, B1, B2, B3, minerals (calcium, magnesium, iron, zinc), and unique bioactive compounds including triterpene glycosides, chondroitin sulphate, and natural collagen. Highly prized in Chinese culinary tradition as a delicacy."
    sizes:
      - "250ml"
      - "500ml"

  - code: "WK4819"
    name: "Sea Cucumber Plus Cough Syrup"
    category: "Immune & Vitality Boosters"
    image: "Product-4819.png"
    ingredients:
      - Sea Cucumber
      - Herbal Cough Formula
    description: "A syrup combining Sea Cucumber extract with traditional herbal ingredients formulated for respiratory comfort. Sea Cucumber (gamat) has been used in Malay and Indonesian traditional practice for its natural soothing properties. This syrup represents a blend of marine and botanical traditions in a pleasant liquid format."
    sizes:
      - "250ml"

  - code: "WK5810"
    name: "Pro-Life Mangosteen Plus Mixed Fruit Drink"
    category: "Immune & Vitality Boosters"
    image: "Product-5810.png"
    ingredients:
      - Mangosteen
      - Mixed Fruits
    description: "A delicious fruit drink featuring Mangosteen — known as the 'Queen of Fruits' for its exquisite, delicate flavour. The mangosteen pericarp (rind) contains xanthones, a unique class of plant compounds — at least 68 xanthones have been isolated from mangosteen, with alpha-mangostin being the most abundant. Traditionally valued in Southeast Asian folk medicine for over 200 years, mangosteen brings its rich natural compound profile to this refreshing mixed fruit beverage."
    sizes:
      - "30 sachets x 30ml"
      - "1 litre"

  - code: "WK5803"
    name: "Noni Plus Tea"
    category: "Immune & Vitality Boosters"
    image: "Product-5803.png"
    ingredients:
      - Noni
      - Tea
    description: "A herbal tea blend featuring Noni (Morinda citrifolia), the sacred plant of Polynesian tradition, combined with tea. Noni's over 160 identified phytochemical compounds are presented here in a light, easy-to-brew tea format. A gentle way to include this traditionally valued ingredient in your daily routine — simply steep one sachet in hot water."
    sizes:
      - "30 sachets x 3g"

  - code: "WK6801"
    name: "Dyna Inhaler"
    category: "Immune & Vitality Boosters"
    image: "Product-6801.png"
    ingredients:
      - Essential Oils
    description: "A compact nasal inhaler containing a blend of essential oils traditionally used for respiratory comfort. Small enough to carry in your pocket or handbag, this inhaler provides a refreshing aromatic experience whenever needed. A simple, natural approach to daily respiratory comfort."
    sizes:
      - "2ml"

  - code: "WK6802"
    name: "Nutmeg Ointment"
    category: "Immune & Vitality Boosters"
    image: "Product-6802.png"
    ingredients:
      - Nutmeg Oil
    description: "A topical ointment formulated with nutmeg oil, traditionally used for its natural warming and soothing properties. Nutmeg (Myristica fragrans) has been valued in traditional medicine systems across Asia and Europe for centuries. This ointment is applied externally and massaged gently into the skin. Presented in a convenient twin-pack format."
    sizes:
      - "2 x 20g"

  # ============================================
  # PERSONAL CARE
  # ============================================

  - code: "WK7813"
    name: "Tea Tree Oil Lotion"
    category: "Personal Care"
    image: "Product-7813.png"
    ingredients:
      - Tea Tree Oil
    description: "A body lotion formulated with Tea Tree Oil (Melaleuca alternifolia), an essential oil native to Australia that has been used by Aboriginal Australians for centuries. Tea Tree Oil is renowned for its natural cleansing and purifying properties. This lotion combines the traditional heritage of Tea Tree Oil with modern skincare formulation, providing daily skin care with a fresh, natural scent."
    sizes:
      - "250ml"

  - code: "WK7835"
    name: "Tea Tree Oil Feminine Wash"
    category: "Personal Care"
    image: "Product-7835.png"
    ingredients:
      - Tea Tree Oil
      - Sage
      - Rosemary
      - Thyme
      - Lavender
    description: "A gentle feminine wash formulated with Tea Tree Oil and a blend of traditional herbs — sage, rosemary, thyme, and lavender. These botanical ingredients have been valued in European herbal traditions for centuries for their natural cleansing properties. pH-balanced and designed for daily feminine hygiene, this wash combines multiple herbal traditions in one thoughtfully formulated product."
    sizes:
      - "250ml"

  - code: "WK7837"
    name: "Tea Tree Oil Toothpaste"
    category: "Personal Care"
    image: "Product-7837.png"
    ingredients:
      - Tea Tree Oil
    description: "A fluoride-free toothpaste formulated with Tea Tree Oil, offering a natural approach to daily oral care. Tea Tree Oil's natural cleansing properties make it a popular ingredient in natural dental care products worldwide. This toothpaste provides thorough cleaning with a fresh, natural taste — an alternative for those who prefer botanical-based oral hygiene."
    sizes:
      - "175g"

  - code: "WK7916"
    name: "Ganoderma Lotion"
    category: "Personal Care"
    image: "Product-7916.png"
    ingredients:
      - Ganoderma
    description: "A skincare lotion enriched with Ganoderma (Lingzhi mushroom) extract. Bringing the 2,000-year heritage of this celebrated mushroom to daily skincare, this lotion combines Ganoderma's rich bioactive profile with a moisturising formulation suitable for daily use. A natural approach to skin nourishment inspired by traditional Asian beauty practices."
    sizes:
      - "150ml"

  - code: "WK7919"
    name: "Ganoderma Toothpaste"
    category: "Personal Care"
    image: "Product-7919.png"
    ingredients:
      - Ganoderma
    description: "A fluoride-free toothpaste infused with Ganoderma (Lingzhi mushroom) extract. This unique oral care product brings the traditional heritage of Ganoderma to your daily dental routine. A distinctive toothpaste for those who appreciate natural, botanical-based oral hygiene."
    sizes:
      - "150g"

  - code: "WK7920"
    name: "Ganoderma Shower Gel"
    category: "Personal Care"
    image: "Product-7920.png"
    ingredients:
      - Ganoderma
      - Portulaca Extract
      - Vitamin Pro-B5
      - Vitamin E
    description: "A body wash and gentle scrub enriched with Ganoderma extract, Portulaca (purslane) extract, Vitamin Pro-B5, and Vitamin E. This multi-ingredient formulation combines the traditional heritage of Ganoderma with modern skincare actives for a cleansing experience that goes beyond ordinary shower gel. Suitable for daily use."
    sizes:
      - "150ml"

  - code: "WK7816"
    name: "E-Vita Cream"
    category: "Personal Care"
    image: "Product-7816.png"
    ingredients:
      - Dioscorea Extract
      - Grape Seed Extract
      - Aloe Vera
      - Vitamin E
      - Ginkgo Biloba Extract
      - Soybean Oil
    description: "A premium face and body cream combining six active botanical ingredients: Dioscorea (wild yam) extract, Grape Seed extract rich in OPCs, soothing Aloe Vera, nourishing Vitamin E, Ginkgo Biloba extract, and Soybean oil. Each ingredient brings its own traditional heritage — from Dioscorea's centuries of use in traditional medicine to Grape Seed's concentration of natural polyphenols. A comprehensive skincare cream formulated with nature's finest botanical actives."
    sizes:
      - "50g"

  - code: "WK7928"
    name: "Snail Aqua Sleep Cream"
    category: "Personal Care"
    image: "Product-7928.png"
    ingredients:
      - Snail Mucin
    description: "A night cream formulated with snail mucin — an ingredient that has gained recognition in Korean and Asian beauty for its natural skin-nourishing properties. Snail secretion filtrate contains naturally occurring glycoproteins, hyaluronic acid, and glycolic acid. This overnight cream is designed to work while you sleep, supporting the skin's natural renewal processes. A modern skincare innovation rooted in nature."
    sizes:
      - "30ml"

  - code: "WK7841"
    name: "Nano Home Feminine Wash with Kacip Fatimah"
    category: "Personal Care"
    image: "Product-7841.png"
    ingredients:
      - Kacip Fatimah
    description: "A compact feminine wash featuring Kacip Fatimah (Labisia pumila), the traditional Malay herb that holds deep cultural significance in women's wellness. This travel-friendly format makes it convenient to maintain your personal care routine wherever you go. Formulated with the same traditional ingredient that has been used by Malay women for generations."
    sizes:
      - "60ml"

  - code: "WK7842"
    name: "Nano Home Feminine Wash with Sirih"
    category: "Personal Care"
    image: "Product-7842.png"
    ingredients:
      - Sirih (Betel Leaf)
    description: "A compact feminine wash formulated with Sirih (betel leaf) extract, a traditional ingredient used across Southeast Asia for centuries for its natural antiseptic and cleansing properties. This travel-size format offers the heritage of a time-honoured botanical ingredient in a modern, convenient personal care product."
    sizes:
      - "60ml"

  - code: "WK7843"
    name: "Nano Home Feminine Wash with Gamat"
    category: "Personal Care"
    image: "Product-7843.png"
    ingredients:
      - Gamat (Sea Cucumber)
    description: "A compact feminine wash featuring Gamat (Sea Cucumber) extract, traditionally used in Malay and Indonesian wellness practices for its natural soothing and healing properties. Sea Cucumber contains natural collagen, chondroitin sulphate, and unique bioactive compounds. This travel-size wash brings marine traditional wisdom to modern personal care."
    sizes:
      - "60ml"

  # ============================================
  # WELLNESS FOODS
  # ============================================

  - code: "WK5801A"
    name: "Instant Cereal with Spirulina, Soybean & Noni"
    category: "Wellness Foods"
    image: "Product-5801A.png"
    ingredients:
      - Spirulina
      - Soybean
      - Noni
    description: "A nourishing instant cereal bringing together three powerful natural ingredients: Spirulina (the nutrient-dense blue-green algae consumed by the ancient Aztecs), Soybean (a complete plant protein staple of Asian diets for millennia), and Noni (the sacred Polynesian fruit with over 160 identified phytochemicals). This convenient breakfast cereal dissolves in hot water or milk, providing a wholesome start to your day with ingredients from three continents."
    sizes:
      - "15 sachets x 32g"
      - "30 sachets x 32g"

  - code: "WK1813"
    name: "Instant Wheatgrass with Chlorophyll"
    category: "Wellness Foods"
    image: "Product-1813.png"
    ingredients:
      - Wheatgrass
      - Chlorophyll
    description: "An instant drink combining Wheatgrass and Chlorophyll — two of nature's greenest superfoods. Wheatgrass, the young shoots of the common wheat plant harvested at just 7-10 days, contains approximately 70% chlorophyll along with flavonoids, phenolic compounds, vitamins (A, C, E, K, B-vitamins), and at least 17 amino acids. Combined with additional Chlorophyll — the green pigment structurally similar to haemoglobin — this vibrant green drink is a concentrated source of plant-based nutrition. Simply mix with water for a refreshing, nutrient-rich beverage."
    sizes:
      - "20 sachets x 10g"

  - code: "WK5807N"
    name: "High Fibre Nutrition Food"
    category: "Wellness Foods"
    image: "Product-5807N.png"
    ingredients:
      - Dietary Fibre
      - Grains
    description: "A high-fibre nutrition powder designed as a wholesome meal supplement or breakfast replacement. Rich in natural dietary fibre from multiple grain sources, this instant food dissolves in water and provides sustained nourishment. Dietary fibre is an essential component of a balanced diet, supporting healthy digestion and contributing to a feeling of fullness. A convenient way to increase your daily fibre intake."
    sizes:
      - "30 sachets x 25g"

  - code: "WK4803"
    name: "Instant Ginseng Honey Ginger"
    category: "Wellness Foods"
    image: "Product-4803.png"
    ingredients:
      - Ginseng
      - Honey
      - Ginger
    description: "A warming blend of three traditional ingredients beloved across cultures: Ginseng (one of TCM's most prized adaptogenic herbs), natural Honey (valued since antiquity as nature's sweetener and a traditional remedy), and Ginger (used for thousands of years across Asian, African, and European traditional medicine for its distinctive warming properties). This comforting drink dissolves in hot water, making it a soothing ritual — particularly welcome during cooler seasons."
    sizes:
      - "20 sachets x 20g"
      - "500g jar"

  - code: "WK2812"
    name: "Herba Warisan Maharani"
    category: "Wellness Foods"
    image: "Product-2812.png"
    ingredients:
      - 16-Herb Traditional Blend
    description: "A traditional herbal preparation combining 16 carefully selected herbs in the Malay 'jamu' tradition — a centuries-old practice of herbal wellness originating from the Malay Archipelago. 'Maharani' (meaning 'queen' or 'empress') reflects the product's heritage as a women's wellness formulation. This multi-herb blend represents one of the most complex traditional preparations in the Dynapharm range."
    sizes:
      - "6 sachets x 10g"

  - code: "WK2813"
    name: "Instant Soybean Mixture with Ginger"
    category: "Wellness Foods"
    image: "Product-2813.png"
    ingredients:
      - Soybean
      - Ginger
    description: "An instant soybean drink enhanced with ginger, combining the complete plant protein of soybeans with the natural warming properties of ginger. Ginger has been used for thousands of years across Asian, African, and European cultures, prized for its distinctive flavour and traditional digestive benefits. This convenient premix dissolves in warm water, offering a nourishing, gently spiced beverage."
    sizes:
      - "20 sachets x 25g"

  - code: "WK5806"
    name: "Dyna S Tablets"
    category: "Wellness Foods"
    image: "Product-5806.png"
    ingredients:
      - Herbal Slimming Formula
    description: "Dyna S tablets are formulated as part of a weight management regimen when combined with a balanced diet and regular physical activity. These tablets contain a blend of natural ingredients selected to complement a healthy lifestyle. Designed to be taken before meals as part of a structured wellness programme."
    sizes:
      - "120 tablets"

  # ============================================
  # AGRICULTURE
  # ============================================

  - code: "WK9829"
    name: "D.I. Grow Bio-Fertiliser (Red)"
    category: "Agriculture"
    image: "Product-9829.png"
    ingredients:
      - Bio-Fertiliser Formulation
    description: "A liquid bio-fertiliser formulated specifically to support plant reproductive growth — optimising flower and fruit development. D.I. Grow (Red) enhances crop resistance, improves soil quality, and is completely non-toxic, making it suitable for organic farming practices. Dilute approximately 75ml per 20 litres of water and apply during the flowering and fruiting stages. Suitable for fruit trees, vegetables, flowering plants, and ornamental gardens. A natural, plant-friendly alternative to conventional chemical fertilisers."
    sizes:
      - "250ml"
      - "1 litre"
      - "4 litres"

  - code: "WK9830"
    name: "D.I. Grow Bio-Fertiliser (Green)"
    category: "Agriculture"
    image: "Product-9830.png"
    ingredients:
      - Bio-Fertiliser Formulation
    description: "A liquid bio-fertiliser formulated to enhance vegetative growth — stimulating root, stem, and leaf development. D.I. Grow (Green) promotes chlorophyll production, strengthens plant immunity, and can restore unhealthy or stressed plants. Dilute approximately 75ml per 20 litres of water and apply in the morning or evening during the vegetative growth phase. Ideal for leafy vegetables, herbs, lawns, and any plants where lush, green growth is desired. Non-toxic and suitable for sustainable farming."
    sizes:
      - "250ml"
      - "1 litre"
      - "4 litres"

  # ============================================
  # HOME & LIFESTYLE
  # ============================================

  - code: "WK8805"
    name: "Mineral Pot"
    category: "Home & Lifestyle"
    image: "Product-8805.png"
    ingredients:
      - Mineral Filtration System
    description: "A mineral water filtration pot that purifies and mineralises your drinking water at home. The multi-stage filtration system removes impurities whilst adding beneficial minerals back into the water. No electricity required — simply pour water into the top chamber and let gravity do the work. An economical, environmentally friendly alternative to bottled water, providing your family with clean, mineral-enriched water daily."
    sizes:
      - "1 unit"

  - code: "WK7833"
    name: "Dyna Toothbrush Set"
    category: "Home & Lifestyle"
    image: "Product-7833.png"
    ingredients: []
    description: "A set of three quality toothbrushes designed for effective daily oral care. Paired with Dynapharm's natural toothpaste range — Tea Tree Oil or Ganoderma — these brushes complete your natural oral hygiene routine. Ergonomically designed for comfortable, thorough brushing."
    sizes:
      - "Set of 3"
```

---

## Products Not Included

The following products from the database are excluded from the website catalogue:

- **WK10801 — New Distributors Registration Kit**: Not a consumer product; internal distributor registration item.
- **WK1802 — DI Liquid Chlorophyll Plus Guarana 150ML**: Duplicate of WK1801 (same product, same size).

## Image Coverage Notes

Products where the primary image uses a different size variant's photo (the product still has an image):
- Spirulina Tablets: Uses Product-2807.png (300s variant)
- Bee Pollen: Uses Product-3802.png (100s variant)
- Yeegano: Uses Product-1810.png (90s variant)
- Goat's Milk Tablets: Uses Product-2802.png (150s variant)
- Yeeginkgo: Uses Product-4815.png (90s variant)
- Ginali: Uses Product-4811.png (100s variant)
- Green Tea Extract: Uses Product-3812.png (60s variant)
- Milk Thistle: Uses Product-4817.png (120s variant)
- Tongkat Ali: Uses Product-4822.png (30s variant)
- Dyna Serenoa: Uses Product-9919.png (30s variant)
- Yee Yang Yen: Uses Product-3809.png (90s variant)
- Dyna Tonic: Uses Product-3804A.png (780ml variant)
- Dyna C: Uses Product-3805.png (C-100 variant)
- Sea Cucumber Jelly: Uses Product-4808.png (250ml variant)
- Pro-Life Mangosteen: Uses Product-5810.png (1L variant)
- Noni: Uses Product-5802A.png (1L variant)
- Instant Cereal: Uses Product-5801A.png (30s variant)
- Prolink: Uses Product-3814.png (20s variant)
- Ginseng Honey Ginger: Uses Product-4803.png (500g variant)

## Total Product Count

**55 unique products** (deduplicated from 88 database entries) across **8 categories**:

| Category | Count |
|----------|-------|
| Health Beverages | 11 |
| Nutritional Supplements | 9 |
| Herbal & Traditional Medicine | 11 |
| Immune & Vitality Boosters | 11 |
| Personal Care | 11 |
| Wellness Foods | 7 |
| Agriculture | 2 |
| Home & Lifestyle | 2 |
| **Total** | **55** (after deduplication; say "90+" including all size variants) |
