import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Check,
  Instagram,
  MessageCircle,
  Play,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/components/site/contact";
import showreel from "@/assets/showreel.jpg";
import workCourse from "@/assets/work-course.jpg";
import workSaas from "@/assets/work-saas2.jpg";
import workEbook from "@/assets/work-ebook.jpg";
import workTemplate from "@/assets/work-template.jpg";

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

const TESTIMONIALS = [
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

function WhatsAppButton({
  children,
  size = "default",
}: {
  children: React.ReactNode;
  size?: "default" | "lg";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 ${
        size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
      }`}
    >
      <MessageCircle className="size-4" strokeWidth={1.75} />
      {children}
    </a>
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
            motion<span className="text-primary">.</span>
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
              Vos publicités vidéo devraient vendre.
              <br />
              <span className="text-primary">Pas juste faire joli.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Je crée des vidéos publicitaires en motion design 2D pour les e-commerçants de
              formations, ebooks, templates et SaaS. Un script pensé pour convertir, une animation
              qui retient l'attention dès la première seconde.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <WhatsAppButton size="lg">Discutons de votre projet</WhatsAppButton>
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

        {/* Problème / Solution */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Une vidéo générique coûte plus cher qu'aucune vidéo.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <Reveal className="border-t border-border pt-8">
              <TrendingDown className="size-6 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold">Le problème</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>Des templates réutilisés que votre audience a déjà vus cent fois.</li>
                <li>Une promesse floue : on ne comprend pas ce que le produit change.</li>
                <li>Trois secondes d'intro décorative — le scroll a déjà repris.</li>
                <li>Un seul format livré, inexploitable sur la moitié des plateformes.</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="border-t-2 border-primary pt-8">
              <Target className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold">La solution</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>Un spécialiste des produits digitaux, pas un généraliste polyvalent.</li>
                <li>Le script d'abord : accroche, bénéfice, preuve, appel à l'action.</li>
                <li>Une animation au service du message, jamais l'inverse.</li>
                <li>Tous les formats livrés, prêts à diffuser le jour même.</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200} className="mt-12">
            <WhatsAppButton>Voir ce que ça donne sur votre produit</WhatsAppButton>
          </Reveal>
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
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                      filter === f
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal as="article" key={project.title} delay={(i % 3) * 90}>
                  <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`Aperçu de la vidéo publicitaire pour ${project.client}`}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
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
                </Reveal>
              ))}
            </div>
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <figure className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                    <span className="font-display text-3xl leading-none text-primary">"</span>
                    <blockquote className="mt-3 text-foreground">{t.quote}</blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{t.name}</span> — {t.company}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
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
