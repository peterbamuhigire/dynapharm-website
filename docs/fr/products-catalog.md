# Catalogue des Produits

Données structurées des produits alimentant la page Produits. Les produits sont dédupliqués — les variantes de taille sont répertoriées sous une seule entrée de produit.

> **IMPORTANT — Règle d'affichage Frontend** : Les codes produits (ex. WK1201, WK3101) sont inclus ici à titre de référence interne uniquement. Ils ne doivent **PAS** être affichés sur le site web. Le frontend doit afficher le nom du produit, la catégorie, l'image, la description, les ingrédients et les tailles — jamais le champ code.

---

## Categories

```yaml
categories:
  - id: "health-beverages"
    name: "Boissons de Santé"
    description: "Mélanges de café nourrissants, thés et boissons chocolatées enrichis d'ingrédients traditionnels à base de plantes"
    icon: "coffee"

  - id: "nutritional-supplements"
    name: "Compléments Nutritionnels"
    description: "Comprimés, poudres et gélules riches en nutriments issus des meilleurs superaliments de la nature"
    icon: "pill"

  - id: "herbal-traditional-medicine"
    name: "Médecine Traditionnelle et Plantes Médicinales"
    description: "Formulations à base de plantes éprouvées par le temps, enracinées dans des siècles de pratique traditionnelle de bien-être"
    icon: "leaf"

  - id: "immune-vitality-boosters"
    name: "Stimulants d'Immunité et de Vitalité"
    description: "Toniques naturels, jus et compléments traditionnellement appréciés pour la vitalité et le bien-être général"
    icon: "zap"

  - id: "personal-care"
    name: "Soins Personnels"
    description: "Produits de soins de la peau, d'hygiène bucco-dentaire et d'hygiène personnelle formulés avec des ingrédients botaniques naturels"
    icon: "sparkles"

  - id: "wellness-foods"
    name: "Aliments de Bien-être"
    description: "Céréales complètes, repas nutritifs et préparations alimentaires traditionnelles pour une alimentation quotidienne saine"
    icon: "wheat"

  - id: "agriculture"
    name: "Agriculture"
    description: "Solutions de bio-fertilisants pour des cultures plus saines, des jardins et une agriculture durable"
    icon: "sprout"

  - id: "home-lifestyle"
    name: "Maison et Mode de Vie"
    description: "Essentiels de bien-être quotidien pour la maison"
    icon: "home"
```

---

## Products

```yaml
products:

  # ============================================
  # BOISSONS DE SANTÉ
  # ============================================

  - code: "WK1201"
    name: "Instant Coffee Mix with Ginkgo & Ginseng"
    category: "Boissons de Santé"
    image: "Product-1201.png"
    ingredients:
      - Ginkgo Biloba
      - Ginseng
    description: "Un mélange de café instantané onctueux enrichi en Ginkgo Biloba et Ginseng — deux plantes dotées d'un riche héritage dans le bien-être traditionnel asiatique. Le Ginkgo Biloba est l'une des plus anciennes espèces d'arbres vivants sur Terre, traditionnellement apprécié pour soutenir la clarté mentale et une circulation saine. Le Ginseng, dont le nom signifie « qui guérit tout » en grec, est l'une des plantes les plus prisées de la médecine traditionnelle chinoise depuis des millénaires, traditionnellement apprécié comme adaptogène. Une manière savoureuse de profiter de ces plantes ancestrales dans le cadre de votre rituel café quotidien."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1202"
    name: "Instant Coffee Mix with Ganoderma & Green Tea"
    category: "Boissons de Santé"
    image: "Product-1202.png"
    ingredients:
      - Ganoderma
      - Green Tea
    description: "Un mélange de café aromatique à base de Ganoderma (champignon Lingzhi) et d'extrait de thé vert. Le Ganoderma est vénéré dans la médecine traditionnelle chinoise, japonaise et coréenne depuis plus de 2 000 ans — connu comme le « champignon de l'immortalité » et riche en composés bioactifs, notamment les polysaccharides bêta-glucanes et les triterpènes. Le thé vert, l'une des plus anciennes boissons de l'histoire humaine remontant à près de 5 000 ans, est naturellement riche en catéchines et en L-théanine. Une expérience café distinguée réunissant deux des ingrédients botaniques les plus célèbres d'Asie."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1203"
    name: "Instant Coffee Mix with Kacip Fatimah, Green Tea & Ganoderma"
    category: "Boissons de Santé"
    image: "Product-1203.png"
    ingredients:
      - Kacip Fatimah
      - Green Tea
      - Ganoderma
    description: "Un mélange de café unique combinant trois ingrédients traditionnels. Le Kacip Fatimah (Labisia pumila) est une petite plante herbacée originaire des forêts tropicales de Malaisie, traditionnellement utilisée par les femmes malaises depuis des générations pour le bien-être féminin — elle revêt une profonde signification culturelle dans la médecine traditionnelle malaise et contient naturellement des phytoestrogènes. Associé au Ganoderma et à l'extrait de thé vert, ce café offre un mélange distinctif conçu dans l'esprit des traditions de bien-être féminin."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1204"
    name: "Instant Coffee Mix with Tongkat Ali & Maca"
    category: "Boissons de Santé"
    image: "Product-1204.png"
    ingredients:
      - Tongkat Ali
      - Maca
    description: "Un mélange de café corsé réunissant deux ingrédients traditionnels célèbres provenant de côtés opposés du globe. Le Tongkat Ali (« le bâton de marche d'Ali ») est une plante à fleurs originaire d'Asie du Sud-Est, utilisée depuis des siècles dans la médecine traditionnelle malaisienne et indonésienne comme tonique pour l'énergie et la vitalité — elle contient des quassinoïdes, des alcaloïdes et des stéroïdes bioactifs, et est désormais protégée en tant que plante du patrimoine national malaisien. Le Maca, cultivé depuis plus de 2 000 ans dans les hauts plateaux des Andes péruviennes à des altitudes de 3 800 à 4 500 mètres, était prisé par la civilisation inca comme un superaliment riche en nutriments — il contient des composés uniques appelés macamides que l'on ne trouve dans aucune autre plante. Ensemble, ils créent un rituel café revigorant."
    sizes:
      - "15 sachets x 21g"

  - code: "WK1205"
    name: "Instant Cappuccino Coffee Mix with Ganoderma"
    category: "Boissons de Santé"
    image: "Product-1205.png"
    ingredients:
      - Ganoderma
    description: "Un café de type cappuccino crémeux enrichi en Ganoderma (champignon Lingzhi). Ce mélange offre le goût onctueux et mousseux du cappuccino combiné à l'héritage du Ganoderma — un champignon si hautement considéré dans la Chine ancienne qu'il était historiquement réservé à la royauté et documenté dans des textes classiques tels que le Compendium de la Matière Médicale. Riche et velouté, c'est une façon agréable d'intégrer cet ingrédient traditionnel dans votre routine quotidienne."
    sizes:
      - "15 sachets x 35g"

  - code: "WK1208"
    name: "Arabica Coffee Mix with Goat's Milk & Ganoderma"
    category: "Boissons de Santé"
    image: "Product-1208.png"
    ingredients:
      - Arabica Coffee
      - Goat's Milk
      - Ganoderma
    description: "Un mélange de café Arabica premium 6-en-1 combinant la douceur du lait de chèvre avec l'héritage traditionnel du Ganoderma. Le lait de chèvre est naturellement riche en calcium et contient plus de 200 nutriments. Ce mélange soigneusement élaboré réunit un café Arabica de qualité, la richesse nutritive du lait de chèvre et le champignon Ganoderma ancestral en une seule tasse pratique."
    sizes:
      - "20 sachets x 25g"

  - code: "WK1804"
    name: "Instant Coffee Mix with Ganoderma"
    category: "Boissons de Santé"
    image: "Product-1804.png"
    ingredients:
      - Ganoderma
    description: "Le café classique de Dynapharm — un mélange instantané onctueux à base de Ganoderma (champignon Lingzhi), l'un des champignons médicinaux les plus étudiés au monde. Doté d'un riche profil phytochimique comprenant des polysaccharides bêta-glucanes et des triterpènes, le Ganoderma est une pierre angulaire des traditions de bien-être asiatiques depuis plus de deux millénaires. Ce mélange de café simple permet de profiter facilement du Ganoderma dans le cadre de votre routine quotidienne."
    sizes:
      - "20 sachets x 21g"

  - code: "WK1806"
    name: "Instant Chocolate Mix with Ganoderma"
    category: "Boissons de Santé"
    image: "Product-1806.png"
    ingredients:
      - Chocolate
      - Ganoderma
    description: "Une boisson chocolatée riche et gourmande enrichie en Ganoderma (champignon Lingzhi). Ce mélange offre la chaleur réconfortante du chocolat combinée à l'héritage traditionnel du Ganoderma — parfait pour ceux qui préfèrent une alternative au café. Une façon délicieuse d'intégrer ce champignon célèbre dans votre routine de bien-être quotidienne, à déguster chaud ou froid."
    sizes:
      - "30 sachets x 30g"

  - code: "WK1817"
    name: "President's Choice 4-in-1 Coffee & Chocolate"
    category: "Boissons de Santé"
    image: "Product-1817.png"
    ingredients:
      - Coffee
      - Chocolate
      - Ganoderma
    description: "Un mélange distinctif 4-en-1 qui associe café et chocolat avec du Ganoderma dans un format pratique en portion individuelle. Ce produit signature offre un profil gustatif unique — la profondeur du café rencontre la richesse du chocolat, le tout rehaussé par le champignon Ganoderma. Une boisson polyvalente à savourer à tout moment de la journée."
    sizes:
      - "20 sachets x 30g"

  - code: "WK3810"
    name: "Red Coffee with Ginseng"
    category: "Boissons de Santé"
    image: "Product-3810.png"
    ingredients:
      - Ginseng
    description: "Un mélange distinctif de café rouge enrichi en Ginseng — l'une des plantes les plus prisées de la médecine traditionnelle chinoise depuis des millénaires. Le Ginseng (Panax ginseng), dont la racine ressemble souvent à une forme humaine, contient plus de 30 variétés de ginsénosides et est classé comme adaptogène, traditionnellement apprécié pour aider l'organisme à résister au stress physique et mental. Ce café rouge unique offre une saveur audacieuse avec l'héritage de l'une des plantes les plus étudiées et les plus commercialement importantes au monde."
    sizes:
      - "12 sachets x 25g"

  - code: "WK4810"
    name: "Instant Coffee Mix with Tongkat Ali"
    category: "Boissons de Santé"
    image: "Product-4810.png"
    ingredients:
      - Tongkat Ali
    description: "Un mélange de café instantané à base de Tongkat Ali (Eurycoma longifolia), l'une des plantes traditionnelles les plus prisées de Malaisie. Connu sous le nom de « bâton de marche d'Ali », le Tongkat Ali est utilisé depuis des siècles dans la médecine traditionnelle d'Asie du Sud-Est. La racine contient des quassinoïdes — notamment l'eurycomanone — ainsi que des alcaloïdes et des stéroïdes bioactifs. Traditionnellement apprécié comme tonique pour l'énergie et l'endurance, ce café permet de profiter facilement de cette célèbre plante malaisienne au quotidien."
    sizes:
      - "20 sachets x 21g"

  - code: "WK4810N"
    name: "Milk Tea with Tongkat Ali"
    category: "Boissons de Santé"
    image: "Product-4810N.png"
    ingredients:
      - Tongkat Ali
      - Milk Tea
    description: "Un thé au lait onctueux infusé au Tongkat Ali, offrant une alternative au café pour ceux qui préfèrent une boisson plus douce et crémeuse. Le Tongkat Ali est utilisé depuis des siècles dans les traditions de bien-être malaisienne et indonésienne, et ce mélange constitue une façon agréable et réconfortante d'intégrer cette plante célèbre dans votre routine quotidienne."
    sizes:
      - "20 sachets x 21g"

  # ============================================
  # COMPLÉMENTS NUTRITIONNELS
  # ============================================

  - code: "WK2806"
    name: "Spirulina Tablets"
    category: "Compléments Nutritionnels"
    image: "Product-2807.png"
    ingredients:
      - Spirulina
    description: "Des comprimés pratiques à base de Spirulina, une microalgue bleu-vert exceptionnellement riche en nutriments contenant 60 à 70 % de protéines en poids ainsi que tous les acides aminés essentiels, du fer, du calcium, du magnésium, des vitamines B et de la vitamine E. La Spirulina est consommée depuis des siècles — par les anciens Aztèques qui la récoltaient dans le lac Texcoco au Mexique et par le peuple Kanembu près du lac Tchad en Afrique qui en prépare un gâteau séché traditionnel appelé « dihé ». La NASA a étudié la Spirulina comme aliment potentiel pour les astronautes en raison de sa remarquable densité nutritionnelle. Elle contient de la phycocyanine, un pigment-protéine unique aux propriétés antioxydantes naturelles. Un complément riche en nutriments facile à intégrer dans votre routine quotidienne."
    sizes:
      - "100 comprimés"
      - "300 comprimés"
      - "1 000 comprimés"

  - code: "WK2805"
    name: "Sea Water Spirulina Powder"
    category: "Compléments Nutritionnels"
    image: "Product-2805.png"
    ingredients:
      - Spirulina
    description: "De la Spirulina premium sous forme de poudre, récoltée dans une eau de mer riche en nutriments. Cette poudre polyvalente contient 17 acides aminés, du bêta-carotène à des concentrations 25 fois supérieures à celles des carottes, du GLA (acide gamma-linolénique) à une concentration 3 fois supérieure à celle de l'huile d'onagre, et est 58 fois plus riche en fer organique que les épinards. Idéale à mélanger dans des smoothies, des jus ou de l'eau. Convient aux végétariens et à ceux qui recherchent une source alimentaire complète de protéines végétales et de nutriments naturels."
    sizes:
      - "500g"

  - code: "WK3801"
    name: "Bee Pollen Capsules"
    category: "Compléments Nutritionnels"
    image: "Product-3802.png"
    ingredients:
      - Bee Pollen
    description: "Des gélules contenant du Bee Pollen — des granules de pollen de fleurs collectés par les abeilles et mélangés avec du nectar et des sécrétions d'abeilles. Chaque granule contient plus de 250 substances biologiquement actives. Documenté dans la Bible, les textes de l'Égypte ancienne et la médecine traditionnelle chinoise, le Bee Pollen était connu sous le nom d'« ambroisie » ou « la nourriture des dieux » dans la Grèce antique. Il contient un large éventail de vitamines (A, complexe B, C, D, E, K), de minéraux (calcium, phosphore, magnésium, potassium, fer, zinc) et environ 25 % de protéines comprenant tous les acides aminés essentiels. L'un des aliments naturels les plus complets que l'on puisse trouver dans la nature."
    sizes:
      - "30 gélules"
      - "100 gélules"

  - code: "WK2802"
    name: "Goat's Milk Tablets"
    category: "Compléments Nutritionnels"
    image: "Product-2802.png"
    ingredients:
      - Goat's Milk
    description: "Des comprimés à base de lait de chèvre français, naturellement riche en calcium et contenant plus de 200 nutriments. Le lait de chèvre est naturellement alcalin, et sa structure protéique diffère de celle du lait de vache, ce qui en fait une alternative populaire dans de nombreux régimes alimentaires traditionnels à travers le monde. Ces comprimés pratiques offrent un moyen simple d'intégrer les bienfaits naturels du lait de chèvre dans votre alimentation quotidienne, sans nécessiter de réfrigération."
    sizes:
      - "75 comprimés"
      - "150 comprimés"

  - code: "WK2804"
    name: "Soybean Powder"
    category: "Compléments Nutritionnels"
    image: "Product-2804.png"
    ingredients:
      - Soybean
    description: "Une poudre fine à base de soja, l'une des légumineuses les plus riches en nutriments au monde. Le soja est naturellement riche en protéines végétales complètes et en fibres alimentaires, et constitue un aliment de base dans les régimes asiatiques depuis des milliers d'années. Cette poudre instantanée se dissout facilement dans de l'eau tiède, ce qui en fait une source pratique de nutrition végétale pour toute la famille."
    sizes:
      - "454g"

  - code: "WK2811"
    name: "Daily Vite Multi-Vitamins with Lysine"
    category: "Compléments Nutritionnels"
    image: "Product-2811.png"
    ingredients:
      - Multi-Vitamins
      - Lysine
    description: "Une formule multivitaminée liquide enrichie en Lysine, un acide aminé essentiel que l'organisme ne peut produire lui-même. Ce format liquide pratique fournit un large spectre de vitamines sous une forme facile à prendre, particulièrement adaptée aux enfants et à ceux qui préfèrent les compléments liquides aux comprimés. Un complément nutritionnel quotidien pour toute la famille."
    sizes:
      - "100ml"

  - code: "WK2809"
    name: "Pro-LSB Tablets"
    category: "Compléments Nutritionnels"
    image: "Product-2809.png"
    ingredients:
      - Probiotics
    description: "Les comprimés Pro-LSB contiennent des cultures probiotiques bénéfiques — les micro-organismes « amis » qui font naturellement partie d'un système digestif sain. Les probiotiques sont consommés tout au long de l'histoire humaine à travers les aliments fermentés dans de nombreuses cultures. Ces comprimés offrent un moyen pratique et stable de conserver des probiotiques dans votre routine quotidienne."
    sizes:
      - "150 comprimés"

  - code: "WK2815"
    name: "Instant Goat's Milk Powder Premix"
    category: "Compléments Nutritionnels"
    image: "Product-2815.png"
    ingredients:
      - Goat's Milk
      - EGF (Epidermal Growth Factor)
    description: "Une poudre de lait de chèvre instantanée premium contenant plus de 200 nutriments ainsi que de l'EGF (Epidermal Growth Factor). Ce prémélange se dissout facilement dans de l'eau chaude, offrant les bienfaits naturels du lait de chèvre dans un format pratique en portion individuelle. Naturellement riche en calcium et en minéraux, c'est une boisson nourrissante adaptée à la consommation quotidienne de toute la famille."
    sizes:
      - "20 sachets x 21g"

  - code: "WK3814"
    name: "Prolink"
    category: "Compléments Nutritionnels"
    image: "Product-3814.png"
    ingredients:
      - Bovine Colostrum
    description: "Prolink contient du colostrum bovin — le premier lait produit par les vaches après la naissance, naturellement riche en immunoglobulines, lactoferrine, cytokines et nano-calcium. Le colostrum est apprécié dans de nombreuses cultures traditionnelles comme un aliment naturel puissant. Cette poudre se mélange facilement avec de l'eau tiède et se prend avant les repas. Une source concentrée de protéines naturelles et de facteurs de croissance dans un format sachet pratique."
    sizes:
      - "10 sachets x 20g"
      - "20 sachets x 20g"

  # ============================================
  # MÉDECINE TRADITIONNELLE ET PLANTES MÉDICINALES
  # ============================================

  - code: "WK1809"
    name: "Yeegano Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-1810.png"
    ingredients:
      - Ganoderma
    description: "Des gélules de complément à base de plantes contenant du Ganoderma concentré (champignon Lingzhi/Reishi). Vénéré depuis plus de 2 000 ans dans la médecine traditionnelle chinoise, japonaise et coréenne, le Ganoderma était historiquement réservé à la royauté et documenté dans des textes classiques tels que le Compendium de la Matière Médicale pour le renforcement de l'énergie, de la mémoire et de la vitalité. Riche en composés bioactifs, notamment les polysaccharides bêta-glucanes et les triterpènes, c'est l'un des champignons médicinaux les plus étudiés au monde. Ces gélules offrent un moyen concentré et pratique d'intégrer cet ingrédient traditionnel célèbre dans votre régime quotidien."
    sizes:
      - "30 gélules"
      - "90 gélules"

  - code: "WK1811"
    name: "Yeegarlic Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-1811.png"
    ingredients:
      - Garlic Extract
    description: "Des gélules contenant un extrait d'ail concentré. L'ail (Allium sativum) est utilisé à la fois comme aliment et comme remède traditionnel depuis des milliers d'années dans pratiquement toutes les grandes civilisations — de l'Égypte et la Grèce antiques à la médecine traditionnelle chinoise et ayurvédique. C'est l'une des plantes les plus documentées de l'histoire humaine, appréciée pour ses composés soufrés naturels, notamment l'allicine. Ces gélules offrent les bienfaits traditionnels de l'ail dans un format pratique à odeur réduite."
    sizes:
      - "90 gélules"

  - code: "WK4813"
    name: "Yeeginkgo Tablets"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-4815.png"
    ingredients:
      - Ginkgo Biloba
    description: "Des comprimés à base d'extrait de Ginkgo Biloba — l'une des plus anciennes espèces d'arbres vivants sur Terre, remontant à plus de 200 millions d'années et souvent qualifié de « fossile vivant ». Utilisé en médecine traditionnelle chinoise depuis des milliers d'années, les feuilles de Ginkgo contiennent des flavonoïdes (quercétine, kaempférol) et des terpénoïdes uniques (ginkgolides, bilobalide). Traditionnellement apprécié pour soutenir la clarté mentale et une circulation saine, le Ginkgo est le seul survivant d'un ancien ordre de plantes, ce qui le rend botaniquement unique. Un complément quotidien pratique aux racines historiques profondes."
    sizes:
      - "30 comprimés"
      - "90 comprimés"
      - "300 comprimés"

  - code: "WK4811"
    name: "Ginali Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-4811.png"
    ingredients:
      - Ginkgo Biloba
      - Tongkat Ali
    description: "Une gélule à base de plantes à double ingrédient combinant le Ginkgo Biloba et le Tongkat Ali — deux des plantes traditionnelles les plus célèbres d'Asie. Le Ginkgo Biloba, le « fossile vivant » vieux de 200 millions d'années, apporte son riche profil de flavonoïdes et de terpénoïdes. Le Tongkat Ali, la précieuse plante du patrimoine national malaisien, contribue avec ses quassinoïdes et alcaloïdes uniques. Ensemble, ils représentent une union des traditions botaniques anciennes d'Asie de l'Est et du Sud-Est dans une gélule pratique."
    sizes:
      - "30 gélules"
      - "100 gélules"

  - code: "WK4822"
    name: "Tongkat Ali Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-4822.png"
    ingredients:
      - Tongkat Ali
    description: "Du Tongkat Ali pur (Eurycoma longifolia) en gélule. Originaire de Malaisie, d'Indonésie, du Vietnam et de Thaïlande, le Tongkat Ali est utilisé depuis des siècles dans la médecine traditionnelle d'Asie du Sud-Est. La racine contient des quassinoïdes — notamment l'eurycomanone — ainsi que des alcaloïdes et des stéroïdes bioactifs. Désormais protégé en tant que plante du patrimoine national malaisien, il demeure l'une des plantes les plus traditionnellement appréciées d'Asie du Sud-Est, prisé comme tonique pour l'énergie, l'endurance et la vitalité générale."
    sizes:
      - "30 gélules"
      - "100 gélules"

  - code: "WK3811"
    name: "Green Tea Extract Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-3812.png"
    ingredients:
      - Green Tea Extract
    description: "Des gélules contenant de l'extrait concentré de thé vert, issu des feuilles de Camellia sinensis — la même plante qui produit tous les vrais thés. Le thé vert est l'une des plus anciennes boissons de l'histoire humaine, documenté pour la première fois par le roi chinois Shen Nung vers 2737 avant notre ère. Il est riche en catéchines (antioxydants polyphénoliques), notamment l'EGCG (épigallocatéchine gallate), et contient de la L-théanine, un acide aminé unique traditionnellement associé à une concentration sereine. Ces gélules fournissent une forme concentrée des composés naturels du thé vert sans nécessiter d'infusion."
    sizes:
      - "30 gélules"
      - "60 gélules"

  - code: "WK4816"
    name: "Milk Thistle Tablets"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-4817.png"
    ingredients:
      - Milk Thistle (Silymarin)
    description: "Des comprimés contenant de l'extrait de Milk Thistle (Silybum marianum), standardisé en silymarine — un complexe de flavonolignanes dont la silybine est le composant le plus actif. Le Milk Thistle est utilisé depuis plus de 2 000 ans, documenté par Pline l'Ancien et Dioscoride dans la Rome et la Grèce antiques. Nommé d'après le liquide blanc laiteux de ses feuilles écrasées, c'est l'une des plantes les plus étudiées pour un usage traditionnel lié au foie, appréciée comme tonique naturel pour les processus de détoxification de l'organisme."
    sizes:
      - "30 comprimés"
      - "120 comprimés"

  - code: "WK9918N"
    name: "Dyna Serenoa Tablets"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-9919.png"
    ingredients:
      - Saw Palmetto (Serenoa repens)
    description: "Des comprimés à base d'extrait de Saw Palmetto (Serenoa repens), un petit palmier originaire du sud-est des États-Unis. Les baies de Saw Palmetto sont utilisées par les peuples autochtones d'Amérique du Nord depuis des siècles. L'extrait contient des acides gras et des phytostérols, et constitue l'une des préparations à base de plantes les plus couramment utilisées pour le bien-être masculin dans la pratique traditionnelle. Un complément quotidien pratique pour le maintien de la santé masculine."
    sizes:
      - "30 comprimés"
      - "100 comprimés"

  - code: "WK6803"
    name: "Dyna RH Capsules"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-6803.png"
    ingredients:
      - Glucosamine
      - Chondroitin
    description: "Des gélules formulées pour le bien-être articulaire, contenant des composés naturellement présents dans le cartilage articulaire sain et le liquide synovial. Ces ingrédients ont une longue histoire d'utilisation traditionnelle pour le maintien du confort et de la mobilité articulaires. Convient à ceux qui recherchent un soutien articulaire naturel dans le cadre de leur routine de bien-être quotidienne."
    sizes:
      - "100 gélules"

  - code: "WK9923"
    name: "Eye-Max"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-9923.png"
    ingredients:
      - Herbal Eye Formula
    description: "Eye-Max est un complément à base de plantes formulé avec des ingrédients traditionnellement associés à la santé oculaire et au confort visuel. Présenté dans un format pratique de plaquette thermoformée, ces compléments sont conçus pour un usage quotidien dans le cadre d'une approche holistique du maintien du bien-être visuel."
    sizes:
      - "5 x 10 comprimés"

  - code: "WK3808"
    name: "Yee Yang Yen Tablets"
    category: "Médecine Traditionnelle et Plantes Médicinales"
    image: "Product-3809.png"
    ingredients:
      - Italian Grape Seed Extract (OPC)
    description: "Des comprimés contenant 95 % d'OPC (proanthocyanidines oligomériques) extraits de pépins de raisin italiens. Les OPC sont une classe de composés polyphénoliques naturels présents dans les pépins de raisin, l'écorce de pin et certains fruits. L'extrait de pépins de raisin est utilisé dans les pratiques traditionnelles européennes de bien-être et est apprécié pour sa riche concentration en composés végétaux naturels. Un complément puissant et pratique issu de l'une des sources botaniques les plus étudiées par la nature."
    sizes:
      - "30 comprimés"
      - "90 comprimés"

  # ============================================
  # STIMULANTS D'IMMUNITÉ ET DE VITALITÉ
  # ============================================

  - code: "WK1801"
    name: "Liquid Chlorophyll Plus Guarana"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-1801.png"
    ingredients:
      - Chlorophyll
      - Guarana
    description: "Un complément liquide vert vibrant combinant Chlorophylle et Guarana. La Chlorophylle — le pigment vert de toutes les plantes photosynthétiques — est structurellement similaire à l'hémoglobine (la molécule transportant l'oxygène dans le sang humain), avec du magnésium en son centre au lieu du fer. Elle est utilisée depuis les années 1940 comme désodorisant interne naturel et est traditionnellement appréciée pour ses propriétés purifiantes. Le Guarana, originaire de l'Amazonie brésilienne, est utilisé par les peuples autochtones (notamment les tribus Guarani et Sateré-Mawé) depuis des siècles comme aliment énergétique naturel. Ensemble, ils créent un tonique quotidien rafraîchissant et revitalisant."
    sizes:
      - "150ml"

  - code: "WK1802A"
    name: "Alfalfa Plus Guarana"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-1802A.png"
    ingredients:
      - Alfalfa
      - Guarana
    description: "Un complément liquide combinant l'extrait d'Alfalfa avec du Guarana. L'Alfalfa (Medicago sativa), dont le nom signifie « père de tous les aliments » en arabe, est une plante riche en nutriments cultivée depuis plus de 1 500 ans. Associée au Guarana, un ingrédient énergétique naturel utilisé par les peuples amazoniens depuis des siècles, cette préparation réunit des traditions botaniques du Moyen-Orient et d'Amérique du Sud dans un format liquide pratique."
    sizes:
      - "150ml"

  - code: "WK5802A"
    name: "Noni Juice"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-5802A.png"
    ingredients:
      - Noni (Morinda citrifolia)
    description: "Du jus pur de Noni (Morinda citrifolia) — issu d'un arbuste à feuilles persistantes de la famille du café utilisé par les peuples polynésiens depuis plus de 2 000 ans. Considéré comme une plante sacrée dans la culture polynésienne, le Noni contient plus de 160 composés phytochimiques identifiés, notamment des flavonoïdes (kaempférol, rutine), des iridoïdes et de la scopolétine. La plante entière — fruit, jus, graines, feuilles, écorce et racine — est traditionnellement reconnue dans les cultures des îles du Pacifique pour ses propriétés naturelles. Ce jus délivre le spectre complet des composés naturels du Noni dans un format liquide pratique."
    sizes:
      - "500ml"
      - "1 litre"

  - code: "WK3803"
    name: "Dyna Tonic"
    category: "Stimulants d'Immunité et de Vitalité"
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
    description: "Le tonique signature de Dynapharm, formulé à partir de 15 plantes traditionnelles enracinées dans les principes de la médecine traditionnelle chinoise (MTC). Cette formule complète réunit des plantes tonifiantes du Qi (Codonopsis et Astragalus — l'une des plantes les plus importantes de la MTC), des plantes nourrissant le sang (Fo-Ti, traditionnellement apprécié pour tonifier le foie et les reins), des plantes soutenant les reins (Cistanche, connu sous le nom de « ginseng du désert » ; l'écorce d'Eucommia ; et la graine de Cuscute), ainsi que des plantes apaisantes (Poria, un champignon « tranquillisant de l'esprit » ; la graine de Jujube acide, traditionnellement appréciée pour favoriser un sommeil réparateur ; et la racine de Polygala pour la clarté mentale). La formule comprend également la racine de Réglisse — l'une des plantes les plus utilisées en MTC, présente dans de nombreuses formules classiques — ainsi que l'Igname de Chine, la coquille d'Huître, le fruit d'Amomum et l'Alisma. Un mélange de plantes magistralement équilibré agissant simultanément sur plusieurs systèmes organiques, représentant des siècles de sagesse herboriste traditionnelle."
    sizes:
      - "150ml"
      - "780ml"

  - code: "WK3805"
    name: "Dyna C Vitamin C Tablets"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-3805.png"
    ingredients:
      - Vitamin C
    description: "Des comprimés de vitamine C disponibles en deux dosages — Dyna C-100 et Dyna C-250. La vitamine C (acide ascorbique) est l'une des vitamines hydrosolubles les plus essentielles, jouant un rôle fondamental dans les processus naturels de l'organisme. Comme le corps ne peut ni produire ni stocker la vitamine C, un apport quotidien par l'alimentation ou la supplémentation est important. Ces comprimés à croquer offrent un moyen pratique et agréable de compléter votre apport quotidien en vitamine C."
    sizes:
      - "C-100 : 150 comprimés"
      - "C-250 : 90 comprimés"

  - code: "WK4805"
    name: "Ginseng Capsules"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-4805.png"
    ingredients:
      - Ginseng (Panax ginseng)
    description: "Des gélules contenant du Panax Ginseng — l'une des plantes les plus prisées de la médecine traditionnelle chinoise depuis des millénaires, particulièrement appréciée en Corée, en Chine et au Japon. La racine, qui ressemble souvent à une forme humaine, contient plus de 30 variétés de ginsénosides (saponines triterpéniques), ses principaux composés bioactifs. Classé comme adaptogène, le Ginseng est traditionnellement apprécié pour aider l'organisme à résister au stress physique et mental. La Cour royale coréenne le prisait historiquement comme tonique de longévité. L'une des plantes les plus étudiées et les plus commercialement importantes au monde."
    sizes:
      - "9 x 10 gélules"

  - code: "WK4808"
    name: "Sea Cucumber Jelly"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-4808.png"
    ingredients:
      - Sea Cucumber
    description: "Une préparation unique en gelée à base de Sea Cucumber — des animaux marins utilisés depuis des siècles dans la médecine et la cuisine traditionnelles asiatiques et moyen-orientales. Connu sous le nom de « gamat » dans la tradition malaise, le Sea Cucumber est exceptionnellement riche en protéines (jusqu'à 83 % en poids sec) et pauvre en matières grasses. Il contient des vitamines A, B1, B2, B3, des minéraux (calcium, magnésium, fer, zinc), et des composés bioactifs uniques, notamment des glycosides triterpéniques, du sulfate de chondroïtine et du collagène naturel. Très prisé dans la tradition culinaire chinoise comme mets délicat."
    sizes:
      - "250ml"
      - "500ml"

  - code: "WK4819"
    name: "Sea Cucumber Plus Cough Syrup"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-4819.png"
    ingredients:
      - Sea Cucumber
      - Herbal Cough Formula
    description: "Un sirop combinant un extrait de Sea Cucumber avec des ingrédients traditionnels à base de plantes formulés pour le confort respiratoire. Le Sea Cucumber (gamat) est utilisé dans les pratiques traditionnelles malaises et indonésiennes pour ses propriétés naturelles apaisantes. Ce sirop représente un mélange de traditions marines et botaniques dans un format liquide agréable."
    sizes:
      - "250ml"

  - code: "WK5810"
    name: "Pro-Life Mangosteen Plus Mixed Fruit Drink"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-5810.png"
    ingredients:
      - Mangosteen
      - Mixed Fruits
    description: "Une boisson fruitée délicieuse à base de Mangoustan — connu comme la « Reine des Fruits » pour sa saveur exquise et délicate. Le péricarpe (écorce) du mangoustan contient des xanthones, une classe unique de composés végétaux — au moins 68 xanthones ont été isolés du mangoustan, l'alpha-mangostine étant le plus abondant. Traditionnellement apprécié dans la médecine traditionnelle d'Asie du Sud-Est depuis plus de 200 ans, le mangoustan apporte son riche profil de composés naturels à cette boisson rafraîchissante aux fruits mélangés."
    sizes:
      - "30 sachets x 30ml"
      - "1 litre"

  - code: "WK5803"
    name: "Noni Plus Tea"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-5803.png"
    ingredients:
      - Noni
      - Tea
    description: "Un mélange de thé à base de plantes contenant du Noni (Morinda citrifolia), la plante sacrée de la tradition polynésienne, associé au thé. Les plus de 160 composés phytochimiques identifiés du Noni sont présentés ici dans un format de thé léger et facile à infuser. Une manière douce d'intégrer cet ingrédient traditionnellement apprécié dans votre routine quotidienne — il suffit d'infuser un sachet dans de l'eau chaude."
    sizes:
      - "30 sachets x 3g"

  - code: "WK6801"
    name: "Dyna Inhaler"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-6801.png"
    ingredients:
      - Essential Oils
    description: "Un inhalateur nasal compact contenant un mélange d'huiles essentielles traditionnellement utilisées pour le confort respiratoire. Suffisamment petit pour être transporté dans votre poche ou votre sac à main, cet inhalateur offre une expérience aromatique rafraîchissante à tout moment. Une approche simple et naturelle du confort respiratoire quotidien."
    sizes:
      - "2ml"

  - code: "WK6802"
    name: "Nutmeg Ointment"
    category: "Stimulants d'Immunité et de Vitalité"
    image: "Product-6802.png"
    ingredients:
      - Nutmeg Oil
    description: "Un onguent topique formulé avec de l'huile de noix de muscade, traditionnellement utilisée pour ses propriétés naturelles chauffantes et apaisantes. La noix de muscade (Myristica fragrans) est appréciée dans les systèmes de médecine traditionnelle d'Asie et d'Europe depuis des siècles. Cet onguent s'applique en externe et se masse délicatement sur la peau. Présenté dans un format pratique en double emballage."
    sizes:
      - "2 x 20g"

  # ============================================
  # SOINS PERSONNELS
  # ============================================

  - code: "WK7813"
    name: "Tea Tree Oil Lotion"
    category: "Soins Personnels"
    image: "Product-7813.png"
    ingredients:
      - Tea Tree Oil
    description: "Une lotion corporelle formulée avec de l'huile de Tea Tree (Melaleuca alternifolia), une huile essentielle originaire d'Australie utilisée par les Aborigènes australiens depuis des siècles. L'huile de Tea Tree est reconnue pour ses propriétés naturelles nettoyantes et purifiantes. Cette lotion combine l'héritage traditionnel de l'huile de Tea Tree avec une formulation moderne de soin de la peau, offrant un soin quotidien au parfum frais et naturel."
    sizes:
      - "250ml"

  - code: "WK7835"
    name: "Tea Tree Oil Feminine Wash"
    category: "Soins Personnels"
    image: "Product-7835.png"
    ingredients:
      - Tea Tree Oil
      - Sage
      - Rosemary
      - Thyme
      - Lavender
    description: "Un gel lavant intime doux formulé avec de l'huile de Tea Tree et un mélange de plantes traditionnelles — sauge, romarin, thym et lavande. Ces ingrédients botaniques sont appréciés dans les traditions herboristes européennes depuis des siècles pour leurs propriétés nettoyantes naturelles. Équilibré en pH et conçu pour l'hygiène féminine quotidienne, ce gel lavant combine plusieurs traditions à base de plantes dans un produit soigneusement formulé."
    sizes:
      - "250ml"

  - code: "WK7837"
    name: "Tea Tree Oil Toothpaste"
    category: "Soins Personnels"
    image: "Product-7837.png"
    ingredients:
      - Tea Tree Oil
    description: "Un dentifrice sans fluor formulé avec de l'huile de Tea Tree, offrant une approche naturelle des soins bucco-dentaires quotidiens. Les propriétés nettoyantes naturelles de l'huile de Tea Tree en font un ingrédient populaire dans les produits de soins dentaires naturels à travers le monde. Ce dentifrice assure un nettoyage en profondeur avec un goût frais et naturel — une alternative pour ceux qui préfèrent une hygiène bucco-dentaire à base de plantes."
    sizes:
      - "175g"

  - code: "WK7916"
    name: "Ganoderma Lotion"
    category: "Soins Personnels"
    image: "Product-7916.png"
    ingredients:
      - Ganoderma
    description: "Une lotion de soin enrichie en extrait de Ganoderma (champignon Lingzhi). Apportant l'héritage de 2 000 ans de ce champignon célèbre aux soins quotidiens de la peau, cette lotion combine le riche profil bioactif du Ganoderma avec une formulation hydratante adaptée à un usage quotidien. Une approche naturelle de la nutrition de la peau inspirée des pratiques traditionnelles de beauté asiatique."
    sizes:
      - "150ml"

  - code: "WK7919"
    name: "Ganoderma Toothpaste"
    category: "Soins Personnels"
    image: "Product-7919.png"
    ingredients:
      - Ganoderma
    description: "Un dentifrice sans fluor infusé d'extrait de Ganoderma (champignon Lingzhi). Ce produit de soin bucco-dentaire unique apporte l'héritage traditionnel du Ganoderma à votre routine dentaire quotidienne. Un dentifrice distinctif pour ceux qui apprécient une hygiène bucco-dentaire naturelle à base de plantes."
    sizes:
      - "150g"

  - code: "WK7920"
    name: "Ganoderma Shower Gel"
    category: "Soins Personnels"
    image: "Product-7920.png"
    ingredients:
      - Ganoderma
      - Portulaca Extract
      - Vitamin Pro-B5
      - Vitamin E
    description: "Un gel douche et gommage doux enrichi en extrait de Ganoderma, extrait de Portulaca (pourpier), Vitamine Pro-B5 et Vitamine E. Cette formulation multi-ingrédients combine l'héritage traditionnel du Ganoderma avec des actifs de soin modernes pour une expérience nettoyante qui va au-delà d'un gel douche ordinaire. Convient à un usage quotidien."
    sizes:
      - "150ml"

  - code: "WK7816"
    name: "E-Vita Cream"
    category: "Soins Personnels"
    image: "Product-7816.png"
    ingredients:
      - Dioscorea Extract
      - Grape Seed Extract
      - Aloe Vera
      - Vitamin E
      - Ginkgo Biloba Extract
      - Soybean Oil
    description: "Une crème premium pour le visage et le corps combinant six ingrédients botaniques actifs : l'extrait de Dioscorea (igname sauvage), l'extrait de pépins de raisin riche en OPC, l'Aloe Vera apaisant, la Vitamine E nourrissante, l'extrait de Ginkgo Biloba et l'huile de soja. Chaque ingrédient apporte son propre héritage traditionnel — de l'utilisation séculaire du Dioscorea en médecine traditionnelle à la concentration en polyphénols naturels des pépins de raisin. Une crème de soin complète formulée avec les meilleurs actifs botaniques de la nature."
    sizes:
      - "50g"

  - code: "WK7928"
    name: "Snail Aqua Sleep Cream"
    category: "Soins Personnels"
    image: "Product-7928.png"
    ingredients:
      - Snail Mucin
    description: "Une crème de nuit formulée avec de la mucine d'escargot — un ingrédient qui a acquis une reconnaissance dans la beauté coréenne et asiatique pour ses propriétés naturelles de nutrition de la peau. Le filtrat de sécrétion d'escargot contient naturellement des glycoprotéines, de l'acide hyaluronique et de l'acide glycolique. Cette crème de nuit est conçue pour agir pendant votre sommeil, soutenant les processus naturels de renouvellement de la peau. Une innovation moderne en matière de soins de la peau enracinée dans la nature."
    sizes:
      - "30ml"

  - code: "WK7841"
    name: "Nano Home Feminine Wash with Kacip Fatimah"
    category: "Soins Personnels"
    image: "Product-7841.png"
    ingredients:
      - Kacip Fatimah
    description: "Un gel lavant intime compact à base de Kacip Fatimah (Labisia pumila), la plante traditionnelle malaise qui revêt une profonde signification culturelle dans le bien-être féminin. Ce format de voyage permet de maintenir votre routine de soins personnels où que vous soyez. Formulé avec le même ingrédient traditionnel utilisé par les femmes malaises depuis des générations."
    sizes:
      - "60ml"

  - code: "WK7842"
    name: "Nano Home Feminine Wash with Sirih"
    category: "Soins Personnels"
    image: "Product-7842.png"
    ingredients:
      - Sirih (Betel Leaf)
    description: "Un gel lavant intime compact formulé avec de l'extrait de Sirih (feuille de bétel), un ingrédient traditionnel utilisé à travers l'Asie du Sud-Est depuis des siècles pour ses propriétés antiseptiques et nettoyantes naturelles. Ce format de voyage offre l'héritage d'un ingrédient botanique ancestral dans un produit de soin personnel moderne et pratique."
    sizes:
      - "60ml"

  - code: "WK7843"
    name: "Nano Home Feminine Wash with Gamat"
    category: "Soins Personnels"
    image: "Product-7843.png"
    ingredients:
      - Gamat (Sea Cucumber)
    description: "Un gel lavant intime compact à base d'extrait de Gamat (Sea Cucumber), traditionnellement utilisé dans les pratiques de bien-être malaises et indonésiennes pour ses propriétés naturelles apaisantes et régénérantes. Le Sea Cucumber contient du collagène naturel, du sulfate de chondroïtine et des composés bioactifs uniques. Ce gel lavant format voyage apporte la sagesse traditionnelle marine aux soins personnels modernes."
    sizes:
      - "60ml"

  # ============================================
  # ALIMENTS DE BIEN-ÊTRE
  # ============================================

  - code: "WK5801A"
    name: "Instant Cereal with Spirulina, Soybean & Noni"
    category: "Aliments de Bien-être"
    image: "Product-5801A.png"
    ingredients:
      - Spirulina
      - Soybean
      - Noni
    description: "Une céréale instantanée nourrissante réunissant trois puissants ingrédients naturels : la Spirulina (la microalgue bleu-vert riche en nutriments consommée par les anciens Aztèques), le Soybean (une protéine végétale complète, aliment de base des régimes asiatiques depuis des millénaires) et le Noni (le fruit sacré polynésien contenant plus de 160 composés phytochimiques identifiés). Cette céréale de petit-déjeuner pratique se dissout dans de l'eau chaude ou du lait, offrant un début de journée sain avec des ingrédients provenant de trois continents."
    sizes:
      - "15 sachets x 32g"
      - "30 sachets x 32g"

  - code: "WK1813"
    name: "Instant Wheatgrass with Chlorophyll"
    category: "Aliments de Bien-être"
    image: "Product-1813.png"
    ingredients:
      - Wheatgrass
      - Chlorophyll
    description: "Une boisson instantanée combinant Wheatgrass et Chlorophylle — deux des superaliments les plus verts de la nature. Le Wheatgrass, les jeunes pousses de blé commun récoltées à seulement 7-10 jours, contient environ 70 % de chlorophylle ainsi que des flavonoïdes, des composés phénoliques, des vitamines (A, C, E, K, vitamines B) et au moins 17 acides aminés. Combiné à de la Chlorophylle supplémentaire — le pigment vert structurellement similaire à l'hémoglobine — cette boisson verte vibrante est une source concentrée de nutrition végétale. Il suffit de mélanger avec de l'eau pour une boisson rafraîchissante et riche en nutriments."
    sizes:
      - "20 sachets x 10g"

  - code: "WK5807N"
    name: "High Fibre Nutrition Food"
    category: "Aliments de Bien-être"
    image: "Product-5807N.png"
    ingredients:
      - Dietary Fibre
      - Grains
    description: "Une poudre nutritive riche en fibres conçue comme un complément alimentaire complet ou un substitut de petit-déjeuner. Riche en fibres alimentaires naturelles provenant de multiples sources céréalières, cet aliment instantané se dissout dans l'eau et fournit une alimentation soutenue. Les fibres alimentaires sont un composant essentiel d'une alimentation équilibrée, soutenant une digestion saine et contribuant à une sensation de satiété. Un moyen pratique d'augmenter votre apport quotidien en fibres."
    sizes:
      - "30 sachets x 25g"

  - code: "WK4803"
    name: "Instant Ginseng Honey Ginger"
    category: "Aliments de Bien-être"
    image: "Product-4803.png"
    ingredients:
      - Ginseng
      - Honey
      - Ginger
    description: "Un mélange réconfortant de trois ingrédients traditionnels appréciés à travers les cultures : le Ginseng (l'une des plantes adaptogènes les plus prisées de la MTC), le miel naturel (apprécié depuis l'Antiquité comme édulcorant de la nature et remède traditionnel) et le gingembre (utilisé depuis des milliers d'années dans les médecines traditionnelles asiatique, africaine et européenne pour ses propriétés chauffantes distinctives). Cette boisson réconfortante se dissout dans de l'eau chaude, en faisant un rituel apaisant — particulièrement bienvenu pendant les saisons plus fraîches."
    sizes:
      - "20 sachets x 20g"
      - "pot de 500g"

  - code: "WK2812"
    name: "Herba Warisan Maharani"
    category: "Aliments de Bien-être"
    image: "Product-2812.png"
    ingredients:
      - 16-Herb Traditional Blend
    description: "Une préparation à base de plantes traditionnelles combinant 16 herbes soigneusement sélectionnées dans la tradition du « jamu » malais — une pratique séculaire de bien-être par les plantes originaire de l'archipel malais. « Maharani » (signifiant « reine » ou « impératrice ») reflète l'héritage du produit en tant que formulation dédiée au bien-être féminin. Ce mélange multi-herbes représente l'une des préparations traditionnelles les plus complexes de la gamme Dynapharm."
    sizes:
      - "6 sachets x 10g"

  - code: "WK2813"
    name: "Instant Soybean Mixture with Ginger"
    category: "Aliments de Bien-être"
    image: "Product-2813.png"
    ingredients:
      - Soybean
      - Ginger
    description: "Une boisson instantanée au soja rehaussée de gingembre, combinant les protéines végétales complètes du soja avec les propriétés chauffantes naturelles du gingembre. Le gingembre est utilisé depuis des milliers d'années à travers les cultures asiatiques, africaines et européennes, prisé pour sa saveur distinctive et ses bienfaits digestifs traditionnels. Ce prémélange pratique se dissout dans de l'eau tiède, offrant une boisson nourrissante et délicatement épicée."
    sizes:
      - "20 sachets x 25g"

  - code: "WK5806"
    name: "Dyna S Tablets"
    category: "Aliments de Bien-être"
    image: "Product-5806.png"
    ingredients:
      - Herbal Slimming Formula
    description: "Les comprimés Dyna S sont formulés dans le cadre d'un programme de gestion du poids combiné à une alimentation équilibrée et à une activité physique régulière. Ces comprimés contiennent un mélange d'ingrédients naturels sélectionnés pour compléter un mode de vie sain. Conçus pour être pris avant les repas dans le cadre d'un programme de bien-être structuré."
    sizes:
      - "120 comprimés"

  # ============================================
  # AGRICULTURE
  # ============================================

  - code: "WK9829"
    name: "D.I. Grow Bio-Fertiliser (Red)"
    category: "Agriculture"
    image: "Product-9829.png"
    ingredients:
      - Bio-Fertiliser Formulation
    description: "Un bio-fertilisant liquide formulé spécifiquement pour soutenir la croissance reproductive des plantes — optimisant le développement des fleurs et des fruits. D.I. Grow (Red) renforce la résistance des cultures, améliore la qualité du sol et est entièrement non toxique, ce qui le rend adapté aux pratiques d'agriculture biologique. Diluer environ 75 ml dans 20 litres d'eau et appliquer pendant les phases de floraison et de fructification. Convient aux arbres fruitiers, aux légumes, aux plantes à fleurs et aux jardins d'ornement. Une alternative naturelle et respectueuse des plantes aux engrais chimiques conventionnels."
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
    description: "Un bio-fertilisant liquide formulé pour favoriser la croissance végétative — stimulant le développement des racines, des tiges et des feuilles. D.I. Grow (Green) favorise la production de chlorophylle, renforce l'immunité des plantes et peut restaurer les plantes en mauvaise santé ou stressées. Diluer environ 75 ml dans 20 litres d'eau et appliquer le matin ou le soir pendant la phase de croissance végétative. Idéal pour les légumes-feuilles, les herbes aromatiques, les pelouses et toutes les plantes où une croissance verte et luxuriante est souhaitée. Non toxique et adapté à l'agriculture durable."
    sizes:
      - "250ml"
      - "1 litre"
      - "4 litres"

  # ============================================
  # MAISON ET MODE DE VIE
  # ============================================

  - code: "WK8805"
    name: "Mineral Pot"
    category: "Maison et Mode de Vie"
    image: "Product-8805.png"
    ingredients:
      - Mineral Filtration System
    description: "Un pot de filtration d'eau minérale qui purifie et minéralise votre eau potable à domicile. Le système de filtration multi-étapes élimine les impuretés tout en réintroduisant des minéraux bénéfiques dans l'eau. Aucune électricité requise — il suffit de verser l'eau dans le compartiment supérieur et de laisser la gravité faire le travail. Une alternative économique et écologique à l'eau en bouteille, fournissant à votre famille une eau propre et enrichie en minéraux au quotidien."
    sizes:
      - "1 unité"

  - code: "WK7833"
    name: "Dyna Toothbrush Set"
    category: "Maison et Mode de Vie"
    image: "Product-7833.png"
    ingredients: []
    description: "Un ensemble de trois brosses à dents de qualité conçues pour des soins bucco-dentaires quotidiens efficaces. À associer avec la gamme de dentifrices naturels de Dynapharm — Tea Tree Oil ou Ganoderma — ces brosses complètent votre routine d'hygiène bucco-dentaire naturelle. Conçues de manière ergonomique pour un brossage confortable et minutieux."
    sizes:
      - "Lot de 3"
```

---

## Produits Non Inclus

Les produits suivants de la base de données sont exclus du catalogue du site web :

- **WK10801 — New Distributors Registration Kit** : N'est pas un produit de consommation ; article d'enregistrement interne pour les distributeurs.
- **WK1802 — DI Liquid Chlorophyll Plus Guarana 150ML** : Doublon de WK1801 (même produit, même taille).

## Notes sur la Couverture des Images

Produits dont l'image principale utilise la photo d'une variante de taille différente (le produit possède tout de même une image) :
- Spirulina Tablets : Utilise Product-2807.png (variante 300s)
- Bee Pollen : Utilise Product-3802.png (variante 100s)
- Yeegano : Utilise Product-1810.png (variante 90s)
- Goat's Milk Tablets : Utilise Product-2802.png (variante 150s)
- Yeeginkgo : Utilise Product-4815.png (variante 90s)
- Ginali : Utilise Product-4811.png (variante 100s)
- Green Tea Extract : Utilise Product-3812.png (variante 60s)
- Milk Thistle : Utilise Product-4817.png (variante 120s)
- Tongkat Ali : Utilise Product-4822.png (variante 30s)
- Dyna Serenoa : Utilise Product-9919.png (variante 30s)
- Yee Yang Yen : Utilise Product-3809.png (variante 90s)
- Dyna Tonic : Utilise Product-3804A.png (variante 780ml)
- Dyna C : Utilise Product-3805.png (variante C-100)
- Sea Cucumber Jelly : Utilise Product-4808.png (variante 250ml)
- Pro-Life Mangosteen : Utilise Product-5810.png (variante 1L)
- Noni : Utilise Product-5802A.png (variante 1L)
- Instant Cereal : Utilise Product-5801A.png (variante 30s)
- Prolink : Utilise Product-3814.png (variante 20s)
- Ginseng Honey Ginger : Utilise Product-4803.png (variante 500g)

## Nombre Total de Produits

**55 produits uniques** (dédupliqués à partir de 88 entrées de base de données) répartis dans **8 catégories** :

| Catégorie | Nombre |
|-----------|--------|
| Boissons de Santé | 11 |
| Compléments Nutritionnels | 9 |
| Médecine Traditionnelle et Plantes Médicinales | 11 |
| Stimulants d'Immunité et de Vitalité | 11 |
| Soins Personnels | 11 |
| Aliments de Bien-être | 7 |
| Agriculture | 2 |
| Maison et Mode de Vie | 2 |
| **Total** | **55** (après déduplication ; plus de 90 en comptant toutes les variantes de taille) |
