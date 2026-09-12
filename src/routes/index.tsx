import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Check,
  Instagram,
  MessageCircle,
  Play,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/components/site/contact";
import showreel from "@/assets/showreel.jpg";
import workCourse from "@/assets/work-course.jpg";
import workSaas from "@/assets/work-saas2.jpg";
import workEbook from "@/assets/work-ebook.jpg";
import workTemplate from "@/assets/work-template.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motion designer 2D pour produits digitaux | Vidéos pub qui convertissent" },
      {
        name: "description",
        content:
          "Vidéos publicitaires en motion design 2D pour formations, ebooks, templates et SaaS. Plus de clics, plus de ventes. Discutons sur WhatsApp.",
      },
      { property: "og:title", content: "Vidéos pub qui vendent vos produits digitaux" },
      {
        property: "og:description",
        content:
          "Motion design 2D spécialisé e-commerce digital : formations, ebooks, templates, SaaS. Livraison en 7 jours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "180+", label: "vidéos livrées" },
  { value: "7 j", label: "délai moyen de livraison" },
  { value: "+42 %", label: "de taux de clic en moyenne" },
  { value: "40+", label: "e-commerçants accompagnés" },
];

const FILTERS = ["Tous", "Formation", "Ebook", "Template", "SaaS"] as const;

const PROJECTS = [
  {
    title: "Lancement d'une formation copywriting",
    client: "Studio Éditions",
    goal: "Vidéo Meta Ads de 30 s — 3 200 inscrits en 3 semaines.",
    tag: "Formation",
    image: workCourse,
  },
  {
    title: "Démo produit d'un SaaS analytics",
    client: "Trackly",
    goal: "Explainer 45 s — coût par essai divisé par 2.",
    tag: "SaaS",
    image: workSaas,
  },
  {
    title: "Promo ebook nutrition",
    client: "Nova Health",
    goal: "Reel vertical 15 s — 1 900 ventes sur le trimestre.",
    tag: "Ebook",
    image: workEbook,
  },
  {
    title: "Pack de templates Notion",
    client: "Deskly",
    goal: "Séquence produit 20 s — +61 % de clics sur la page de vente.",
    tag: "Template",
    image: workTemplate,
  },
  {
    title: "Tunnel de vente masterclass",
    client: "Atelier Média",
    goal: "3 variations testées — CPA en baisse de 38 %.",
    tag: "Formation",
    image: workTemplate,
  },
  {
    title: "Onboarding animé d'un outil no-code",
    client: "Flowbase",
    goal: "Vidéo d'accueil 60 s — churn J7 réduit de 22 %.",
    tag: "SaaS",
    image: workSaas,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brief express",
    text: "20 minutes sur WhatsApp pour cerner votre produit, votre audience et l'objectif chiffré.",
  },
  {
    step: "02",
    title: "Script orienté vente",
    text: "J'écris l'accroche, la promesse et le call-to-action. Validation avant toute animation.",
  },
  {
    step: "03",
    title: "Direction visuelle",
    text: "Storyboard et style frames alignés sur votre marque. Vous voyez le résultat avant production.",
  },
  {
    step: "04",
    title: "Animation & son",
    text: "Motion design 2D, voix off et sound design. Rythme calibré pour les 3 premières secondes.",
  },
  {
    step: "05",
    title: "Livraison multi-formats",
    text: "16:9, 9:16 et 1:1 prêts pour Meta, TikTok, YouTube et votre page de vente.",
  },
];

const TESTIMONIALS: {
  quote: string;
  name: string;
  company: string;
  image?: string;
  video?: boolean;
}[] = [
  {
    quote:
      "La vidéo a remplacé notre ancienne pub en 48 h. Le coût par lead est passé de 4,10 € à 2,30 €.",
    name: "Amélie R.",
    company: "Studio Éditions",
  },
  {
    quote:
      "Il comprend les produits digitaux mieux que la plupart des agences. Le script était déjà une stratégie.",
    name: "Yanis B.",
    company: "Trackly",
  },
  {
    quote: "Trois formats livrés en une semaine, zéro aller-retour inutile. On a scalé direct.",
    name: "Sarah M.",
    company: "Nova Health",
  },
  {
    quote:
      "On a doublé les ventes de notre formation en un mois grâce à la nouvelle vidéo publicitaire.",
    name: "Claire D.",
    company: "Académie Lumen",
    image: testimonial1,
    video: true,
  },
  {
    quote: "La vidéo explique notre SaaS en 20 secondes mieux que notre page de vente entière.",
    name: "Malik T.",
    company: "Flowdesk",
    image: testimonial2,
    video: true,
  },
  {
    quote: "Nos templates se vendent enfin. Le script et le rythme font toute la différence.",
    name: "Grace A.",
    company: "Pixel Market",
    image: testimonial3,
    video: true,
  },
];

const OFFERS = [
  {
    name: "Vidéo unique",
    price: "Sur devis",
    text: "Une publicité 15 à 30 s prête à diffuser.",
    items: ["Script orienté conversion", "Motion design 2D", "3 formats de sortie", "2 révisions"],
    featured: false,
  },
  {
    name: "Pack test créatif",
    price: "Sur devis",
    text: "Trois variations pour tester vos angles.",
    items: [
      "3 accroches différentes",
      "Voix off incluse",
      "Recommandations de diffusion",
      "3 révisions",
    ],
    featured: true,
  },
  {
    name: "Accompagnement mensuel",
    price: "Sur devis",
    text: "Un flux régulier de créas pour scaler.",
    items: ["4 à 8 vidéos / mois", "Itérations sur les données", "Priorité de production", "Canal WhatsApp direct"],
    featured: false,
  },
];

const FAQ = [
  {
    q: "Quel est le délai de livraison ?",
    a: "Comptez 5 à 7 jours ouvrés pour une vidéo, à partir de la validation du script. Un format urgent est possible en 72 h selon les disponibilités du mois.",
  },
  {
    q: "Combien coûte une vidéo ?",
    a: "Le tarif dépend de la durée, du nombre de formats et du niveau d'animation. Chaque projet est devisé après un échange de 20 minutes, sans engagement.",
  },
  {
    q: "Combien de révisions sont incluses ?",
    a: "Deux à trois séries de révisions selon la formule. Les validations par étape (script, storyboard, animation) évitent les mauvaises surprises en fin de projet.",
  },
  {
    q: "Quels formats de livraison ?",
    a: "MP4 en 16:9, 9:16 et 1:1, plus une version sous-titrée et une version sans voix off si besoin. Fichiers sources sur demande.",
  },
  {
    q: "Travaillez-vous uniquement avec des produits digitaux ?",
    a: "Oui. Formations, ebooks, templates et SaaS uniquement. C'est cette spécialisation qui rend les scripts efficaces dès la première version.",
  },
];

const HERO_PILLS = [
  "Formation",
  "E-book",
  "Template",
  "Logiciel",
  "Application",
  "Fichiers numériques",
];

function PillMarquee() {
  const items = [...HERO_PILLS, ...HERO_PILLS];
  return (
    <div className="relative mx-auto mt-6 max-w-2xl overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-2 hover:[animation-play-state:paused]">
        {items.map((pill, i) => (
          <span
            key={`${pill}-${i}`}
            className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

function WhatsAppButton({
  children,
  size = "default",
  href = WHATSAPP_URL,
}: {
  children: React.ReactNode;
  size?: "default" | "lg";
  href?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] ring-4 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:brightness-95 active:scale-95 ${
        size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        <MessageCircle className="size-4" strokeWidth={1.75} />
        {children}
      </span>
    </a>
  );
}

type CarouselApi = UseEmblaCarouselType[1];

function CarouselNavigation({
  api,
  label,
}: {
  api: CarouselApi;
  label: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateState = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateState();
    api.on("select", updateState).on("reInit", updateState);
    return () => {
      api.off("select", updateState).off("reInit", updateState);
    };
  }, [api, updateState]);

  return (
    <div className="mt-7 flex items-center justify-between gap-5">
      <div className="flex items-center gap-2" aria-label={`Pagination ${label}`}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-foreground/30"
            }`}
            aria-label={`Aller à la page ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="size-11 rounded-full bg-background"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label={`Précédent — ${label}`}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-11 rounded-full bg-background"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          aria-label={`Suivant — ${label}`}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

function ProjectCarousel({ projects }: { projects: typeof PROJECTS }) {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  useEffect(() => {
    api?.reInit();
    api?.scrollTo(0, true);
  }, [api, projects]);

  return (
    <Reveal className="mt-12">
      <div ref={viewportRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y md:-ml-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_58%] md:pl-6 lg:flex-[0_0_40%]"
            >
              <div className="group h-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Aperçu de la vidéo publicitaire pour ${project.client}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Play className="size-4" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {project.tag} · {project.client}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.goal}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CarouselNavigation api={api} label="projets récents" />
    </Reveal>
  );
}

function TestimonialCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  return (
    <Reveal className="mt-12">
      <div ref={viewportRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y md:-ml-6">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="min-w-0 flex-[0_0_90%] pl-4 sm:flex-[0_0_62%] md:pl-6 lg:flex-[0_0_46%]"
            >
              <div className="group flex h-full min-h-64 flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                {testimonial.image ? (
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <img
                      src={testimonial.image}
                      alt={`Témoignage vidéo de ${testimonial.name}`}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {testimonial.video ? (
                      <>
                        <span className="absolute inset-0 bg-black/25" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="size-5" strokeWidth={1.75} />
                          </span>
                        </span>
                        <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                          Témoignage vidéo
                        </span>
                      </>
                    ) : null}
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>
                    <span className="font-display text-5xl leading-none text-primary">“</span>
                    <blockquote className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-secondary font-semibold text-secondary-foreground">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt=""
                          loading="lazy"
                          width={800}
                          height={800}
                          className="size-full object-cover"
                        />
                      ) : (
                        testimonial.name.charAt(0)
                      )}
                    </span>
                    <span>
                      <strong className="block font-semibold text-foreground">
                        {testimonial.name}
                      </strong>
                      {testimonial.company}
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <CarouselNavigation api={api} label="témoignages clients" />
    </Reveal>
  );
}

function Index() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const projects = PROJECTS.filter((p) => filter === "Tous" || p.tag === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Motion design 2D
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton>
            <span className="hidden sm:inline">Discutons sur WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs tracking-wide text-muted-foreground uppercase">
              <span className="size-1.5 rounded-full bg-primary" />
              Motion design 2D · produits digitaux
            </p>
            <h1 className="text-4xl leading-[1.05] font-semibold md:text-6xl">
              On crée des vidéos publicitaires en <span className="text-primary">motion design</span>
            </h1>
            <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2">
              {["Formation", "E-book", "Template", "Logiciel", "Application", "Fichiers numériques"].map(
                (pill, i) => (
                  <span
                    key={pill}
                    className="animate-pill inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {pill}
                  </span>
                ),
              )}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Peu importe votre produit, on vous crée la vidéo publicitaire parfaite, du script à la
              version finale. Plus de trafic. Plus de clics. Plus de ventes, pendant que vous dormez
              tranquillement.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <WhatsAppButton size="lg" href="#offres">Lancer mon projet vidéo</WhatsAppButton>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">180+ vidéos livrées</span> pour 40+
                e-commerçants digitaux
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-16">
            <div className="group relative overflow-hidden rounded-2xl border border-border">
              <img
                src={showreel}
                alt="Showreel de vidéos publicitaires en motion design 2D"
                width={1600}
                height={900}
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6" strokeWidth={1.75} />
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 py-16 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <p className="font-display text-4xl font-semibold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-secondary-foreground/60">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold md:text-4xl">Projets récents</h2>
                <p className="mt-3 text-muted-foreground">
                  Chaque projet part d'un objectif chiffré. Voici ce que ça donne.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <Button
                    key={f}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setFilter(f)}
                    className={`rounded-full px-4 transition-colors duration-200 ${
                      filter === f
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </Reveal>

            <ProjectCarousel projects={projects} />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Du brief à la diffusion</h2>
            <p className="mt-3 text-muted-foreground">
              Cinq étapes, aucune zone d'ombre. Vous validez à chaque palier.
            </p>
          </Reveal>
          <ol className="mt-14 space-y-0">
            {PROCESS.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 70}>
                <div className="group grid gap-4 border-t border-border py-8 transition-colors duration-300 hover:border-primary md:grid-cols-[80px_1fr_2fr] md:items-baseline md:gap-10">
                  <span className="font-display text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Témoignages */}
        <section id="avis" className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">Ce qu'en disent les clients</h2>
            </Reveal>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Offres */}
        <section id="offres" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Trois façons de travailler</h2>
            <p className="mt-3 text-muted-foreground">
              Pas de grille tarifaire figée : le prix suit le périmètre réel de votre projet.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.name} delay={i * 90}>
                <div
                  className={`flex h-full flex-col rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    offer.featured
                      ? "border-primary bg-secondary text-secondary-foreground"
                      : "border-border bg-card hover:border-primary"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{offer.name}</h3>
                  <p className="font-display mt-4 text-3xl font-semibold">{offer.price}</p>
                  <p
                    className={`mt-3 text-sm ${offer.featured ? "text-secondary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {offer.text}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <WhatsAppButton>Demander un devis</WhatsAppButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border">
          <div className="mx-auto max-w-3xl px-5 py-24">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">Questions fréquentes</h2>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((item) => (
                  <AccordionItem key={item.q} value={item.q}>
                    <AccordionTrigger className="text-left text-base font-semibold hover:text-primary hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
            <Reveal delay={160} className="mt-10 text-muted-foreground">
              Une question qui n'est pas là ?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Posez-la en direct
              </a>
              .
            </Reveal>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-4 py-1.5 text-xs tracking-wide uppercase">
                <Zap className="size-3.5 text-primary" strokeWidth={2} />4 projets par mois maximum
              </p>
              <h2 className="mt-7 text-3xl font-semibold md:text-5xl">
                Votre prochaine pub peut être en ligne dans 7 jours.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-secondary-foreground/70">
                Décrivez votre produit en deux phrases. Je vous dis franchement si une vidéo peut
                faire bouger vos chiffres — et ce qu'elle coûterait.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppButton size="lg">Discutons sur WhatsApp</WhatsAppButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/25 px-8 py-4 text-base font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  <Instagram className="size-4" strokeWidth={1.75} />
                  Écrire en DM Instagram
                </a>
              </div>
              <p className="mt-6 text-sm text-secondary-foreground/50">
                Réponse sous 12 h en semaine.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
          <p className="font-display text-sm font-semibold">
            motion<span className="text-primary">.</span>
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a href="#faq" className="transition-colors hover:text-primary">
              Mentions légales
            </a>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Haut de page
            <ArrowUp className="size-4" strokeWidth={1.75} />
          </a>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Motion design 2D pour produits digitaux.
          <ArrowUpRight className="ml-1 inline size-3" strokeWidth={1.75} />
        </div>
      </footer>
    </div>
  );
}
