// Figma: node-id=624-5573
"use client";

import { useState, useEffect, useRef } from "react";
import Banner from "@/components/sections/Banner";
import ContactFormSection from "@/components/sections/ContactFormSection";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5000+", label: "Clients" },
  { value: "19+", label: "Countries" },
  { value: "45+", label: "Offices Worldwide" },
];

const regions = [
  "All Regions", "India", "USA", "Canada", "United Kingdom",
  "Ivory Coast", "Congo", "Ghana", "Kenya", "Turkey",
  "UAE", "Sri Lanka", "Bangladesh", "Malaysia", "Singapore",
  "Thailand", "Vietnam", "Indonesia", "Hong Kong",
];

const offices = [
  // India - Corporate Office
  { city: "Chennai (HQ)", country: "India", region: "India", address: "K.G.N Towers, 9th Floor, No: 62, Ethiraj Salai, Egmore, Chennai \u2013 600 008", phone: "+91 44 4042 2888" },
  // India - Branch Offices
  { city: "Ahmedabad", country: "India", region: "India", address: "B 306-Mondeal Heights, Near Novotel Hotel, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat \u2013 380015" },
  { city: "Aurangabad", country: "India", region: "India", address: "ELITIE SQUARE, Office No.317, 3rd Floor, Gut No.57/p, Beed Bay Pass Road, Opp: Govt Sugar Warehouse, Aurangabad \u2013 431001" },
  { city: "Bangalore", country: "India", region: "India", address: "2nd Floor, No. 1AM-133, 1st A Main Road, Kasturi Nagar, Bengaluru Urban, Karnataka 560043" },
  { city: "Chennai", country: "India", region: "India", address: "12/9, 5C, Phase II, 5th Floor, Krishnan Koil Street, Parrys, Chennai \u2013 600 001" },
  { city: "Cochin", country: "India", region: "India", address: "No.39/4208(Old), 1st Floor, Manakiri, MG Link Road, Pallimukku, Cochin \u2013 682 016" },
  { city: "Gandhidham", country: "India", region: "India", address: "Office No 3, 2nd Floor, Plot No 133, Sector 8, Bom-Gim Corporate House, Sarovar Portico Hotel Lane, Gandhidham \u2013 Kutch, Gujarat" },
  { city: "Hyderabad", country: "India", region: "India", address: "Rama Mansion, M.No. 1-11-254/11/A, Plot No. 4, 3rd Floor, Motilal Nehru Nagar, Begumpet, Hyderabad 500016" },
  { city: "Indore", country: "India", region: "India", address: "Office No. 201, Parekh Heights, 34/2, New Palasia, Indore, M.P \u2013 452 001", phone: "+91-731-4209988" },
  { city: "Jodhpur", country: "India", region: "India", address: "Office No: 303, Harnath Tower, 3rd Floor, 117, PWD Colony, Jodhpur, Rajasthan \u2013 342001" },
  { city: "Kanpur", country: "India", region: "India", address: "Cabin No. 705, 7th Floor, Krishna Towers, Plot No. 15/63, Civil Lines Kanpur Nagar, Kanpur \u2013 208001" },
  { city: "Karur", country: "India", region: "India", address: "Sukkaliyur, Karur to Madurai Bypass Road, Trichy Service Rd, Karur, Tamil Nadu 639003" },
  { city: "Kolkata", country: "India", region: "India", address: "Gooptu Court, 1st Floor, 7A/1C Middleton Street, Kolkata 700071" },
  { city: "Krishnapatnam", country: "India", region: "India", address: "DNJ Complex, Plot No: 114, Gopalapuram, Near CVR Gate, Muthukur (MD), Nellore \u2013 524334", phone: "0861-2377088" },
  { city: "Ludhiana", country: "India", region: "India", address: "Dhamijas Towers, SCO 14-15, 1st Floor, Urban Estate, Phase 3, Opp: IFCI Godown, Focal Point, Ludhiana \u2013 141 010", phone: "06164609209" },
  { city: "Mangalore", country: "India", region: "India", address: "Door No.3-28/44, 3rd Floor, ABCO Trade Centre, Sy. No.41/21c & 41/2c2, N.H 66, Kottara Chowki, Mangalore \u2013 575 006", phone: "06164609209" },
  { city: "Mumbai", country: "India", region: "India", address: "B-107, Citipoint Premises Co-op, Soc.Ltd, 1st Floor, J.B.Nagar, Andheri-Kurla Road, Andheri (East), Mumbai \u2013 400059" },
  { city: "Navi Mumbai", country: "India", region: "India", address: "Shelton Sapphire, 3rd Floor A 301, 302 Sector 15, Plot No 18/19, Sessions Court, Belapur, Navi Mumbai", phone: "+91 22 61818181" },
  { city: "New Delhi", country: "India", region: "India", address: "Unit No 004 GF, DLF Prime Tower, Okhla Phase 1, New Delhi \u2013 110020", phone: "+91 9821495512" },
  { city: "Pune", country: "India", region: "India", address: "Plot No-45 A/46, Amar Neptune Condominium, S.No-6/1/1, Baner Road, Room No-507, 5th Floor, Pune \u2013 411045" },
  { city: "Surat", country: "India", region: "India", address: "No.112, SNS Business Park, Vesu Cross Road, Vesu, Surat, Gujarat \u2013 395007" },
  { city: "Tirupur", country: "India", region: "India", address: "Room No 7, Sri Lakshmi Narasimha Complex, 1st Floor, Door No 46, Ram Nagar, 2nd Street, Tirupur \u2013 641 602" },
  { city: "Tuticorin", country: "India", region: "India", address: "Visaka Trade Center, No. 106F/4B, Palai Road West, Opp. V.O.C Petrol Bunk, Tuticorin \u2013 628 008", phone: "+91 461 2376 377 / 87" },
  { city: "Vadodara", country: "India", region: "India", address: "Office No. 706, K10 Grand, B/h Atlantis K10, Sarabhai Campus, Vadodara, Gujarat 390007" },
  { city: "Visakhapatnam", country: "India", region: "India", address: "Visakha Business Centre, D.No.46-19-5, Mandavari Street, Dondaparthy, Visakhapatnam 530016" },
  // International
  { city: "New Jersey", country: "USA", region: "USA", address: "375 Raritan Center Parkway, Suite C Edison, NJ 08837", phone: "908-464-3825", email: "reachus@dahnaylogix.com" },
  { city: "Ontario", country: "Canada", region: "Canada", address: "10 Milner Business Court, Suite 300, Scarborough, Ontario M1B 3C6", phone: "+1-289-813-1981", email: "reachus@dahnaylogix.com" },
  { city: "London", country: "United Kingdom", region: "United Kingdom", address: "Office 7, 321-323 High Road, Chadwell Heath, Essex, England, RM6 6AX", email: "reachus@dahnaylogix.com" },
  { city: "Abidjan", country: "Ivory Coast", region: "Ivory Coast", address: "Zone 4, Marcory, Abidjan, Ivory Coast", phone: "+2250700888943" },
  { city: "Kinshasa", country: "Congo", region: "Congo", address: "AV Kabasele Et Col Ebeya, IMM Botour 3E Etage Loc 5, C Gombe, Kinshasa DRC", email: "GH.admin@dahnaylogistics.com" },
  { city: "Accra", country: "Ghana", region: "Ghana", address: "EJ163 Abakaliki St, GK-0072-1417, Post Office Box 112 Nungua, Accra, Ghana", email: "GH.admin@dahnaylogistics.com" },
  { city: "Nairobi", country: "Kenya", region: "Kenya", address: "Office No. 3B-03, 3rd Floor, Maruti Heights Building, Opposite Hotel Tamrind Tree, Langata, Nairobi, Kenya", phone: "+254-781588082", email: "reachus@dahnaylogix.com" },
  { city: "Istanbul", country: "Turkey", region: "Turkey", address: "Idealtepe Mahallesi, Turgut Ozal Bulvari, Ideal Sitesi No: 127/A D:4 K:1, Maltepe, Istanbul, Turkey", phone: "905411855509", email: "reachus@dahnaylogix.com" },
  { city: "Dubai", country: "UAE", region: "UAE", address: "103, Shipping Tower, Al-Mina St, Dubai, UAE", phone: "+971 43510002" },
  { city: "Sharjah", country: "UAE", region: "UAE", address: "No.409, Al Mulla Tower, Al Ittihad St \u2013 Al Nadha, Sharjah, UAE", phone: "+971 65323791" },
  { city: "Ras Al Khaimah", country: "UAE", region: "UAE", address: "No.AC01, Al Hamriya Industrial Free Zone, Ras Al Kaima, UAE", phone: "+971 72075793" },
  { city: "Jebel Ali", country: "UAE", region: "UAE", address: "FZS1BE01, Jebel Ali Free Zone South, UAE", phone: "+971 42725787" },
  { city: "Colombo", country: "Sri Lanka", region: "Sri Lanka", address: "Level \u2013 1, Parkland \u2013 1, #33, Park Street, Colombo \u2013 02, Sri Lanka", phone: "94777734582", email: "reachus@dahnaylogix.com" },
  { city: "Dhaka", country: "Bangladesh", region: "Bangladesh", address: "House # 23 (Flat # B5), Road # 18, Block # A, Banani, Dhaka-1213, Bangladesh", phone: "+88-02-41082526" },
  { city: "Chittagong", country: "Bangladesh", region: "Bangladesh", address: "Shafi Bhabon (4th Floor), 1216/A SK. Mujib Road, Agrabad C/A, Chittagong, Bangladesh", phone: "+88-02333330981" },
  { city: "Port Klang", country: "Malaysia", region: "Malaysia", address: "Unit No. E-14-2, Jalan Multimedia, 7/AG City Park, I-City 40000 Shah Alam, Port Kelang Darul Ehsan, Malaysia", phone: "60102587697", email: "reachus@dahnaylogix.com" },
  { city: "Singapore", country: "Singapore", region: "Singapore", address: "Vision Exchange, 2 Venture Drive, #07-14, Singapore 608526", phone: "6380257651", email: "reachus@dahnaylogix.com" },
  { city: "Bangkok", country: "Thailand", region: "Thailand", address: "77/66 Sinn Sathorn Tower, Floor 17, Krung Thonburi Road, Khlong Ton Sai, Bangkok \u2013 10600, Thailand", phone: "+66870747598", email: "reachus@dahnaylogix.com" },
  { city: "Ho Chi Minh City", country: "Vietnam", region: "Vietnam", address: "4th Floor, Linco Building, 61A-63A Vo Van Tan Street, Vo Thi Sau Ward, District 3, Ho Chi Minh City, Vietnam", phone: "2836368620", email: "reachus@dahnaylogix.com" },
  { city: "Haiphong", country: "Vietnam", region: "Vietnam", address: "Room 121, No. 441 Da Nang Street, Dong Hai 1 Ward, Hai An District, Haiphong City, Vietnam" },
  { city: "Jakarta", country: "Indonesia", region: "Indonesia", address: "Wisma Mitra Sunter 16-03, Jl. Yos Sudarso Kav.89, Boulevard Mitra Sunter Block C-2, Jakarta Utara 14350", phone: "+6221 29461110", email: "reachus@dahnaylogix.com" },
  { city: "Surabaya", country: "Indonesia", region: "Indonesia", address: "Spazio Tower, Jl. May Yono Soewoyo, No. 35, 10th Floor, Pradahkalikemdai, Dukuh Pakis, Surabaya, Jawa Timur 60227" },
  { city: "Hong Kong", country: "Hong Kong", region: "Hong Kong", address: "1711, 17/F, Beverley Commercial Centre, 87-105 Chatham Road South, Tsim Sha Tsui, Kowloon, Hong Kong", phone: "+852 9471 6704", email: "reachus@dahnaylogix.com" },
];

function OfficeCard({ city, country, address, phone, email }) {
  return (
    <div className="office-card">
      <div className="office-card__header">
        <h4 className="office-card__city">{city}</h4>
        <p className="office-card__country">{country}</p>
      </div>
      <div className="office-card__body">
        <div className="office-card__row">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 16 7 16C7 16 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#EF4230"/>
          </svg>
          <p className="office-card__address">{address}</p>
        </div>
        {phone && (
          <div className="office-card__row">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.8 6.04C4.08 8.56 6.12 10.28 8.04 11.2L9.52 9.72C9.72 9.52 10 9.44 10.24 9.52C11 9.8 11.84 9.96 12.72 9.96C13.12 9.96 13.44 10.28 13.44 10.68V13.04C13.44 13.44 13.12 13.76 12.72 13.76C5.68 13.76 0 8.08 0 1.04C0 0.64 0.32 0.32 0.72 0.32H3.08C3.48 0.32 3.8 0.64 3.8 1.04C3.8 1.92 3.96 2.76 4.24 3.52C4.32 3.76 4.24 4.04 4.04 4.24L2.8 6.04Z" fill="#EF4230"/>
            </svg>
            <a href={`tel:${phone}`} className="office-card__phone">{phone}</a>
          </div>
        )}
        {email && (
          <div className="office-card__row">
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6 0H1.4C0.63 0 0.007 0.63 0.007 1.4L0 9.8C0 10.57 0.63 11.2 1.4 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM12.6 2.8L7 6.3L1.4 2.8V1.4L7 4.9L12.6 1.4V2.8Z" fill="#EF4230"/>
            </svg>
            <a href={`mailto:${email}`} className="office-card__email">{email}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = filterOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterOpen]);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const valueEls = statsRef.current?.querySelectorAll(".contact-stats__value");
      if (!valueEls?.length) return;

      ctx = gsap.context(() => {
        valueEls.forEach((el) => {
          const raw = el.dataset.value;
          const num = parseInt(raw, 10);
          const suffix = raw.replace(/[0-9]/g, "");
          const obj = { val: 0 };

          gsap.to(obj, {
            val: num,
            duration: 2,
            ease: "power1.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 98%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = obj.val + suffix;
            },
          });
        });
      }, statsRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  const regionFiltered = activeRegion === "All Regions"
    ? offices
    : offices.filter((o) => o.region === activeRegion);

  const filteredOffices = searchQuery
    ? regionFiltered.filter((o) => {
        const q = searchQuery.toLowerCase();
        return o.city.toLowerCase().includes(q)
          || o.country.toLowerCase().includes(q)
          || o.address.toLowerCase().includes(q);
      })
    : regionFiltered;

  const groupedOffices = filteredOffices.reduce((acc, office) => {
    if (!acc[office.region]) acc[office.region] = [];
    acc[office.region].push(office);
    return acc;
  }, {});

  return (
    <div className="page page--contact">
      <Banner
        title="Contact Us"
        desktopImage="/images/banners/banner-desktop-contact.png"
      />

      <ContactFormSection />

      <section className="contact-stats" ref={statsRef}>
        <div className="container contact-stats__inner">
          {stats.map((stat) => (
            <div key={stat.label} className="contact-stats__item">
              <p className="contact-stats__value" data-value={stat.value}>0{stat.value.replace(/[0-9]/g, "")}</p>
              <hr />
              <p className="contact-stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-offices">
        <div className="container">
          <div className="contact-offices__header">
            <h2 className="contact-offices__title">
              Office <span className="contact-offices__accent">locations</span>
            </h2>
            <div className="contact-offices__search">
              <span className="contact-offices__search-label">View location:</span>
              <div className="contact-offices__search-input-wrapper">
                <svg className="contact-offices__search-icon" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="#D3D3D3"/>
                </svg>
                <input
                  type="text"
                  className="contact-offices__search-input"
                  placeholder="Search location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className="contact-offices__filter-trigger"
            onClick={() => setFilterOpen(true)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2h14M4 8h8M6 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Filter
          </button>

          {filterOpen && (
            <div className="contact-offices__filter-overlay" onClick={() => setFilterOpen(false)}>
              <div className="contact-offices__filter-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="contact-offices__filter-sheet-header">
                  <h3 className="contact-offices__filter-sheet-title">Filter</h3>
                  <button className="contact-offices__filter-sheet-close" onClick={() => setFilterOpen(false)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div className="contact-offices__filter-sheet-search">
                  <svg className="contact-offices__search-icon" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="#D3D3D3"/>
                  </svg>
                  <input
                    type="text"
                    className="contact-offices__search-input"
                    placeholder="Search location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="contact-offices__filter-sheet-list">
                  {regions.map((region) => (
                    <button
                      key={region}
                      className={`contact-offices__filter-sheet-item${activeRegion === region ? " contact-offices__filter-sheet-item--active" : ""}`}
                      onClick={() => {
                        setActiveRegion(region);
                        setFilterOpen(false);
                      }}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="contact-offices__filters">
            {regions.map((region) => (
              <button
                key={region}
                className={`contact-offices__filter${activeRegion === region ? " contact-offices__filter--active" : ""}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="contact-offices__regions">
            {Object.keys(groupedOffices).length === 0 ? (
              <div className="contact-offices__no-results">
                <p>Sorry, no location &quot;{searchQuery || activeRegion}&quot; found for your search.</p>
              </div>
            ) : (
              Object.entries(groupedOffices).map(([region, regionOffices]) => (
                <div key={region} className="contact-offices__region">
                  <h3 className="contact-offices__region-title">{region}</h3>
                  <div className="contact-offices__grid">
                    {regionOffices.map((office) => (
                      <OfficeCard key={office.city} {...office} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
