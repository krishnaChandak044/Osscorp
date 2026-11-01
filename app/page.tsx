"use client";
import { useEffect, useRef, useState } from "react";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
    >
        <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
);
function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const finalValue = `${value}${suffix}`;
        node.textContent = finalValue;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let frame = 0;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                const start = performance.now();
                const duration = 1450;
                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 4);
                    node.textContent = `${Math.round(value * eased)}${suffix}`;
                    if (progress < 1) frame = requestAnimationFrame(tick);
                };
                node.textContent = `0${suffix}`;
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.75 },
        );
        observer.observe(node);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value, suffix]);
    return (
        <strong
            ref={ref}
            data-count={`${value}${suffix}`}
            aria-label={`${value}${suffix}`}
        >
            {value}
            {suffix}
        </strong>
    );
}
const services = [
    {
        id: "offshore",
        title: "Offshore Services",
        line: "Mission-critical installations in extreme marine environments.",
        description:
            "OSSCORP specializes in offshore platform services including security systems, telecommunications infrastructure, and technical installations. We operate in challenging marine environments with H₂S gas exposure and extreme weather conditions. Our team is ISO-certified and equipped with specialized equipment for safe, reliable offshore operations.",
        tags: [
            "Offshore operations",
            "Technical deployments",
            "Project management",
        ],
        facts: [
            { label: "DEPTH", value: "Extreme Ready" },
            { label: "SAFETY", value: "ISO Certified" },
        ],
        image: "/hero_images/osscorp_hero_1.webp",
    },
    {
        id: "security",
        title: "Security Surveillance",
        line: "24/7 monitoring and real-time threat detection for critical infrastructure.",
        description:
            "OSSCORP provides comprehensive security surveillance solutions including CCTV system design, installation, and monitoring. We deploy cutting-edge technology in high-security environments including offshore platforms, industrial facilities, and critical infrastructure.",
        tags: ["Surveillance solutions", "Site security", "Systems integration"],
        facts: [
            { label: "COVERAGE", value: "24/7 Monitoring" },
            { label: "RESPONSE", value: "Down-Time Management" },
        ],
        image: null,
    },
    {
        id: "telecommunications",
        title: "Telecommunications Services",
        line: "Global communication infrastructure for seamless connectivity.",
        description:
            "OSSCORP delivers end-to-end telecommunications solutions including network design, fiber optic installation, tower infrastructure, and system integration. Our expertise spans terrestrial networks, satellite communications, and hybrid systems. We ensure 99.9% uptime with redundant systems and professional maintenance across all deployment environments.",
        tags: [
            "Communications infrastructure",
            "Network connectivity",
            "Technical support",
        ],
        facts: [
            { label: "NETWORK", value: "Global Reach" },
            { label: "UPTIME", value: "99.9%" },
        ],
        image: null,
    },
    {
        id: "solar",
        title: "Solar Power Solutions",
        line: "Large-scale solar installations, including our flagship 2+ MW offshore buoy project.",
        description:
            "OSSCORP provides comprehensive solar power solutions including system design, equipment procurement, installation, and performance monitoring. Our flagship achievement is a landmark 2+ MW solar installation on offshore buoys with H₂S gas exposure—one of the most challenging renewable energy projects in India. We have successfully completed multiple large-scale solar installations for industrial and offshore clients. Our solar solutions include grid-connected systems, off-grid installations, hybrid systems, and extreme environment deployments tailored to specific client requirements.",
        tags: ["Solar power", "Energy infrastructure", "Technical solutions"],
        facts: [
            { label: "SCALE", value: "2+ MW" },
            { label: "EFFICIENCY", value: "Industry Best" },
        ],
        image: "/hero_images/osscorp_hero_2.webp",
    },
    {
        id: "renewable",
        title: "Renewable Energy Solutions",
        line: "Comprehensive wind, hydro, solar and hybrid energy systems.",
        description:
            "OSSCORP’s renewable energy division provides integrated solutions combining wind turbines, hydroelectric systems, solar installations, and hybrid energy systems. We conduct comprehensive feasibility studies, system design, equipment procurement, installation, and ongoing maintenance for both onshore and offshore applications. Our expertise spans utility-scale projects, industrial installations, and remote location deployments. We optimize energy generation efficiency and ensure seamless integration with existing infrastructure.",
        tags: ["Clean energy", "Renewable infrastructure", "Project execution"],
        facts: [
            { label: "INNOVATION", value: "Hybrid Systems" },
            { label: "RELIABILITY", value: "25+ Years" },
        ],
        image: "/hero_images/osscorp_hero_3.webp",
    },
];
const caseStudies = [
    {
        id: "ongc-video-conferencing",
        brand: "ONGC",
        tag: "TELECOMMUNICATIONS · 1997–1998",
        title: "Video conferencing for ONGC onshore and offshore teams",
        client: "Delivered for Neutron",
        scope: "Mumbai, MHN and BPA locations",
        summary:
            "Falcon Communications established a video conferencing facility linking ONGC’s Vasundhara Bhavan in Bandra with offshore locations at Mumbai High North and Bassein and Satellite. The project was described as ONGC’s first video conferencing project in India.",
        metrics: [
            { value: "1997", label: "Year awarded" },
            { value: "1998", label: "Commissioned" },
            { value: "Onshore + offshore", label: "Connected locations" },
        ],
    },
    {
        id: "ongc-offshore-solar",
        brand: "ONGC",
        tag: "OFFSHORE SOLAR · 2006",
        title: "Solar power across ONGC offshore platforms",
        client: "Project partner: Amara Raja Batteries",
        scope: "Solar power for communications and data systems",
        summary:
            "Falcon Communications executed the offshore solar project on behalf of Amara Raja Batteries across unmanned and manned ONGC platforms. The project supported communication radios and radio-based data transmission integrated with the RPMC system and SCADA.",
        metrics: [
            { value: "104", label: "Platforms covered" },
            { value: "97", label: "Unmanned platforms" },
            { value: "7", label: "Manned platforms" },
        ],
    },
    {
        id: "barc-perimeter-security",
        brand: "BARC",
        tag: "SECURITY · CRITICAL FACILITY",
        title: "Electric and vibration fence for BARC",
        client: "Principal contractor: ECIL",
        scope: "Perimeter security and intrusion detection",
        summary:
            "Falcon Communications executed the project on behalf of Electronics Corporation of India Limited for BARC in Mumbai. The perimeter system was intended to strengthen boundary protection and address unauthorized access and animal intrusion concerns. It was completed within the required timeframe.",
        metrics: [
            { value: "BARC", label: "End client" },
            { value: "ECIL", label: "Principal contractor" },
            { value: "On time", label: "Project completion" },
        ],
    },
    {
        id: "heera-satellite-antenna",
        brand: "ONGC",
        tag: "SATELLITE COMMUNICATIONS · OFFSHORE",
        title: "8.6-metre satellite antenna at HEERA platform",
        client: "Installation partner: Supreme Telecom",
        scope: "Removal, installation and commissioning",
        summary:
            "Falcon Communications removed the existing antenna and installed and commissioned a new 8.6-metre satellite antenna on ONGC’s HEERA offshore platform, completing the assignment within the required timeframe.",
        metrics: [
            { value: "8.6 m", label: "Antenna size" },
            { value: "HEERA", label: "Offshore platform" },
            { value: "On time", label: "Project completion" },
        ],
    },
    {
        id: "playwin-vsat-support",
        brand: "PLAY WIN",
        tag: "TELECOMMUNICATIONS · PAN INDIA",
        title: "V-SAT installation and support across India",
        client: "Nationwide deployment",
        scope: "Installation, repair and link monitoring",
        summary:
            "Falcon Communications supported V-SAT links across India, including installation at 2,000 sites and three years of maintenance. The work included IDU and ODU repair, state-level technical support, and round-the-clock link observation.",
        metrics: [
            { value: "2,000", label: "Sites across India" },
            { value: "3 years", label: "Maintenance period" },
            { value: "24 hours", label: "Link observation" },
        ],
    },
    {
        id: "ongc-offshore-cctv",
        brand: "ONGC",
        tag: "SECURITY SURVEILLANCE · OFFSHORE",
        title: "CCTV surveillance across ONGC offshore platforms",
        client: "Work orders through Technocrats",
        scope: "Multi-location installation and commissioning",
        summary:
            "Falcon Communications and OSSCORP executed multiple CCTV work orders entrusted by Technocrats for ONGC offshore platforms. The assignments involved offshore coordination, technical manpower, surveillance installation and timely commissioning.",
        metrics: [
            { value: "ONGC", label: "End client" },
            { value: "Multiple", label: "Offshore work orders" },
            { value: "On time", label: "Commissioning" },
        ],
    },
    {
        id: "sikkidri-canal-top-solar",
        brand: "JREDA",
        tag: "RENEWABLE ENERGY · JHARKHAND",
        title: "2 MW canal-top solar project at Sikkidri",
        client: "Project partner: Naviya Tech",
        scope: "Supply, installation and commissioning",
        summary:
            "OSSCORP executed a 2 MW solar power system on a 25-metre-wide canal-top structure at Sikkidri village. The project required field coordination in a rural and tribal location with significant logistical and local security challenges.",
        metrics: [
            { value: "2 MW", label: "Solar capacity" },
            { value: "25 m", label: "Canal structure width" },
            { value: "Sikkidri", label: "Project location" },
        ],
    },
];
const brands = [
    ["Oil_and_Natural_Gas_Corporation-Logo.wine.png", "ONGC"],
    ["Bhabha_Atomic_Research_Centre_Logo.png", "Bhabha Atomic Research Centre"],
    ["ECIL_Logo.svg.webp", "ECIL"],
    ["Central_Electronics_Limited.svg", "Central Electronics Limited"],
    ["NELCO.NS_BIG-7b1abcbd.png", "Nelco"],
    ["Emerson_Electric-Logo.wine.png", "Emerson"],
    ["Johnson_Controls.svg.webp", "Johnson Controls"],
    ["300px-Voltas_Logo.svg.png", "Voltas"],
    ["Hughes_Network_Systems-Logo.wine.png", "Hughes Communications India"],
    ["Amara_raja_group.png", "Amara Raja"],
    ["elcome_logo.png", "Elcome"],
    ["naviyalogo.jpg", "Naviya Technologies"],
    ["cropped-cropped-small-round-e1617433026829-300x300.png", "Technocrats"],
    ["images.png", "Fisher-Rosemount"],
    ["Tata_Power.svg", "Tata Power"],
    ["Siemens.svg", "Siemens"],
    ["REIL_logo.jpg", "REIL"],
];
const servicePhotos: Record<string, { file: string; caption: string }[]> = {
    offshore: [
        "offshore_ser_2|Offshore platforms",
        "offshore_ser_india_2|Indian offshore platform and support vessel",
        "offshore_ser_3|Marine surveillance systems",
        "offshore_ser_india_4|Indian offshore field installation team",
        "offshore_ser_5|Offshore infrastructure",
    ].map((item) => {
        const [file, caption] = item.split("|");
        return { file, caption };
    }),
    security: [
        "security_surveillance_user_1|CCTV surveillance systems",
        "security_survi_3|CCTV infrastructure",
        "security_surveillance_user_3|Security operations and monitoring",
        "security_survi_5|Offshore security systems",
        "security_surveillance_user_5|On-site CCTV installation",
    ].map((item) => {
        const [file, caption] = item.split("|");
        return { file, caption };
    }),
    telecommunications: [
        "tele_ser_2|Communications infrastructure",
        "tele_ser_1|Satellite communications",
        "tele_ser_user_3|Fibre optic installation",
        "tele_ser_4|Network integration",
        "tele_ser_5|Tower infrastructure",
    ].map((item) => {
        const [file, caption] = item.split("|");
        return { file, caption };
    }),
    solar: [
        "solar_power_3|Offshore solar applications",
        "solar_power_1|Solar power generation",
        "solar_power_2|Industrial rooftop systems",
        "solar_power_user_4|Solar panel installation and maintenance",
        "solar_power_5|Energy storage systems",
    ].map((item) => {
        const [file, caption] = item.split("|");
        return { file, caption };
    }),
    renewable: [
        "renewable-energy-3|Integrated renewable systems",
        "renewable-energy-1|Wind energy",
        "renewable-energy-2|Hydroelectric infrastructure",
        "renewable-energy-4|Hybrid energy systems",
        "renewable-energy-5|Renewable generation",
    ].map((item) => {
        const [file, caption] = item.split("|");
        return { file, caption };
    }),
};
function ServiceImage({
    service,
    slot,
}: {
    service: (typeof services)[number];
    slot: number;
}) {
    return (
        <>
            {servicePhotos[service.id].map((photo, i) => (
                <img
                    key={photo.file}
                    className={slot === i ? "gallery-photo is-active" : "gallery-photo"}
                    src={`/services_quality_images/${photo.file}.webp`}
                    alt={slot === i ? photo.caption : ""}
                    aria-hidden={slot !== i}
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </>
    );
}
function ServicePanel({
    service,
    index,
    onDiscuss,
}: {
    service: (typeof services)[number];
    index: number;
    onDiscuss: (service: string) => void;
}) {
    const [slot, setSlot] = useState(0);
    const [paused, setPaused] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (paused) return;
        const timer = window.setInterval(() => {
            const gallery = galleryRef.current;
            if (
                !gallery ||
                document.visibilityState !== "visible" ||
                motion.matches ||
                gallery.contains(document.activeElement)
            )
                return;
            const bounds = gallery.getBoundingClientRect();
            if (bounds.bottom > 0 && bounds.top < window.innerHeight)
                setSlot((current) => (current + 1) % 5);
        }, 1500);
        return () => window.clearInterval(timer);
    }, [paused]);
    const prev = () => setSlot((x) => (x + 4) % 5);
    const next = () => setSlot((x) => (x + 1) % 5);
    return (
        <article
            className={`service-panel service-panel-${service.id}`}
            id={`expertise-${service.id}`}
            aria-labelledby={`service-${service.id}`}
        >
            <div className="service-copy">
                <div className="eyebrow">SERVICE 0{index + 1} / 05</div>
                <h3 id={`service-${service.id}`} className="service-title">
                    {service.title}
                </h3>
                <h4>{service.line}</h4>
                <p>{service.description}</p>
                <div className="service-facts">
                    {service.facts.map((fact) => (
                        <div key={fact.label}>
                            <span>{fact.label}</span>
                            <strong>{fact.value}</strong>
                        </div>
                    ))}
                </div>
                <a
                    className="text-link"
                    href="#contact"
                    onClick={() => onDiscuss(service.title)}
                >
                    Discuss your requirements <Arrow />
                </a>
            </div>
            <div className="service-visual" ref={galleryRef}>
                <div className="service-image">
                    <ServiceImage service={service} slot={slot} />
                    <div className="image-caption">
                        <span>{servicePhotos[service.id][slot].caption}</span>
                        <span>{slot + 1} / 5</span>
                    </div>
                    <button
                        className="gallery-arrow gallery-prev"
                        aria-label={`Previous ${service.title} photo`}
                        onClick={prev}
                    >
                        ‹
                    </button>
                    <button
                        className="gallery-arrow gallery-next"
                        aria-label={`Next ${service.title} photo`}
                        onClick={next}
                    >
                        ›
                    </button>
                </div>
                <div className="gallery-toolbar">
                    <div
                        className="gallery-controls"
                        aria-label={`${service.title} photo gallery`}
                    >
                        {Array.from({ length: 5 }, (_, i) => (
                            <button
                                aria-label={`View ${service.title} photo ${i + 1}`}
                                aria-pressed={slot === i}
                                className={slot === i ? "active" : ""}
                                key={i}
                                onClick={() => setSlot(i)}
                            >
                                <span />
                            </button>
                        ))}
                    </div>
                    <button
                        className="gallery-playback"
                        type="button"
                        onClick={() => setPaused((value) => !value)}
                        aria-label={`${paused ? "Resume" : "Pause"} ${service.title} slideshow`}
                        aria-pressed={paused}
                    >
                        {paused ? "Resume slideshow" : "Pause slideshow"}
                    </button>
                </div>
            </div>
        </article>
    );
}
export default function Home() {
    const caseTrackRef = useRef<HTMLDivElement>(null);
    const [activeCase, setActiveCase] = useState(0);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [hero, setHero] = useState(0);
    const [heroPaused, setHeroPaused] = useState(false);
    const [menu, setMenu] = useState(false);
    const [inquiryService, setInquiryService] = useState("");
    const [inquiryState, setInquiryState] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [inquiryMessage, setInquiryMessage] = useState("");
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            setScrolled(window.scrollY > 24);
            const sections = [
                "about",
                "clients",
                "expertise",
                "leadership",
                "case-studies",
                "contact",
            ];
            let current = "";
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top <= 180) current = id;
            }
            setActiveSection(current);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);
    useEffect(() => {
        const close = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenu(false);
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);
    useEffect(() => {
        if (
            heroPaused ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;
        const interval = window.setInterval(() => {
            if (document.visibilityState === "visible")
                setHero((current) => (current + 1) % 3);
        }, 6500);
        return () => window.clearInterval(interval);
    }, [heroPaused]);
    useEffect(() => {
        document.documentElement.classList.add("motion-ready");
        const items = document.querySelectorAll<HTMLElement>(
            ".stats>div,.intro-aside,.intro>div:last-child,.clients .section-top,.brand-marquee,.expertise>.section-top,.service-panel,.field-content,.approach>.section-top,.approach-grid article,.leadership .section-top,.leadership-grid article,.contact-info,.inquiry-form",
        );
        if (!("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("is-visible"));
            return;
        }
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
        );
        items.forEach((item) => {
            item.classList.add("reveal");
            observer.observe(item);
        });
        return () => observer.disconnect();
    }, []);
    async function prepareInquiry(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const fields = new FormData(form);
        fields.append("access_key", "872a2eac-f9dc-4ca3-8fd2-8638d5eb968d");
        fields.append("subject", `Osscorp project enquiry — ${String(fields.get("service") || "General")}`);
        fields.append("from_name", "OSSCORP Website");
        setInquiryState("sending");
        setInquiryMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: fields,
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || "We couldn’t send your enquiry. Please try again.");
            }

            form.reset();
            setInquiryService("");
            setInquiryState("sent");
            setInquiryMessage("Thank you. Your enquiry has been sent to OSSCORP.");
        } catch (error) {
            setInquiryState("error");
            setInquiryMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    }
    return (
        <>
            <a className="skip" href="#main">
                Skip to content
            </a>
            <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
                <a href="#" className="brand" aria-label="Osscorp home">
                    <img src="/logo/image.png" alt="Osscorp" />
                    <span>
                        OSSCORP<small>ONSHORE & OFFSHORE TECHNICAL SERVICES</small>
                    </span>
                </a>
                <nav
                    id="main-navigation"
                    className={menu ? "open" : ""}
                    aria-label="Main navigation"
                >
                    {[
                        ["About us", "about"],
                        ["Our expertise", "expertise"],
                        ["Our clients", "clients"],
                        ["Leadership", "leadership"],
                        ["Case studies", "case-studies"],
                        ["Let’s talk", "contact"],
                    ].map(([label, id]) => (
                        <a
                            key={id}
                            className={`${id === "contact" ? "mobile-contact " : ""}${activeSection === id ? "is-current" : ""}`}
                            aria-current={activeSection === id ? "location" : undefined}
                            href={"#" + id}
                            onClick={() => setMenu(false)}
                        >
                            {label}
                            {id === "contact" && <Arrow diagonal />}
                        </a>
                    ))}
                </nav>
                <a className="nav-cta" href="#contact">
                    Let’s talk <Arrow diagonal />
                </a>
                <button
                    className="menu"
                    aria-label={menu ? "Close navigation" : "Open navigation"}
                    aria-expanded={menu}
                    aria-controls="main-navigation"
                    onClick={() => setMenu(!menu)}
                >
                    <span>{menu ? "Close" : "Menu"}</span>
                    <span
                        className={menu ? "menu-lines is-open" : "menu-lines"}
                        aria-hidden="true"
                    >
                        <i />
                        <i />
                    </span>
                </button>
            </header>
            <main id="main">
                <section
                    className="hero"
                    onMouseEnter={() => setHeroPaused(true)}
                    onMouseLeave={() => setHeroPaused(false)}
                    onFocusCapture={() => setHeroPaused(true)}
                    onBlurCapture={(event) => {
                        if (
                            !event.currentTarget.contains(event.relatedTarget as Node | null)
                        )
                            setHeroPaused(false);
                    }}
                >
                    {[
                        "Offshore platform illuminated at sunset",
                        "Solar power infrastructure",
                        "Wind turbines in a renewable energy landscape",
                    ].map((alt, i) => (
                        <img
                            key={i}
                            className={hero === i ? "hero-photo is-active" : "hero-photo"}
                            src={`/hero_images/osscorp_hero_${i + 1}.webp`}
                            alt={hero === i ? alt : ""}
                            aria-hidden={hero !== i}
                            fetchPriority={i === 0 ? "high" : "auto"}
                        />
                    ))}
                    <div className="hero-shade" />
                    <div className="hero-content">
                        <div className="eyebrow light">
                            <span /> ON LAND. AT SEA. ALWAYS DEPENDABLE.
                        </div>
                        <h1>
                            Experience runs deep.
                            <br />
                            Trust goes further.
                        </h1>
                        <p>
                            30+ years of technical excellence.
                            <br />
                            Onshore & offshore expertise you can rely on.
                        </p>
                        <a href="#expertise" className="button primary">
                            Explore our expertise <Arrow />
                        </a>
                    </div>
                    <div
                        className="completion-badge"
                        aria-label="97 percent project completion rate"
                    >
                        <strong>
                            97<span>%</span>
                        </strong>
                        <div>
                            <span>PROJECT COMPLETION</span>
                            <small>RATE</small>
                        </div>
                    </div>
                    <div className="hero-bottom">
                        <span>ENGINEERING CONFIDENCE, ACROSS EVERY HORIZON.</span>
                        <a href="#about">
                            Discover Osscorp <span className="down">↓</span>
                        </a>
                    </div>
                    <div className="hero-index">
                        <span>0{hero + 1} / 03</span>
                        <div className="hero-slides">
                            {[0, 1, 2].map((i) => (
                                <button
                                    key={i}
                                    aria-label={`Show hero image ${i + 1}`}
                                    aria-pressed={hero === i}
                                    onClick={() => setHero(i)}
                                    className={hero === i ? "active" : ""}
                                />
                            ))}
                        </div>
                        <small>
                            {["OFFSHORE EXPERTISE", "SOLAR POWER", "RENEWABLE ENERGY"][hero]}
                        </small>
                    </div>
                </section>
                <section className="stats" aria-label="Osscorp in numbers">
                    {[
                        [30, "+", "Years of experience"],
                        [97, "%", "Project completion"],
                        [100, "+", "Expert employees"],
                        [25, "+", "Years with ONGC"],
                    ].map(([value, suffix, label]) => (
                        <div key={label as string}>
                            <CountUp value={value as number} suffix={suffix as string} />
                            <span>{label}</span>
                        </div>
                    ))}
                </section>
                <section className="intro section" id="about">
                    <aside className="intro-aside">
                        <div className="eyebrow">01 — THE OSSCORP STANDARD</div>
                        <div className="field-record">
                            <div className="field-record-top">
                                <span>FIELD RECORD</span>
                                <span>NO. 001</span>
                            </div>
                            <div className="field-record-number">
                                30<span>+</span>
                            </div>
                            <strong>
                                YEARS OF
                                <br />
                                TECHNICAL EXCELLENCE
                            </strong>
                            <div className="field-record-rule" />
                            <div className="field-record-foot">
                                <span>ONSHORE</span>
                                <i />
                                <span>OFFSHORE</span>
                            </div>
                            <svg
                                className="field-record-trace"
                                viewBox="0 0 220 42"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0 30h44l10-13 12 22 15-32 13 23h44l12-13 12 13h58"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path d="M0 41h220" stroke="currentColor" strokeOpacity=".25" />
                            </svg>
                        </div>
                    </aside>
                    <div>
                        <h2>
                            Some environments demand
                            <br />
                            more than expertise.
                            <br />
                            <span>They demand experience.</span>
                        </h2>
                        <div className="intro-bottom">
                            <p>
                                For over three decades, Osscorp has brought technical capability
                                and hands-on understanding to onshore and offshore operations.
                                We work where reliability is essential and every detail carries
                                weight.
                            </p>
                            <p>
                                For mission-critical projects in extreme environments, OSSCORP
                                delivers integrated technical services with zero failures. From
                                offshore installations to high-risk solar deployments, we
                                complete every project with excellence.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="clients" className="clients section">
                    <div className="section-top">
                        <div>
                            <div className="eyebrow">TRUSTED RELATIONSHIPS</div>
                            <h2>Built on trusted relationships.</h2>
                            <p>
                                Working alongside leaders across energy, industry and
                                technology.
                            </p>
                        </div>
                    </div>
                    <div
                        className="brand-marquee"
                        aria-label="Osscorp client organizations"
                    >
                        <div className="brand-track">
                            {[0, 1].map((copy) => (
                                <div
                                    className="brand-group"
                                    key={copy}
                                    aria-hidden={copy === 1}
                                >
                                    {brands.map(([file, name]) => (
                                        <div className="brand-tile" key={file}>
                                            <img
                                                src={"/brands/" + file}
                                                alt={copy === 0 ? name : ""}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    className="expertise section"
                    id="expertise"
                    aria-labelledby="expertise-title"
                >
                    <div className="section-top">
                        <div className="expertise-intro">
                            <div className="eyebrow">02 — OUR EXPERTISE</div>
                            <h2 id="expertise-title">
                                Different disciplines.
                                <br />
                                One dependable partner.
                            </h2>
                            <p>
                                From offshore installations and security systems to
                                communications and energy infrastructure, our teams deliver
                                technical work where reliability matters.
                            </p>
                        </div>
                        <aside
                            className="delivery-note"
                            aria-label="How Osscorp delivers technical projects"
                        >
                            <div className="delivery-note-head">
                                <span>FROM REQUIREMENT TO RELIABLE OPERATION</span>
                                <span>01—03</span>
                            </div>
                            <div className="delivery-step">
                                <span>01</span>
                                <div>
                                    <strong>Understand the site</strong>
                                    <small>Scope, conditions and system requirements.</small>
                                </div>
                            </div>
                            <div className="delivery-step">
                                <span>02</span>
                                <div>
                                    <strong>Deliver in the field</strong>
                                    <small>Planned technical installation and integration.</small>
                                </div>
                            </div>
                            <div className="delivery-step">
                                <span>03</span>
                                <div>
                                    <strong>Support performance</strong>
                                    <small>Testing, maintenance and ongoing support.</small>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <nav className="expertise-index" aria-label="Explore services">
                        {services.map((service, index) => (
                            <a key={service.id} href={`#expertise-${service.id}`}>
                                <span>0{index + 1}</span>
                                {service.title}
                                <Arrow diagonal />
                            </a>
                        ))}
                    </nav>
                    <div className="services-list">
                        {services.map((service, index) => (
                            <ServicePanel
                                key={service.id}
                                service={service}
                                index={index}
                                onDiscuss={setInquiryService}
                            />
                        ))}
                    </div>
                </section>
                <section className="field">
                    <img
                        src="/hero_images/osscorp_hero_3.webp"
                        alt="Wind turbines across a renewable energy landscape"
                        loading="lazy"
                    />
                    <div className="field-overlay" />
                    <div className="field-content">
                        <div className="eyebrow light">
                            EXPERIENCE THAT MOVES WITH THE WORLD
                        </div>
                        <h2>
                            Rooted in industry.
                            <br />
                            Ready for what’s next.
                        </h2>
                        <p>
                            The discipline of offshore operations.
                            <br />
                            The ambition of a cleaner energy future.
                        </p>
                        <a className="button outline" href="#expertise">
                            Discover renewable energy <Arrow />
                        </a>
                    </div>
                </section>
                <section className="approach section">
                    <div className="section-top">
                        <div className="approach-heading">
                            <div className="eyebrow">03 — HOW WE THINK</div>
                            <h2>
                                Confidence is built.
                                <br />
                                At every stage.
                            </h2>
                            <p>
                                A clear understanding of the challenge.
                                <br />A shared commitment to the outcome.
                            </p>
                        </div>
                        <div
                            className="approach-range"
                            aria-label="Osscorp works across onshore, offshore and remote environments"
                        >
                            <div className="range-head">
                                <span>OPERATING ENVIRONMENTS</span>
                                <span>ON LAND / AT SEA</span>
                            </div>
                            <div className="range-items">
                                <div className="range-item">
                                    <div className="range-icon">
                                        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                                            <path
                                                d="M7 40V20l12-8v8l11-7v27M30 23h11v17M4 40h40M12 25h3m-3 6h3m6-6h3m-3 6h3m6 1h5m-5 5h5"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 40V17m0 0 5 3m-5-3-5 3"
                                                stroke="#e56a55"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span>ONSHORE</span>
                                    <small>Industrial &amp; critical sites</small>
                                </div>
                                <div className="range-item">
                                    <div className="range-icon">
                                        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                                            <path
                                                d="M11 34V14h26v20M16 14V8h16v6M17 20h14m-14 6h14m-10 8 2 7m6-7-2 7M5 39c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0 5-2 8 0"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M24 8V4m0 0-3 3m3-3 3 3"
                                                stroke="#e56a55"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span>OFFSHORE</span>
                                    <small>Platforms &amp; marine work</small>
                                </div>
                                <div className="range-item">
                                    <div className="range-icon">
                                        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                                            <path
                                                d="M8 22a23 23 0 0 1 32 0M13 27a16 16 0 0 1 22 0m-17 5a8 8 0 0 1 12 0M24 36v1"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M24 37v6m-4 0h8"
                                                stroke="#e56a55"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                            />
                                            <circle cx="24" cy="22" r="2" fill="#e56a55" />
                                        </svg>
                                    </div>
                                    <span>REMOTE</span>
                                    <small>Hard-to-reach deployments</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="approach-grid">
                        {[
                            [
                                "01",
                                "Understand the environment",
                                "Every deployment starts with the realities on the ground—or at sea. The conditions, the constraints and the people who depend on the outcome.",
                            ],
                            [
                                "02",
                                "Bring the right expertise",
                                "Experienced teams and focused project leadership, aligned around the technical demands of your operation.",
                            ],
                            [
                                "03",
                                "Follow through",
                                "An ownership mindset from planning through execution. Because a project is only as strong as the commitment behind it.",
                            ],
                        ].map(([n, t, p]) => (
                            <article key={n}>
                                <span className="step">{n}</span>
                                <h3>{t}</h3>
                                <p>{p}</p>
                            </article>
                        ))}
                    </div>
                </section>
                <section className="leadership section" id="leadership">
                    <div className="section-top">
                        <div className="leadership-intro">
                            <div className="eyebrow">04 — LEADERSHIP &amp; FIELD PERSPECTIVE</div>
                            <h2>
                                Experience on the deck.
                                <br />
                                Accountability at the core.
                            </h2>
                            <p>
                                Our leadership is composed of top-class veterans in the offshore field having multiple years of hands-on experience directly on offshore platforms, marine installations, and mission-critical energy assets.
                            </p>
                        </div>
                        <div className="leadership-context">
                            <div className="leadership-record">
                                <div className="leadership-record-top">
                                    <span>FIELD RECORD</span>
                                    <span className="record-status">
                                        <span className="record-pulse-dot" />
                                        NO. 004
                                    </span>
                                </div>
                                <div className="leadership-record-reality">
                                    <div className="reality-tag">THE REALITY OFFSHORE</div>
                                    <p className="reality-text">
                                        Theoretical desk management fails when equipment trips miles out at sea. Hostile weather, corrosive salt air, and volatile H₂S gas demand leaders who have physically lived the deck realities and can diagnose live systems without halting platform output.
                                    </p>
                                </div>
                                <div className="leadership-record-rule" />
                                <div className="leadership-record-metrics">
                                    <div className="record-metric-item">
                                        <div className="metric-val">
                                            30<span>+</span>
                                        </div>
                                        <div className="metric-lbl">YEARS ROOTS</div>
                                    </div>
                                    <div className="record-metric-sep" />
                                    <div className="record-metric-item">
                                        <div className="metric-val">
                                            25<span>+</span>
                                        </div>
                                        <div className="metric-lbl">YEARS WITH ONGC</div>
                                    </div>
                                    <div className="record-metric-sep" />
                                    <div className="record-metric-item">
                                        <div className="metric-val">
                                            97<span>%</span>
                                        </div>
                                        <div className="metric-lbl">COMPLETION</div>
                                    </div>
                                </div>
                                <div className="leadership-record-foot">
                                    <span>DECK-LEVEL CAPABILITY</span>
                                    <i />
                                    <span>ZERO DOWNTIME TOLERANCE</span>
                                </div>
                                <svg
                                    className="leadership-record-trace"
                                    viewBox="0 0 220 42"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M0 30h44l10-13 12 22 15-32 13 23h44l12-13 12 13h58"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path d="M0 41h220" stroke="currentColor" strokeOpacity=".25" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="leadership-grid">
                        <article>
                            <div className="leadership-top-row">
                                <span className="step">01</span>
                                <div className="leadership-icon" aria-hidden="true">
                                    <svg viewBox="0 0 40 40" fill="none">
                                        <path
                                            d="M8 32h24M12 32l6-20h4l6 20M14 24h12M16 18h8M20 6v6"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="20" cy="5" r="2" fill="#e56a55" />
                                        <path
                                            d="M5 36c2.5-1.5 4.5-1.5 7 0s4.5 1.5 7 0 4.5-1.5 7 0 4.5 1.5 7 0"
                                            stroke="#e56a55"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3>Hands-on Platform Veteranship</h3>
                            <p>
                                Rather than directing from distant corporate offices, our leaders have spent decades managing installations on active offshore platforms. They understand every conduit, sensor, and safety protocol under actual operational conditions.
                            </p>
                        </article>
                        <article>
                            <div className="leadership-top-row">
                                <span className="step">02</span>
                                <div className="leadership-icon" aria-hidden="true">
                                    <svg viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="22" r="14" stroke="currentColor" strokeWidth="1.6" />
                                        <path
                                            d="M20 14v8l5 4"
                                            stroke="#e56a55"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M17 4h6M20 4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                        <path
                                            d="M7 22h4l2-4 3 8 2-4h3"
                                            stroke="#e56a55"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3>Critical Downtime Management</h3>
                            <p>
                                An offshore outage costs millions of dollars per day. Our leadership knows the immediate failure modes of CCTV, telecom, and solar systems, resolving faults rapidly on-site to keep operations running and prevent catastrophic downtime.
                            </p>
                        </article>
                        <article>
                            <div className="leadership-top-row">
                                <span className="step">03</span>
                                <div className="leadership-icon" aria-hidden="true">
                                    <svg viewBox="0 0 40 40" fill="none">
                                        <path
                                            d="M20 5l14 5.5v9.5c0 9.5-6.5 15-14 17C12.5 35 6 29.5 6 20V10.5L20 5z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 20.5l4 4 8-8"
                                            stroke="#e56a55"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3>Flawless Execution &amp; LD Protection</h3>
                            <p>
                                We excel at disciplined project execution where milestone delivery is non-negotiable. In offshore contracts, schedule slippages trigger crippling Liquidated Damages (LD). A core focus of our service is ensuring on-time technical completion eliminating project delays and protecting operators from costly LD penalties.
                            </p>
                        </article>
                    </div>
                </section>
                <section className="case-studies section" id="case-studies">
                    <div className="section-top">
                        <div className="case-studies-intro">
                            <div className="eyebrow">05 — PROVEN IMPACT &amp; CASE STUDIES</div>
                            <h2>
                                Field records that speak
                                <br />
                                for themselves.
                            </h2>
                            <p>
                                From early offshore communications to renewable energy and security infrastructure, these projects trace the experience behind OSSCORP’s technical services.
                            </p>
                        </div>
                        <div className="case-studies-meta">
                            <div className="case-badge">
                                <span className="case-badge-dot" />
                                <span>LANDMARK PROJECT RECORDS</span>
                            </div>
                            <div className="case-index-counter">
                                <strong>{String(caseStudies.length).padStart(2, "0")}</strong>
                                <span>DOCUMENTED PROJECTS</span>
                            </div>
                        </div>
                    </div>
                    <div className="case-carousel" aria-label="Landmark projects">
                    <div className="case-grid" ref={caseTrackRef} onScroll={(event) => {
                        const track = event.currentTarget;
                        const first = track.querySelector<HTMLElement>(".case-card");
                        if (!first) return;
                        const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
                        setActiveCase(Math.min(caseStudies.length - 1, Math.round(track.scrollLeft / (first.offsetWidth + gap))));
                    }}>
                        {caseStudies.map((cs, idx) => (
                            <article key={cs.id} className="case-card">
                                <div className="case-card-top">
                                    <span className="case-tag">{cs.tag}</span>
                                    <span className="case-num">0{idx + 1}</span>
                                </div>
                                <div className="case-brand-block">
                                    <span className="case-brand-label">CLIENT / END USER</span>
                                    <strong className="case-brand">{cs.brand}</strong>
                                    <span className="case-client-context">{cs.client}</span>
                                </div>
                                <h3>{cs.title}</h3>
                                <p>{cs.summary}</p>
                                <div className="case-scope-line">
                                    <span>PROJECT SCOPE</span>
                                    <strong>{cs.scope}</strong>
                                </div>
                                <div className="case-metrics">
                                    {cs.metrics.map((m, i) => (
                                        <div key={i} className="case-metric-item">
                                            <strong>{m.value}</strong>
                                            <span>{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="case-carousel-controls">
                        <span>Scroll to explore all seven projects</span>
                        <div className="case-carousel-actions">
                            <div className="case-carousel-progress" aria-label={`Project ${activeCase + 1} of ${caseStudies.length}`}>
                                {caseStudies.map((project, index) => <button key={project.id} type="button" aria-label={`Show project ${index + 1}: ${project.title}`} aria-current={activeCase === index ? "true" : undefined} onClick={() => caseTrackRef.current?.children[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })}><span /></button>)}
                            </div>
                            <button className="case-carousel-arrow" type="button" aria-label="Previous project" disabled={activeCase === 0} onClick={() => caseTrackRef.current?.children[Math.max(0, activeCase - 1)]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })}>←</button>
                            <button className="case-carousel-arrow" type="button" aria-label="Next project" disabled={activeCase === caseStudies.length - 1} onClick={() => caseTrackRef.current?.children[Math.min(caseStudies.length - 1, activeCase + 1)]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })}>→</button>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="contact section" id="contact">
                    <div className="contact-info">
                        <div className="eyebrow light">
                            YOUR NEXT CHALLENGE. OUR NEXT COMMITMENT.
                        </div>
                        <h2>
                            Let’s get to <span style={{ color: "var(--red)" }}>work.</span>
                        </h2>
                        <p>
                            Tell us what your operation needs.
                            <br />
                            Start with the scope, location and timeline.
                        </p>
                        <div className="contact-details">
                            <a href="tel:+919892135332">
                                <span>PHONE</span>
                                <strong>+91 9892135332</strong>
                            </a>
                            <a href="mailto:osscorp21@gmail.com">
                                <span>EMAIL</span>
                                <strong>osscorp21@gmail.com</strong>
                            </a>
                            <div>
                                <span>COMPANY</span>
                                <strong>OSSCORP</strong>
                                <small>Onshore &amp; Offshore Technical Services</small>
                            </div>
                        </div>
                    </div>
                    <form
                        className="brief inquiry-form"
                        onSubmit={prepareInquiry}
                        onChange={() => {
                            if (inquiryState !== "idle") {
                                setInquiryState("idle");
                                setInquiryMessage("");
                            }
                        }}
                    >
                        <div className="form-heading">
                            <span>PROJECT ENQUIRY</span>
                            <small>Tell us a little about your requirements.</small>
                        </div>
                        <div className="form-grid">
                            <label>
                                Name <em>*</em>
                                <input
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Your name"
                                    required
                                />
                            </label>
                            <label>
                                Work email <em>*</em>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                    required
                                />
                            </label>
                            <label className="phone-field">
                                Phone number
                                <input
                                    name="phone"
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    placeholder="+91 9892135332"
                                    pattern="(?:[+][1-9][0-9]{0,2})?[0-9]{10}"
                                    maxLength={14}
                                    aria-describedby="phone-hint"
                                    onChange={(event) => {
                                        const raw = event.currentTarget.value;
                                        const digits = raw.replace(/[^0-9]/g, "");
                                        event.currentTarget.value = raw.startsWith("+")
                                            ? `+${digits.slice(0, 13)}`
                                            : digits.slice(0, 10);
                                    }}
                                />
                                <small id="phone-hint">
                                    Include +, country code, then your 10-digit number.
                                </small>
                            </label>
                            <label>
                                Company
                                <input
                                    name="company"
                                    autoComplete="organization"
                                    placeholder="Company name"
                                />
                            </label>
                            <label>
                                Service of interest <em>*</em>
                                <select
                                    name="service"
                                    value={inquiryService}
                                    onChange={(e) => setInquiryService(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    {services.map((service) => (
                                        <option key={service.id}>{service.title}</option>
                                    ))}
                                    <option>General enquiry</option>
                                </select>
                            </label>
                            <label>
                                Project location
                                <input
                                    name="location"
                                    placeholder="City, site or offshore location"
                                />
                            </label>
                            <label>
                                Expected timeline
                                <input name="timeline" placeholder="e.g. Q3 2026" />
                            </label>
                            <label className="message-field">
                                Project details <em>*</em>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Scope, site conditions, or the support you need"
                                    required
                                />
                            </label>
                        </div>
                        <button className="button primary" type="submit" disabled={inquiryState === "sending"}>
                            {inquiryState === "sending" ? "Sending…" : inquiryState === "sent" ? "Enquiry sent" : "Send enquiry"}
                            {inquiryState !== "sending" && <Arrow />}
                        </button>
                        <p className="form-note" role={inquiryState === "error" ? "alert" : "status"}>
                            {inquiryMessage || "Your enquiry will be sent securely to the OSSCORP team."}
                        </p>
                    </form>
                </section>
            </main>
            <footer>
                <a className="footer-brand" href="#" aria-label="Osscorp — home">
                    <img src="/logo/image.png" alt="" />
                    <span>
                        <strong>OSSCORP</strong>
                        <small>ONSHORE &amp; OFFSHORE TECHNICAL SERVICES</small>
                        <em>30+ YEARS OF TECHNICAL EXCELLENCE</em>
                    </span>
                </a>
                <div>
                    <a href="#about">About</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#leadership">Leadership</a>
                    <a href="#contact">Contact</a>
                    <a href="/privacy-policy">Privacy policy</a>
                    <a href="/disclaimer">Disclaimer</a>
                </div>
                <div className="footer-bottom">
                    <span>
                        © {new Date().getFullYear()} Osscorp. All rights reserved.
                    </span>
                    <span>ONSHORE & OFFSHORE TECHNICAL SERVICES</span>
                    <a href="#">Back to top ↑</a>
                </div>
            </footer>
        </>
    );
}
