# Kaizen search, website and social plan — 9 September 2026

**Scope decision:** documentation only. This bounded handoff covers the existing EN/FR Astro site, French-first search intent, Senegal profile risk, Google AI-search guidance, draft social launch copy, and measurement. It does not publish, change live accounts, run browser/build/source-scrape/model checks, or approve the overall site. The Astra root owns final integration and release decisions.

**Evidence rule:** observations come from the supplied project artefacts; recommendations are labelled as inference where they are derived; unavailable checks remain `NOT_ASSESSED`. Search volume, ranking, AI citation, reach, conversion and revenue are not measured here. Proposed keywords are intent hypotheses, not volume forecasts.

## 1. Evidence and currentness

### Observations

- The prior website baseline records a capped diagnostic score of **33/100**, 43 HTML files in the frozen pre-implementation build, 34 of 42 language pages with missing social-image references, 42 of 42 without `og:image:alt`, and 22 of 42 with duplicate `BreadcrumbList` graphs. These are baseline observations, not current production proof. [Baseline](kaizen-baseline-2026-09-09.md)
- The latest validation artefact records 45 HTML pages, 44 language pages, 44 sitemap pages and no reported errors; rendered browser behaviour, live indexing, Search Console, social-platform data and production deployment remain unassessed in this handoff. [Validation record](kaizen-validation-2026-09-09.json)
- Real route targets present in the source are the language-prefixed home, about, products, business opportunity, contact, FAQ, wellness guide, blog, country-profiles directory, country profiles including Senegal, privacy routes, and the language-specific blog articles listed in the route inventory. [Route inventory](../src/pages)
- The French Senegal source deliberately separates corporate information from local facts awaiting confirmation. It states that Senegal is listed by Dynapharm International, uses `info@dynapharmafrica.com` as a general Africa enquiry route, and does not claim a Senegal address, local phone, local email, current stock, prices, regulatory status, or Senegal-specific distributor process. [French Senegal source](fr/country-senegal.md)
- The Senegal register treats `https://dynapharmsenegal.com/` as compromised after observing a hacked title, unrelated canonical/organisation URLs and a literal shortener link. The shop, downloads, contact, third-party seller pages, linked social lead and unavailable DI Grow domain are quarantined or `NOT_ASSESSED`. [Senegal source register](research/senegal-source-register-2026-09-09.md)
- Google’s current official guidance says existing SEO fundamentals remain relevant to AI Overviews and AI Mode; there are no additional requirements or special AI markup, eligibility requires indexing and snippet eligibility, and Search Console reports AI-feature traffic within the overall Web search type rather than as a separate guaranteed AI-rank measure. [Google Search Central — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) (accessed 2026-09-09; page updated 2025-12-10 UTC)

### Source-backed Senegal boundary

Use only the following narrow proposition in Senegal-facing copy: Dynapharm International’s official site lists Senegal among its country entries. For local availability or distributor registration, direct the reader to the official Africa route `info@dynapharmafrica.com`, clearly labelled as general rather than Senegal-local. [C-01 and C-04](research/senegal-source-register-2026-09-09.md)

Do not reproduce the compromised domain’s prices, product availability, health or cure claims, certification, testimonials, earnings, local address, local telephone, local social handle, or regulatory claims. The register records no clean, current primary corroboration for those facts. [Senegal source register](research/senegal-source-register-2026-09-09.md)

## 2. French-first route and intent map

These are route targets and editorial hypotheses derived from existing page jobs and French metadata. They are **not measured keywords**, do not imply search demand, and must not be treated as ranking forecasts.

| Priority | Real route target | Primary French intent | Safe intent cluster / wording direction | Page job and next action | Evidence boundary |
|---|---|---|---|---|---|
| P1 | `/fr/country-profiles/senegal/` | Navigational + local-information | `Dynapharm Sénégal`; `Dynapharm au Sénégal`; `produits Dynapharm Sénégal`; `DI Grow Sénégal`; `distributeur Dynapharm Sénégal` | Explain what is verified, what is not, and route a product/registration enquiry to the general Africa contact. | Country listing and general contact only; no local stock or contact claim. [FR source](fr/country-senegal.md) |
| P1 | `/fr/contact/` | Contact / action | `contacter Dynapharm Africa`; `demande produit Dynapharm`; `inscription distributeur Dynapharm` | Capture a clearly categorised enquiry and preserve the general-contact label. | Use the approved corporate contact content; local Senegal details remain unassessed. [C-04](research/senegal-source-register-2026-09-09.md) |
| P1 | `/fr/products/` | Product discovery | `produits Dynapharm`; `compléments alimentaires Dynapharm`; `boissons bien-être Dynapharm`; `soins personnels Dynapharm`; `DI Grow` | Describe corporate catalogue categories, then link to Senegal with a current-availability caveat. | Corporate range is not Senegal stock or efficacy evidence. [C-03](research/senegal-source-register-2026-09-09.md) |
| P1 | `/fr/faq/` | Question answering | `où acheter Dynapharm au Sénégal`; `disponibilité Dynapharm Sénégal`; `comment devenir distributeur Dynapharm au Sénégal` | Answer directly with source status, contact route and limits; avoid invented local answers. | Senegal availability and local process are `NOT_ASSESSED`. [Senegal register](research/senegal-source-register-2026-09-09.md) |
| P2 | `/fr/country-profiles/` | Country-directory discovery | `profils pays Dynapharm Afrique`; `Dynapharm Afrique Sénégal` | Link the Senegal profile using a transparent “coordonnées locales à confirmer” label. | Directory and country facts must match the source files. |
| P2 | `/fr/business-opportunity/` | Commercial investigation | `devenir distributeur Dynapharm`; `opportunité d'affaires bien-être Afrique`; `inscription distributeur Dynapharm` | Explain the general opportunity only; send Senegal-specific questions to `/fr/contact/`. | Do not promise income, rank outcomes, investment level, or local onboarding terms without current approved evidence. |
| P2 | `/fr/wellness-guide/` | Informational health research | `guide bien-être Dynapharm`; `questions à poser à un professionnel de santé`; ingredient-led queries | Keep educational framing, references and safety limits visible; link to relevant articles. | No medical outcome, cure or personalised advice claim. |
| P2 | `/fr/blog/` | Editorial exploration | `journal santé bien-être Dynapharm`; `références compléments alimentaires` | Make article authorship, update date, source links and limitations discoverable. | Article-level health claims require their existing sources and a separate medical/content review. |
| P3 | `/fr/blog/bienfaits-du-ganoderma/`, `/fr/blog/bienfaits-du-ginkgo-biloba/`, `/fr/blog/bienfaits-du-ginseng/`, `/fr/blog/bienfaits-du-the-vert/` | Ingredient questions | Existing French article titles and question variants only | Improve answer clarity and source visibility where the article evidence supports it; do not expand claims to Senegal. | Search demand and medical/regulatory sufficiency are `NOT_ASSESSED`. |

**French localisation decision (inference):** retain the existing English-derived route slugs for this bounded change because they are already real routes and changing them would create redirect, canonical and hreflang work. Localise titles, visible headings, descriptions and internal-link anchors in French first. A future native-French slug migration requires an explicit redirect/canonical inventory and is not part of this plan. This follows the route inventory and current implementation; it is not a measured user preference.

## 3. Google AI-search and French SEO guidance

### What is supported

- Build for people-first usefulness and ordinary Search eligibility: crawlable routes, coherent canonicals and hreflang, useful internal links, important information in text, accessible page experience, and structured data that matches visible text. Google lists these as existing best practices for AI features. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- Treat each French route as an answer to one real job. Lead with the verified answer, identify the organisation and scope in natural language, state uncertainty where it matters, and link to the underlying evidence. This is a planning recommendation grounded in the SEO/GEO skill contract and the Senegal register, not a Google ranking formula. [SEO/GEO guidance](https://developers.google.com/search/docs/appearance/ai-features); [Senegal register](research/senegal-source-register-2026-09-09.md)
- Keep Senegal page text, metadata, schema and social copy aligned: country listing and general enquiry route may be represented; local office, stock, prices, earnings and medical outcomes may not. Visible truth takes precedence over keyword coverage. [French Senegal source](fr/country-senegal.md)
- Measure ordinary Search Console Web performance, Analytics referrals and qualified actions separately. A prompt observation or a cited page is not the same as a click, enquiry or sale. Google states that AI-feature traffic is included in the overall Web search reporting. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)

### Not supported / not assessed

- No claim of AI Overview placement, AI Mode inclusion, “AI rank”, citation share, or traffic uplift is supported. Google explicitly says indexing and serving are not guaranteed. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- No special `llms.txt`, AI text file or AI-specific schema is required by the cited Google guidance. Any optional machine-readable handoff would need a named consumer and owner; it is not a priority here. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- Search Console access, Bing AI reporting, prompt panels, server logs, query volumes, French SERP review, indexing state, canonical resolution, hreflang validation, Rich Results validation, production robots/CDN controls and live social-profile authority are `NOT_ASSESSED` by this worker. The Astra root owns those checks.

## 4. Kaizen backlog: reversible, evidence-led improvements

The inherited product baseline is capped at 33/100; the 95/100 target remains aspirational until evidence, release, accessibility, security and measurement gates pass. [Baseline](kaizen-baseline-2026-09-09.md) Each item below has one owner, one primary measure, a guardrail and a rollback.

| Order | Improvement and root cause | Owner | Experiment / primary measure | Guardrail, acceptance evidence and rollback |
|---|---|---|---|---|
| 1 | Senegal trust block: the market page needs a visible boundary between corporate facts and local facts. | Astra root + content owner | Compare the current Senegal page against a source-labelled version; measure qualified contact clicks and enquiry categorisation, not impressions alone. | No unsupported claim, no unsafe outbound link, no personal-data request to the compromised site. Accept only after source-link review, French proofreading and rendered route inspection. Roll back the copy block and links if any source status changes or enquiries become misleading. |
| 2 | French route intent: existing metadata is descriptive but not yet a tested intent-to-CTA map. | Astra root + SEO/content owner | Assign one primary intent and one next action per route; inspect Search Console query/page data after access is granted. | No volume or ranking target without an export. Accept when every P1 route has a truthful title, description, H1, internal-link path and CTA. Revert only the affected metadata/anchors if they introduce duplication or unsupported claims. |
| 3 | Social preview integrity: baseline found missing OG files and missing `og:image:alt`. | Astra root + build owner | Validate every enabled language route in built HTML and share-debug tools when available; track preview error count. | Accept only when the route-specific image exists, alt text is localised, dimensions are verified and no unrelated page is changed. Roll back the affected metadata asset reference if build or share rendering fails. |
| 4 | AI/search evidence clarity: make source, date, limitation and page job easy to retrieve for human readers and answer systems. | Astra root + content owner | Test one French Senegal answer block and one French FAQ answer block; inspect referral quality and support-query self-report. | No forced word count, FAQ duplication or schema-only claims. Accept when visible copy, metadata and schema agree and the source register supports each material fact. Remove the variant if it increases confusion or unsupported interpretation. |
| 5 | Measurement gap: no baseline currently supports channel or AI-search performance decisions. | Astra root + analytics owner | Instrument UTM links and named events, then establish a pre-launch baseline before interpreting change. | Consent, privacy, event QA and attribution caveats must be recorded. Do not publish a performance result until data quality is checked. Disable only the defective event/tag or restore the prior measurement configuration. |

**Kaizen loop:** record baseline → make one reversible change → run content, source, accessibility, build/render and security gates → observe outcome and guardrail → standardise only if both pass → log the next review. Next source review is scheduled for 16 September 2026. [Senegal source register](research/senegal-source-register-2026-09-09.md)

## 5. Draft social launch copy — French first

**Status: draft only.** No publication, scheduling, paid promotion, influencer use or social-account claim is authorised. Copy below uses only the approved Senegal boundary and corporate enquiry route. It does not claim local availability, health outcomes or earnings.

### French draft

> **Dynapharm au Sénégal : une information claire avant toute demande.** Le site officiel de Dynapharm International cite le Sénégal parmi ses pays d’implantation. Consultez le profil pays pour distinguer les informations du groupe des coordonnées locales encore à confirmer. Pour une demande de produit ou de distribution, écrivez à `info@dynapharmafrica.com`, le contact général de Dynapharm Africa. [Lien : `/fr/country-profiles/senegal/`]

### English draft

> **Dynapharm in Senegal: clear information before you enquire.** Dynapharm International’s official site lists Senegal among its country entries. Explore the country profile to distinguish corporate information from local details awaiting confirmation. For a product or distributor enquiry, contact `info@dynapharmafrica.com`, the general Dynapharm Africa route. [Link: `/en/country-profiles/senegal/`]

**Copy gate:** confirm the destination, source links, French native review, accessibility of the image and alt text, rights for any image, moderation response, and UTM parameters before approval. Do not add a Dakar address, Senegal telephone, price, stock statement, health result, certification, earnings statement or unverified social handle. [C-01 and C-04](research/senegal-source-register-2026-09-09.md)

## 6. UTM and measurement plan

### Naming convention

Use lowercase ASCII values, hyphens for word separation, and one canonical destination per link. Preserve the original source and medium; never use campaign names to imply results.

| Parameter | Convention | Example for this draft |
|---|---|---|
| `utm_source` | Platform or owned surface | `facebook`, `linkedin`, `instagram`, `whatsapp`, `newsletter` |
| `utm_medium` | `organic-social`, `owned-social`, `email`, or approved paid value | `organic-social` |
| `utm_campaign` | `senegal-profile-launch-2026-09` | `senegal-profile-launch-2026-09` |
| `utm_content` | Locale + asset/variant | `fr-profile-post-a` or `en-profile-post-a` |
| `utm_term` | Leave blank unless a controlled search-ad taxonomy is approved | blank for this organic draft |

Example: `https://dynapharmafrica.com/fr/country-profiles/senegal/?utm_source=facebook&utm_medium=organic-social&utm_campaign=senegal-profile-launch-2026-09&utm_content=fr-profile-post-a`

### Events and decision use

| Event | Definition | Source / owner | Decision |
|---|---|---|---|
| `senegal_profile_view` | Page view of the Senegal route, with locale and referrer | Analytics / Astra root | Is the launch destination receiving visits? |
| `senegal_source_link_click` | Click on a corporate source link from the profile | Analytics / SEO owner | Are readers checking evidence? |
| `general_contact_click` | Click on the approved general contact route | Analytics / contact owner | Does the page create a qualified next action? |
| `enquiry_submit` | Successfully completed approved enquiry form, subject to consent and privacy review | Form/analytics / contact owner | Are product, local-information and distributor enquiries distinguishable? |
| `social_referral_session` | Session attributed to a valid UTM link | Analytics / social owner | Which channel and language assist the visit? |
| `search_console_web_query` | Search Console Web impression/click data for the route and query | Search Console / SEO owner | Which French intent groups warrant content review? |

Do not treat page views, impressions, AI citations, social reach, clicks, contact submissions, qualified enquiries and revenue as interchangeable. Set targets only after a dated baseline and approved business outcome exist. No revenue or earnings measure is proposed for Senegal because the source register does not establish a safe commercial evidence base.

### QA and reporting cadence

Before approval: inspect final URLs, locale, canonical, referrer preservation, consent behaviour, event firing, duplicate events, source-link safety, form success/failure paths and mobile keyboard access. At launch: retain a URL register and screenshot/log evidence. At the first review: reconcile Analytics, Search Console and any platform exports; record missing access as `NOT_ASSESSED`. Report observations, inference and unresolved gaps separately.

## 7. Owners, acceptance and recovery

| Workstream | Accountable owner | Acceptance gate | Rollback / recovery |
|---|---|---|---|
| Scope, diff and final integration | Astra root | Only `docs/kaizen-search-social-plan-2026-09-09.md` is added by this task; root reviews the real diff. | Keep all unrelated uncommitted implementation untouched; remove only this task file if the root rejects the handoff. |
| Senegal evidence and French copy | Content/source owner | Every material claim maps to C-01/C-03/C-04 or is labelled `NOT_ASSESSED`; native French review passes. | Restore the last source-labelled copy and quarantine any changed evidence. |
| Search/AI implementation | SEO/build owner | Built HTML, route links, metadata, canonicals, hreflang, sitemap, robots and schema agree; browser and live checks are recorded. | Revert the affected route metadata/schema/link change; do not suppress or redirect the whole site without evidence. |
| Social launch | Social owner | Draft approved, rights/accessibility/moderation checks pass, destination and UTMs validate. | Do not publish; withdraw the draft variant and retain the safe source-only version. |
| Measurement | Analytics owner | Consent/privacy review, event QA, UTM register and baseline evidence are complete. | Disable the defective event or remove the invalid UTM link; keep raw evidence immutable. |
| Source freshness | Research/content owner | Senegal source review occurs by 16 September 2026 or sooner if the corporate contact or source integrity changes. | Mark affected claims stale or `NOT_ASSESSED`; stop local-contact and commercial copy. |

## 8. Gaps and unassessed evidence

- No current Senegal-local address, telephone, email, stock list, price list, regulatory status, distributor centre, local registration process, earnings evidence, health outcome evidence or clean local social profile is established. [Senegal source register](research/senegal-source-register-2026-09-09.md)
- No search-volume, competition, SERP, ranking, AI-citation, referral, social-reach, enquiry, conversion or revenue baseline is available in the supplied evidence. These are gaps, not zeroes.
- No archive snapshot was found or written in the bounded source pass; the compromised domain remains quarantined. [Senegal source register](research/senegal-source-register-2026-09-09.md)
- Browser keyboard/accessibility, visual comparison, full build, deployment, live robots/CDN controls, Search Console, Analytics, platform account access and model-currentness checks are owned by the Astra root and are `NOT_ASSESSED` here. [UI/UX handoff](kaizen-ui-ux-2026-09-09.md)
- The existing source material contains broader corporate marketing statements on some routes; this plan does not independently revalidate them. Any such statement used in a launch asset needs its own source and legal/medical/content gate.

## 9. Handoff decision

**Return to Astra root:** integrate only after reviewing this file against the real diff and the root-owned browser, build, source, security, model and deployment evidence. The safe next action is a French-first route/content review plus measurement setup in a reversible branch of work. Release readiness is **NOT_ASSESSED**; no ranking, AI inclusion, social or commercial outcome is promised.

### Sources

- [Senegal source register — 2026-09-09](research/senegal-source-register-2026-09-09.md) — project source/claim boundary; accessed 2026-09-09.
- [French Senegal source](fr/country-senegal.md) — rendered content source of truth; accessed 2026-09-09.
- [Website Kaizen baseline — 9 September 2026](kaizen-baseline-2026-09-09.md) — frozen baseline and score; accessed 2026-09-09.
- [Kaizen validation record](kaizen-validation-2026-09-09.json) — generated route/build validation record; accessed 2026-09-09.
- [Google Search Central — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — primary current guidance; accessed 2026-09-09; updated 2025-12-10 UTC.
