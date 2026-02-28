# SEO Configuration

Search engine optimisation settings for all pages.

---

## Site Information

**Site URL**: https://dynapharmafrica.com
**Site Name**: Dynapharm Africa
**Site Description**: Discover over 90 premium natural health products and a proven business opportunity with Dynapharm Africa. Health beverages, nutritional supplements, herbal formulations, personal care, and agricultural solutions — operating in 40+ countries.

## Schema Types

- **Organisation** — applied site-wide
- **Product** — applied to individual product entries on the Products page
- **FAQPage** — applied to the FAQ page
- **BreadcrumbList** — applied to all inner pages

## Organisation Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dynapharm Africa",
  "url": "https://dynapharmafrica.com",
  "logo": "https://dynapharmafrica.com/assets/images/branding/Logo-Full-Color.png",
  "description": "International health and wellness company offering 90+ natural products and a proven business opportunity across 40+ countries in Africa and beyond.",
  "email": "info@dynapharmafrica.com",
  "sameAs": []
}
```

## Per-Page SEO

### Home (/)
**Title**: Dynapharm Africa — Natural Health Products & Business Opportunity
**Description**: Discover 90+ premium natural health products — Spirulina, Ganoderma coffee, Chlorophyll, Noni, and more. Join thousands of distributors building healthier, wealthier communities across Africa. Health, Wealth, Freedom — The Dynapharm Way.
**Keywords**: Dynapharm Africa, natural health products Africa, wellness supplements, Ganoderma coffee, Spirulina tablets, network marketing Africa, MLM business opportunity, health and wellness Africa

### Products (/products)
**Title**: Our Products — 90+ Natural Health & Wellness Products | Dynapharm Africa
**Description**: Browse Dynapharm's complete product catalogue — health beverages with Ganoderma and Ginseng, Spirulina supplements, Chlorophyll drinks, Tea Tree Oil personal care, D.I. Grow bio-fertiliser, and more. Natural ingredients, international quality.
**Keywords**: Dynapharm products, natural health supplements Africa, Ganoderma coffee Africa, Spirulina supplements, Chlorophyll drink, D.I. Grow bio fertiliser, Bee Pollen capsules, Tongkat Ali, Noni juice, natural wellness products

### Business Opportunity (/business-opportunity)
**Title**: Business Opportunity — Build Your Wellness Business | Dynapharm Africa
**Description**: Start your own health and wellness business with Dynapharm Africa. Low investment, comprehensive training, 7 achievement ranks from Distributor to Crown Diamond Manager. Join distributors across 40+ countries. No experience required.
**Keywords**: become a distributor Dynapharm, MLM business opportunity Africa, network marketing health products, Dynapharm distributor registration, wellness business Africa, earn with Dynapharm, Crown Diamond Manager

### Wellness Guide (/wellness-guide)
**Title**: Wellness Guide — Natural Health Solutions by Category | Dynapharm Africa
**Description**: Explore Dynapharm's 11 wellness categories — cardiovascular health, immune support, energy and vitality, digestive health, and more. Find natural products that support your wellbeing. Educational wellness content.
**Keywords**: natural wellness solutions, health supplements by category, immune support supplements, energy vitality supplements, digestive health products, natural health guide Africa, Chlorophyll drink benefits, Spirulina health benefits

### About (/about)
**Title**: About Dynapharm Africa — Our Story, Mission & Values
**Description**: Learn about Dynapharm Africa — over 20 years of natural health products, operating in 40+ countries, empowering communities through wellness and entrepreneurship. Health, Wealth, Freedom.
**Keywords**: about Dynapharm Africa, Dynapharm history, natural health company Africa, wellness company, Dynapharm mission values, health wealth freedom, Dynapharm story

### Contact (/contact)
**Title**: Contact Dynapharm Africa — Get in Touch
**Description**: Contact Dynapharm Africa for product enquiries, distributor registration, or general questions. Email us at info@dynapharmafrica.com. Interested in becoming a distributor? Start your journey today.
**Keywords**: contact Dynapharm Africa, Dynapharm enquiry, become a Dynapharm distributor, Dynapharm email, distributor registration Dynapharm

### FAQ (/faq)
**Title**: FAQ — Frequently Asked Questions | Dynapharm Africa
**Description**: Answers to common questions about Dynapharm products, the business opportunity, distributor ranks, Business Volume (BV), D.I. Grow fertiliser, Ganoderma, Spirulina, and more.
**Keywords**: Dynapharm FAQ, what is Dynapharm, Dynapharm products questions, how to become a distributor, what is BV Business Volume, Dynapharm ranks, D.I. Grow FAQ, Ganoderma FAQ

## Sitemap Configuration

Generate XML sitemap at `/sitemap.xml` with all pages in both languages:

```
https://dynapharmafrica.com/en/
https://dynapharmafrica.com/en/products
https://dynapharmafrica.com/en/business-opportunity
https://dynapharmafrica.com/en/wellness-guide
https://dynapharmafrica.com/en/about
https://dynapharmafrica.com/en/contact
https://dynapharmafrica.com/en/faq
https://dynapharmafrica.com/fr/
https://dynapharmafrica.com/fr/products
https://dynapharmafrica.com/fr/business-opportunity
https://dynapharmafrica.com/fr/wellness-guide
https://dynapharmafrica.com/fr/about
https://dynapharmafrica.com/fr/contact
https://dynapharmafrica.com/fr/faq
```

## Hreflang Tags

Every page must include hreflang tags for both languages:

```html
<link rel="alternate" hreflang="en" href="https://dynapharmafrica.com/en/{page}" />
<link rel="alternate" hreflang="fr" href="https://dynapharmafrica.com/fr/{page}" />
<link rel="alternate" hreflang="x-default" href="https://dynapharmafrica.com/en/{page}" />
```

## Open Graph / Social Media

**og:site_name**: Dynapharm Africa
**og:type**: website
**og:image**: /assets/images/branding/Logo-Full-Color.png (or a dedicated OG image if created)
**twitter:card**: summary_large_image

Per-page og:title and og:description should match the SEO title and description above.

## Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://dynapharmafrica.com/sitemap.xml
```

## Additional SEO Notes

- All images must have descriptive alt text
- Use semantic HTML headings (one h1 per page, sequential h2-h6)
- Internal linking between pages (products → wellness guide, business opportunity → contact)
- Page load speed target: under 500KB first load (excluding lazy images)
- Mobile-first responsive design
- Structured data for FAQ page using FAQPage schema
