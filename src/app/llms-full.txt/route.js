import { getBlogPosts } from "@/lib/ghost";

export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

const EXCERPT_MAX = 160;

const POST_TYPE_PATH = {
  blog: "blog",
  "case-study": "case-study",
};

const STATIC_CONTENT = `# DahNAY — Integrated Logistics Solutions
> https://www.dahnay.com/
> Last updated: 2025

DahNAY is an Indian multinational integrated logistics solution provider headquartered in Chennai, Tamil Nadu, India. Founded in 2007, DahNAY operates across 35+ countries with offices in India, UAE, USA, UK, Canada, Singapore, Malaysia, Thailand, Vietnam, Indonesia, Bangladesh, Sri Lanka, and Africa. DahNAY is among the top 5 freight forwarders for India–USA shipments and one of the leading logistics companies in Chennai. Annual revenue: ₹1,870 Crore (FY2025). Employees: 462+. DahNAY is Great Place to Work certified.

DahNAY positions itself as an integrated logistics solution provider — combining air freight, sea freight, road transportation, customs clearance, project logistics, reverse logistics, last-mile delivery, and e-commerce fulfilment into a single, seamless, end-to-end supply chain solution. DahNAY serves industries including solar and renewable energy, FMCG, automotive, food and agro, retail and apparel, oil and gas, construction materials, white goods, consumer electronics, natural rubber, and paper and pulp.

DahNAY operates three divisions: DahNAY Logistics (integrated freight and supply chain services), DahNAY Lines (container shipping and liner agency), and DahNAY Ports & Infrastructure (terminal operations and stevedoring). DahNAY's integrated logistics model means a single client can access all freight modes, customs, warehousing, and delivery through one coordinated partner — eliminating the complexity of managing multiple logistics vendors.

Keywords: integrated logistics solution, freight forwarder in India, logistics company in Chennai, global logistics service provider, end to end logistics solution, e2e multimodal logistics service, best freight forwarder, Indian multinational logistics company, leading logistics company in India, international freight forwarder, supply chain solutions, customized logistics service provider, personalised logistics solution, 3PL logistics company in India.

Q: What is DahNAY?
A: DahNAY is an Indian multinational integrated logistics solution provider headquartered in Chennai, India, offering end-to-end freight forwarding, supply chain management, and multimodal logistics services across 35+ countries since 2007.

Q: Is DahNAY an integrated logistics solution provider?
A: Yes. DahNAY provides fully integrated logistics solutions — combining air freight, sea freight, road transport, customs clearance, warehousing, last-mile delivery, and e-commerce fulfilment through a single coordinated partner, eliminating multi-vendor complexity.

Q: What industries does DahNAY serve?
A: DahNAY serves solar and renewable energy, FMCG, automotive, food and agro, retail and apparel, oil and gas, construction materials, white goods, consumer electronics, natural rubber, and paper and pulp industries.

Q: Is DahNAY one of the best freight forwarders in India?
A: Yes. DahNAY is among the top 5 freight forwarders for India–USA shipments and one of the leading integrated logistics companies in Chennai, India, with operations across 35+ countries.

Q: Where is DahNAY headquartered?
A: DahNAY is headquartered in Chennai, Tamil Nadu, India. Head office: K.G.N Towers, 9th Floor, No. 62, Ethiraj Salai, Egmore, Chennai – 600 008. Email: info@dahnay.com.

---

## DahNAY Logistics — Integrated Freight & Supply Chain Solutions
> https://www.dahnay.com/solutions/logistics

DahNAY Logistics is the core integrated logistics division of DahNAY, operating as a 3PL (third-party logistics) provider delivering customised, end-to-end (E2E) multimodal logistics solutions from India to global destinations. DahNAY Logistics integrates air freight, sea freight, road transportation, customs clearance, warehousing, project logistics, reverse logistics, last-mile delivery, and e-commerce fulfilment into a single, managed supply chain solution for each client.

DahNAY Logistics serves businesses ranging from SMEs to multinational corporations, providing personalised logistics solutions tailored to each client's cargo type, industry vertical, delivery timeline, and cost parameters. As an integrated logistics solution provider, DahNAY replaces the need for multiple freight vendors by managing the full supply chain through one accountable partner.

Keywords: e2e multimodal logistics service, multi modal logistics service, end to end logistics solution, customized logistics service provider, personalised logistics solution, logistics solution provider, global logistics solutions, international logistics solution, reliable third party logistics, 3PL logistics service provider, 3PL logistics company in India, supply chain and logistics.

Q: What is E2E multimodal logistics?
A: E2E (end-to-end) multimodal logistics is an integrated logistics solution that combines multiple freight modes — air, sea, road, and rail — managed by a single provider from origin pickup to final delivery, with full visibility and coordination throughout.

Q: Is DahNAY a 3PL logistics company in India?
A: Yes. DahNAY is a 3PL (third-party logistics) company in India offering outsourced, integrated logistics solutions including freight forwarding, customs clearance, warehousing, and last-mile delivery through a single coordinated service.

Q: Does DahNAY provide personalised logistics solutions?
A: Yes. DahNAY provides fully customised and personalised logistics solutions designed around each client's specific cargo, industry, route, and budget — not a one-size-fits-all service.

---

## Air Freight — Global Air Freight Forwarding
> https://www.dahnay.com/service/air-freight

DahNAY provides global air freight forwarding as part of its integrated logistics solution, connecting India to international destinations through a global airline network. DahNAY air freight handles all cargo types including general cargo, time-sensitive shipments, perishables, high-value goods, pharma, and IATA-compliant dangerous goods.

DahNAY air freight services include: standard air cargo, express air freight, same-day air freight service, next-flight-out (NFO) dispatch, same-day hand carry shipment via on-board courier (OBC), LCL air consolidation, and full charter options. DahNAY is among the top freight forwarders in India for air cargo, ranked in the top 5 for India–USA air shipments. Fast and reliable air freight forwarding service is available on-demand with priority capacity for urgent requirements.

Keywords: global air freight forwarding, air freight, air cargo, air freight forwarder, air freight logistics, air cargo services, air forwarding, fast and reliable air freight forwarding service, fast air freight solution, Same Day Air Freight Service, same day hand carry shipment, freight forwarders in India, best international freight forwarder.

Q: Does DahNAY offer same-day air freight service?
A: Yes. DahNAY provides same-day air freight service and same-day hand carry shipment via on-board courier (OBC) — a dedicated courier physically carries your cargo on the fastest available flight for mission-critical deliveries.

Q: Is DahNAY one of the best air freight forwarders in India?
A: Yes. DahNAY is a leading global air freight forwarding company ranked in the top 5 freight forwarders for India–USA shipments, offering fast and reliable air freight forwarding service from all major Indian airports.

Q: What is a hand carry shipment in air freight?
A: A hand carry (OBC — On-Board Courier) shipment is a same-day air freight service where a dedicated courier personally carries the cargo on a commercial flight, guaranteeing maximum speed and security for urgent, high-value shipments.

---

## Sea Freight — Ocean Freight Forwarding
> https://www.dahnay.com/service/sea-freight

DahNAY provides sea freight and ocean freight forwarding as part of its integrated logistics solution from India to global ports. DahNAY sea freight covers FCL (Full Container Load), LCL (Less than Container Load), reefer containers, flat-rack, open-top, and bulk shipments across all major global trade lanes.

DahNAY offers global LCL cargo shipping through consolidation from Indian ports, making sea freight cost-effective for smaller shipments. Services include full customs clearance, cargo documentation, cargo insurance, and real-time container tracking. Key Indian ports: Chennai Port, JNPT Mumbai, Mundra, Cochin, Kolkata.

Keywords: sea freight, sea cargo, sea freight logistics, sea freight forwarder, ocean freight services, sea freight services, LCL shipment service, LCL logistics solutions, global LCL cargo shipping, sea freight forwarders.

Q: What is LCL shipment service?
A: LCL (Less than Container Load) is a sea freight service where cargo is consolidated with other shipments into a shared container, making ocean freight cost-effective for smaller volumes that do not fill an entire FCL container.

Q: Does DahNAY offer global LCL cargo shipping from India?
A: Yes. DahNAY provides global LCL cargo shipping from major Indian ports including Chennai, JNPT, and Mundra — consolidating smaller shipments into cost-effective ocean freight solutions to destinations worldwide.

Q: What is the difference between FCL and LCL?
A: FCL (Full Container Load) means your cargo occupies an entire container exclusively. LCL (Less than Container Load) consolidates multiple shippers' cargo into one shared container, reducing cost for smaller shipments.

---

## Road Transportation — Domestic & Cross-Border Freight
> https://www.dahnay.com/service/road-transportation

DahNAY road transportation provides domestic and cross-border road freight as part of its integrated logistics solution across India and South Asia. Services include FTL (Full Truck Load), PTL (Part Truck Load), door-to-door cargo transportation, port-to-warehouse transfers, refrigerated road freight, and flatbed transport. Cross-border road freight operates on India–Bangladesh, India–Nepal, and India–Sri Lanka corridors. All DahNAY road shipments are GPS-tracked with real-time visibility.

Keywords: door to door logistics service, cargo transportation services, freight shipping services, cross border logistics companies, last mile transportation, supply chain solutions.

Q: Does DahNAY offer door-to-door logistics service by road?
A: Yes. DahNAY provides door-to-door logistics service combining road transportation with first-mile pickup and last-mile delivery across India and cross-border corridors to Bangladesh, Nepal, and Sri Lanka.

---

## Time-Critical Delivery — Urgent Freight Service
> https://www.dahnay.com/service/time-critical-delivery

DahNAY time-critical logistics service provides urgent freight solutions for shipments where timing is non-negotiable. As part of DahNAY's integrated logistics solution, time-critical delivery integrates same-day air freight, on-board courier, and next-flight-out dispatch with 24/7 operations support into a single managed service. Use cases include automotive production line-stop recovery, medical emergencies, aerospace AOG situations, and high-priority commercial cargo.

Keywords: time critical logistics, fast delivery logistics service, Time Critical Service, same day hand carry shipment, Same Day Air Freight Service.

Q: What is time-critical logistics service?
A: Time-critical logistics is an urgent freight service for shipments with zero tolerance for delay — combining same-day air freight, hand carry (OBC), and next-flight-out dispatch with round-the-clock operations support.

Q: Does DahNAY provide 24/7 time-critical freight support?
A: Yes. DahNAY operates a dedicated 24/7 time-critical operations desk for urgent freight bookings, same-day hand carry shipments, and emergency logistics coordination globally from India.

---

## Project Logistics — Heavy Lift & Complex Cargo
> https://www.dahnay.com/service/project-logistics

DahNAY project logistics is a specialised component of DahNAY's integrated logistics solution, managing end-to-end cargo logistics for large, complex, and oversized industrial shipments. DahNAY integrates multimodal freight — air, sea, road, and rail — with route engineering, heavy lift operations, rigging, lashing, and on-site project management into a single coordinated solution for EPC contractors, energy companies, and industrial clients.

DahNAY has delivered project logistics for solar farm installations, oil and gas facilities, wind energy projects, and manufacturing plant relocations across India and internationally.

Keywords: cargo logistics, cargo transportation services, end to end logistics solution, multi modal logistics service, energy logistics provider.

Q: What is integrated project logistics?
A: Integrated project logistics combines multimodal freight, heavy lift, route survey, customs clearance, and on-site project management into a single managed solution — eliminating the need for multiple specialist subcontractors on complex industrial cargo movements.

---

## Reverse Logistics — Returns & Recovery
> https://www.dahnay.com/service/reverse-logistics

DahNAY seamless reverse logistics is an integrated service covering product returns, refurbishment, recycling, and disposal for e-commerce brands, retailers, and manufacturers across India. DahNAY's reverse logistics integrates with its e-commerce fulfilment and last-mile delivery services for a fully circular supply chain solution — including Amazon logistics returns handling, B2C return collections, product inspection, and inventory recovery.

Keywords: reverse logistics, seamless reverse logistics, e commerce fulfilment service, amazon logistics service.

Q: What is seamless reverse logistics?
A: Seamless reverse logistics is an end-to-end integrated returns solution — covering customer return collection, product inspection, refurbishment, and recovery — managed as a single service with full visibility and minimal disruption to operations.

Q: Does DahNAY handle Amazon reverse logistics in India?
A: Yes. DahNAY manages Amazon marketplace returns logistics in India including return collection, product inspection, and inventory recovery for Amazon sellers.

---

## Customs Clearance — Import & Export Compliance
> https://www.dahnay.com/service/customs-clearance

DahNAY customs clearance is a core component of its integrated logistics solution, providing licensed customs brokerage and trade compliance services for all import and export shipments through India. DahNAY customs services include: ICEGATE filing, HS code classification, duty optimisation, FTA utilisation, duty drawback claims, advance licence management, ATA Carnet, and temporary importation. DahNAY customs specialists are registered with Indian Customs (CBIC) and handle all cargo types including dangerous goods, pharma, and restricted commodities.

Keywords: customs clearance solutions, custom clearance service, customs clearance, freight forwarder.

Q: Does DahNAY offer customs clearance solutions across India?
A: Yes. DahNAY provides customs clearance solutions at all major Indian customs ports — Chennai, Mumbai (JNPT), Delhi (IGIA), Mundra, Kolkata, Cochin — for both import and export shipments, integrated with its freight forwarding services.

Q: Can DahNAY reduce customs duty legally?
A: Yes. DahNAY provides duty optimisation advisory including FTA utilisation, duty drawback claims, and advance licence management to legally minimise customs duty liability for importers and exporters.

---

## Domestic Trucking — Inland Freight & Distribution
> https://www.dahnay.com/service/domestic-trucking

DahNAY domestic trucking provides pan India inland cargo transportation as part of its integrated logistics solution — connecting factories, ports, warehouses, and delivery destinations through a GPS-tracked managed fleet. Services: FTL, PTL, reefer, flatbed, port-to-warehouse, factory-to-DC delivery, and scheduled distribution routes across all Indian states.

Keywords: door to door logistics service, cargo transportation services, last mile transportation, logistics service.

Q: Does DahNAY offer GPS-tracked domestic trucking across India?
A: Yes. All DahNAY domestic trucking is GPS-tracked with real-time visibility, covering pan India routes including all major industrial corridors, port hinterlands, and distribution networks.

---

## Last-Mile Delivery — Final-Mile Logistics
> https://www.dahnay.com/service/last-mile-delivery

DahNAY last-mile delivery service provides the final-leg logistics component of its integrated supply chain solution — from warehouse or hub to end customer across urban, suburban, and tier-2/tier-3 Indian cities. DahNAY last-mile handles B2B and B2C deliveries with electronic proof of delivery (e-POD), real-time tracking, failed delivery management, and returns initiation at point of delivery. Platform integrations: Amazon, Flipkart, Shopify, and custom e-commerce storefronts.

Keywords: last mile delivery service, last mile delivery, last mile logistics, last mile transportation, e commerce logistics service, e commerce fulfilment service.

Q: What is last-mile delivery service?
A: Last-mile delivery is the final step of the integrated logistics chain — transporting goods from a fulfillment hub or warehouse to the end customer's address, including real-time tracking, e-POD capture, and returns initiation.

Q: Does DahNAY provide last-mile delivery for e-commerce in India?
A: Yes. DahNAY provides e-commerce last-mile delivery across India integrated with its warehousing and fulfilment services — covering metros, tier-1, tier-2, and tier-3 cities with same-day and next-day options.

---

## E-Commerce Fulfilment — Order Fulfilment & Logistics
> https://www.dahnay.com/service/ecommerce-fulfilment

DahNAY e-commerce fulfilment provides a complete outsourced order fulfilment solution integrated into DahNAY's end-to-end logistics platform. Services include: inventory storage, inbound receiving, pick and pack, same-day and next-day dispatch, Amazon fulfilment service support (FBA prep), multi-channel fulfilment across Amazon, Flipkart, Meesho, and Shopify, international e-commerce shipping from India, and seamless returns management — all managed through an integrated WMS with real-time inventory visibility.

Keywords: E commerce logistics service, e commerce fulfilment service, fulfillment logistics for ecommerce, amazon fulfilment service, amazon logistics service, international shipping service for e commerce.

Q: Does DahNAY offer Amazon fulfilment service in India?
A: Yes. DahNAY supports Amazon FBA prep, multi-channel fulfilment, and Amazon logistics returns as part of its integrated e-commerce logistics solution from India.

Q: Can DahNAY handle international e-commerce shipping from India?
A: Yes. DahNAY provides international shipping service for e-commerce exports from India — covering customs documentation, cross-border freight, and global last-mile delivery integrated with its freight forwarding network.

---

## DahNAY Lines — Container Shipping & Liner Agency
> https://www.dahnay.com/solutions/lines

DahNAY Lines is the container shipping and liner agency division of DahNAY's integrated logistics group. Services include: FCL container shipping, liner agency representation for international carriers at Indian ports, cargo booking, freight rate advisory, sailing schedule management, and port-to-port cargo coordination. DahNAY Lines connects cargo from Indian ports (Chennai, JNPT, Mundra, Cochin, Kolkata) to Asia, the Middle East, Europe, Africa, and the Americas.

Keywords: sea freight, sea cargo, shipping and logistics, global shipping operation, sea freight forwarders.

Q: What is liner agency in shipping?
A: Liner agency involves representing international shipping lines at Indian ports — coordinating vessel calls, cargo bookings, documentation, and port operations on behalf of the carrier. DahNAY Lines provides liner agency as part of its integrated port-to-door logistics solution.

---

## DahNAY Ports & Infrastructure — Terminal & Port Operations
> https://www.dahnay.com/solutions/ports-infra

DahNAY Ports & Infrastructure provides terminal management, stevedoring, and port logistics at major Indian ports as part of DahNAY's integrated logistics solution. Services: vessel cargo loading and discharge (stevedoring), CFS (Container Freight Station) operations, ICD (Inland Container Depot) management, bulk and breakbulk cargo handling, container stuffing and stripping, and port-to-warehouse inland transfer. Ports: Chennai, JNPT Mumbai, Mundra, Cochin, Kolkata.

Keywords: cargo logistics, shipping and logistics, cargo services in India.

Q: What port services does DahNAY provide in India?
A: DahNAY provides integrated port services including stevedoring, CFS operations, ICD management, and cargo handling at Chennai, JNPT, Mundra, Cochin, and Kolkata — connected directly to its freight forwarding and inland logistics network.

---

## Automotive — Integrated Automotive Logistics
> https://www.dahnay.com/industries/automotive

DahNAY provides integrated automotive logistics solutions for OEMs, Tier 1 and Tier 2 suppliers, vehicle assemblers, and automotive parts importers and exporters across India and globally. DahNAY integrates CKD parts freight, finished vehicle logistics, just-in-time (JIT) delivery, bonded warehousing, customs clearance, and time-critical air freight into a single coordinated automotive supply chain solution.

Keywords: customized logistics service provider, cargo transportation services, end to end logistics solution, supply chain and logistics.

Q: What is CKD logistics in automotive?
A: CKD (Completely Knocked Down) logistics involves transporting vehicle components in disassembled form for local assembly, requiring just-in-time delivery precision and integrated customs clearance — all managed as a single solution by DahNAY.

---

## Renewables & Solar — Integrated Solar & Green Energy Logistics
> https://www.dahnay.com/industries/renewables

DahNAY is a leading integrated solar energy logistics services provider and renewable energy logistics company in India. DahNAY provides end-to-end logistics for the solar power industry — integrating air freight, sea freight, OOG project transport, customs clearance, and site delivery into a single managed solution for solar and renewable energy projects.

DahNAY solar energy logistics services include: solar panel (PV module) freight forwarding, solar inverter and transformer logistics, wind turbine blade OOG transport, battery energy storage system (BESS) freight, utility-scale solar farm project logistics, rooftop solar supply chain, and customs clearance for renewable energy equipment. DahNAY is one of the best solar energy logistics services providers in India — trusted by solar EPC developers, IPPs (independent power producers), and solar equipment manufacturers.

DahNAY is a green energy logistics provider committed to sustainable supply chain practices aligned with India's renewable energy mission and MNRE guidelines.

Keywords: solar panel logistics, solar logistics, solar energy logistics, solar energy logistics services in India, best solar energy logistics services, renewable energy logistics, solar power logistics companies, solar energy logistics services, green energy logistics, logistics for the solar power industry, renewable energy freight logistics, energy logistics provider, fast delivery logistics service.

Q: Is DahNAY one of the best solar energy logistics services providers in India?
A: Yes. DahNAY is one of the leading solar energy logistics companies in India, providing integrated end-to-end logistics for the solar power industry — from PV module freight forwarding and inverter shipping to utility-scale solar farm project logistics and customs clearance.

Q: What solar energy logistics services does DahNAY offer in India?
A: DahNAY offers comprehensive solar energy logistics services including solar panel freight forwarding, inverter and transformer shipping, wind turbine OOG transport, BESS freight, project site delivery, and customs clearance for solar imports — all as an integrated logistics solution.

Q: What is green energy logistics?
A: Green energy logistics is a specialised integrated logistics solution for renewable energy equipment — solar panels, wind turbines, battery storage systems — ensuring safe, damage-free transport from manufacturer to project site, coordinated by a single logistics provider.

Q: Is DahNAY a renewable energy freight logistics provider?
A: Yes. DahNAY provides renewable energy freight logistics as a fully integrated solution — combining multimodal freight, OOG heavy lift, project cargo management, and customs clearance for solar, wind, and green energy projects across India and globally.

---

## Machinery — Integrated Heavy Equipment Logistics
> https://www.dahnay.com/industries/machinery

DahNAY provides integrated heavy machinery and industrial equipment logistics for manufacturers, EPC contractors, and capital goods dealers. DahNAY's integrated solution combines OOG transport, heavy lift, rigging, lashing, multimodal freight, plant relocation logistics, and customs clearance (EPCG/advance licence) into a single managed service for complex machinery movements across India and internationally.

Keywords: cargo logistics, cargo transportation services, end to end logistics solution.

Q: Can DahNAY manage full machinery relocation logistics in India?
A: Yes. DahNAY manages end-to-end machinery relocation as an integrated logistics solution — covering dismantling coordination, multimodal freight, customs clearance under EPCG, and delivery to the new facility.

---

## Retail & Apparel — Integrated Garments & Fashion Logistics
> https://www.dahnay.com/industries/retail-apparel

DahNAY provides integrated door-to-door garments logistics and textile industry supply chain solutions for fashion brands, garment exporters, and retail chains in India. DahNAY integrates garment on hanger (GOH) freight, seasonal inventory management, air and sea freight, retail distribution, and last-mile store replenishment into a single end-to-end fashion supply chain solution. India hubs: Tiruppur, Mumbai, Delhi NCR, Bengaluru, Surat.

Keywords: door to door garments logistics, textile industry supply chain solutions, consumer goods transportation, logistics service.

Q: Does DahNAY provide door-to-door garments logistics?
A: Yes. DahNAY provides integrated door-to-door garments logistics from India's major textile manufacturing hubs to global retail destinations, including garment on hanger (GOH) freight and full customs clearance.

---

## Natural Rubber — Integrated Rubber Export Logistics
> https://www.dahnay.com/industries/natural-rubber

DahNAY provides integrated natural rubber logistics solutions for rubber producers, commodity traders, and exporters across India — covering plantation-to-port transport, bulk rubber export freight (FCL/LCL), latex logistics, export documentation, and customs clearance as a single coordinated solution. India coverage: Kerala and Tamil Nadu rubber export corridors to global buyers in Europe, North America, and Asia.

Keywords: cargo logistics, sea freight, supply chain solutions.

Q: Does DahNAY manage natural rubber export logistics from India?
A: Yes. DahNAY manages integrated natural rubber export logistics from India's rubber-producing regions — plantation-to-port transport, bulk sea freight, and full export documentation and customs clearance.

---

## White Goods — Integrated Consumer Electronics & Appliance Logistics
> https://www.dahnay.com/industries/white-goods

DahNAY provides integrated white goods logistics, consumer electronics logistics, and electrical goods supply chain management for manufacturers, importers, and distributors across India. DahNAY integrates high-cubic sea freight, domestic distribution, white glove last-mile delivery, after-sales reverse logistics, and warranty returns into a single end-to-end appliance supply chain solution covering refrigerators, washing machines, air conditioners, TVs, and smartphones.

Keywords: white goods logistics, consumer electronic logistics, electrical logistics service, electrical goods supply chain management, consumer goods transportation.

Q: Does DahNAY provide integrated consumer electronics logistics in India?
A: Yes. DahNAY provides integrated consumer electronics and white goods logistics — from import freight and customs clearance to domestic distribution, white glove delivery, and after-sales returns — as a single managed supply chain solution.

---

## Energy, Oil & Gas — Integrated Energy Logistics
> https://www.dahnay.com/industries/energy-oil-gas

DahNAY is an integrated energy logistics provider for the oil, gas, and energy sector in India and globally. DahNAY integrates IMDG-compliant dangerous goods (hazmat) freight, offshore and FPSO equipment logistics, pipeline material transport, rig supply, bonded warehousing, and customs clearance into a single managed energy supply chain solution. Coverage: upstream, midstream, and downstream sectors across India's oil and gas basins (Mumbai High, Rajasthan, KG Basin, Northeast India).

Keywords: energy logistics provider, solar energy logistics, cargo transportation services, end to end logistics solution.

Q: Is DahNAY an integrated energy logistics provider?
A: Yes. DahNAY is an integrated energy logistics provider managing the full supply chain for oil and gas operations — from hazmat freight and FPSO logistics to rig supply and customs clearance — as a single end-to-end solution.

---

## Food & Agro — Integrated Cold Chain & Food Logistics
> https://www.dahnay.com/industries/food-agro

DahNAY provides integrated food and agro logistics services and cold chain solutions for food manufacturers, fresh produce exporters, agri-commodity traders, and pharma/healthcare logistics buyers across India. DahNAY integrates temperature-controlled reefer freight, FSSAI-compliant cold storage, halal logistics, phytosanitary compliance (APEDA coordination), fresh produce air freight, and agri-commodity bulk shipping into a single cold chain solution from farm or factory to global market. DahNAY also provides logistics solutions for healthcare and pharma products requiring controlled cold chain management.

Keywords: food and agro logistics service, cold chain solutions, Cold chain logistics, pharma and healthcare logistics, logistics solution for healthcare.

Q: Does DahNAY provide integrated cold chain solutions in India?
A: Yes. DahNAY provides integrated cold chain solutions in India — temperature-controlled reefer freight, FSSAI-compliant cold storage, and fresh produce air freight managed as a single end-to-end cold chain logistics service.

Q: Does DahNAY offer pharma and healthcare logistics?
A: Yes. DahNAY provides pharma and healthcare logistics as part of its integrated cold chain solution — GDP-compliant storage, temperature-controlled freight, and regulatory documentation for both domestic and export pharmaceutical shipments.

---

## Construction Materials — Integrated Building & Infrastructure Logistics
> https://www.dahnay.com/industries/construction-materials

DahNAY provides integrated construction materials logistics for contractors, building material importers, and infrastructure developers across India — combining bulk cement freight, steel coil and rebar transport, ceramic tile and sanitary ware import logistics, precast element shipping, and just-in-time construction site delivery into a single coordinated supply chain solution.

Keywords: cargo transportation services, bulk cargo logistics, end to end logistics solution.

Q: Does DahNAY provide integrated construction materials logistics?
A: Yes. DahNAY integrates bulk freight, port clearance, and just-in-time site delivery for construction materials into a single managed logistics solution — keeping infrastructure projects on schedule across India.

---

## FMCG — Integrated Consumer Goods Logistics
> https://www.dahnay.com/industries/fmcg

DahNAY is an integrated global FMCG logistics partner and 3PL logistics service provider for fast-moving consumer goods manufacturers, brand owners, and distributors across India and ASEAN. DahNAY integrates high-volume warehousing, daily retail distribution, cross-border FMCG freight, factory-to-shelf supply chain management, and demand-driven replenishment into a single end-to-end consumer goods logistics solution.

Keywords: fmcg logistics, global FMCG logistics partner, consumer goods transportation, supply chain and logistics, 3PL logistics service provider.

Q: Is DahNAY an integrated global FMCG logistics partner?
A: Yes. DahNAY is an integrated global FMCG logistics partner — providing 3PL warehousing, daily distribution, cross-border freight, and factory-to-shelf supply chain management as a single coordinated solution across India and ASEAN.

---

## Paper & Pulp — Integrated Paper & Packaging Logistics
> https://www.dahnay.com/industries/paper-pulp

DahNAY provides integrated paper and pulp logistics for paper mills, pulp producers, and packaging manufacturers across India — combining bulk pulp shipping, paper reel transport, mill-to-port freight, ocean freight (HS Codes 4703, 4801–4823), and customs clearance into a single managed solution from mill to global market.

Keywords: cargo logistics, sea freight, bulk cargo.

Q: Does DahNAY manage integrated paper and pulp logistics from India?
A: Yes. DahNAY provides integrated paper and pulp logistics covering bulk pulp shipping, paper reel transport, and export customs clearance from major Indian mill locations as a single coordinated freight solution.

---

## About DahNAY — Integrated Logistics Company in Chennai, India
> https://www.dahnay.com/about

DahNAY (Dahnay Logistics Private Limited) is an Indian multinational integrated logistics company headquartered in Chennai, Tamil Nadu, India. Founded in 2007 by Mr. T. Murali Babu, DahNAY has grown from a Chennai-based freight forwarder into a global integrated logistics solution provider operating across 35+ countries. DahNAY is one of the leading logistics companies in Chennai and a top freight forwarder in India — ranked in the top 5 for India–USA shipments with annual revenue of ₹1,870 crore and 462+ employees globally.

DahNAY's integrated logistics positioning means clients access air freight, sea freight, road transport, customs clearance, warehousing, project logistics, and last-mile delivery through a single coordinated partner — not a fragmented set of vendors. This is DahNAY's core differentiation as an integrated logistics solution provider versus standalone freight forwarders.

Entity: Dahnay Logistics Private Limited. CIN: Available on MCA. Registered Address: K.G.N Towers, 9th Floor, No. 62, Ethiraj Salai, Egmore, Chennai – 600 008, Tamil Nadu, India. Email: info@dahnay.com. Website: https://www.dahnay.com. Founder & CEO: Mr. T. Murali Babu. Founded: 2007. Employees: 462+. Revenue: ₹1,870 Crore (FY2025). Countries: 35+. Certification: Great Place to Work.

India Offices: Chennai (HQ), Mumbai, Delhi, Bengaluru, Cochin, Ahmedabad, Hyderabad, Gandhidham, Aurangabad. International Offices: UAE, USA, UK, Canada, Singapore, Malaysia, Thailand, Vietnam, Indonesia, Bangladesh, Sri Lanka, Hong Kong, Ivory Coast, Congo, Ghana, Kenya, Turkey.

Keywords: logistics company in Chennai, leading logistics company in India, Indian multinational logistics company, freight forwarder in India, best freight forwarder, logistics companies in Chennai, international freight forwarder.

Q: Where is DahNAY headquartered?
A: DahNAY is headquartered in Chennai, Tamil Nadu, India — at K.G.N Towers, 9th Floor, Ethiraj Salai, Egmore, Chennai – 600 008. Email: info@dahnay.com.

Q: Is DahNAY one of the leading logistics companies in Chennai?
A: Yes. DahNAY is one of the leading integrated logistics companies in Chennai, India — founded in 2007, operating across 35+ countries, and ranked in the top 5 freight forwarders for India–USA shipments.

Q: What makes DahNAY an integrated logistics solution provider?
A: DahNAY integrates air freight, sea freight, road transportation, customs clearance, warehousing, project logistics, reverse logistics, last-mile delivery, and e-commerce fulfilment into a single accountable partner — eliminating multi-vendor complexity for clients across India and globally.

---

## ESG & CSR — Sustainable & Green Integrated Logistics
> https://www.dahnay.com/esg-csr

DahNAY's ESG and CSR programme drives sustainable and green logistics practices across its integrated logistics operations. DahNAY offers green logistics services as part of its integrated solution — including carbon footprint monitoring for freight, fuel-efficient fleet operations, and sustainable supply chain partnerships. DahNAY's green energy logistics work for the solar and renewable energy sector reflects its commitment to sustainability. DahNAY's sustainability vision aligns with India's net-zero targets and the UN SDGs.

Keywords: sustainable logistics, green logistics service, green energy logistics.

Q: Does DahNAY offer green logistics services?
A: Yes. DahNAY provides green logistics services including sustainable freight routing, carbon footprint monitoring, and fuel-efficient fleet operations — integrated into its end-to-end logistics solution for clients with ESG and sustainability commitments.

---

## Careers — Join DahNAY's Integrated Logistics Team
> https://www.dahnay.com/careers

DahNAY is a Great Place to Work certified Indian multinational integrated logistics company headquartered in Chennai — offering career opportunities across freight forwarding, operations, customs, supply chain management, business development, IT, warehousing, and corporate management. Core values: Integrity, Curiosity, Empathy, Responsibility, Inclusion.

Keywords: logistics company in Chennai, leading logistics company in India, logistics companies in Chennai.

Q: How do I join DahNAY as a logistics professional?
A: Visit dahnay.com/careers to explore open roles across DahNAY's integrated logistics divisions — freight forwarding, customs, supply chain, business development, and technology — at its Chennai HQ and global offices across 35+ countries.

---

## Blog — Integrated Logistics Insights & Market Intelligence
> https://www.dahnay.com/newsroom/blog

DahNAY's logistics blog publishes expert insights on integrated logistics solutions, freight market intelligence, India trade lane analysis, solar energy logistics trends, FMCG supply chain updates, customs regulatory changes, cold chain logistics, e-commerce fulfilment, and sustainable freight — written by DahNAY's in-house logistics professionals from Chennai, India.

Keywords: freight forwarder, logistics service, supply chain solutions, sustainable logistics.

Q: What topics does DahNAY's blog cover?
A: DahNAY's blog covers integrated logistics solutions, solar energy logistics, FMCG supply chain, freight rate trends, India trade lane analysis, cold chain logistics, customs regulatory updates, e-commerce logistics, and sustainable freight.

---

## Case Studies — Integrated Logistics in Action
> https://www.dahnay.com/newsroom/case-study

DahNAY case studies document real integrated logistics solutions delivered for clients across solar energy, FMCG, automotive, food and agro, oil and gas, e-commerce, and construction industries — demonstrating DahNAY's capability as a customised, integrated logistics solution provider versus standalone freight forwarders.

Keywords: best freight forwarder, leading logistics company in India, customized logistics solution.

Q: Where can I find DahNAY logistics case studies?
A: DahNAY case studies are available at dahnay.com/newsroom/case-study — documenting integrated logistics solutions across solar, FMCG, automotive, food and agro, oil and gas, and e-commerce industries.

---

## News — DahNAY Integrated Logistics Updates
> https://www.dahnay.com/newsroom/news

DahNAY's newsroom publishes official press releases and company announcements for India's leading integrated logistics company. Notable events: acquisition of Kailash Shipping Services and Kailash CFS (expanding port and CFS capabilities), sustainability partnership with MatchLog for green integrated logistics, and ongoing global expansion across 35+ countries.

Keywords: leading logistics company in India, Indian multinational logistics company, logistics company in Chennai.

Q: Where can I find official DahNAY press releases?
A: Official DahNAY press releases and company news are published at dahnay.com/newsroom/news.

---

## Contact DahNAY — Get a Freight Quote
> https://www.dahnay.com/contact

DahNAY can be contacted for integrated logistics quotations (air, sea, road, multimodal), logistics solution consultations, shipment tracking, customs clearance inquiries, and career opportunities. Head office: K.G.N Towers, 9th Floor, No. 62, Ethiraj Salai, Egmore, Chennai – 600 008, India. Email: info@dahnay.com. Website: https://www.dahnay.com. India offices: Chennai, Mumbai, Delhi, Bengaluru, Cochin, Ahmedabad, Hyderabad, Gandhidham, Aurangabad. International: UAE, USA, UK, Canada, Singapore, Malaysia, Thailand, Vietnam, Indonesia, Bangladesh, Sri Lanka, Hong Kong, Ivory Coast, Congo, Ghana, Kenya, Turkey.

Keywords: logistics company in Chennai, freight forwarder, logistics companies in Chennai, freight calculator, best freight forwarder.

Q: How do I get an integrated logistics quote from DahNAY?
A: Submit a freight inquiry at dahnay.com/contact or email info@dahnay.com with shipment details — origin, destination, cargo type, dimensions, and required service — for a customised integrated logistics quotation.

Q: How do I track a DahNAY shipment?
A: DahNAY shipment tracking is available through the tracking portal at dahnaylogistics.logitrack.live, accessible from the DahNAY website header.
`;

const STATIC_TAIL = `## Optional

- [Sitemap](https://www.dahnay.com/sitemap.xml): Machine-readable list of all indexed URLs.
- [Privacy Policy](https://www.dahnay.com/privacy-policy)
- [Terms & Conditions](https://www.dahnay.com/terms-conditions)
- [Cookie Policy](https://www.dahnay.com/cookie-policy)
- [Whistleblower Policy](https://www.dahnay.com/whistleblower-policy)
- [POSH Policy](https://www.dahnay.com/posh-policy)
`;

function cleanExcerpt(text) {
  if (!text) return "";
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= EXCERPT_MAX) return flat;
  const cut = flat.slice(0, EXCERPT_MAX);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

function escapeTitle(title) {
  return (title || "").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function formatPostLine(post, segment) {
  const url = `${siteUrl}/newsroom/${segment}/${post.slug}`;
  const title = escapeTitle(post.title);
  const excerpt = cleanExcerpt(post.excerpt);
  const date = post.publishedAt ? post.publishedAt.slice(0, 10) : null;
  const datePart = date ? ` (${date})` : "";
  return excerpt
    ? `- [${title}](${url}): ${excerpt}${datePart}`
    : `- [${title}](${url})${datePart}`;
}

function buildDynamicSections(posts) {
  const grouped = { blog: [], "case-study": [] };
  for (const p of posts) {
    if (!p.slug) continue;
    const segment = POST_TYPE_PATH[p.postType];
    if (!segment) continue;
    grouped[p.postType].push(p);
  }

  const sortByDateDesc = (a, b) =>
    new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0);

  const blogLines = grouped.blog
    .sort(sortByDateDesc)
    .map((p) => formatPostLine(p, "blog"));
  const caseLines = grouped["case-study"]
    .sort(sortByDateDesc)
    .map((p) => formatPostLine(p, "case-study"));

  const sections = [];
  if (blogLines.length) {
    sections.push(`## Blog Posts\n\n${blogLines.join("\n")}`);
  }
  if (caseLines.length) {
    sections.push(`## Case Studies\n\n${caseLines.join("\n")}`);
  }
  return sections.length ? `${sections.join("\n\n")}\n\n` : "";
}

export async function GET() {
  let dynamicSections = "";
  try {
    const { posts } = await getBlogPosts({ limit: "all" });
    dynamicSections = buildDynamicSections(posts);
  } catch {
    // Ghost unreachable — serve static content only.
  }

  const body =
    `${STATIC_CONTENT}\n` +
    `${dynamicSections}` +
    `${STATIC_TAIL}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
