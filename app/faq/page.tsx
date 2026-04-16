import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQItem } from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'FAQ – Acheter et vendre à Hyères',
  description:
    "20 réponses d'experts sur l'achat et la vente immobilière à Hyères et sur la Côte Varoise. Estimation, frais de notaire, fiscalité, achat depuis l'étranger.",
  alternates: { canonical: 'https://rivage-immobilier.com/faq' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment obtenir une estimation gratuite de mon bien à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chez Rivage Immobilier, l'estimation d'un bien à Hyères repose sur une analyse de marché locale et une visite physique du bien. Nous croisons trois sources : les transactions récentes comparables issues de la base DVF (Demandes de Valeurs Foncières, publique et officielle), les biens actuellement en vente sur le secteur, et notre connaissance terrain acquise sur plus de 30 ans d'activité sur la commune. L'estimation est réalisée sans engagement, sous 48 à 72 heures après la visite, et vous est remise sous forme d'un avis de valeur écrit. Elle tient compte de la configuration du bien, de son état, de son exposition, de ses extérieurs, de l'année de construction, du quartier (centre-ville, La Capte, L'Almanarre, Costebelle, Les Salins, Giens) et de la saisonnalité du marché local. Pour demander une estimation, contactez l'agence au 06 11 44 41 87 (Nathalie) ou au 06 16 36 34 87 (Luca), ou via le formulaire en ligne. Réponse sous 24h. Sources : Base DVF (etalab.gouv.fr) ; Observatoire PAP.fr.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment est calculé le prix au m² à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix au m² à Hyères varie fortement selon le type de bien, le quartier et l'état du bien. En 2025, les références publiques convergent autour des fourchettes suivantes : environ 3 879 € / m² pour un appartement et 4 701 à 5 284 € / m² pour une maison, selon les sources (DVF, PAP, Netvendeur). Le prix moyen tous biens confondus se situe autour de 4 046 € / m² selon l'Observatoire PAP, avec une fourchette large entre 2 649 et 7 888 € / m² selon SeLoger. Ces moyennes ne reflètent qu'un point de départ. Le prix réel d'un bien dépend de sa vue (mer, port, arrière-pays), de la proximité immédiate de la plage, de la présence d'extérieurs (terrasse, jardin, piscine), du DPE et de l'état général. Un bien avec vue mer directe à La Capte ou Giens peut dépasser 7 000 € / m², tandis qu'un appartement en centre-ville sans extérieur se négocie nettement en-dessous de la moyenne. Sources : Observatoire PAP.fr (1er octobre 2025) ; SeLoger (novembre 2025) ; Immovrai / base DVF (2025).",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai moyen pour vendre un bien immobilier à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le délai moyen de vente à Hyères varie selon le type de bien, le prix affiché et la saison. À titre d'ordre de grandeur, les plateformes nationales (PAP, SeLoger) rapportent des délais moyens de 3 à 6 mois sur la commune en 2025. Un bien correctement estimé, en bon état, bien présenté et mis en marché au printemps ou en début d'été se vend généralement plus rapidement, parfois en quelques semaines. À l'inverse, un bien surévalué au départ peut mettre 9 à 12 mois à trouver preneur, avec des baisses de prix successives qui envoient un signal défavorable aux acquéreurs. C'est pourquoi l'estimation initiale au juste prix est le facteur le plus déterminant du délai de vente. Notre expérience sur Hyères nous permet de vous conseiller sur le bon positionnement dès le départ. Sources : Indicateurs PAP.fr et SeLoger pour Hyères (2025). Les délais réels varient selon chaque bien.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mandat simple ou mandat exclusif : lequel choisir pour vendre à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le mandat simple vous permet de confier la vente de votre bien à plusieurs agences et de vendre vous-même directement. Le mandat exclusif réserve la commercialisation à une seule agence pour une durée déterminée (généralement 3 mois). Le mandat exclusif présente trois avantages concrets sur le marché de Hyères : l'agence s'engage pleinement (moyens publicitaires renforcés, priorité dans les visites, mise en avant sur les portails), le bien ne se retrouve pas diffusé à des prix différents sur plusieurs sites (ce qui dévalorise la perception), et les acquéreurs sérieux savent qu'ils ont un seul interlocuteur. Statistiquement, les biens vendus sous mandat exclusif se vendent souvent plus rapidement et plus près du prix demandé. Le mandat simple reste pertinent si vous souhaitez conserver la main ou tester plusieurs agences. Nous discutons avec vous du format le plus adapté à votre projet et à votre bien.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels sont les honoraires d'agence pratiqués à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En France, les honoraires d'agence sont libres mais strictement encadrés : chaque agence doit afficher son barème de manière transparente, TTC, en vitrine et sur son site internet (loi Hoguet). La moyenne nationale se situe entre 5 et 7 % du prix de vente selon les études de marché, avec une moyenne de 5,78 % relevée par l'Autorité de la concurrence. Les honoraires peuvent être exprimés en pourcentage dégressif selon le prix du bien, ou en forfait. La pratique la plus répandue est que les honoraires soient à la charge du vendeur et inclus dans le prix affiché (mention « FAI », Frais d'Agence Inclus). Cette configuration présente un avantage pour l'acquéreur : les frais de notaire sont calculés sur le prix net vendeur, donc réduits. Le barème détaillé de Rivage Immobilier est disponible en agence et sur notre page honoraires. Sources : Autorité de la concurrence (moyenne 5,78 %) ; loi n° 70-9 du 2 janvier 1970 dite loi Hoguet.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels diagnostics sont obligatoires avant de vendre un bien à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Avant toute mise en vente, le propriétaire doit faire réaliser un Dossier de Diagnostic Technique (DDT) par un diagnostiqueur certifié. À Hyères, les diagnostics les plus courants sont : le DPE (diagnostic de performance énergétique), l'état des risques et pollutions (ERP, obligatoire car la commune est concernée par des risques naturels), le diagnostic amiante pour les biens construits avant 1997, le diagnostic plomb pour les biens construits avant 1949, le diagnostic gaz et électricité si les installations ont plus de 15 ans, le diagnostic termites (Hyères est en zone concernée par arrêté préfectoral) et le mesurage Loi Carrez pour les lots en copropriété. Ces diagnostics doivent être remis à l'acquéreur dès le compromis de vente. Leur coût total varie généralement entre 400 et 800 € pour un appartement, et 500 à 1 200 € pour une maison. Un DPE défavorable (F ou G) a un impact direct sur le prix de vente et sur la possibilité de louer le bien. Sources : Ministère de la Transition Écologique ; arrêté préfectoral Var pour la zone termites.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il faire des travaux avant de vendre son bien à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La réponse dépend du type de travaux et de l'écart entre leur coût et leur retour sur valeur à la revente. Les travaux de rafraîchissement (peinture, petites réparations, nettoyage approfondi) sont presque toujours rentables : pour quelques centaines d'euros, ils transforment la perception du bien et accélèrent la vente. Les travaux lourds (cuisine refaite, salle de bains, rénovation énergétique) sont rarement rentables à 100 % sur le prix de vente, mais peuvent faire la différence si le bien a un DPE défavorable (F ou G) ou s'il est en concurrence directe avec des biens rénovés. Le home staging léger (dépersonnalisation, désencombrement, mise en valeur des volumes) est systématiquement recommandé : il ne coûte presque rien et améliore significativement la qualité des photos et l'impression en visite. Notre recommandation : ne jamais engager de travaux lourds sans avoir validé le positionnement de votre bien avec un professionnel. Un acquéreur préfère souvent acheter moins cher et rénover à son goût.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les quartiers les plus recherchés à Hyères ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hyères présente une diversité rare pour une ville de sa taille, avec des quartiers aux atmosphères et aux prix très différents. Le centre-ville historique et médiéval : ruelles piétonnes, architecture provençale, commerces de proximité — recherché pour la résidence principale et le pied-à-terre. Costebelle et les hauteurs : villas avec vues panoramiques sur la baie, segment haut de gamme. La Capte : quartier balnéaire sur la double presqu'île, pins parasols, plage de sable, ambiance estivale — recherché pour la résidence secondaire. Giens et la presqu'île : biens vue mer, accès aux plages de l'Almanarre et de la Badine, port d'embarquement pour Porquerolles, segment haut de gamme. L'Almanarre : bord de mer, plage emblématique, spot de kitesurf, quartier résidentiel prisé. Les Salins et Ayguade : quartiers plus confidentiels côté est, proches de la mer et du port. Chaque quartier a sa logique de prix et sa clientèle. Nous vous orientons selon votre projet lors d'un échange préalable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence de prix entre Hyères, Carqueiranne, La Londe et Bormes-les-Mimosas ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les communes du littoral varois présentent des écarts de prix significatifs, liés à leur positionnement, leur notoriété et leur offre de biens. À titre indicatif pour 2025 : Hyères, environ 4 046 € / m² tous biens confondus (Observatoire PAP) ; Carqueiranne, marché généralement plus élevé que Hyères, tiré par la proximité de Toulon et une offre villa vue mer recherchée ; La Londe-les-Maures, marché intermédiaire, prisé pour son vignoble, ses plages (Miramar, Argentière) et son port ; Bormes-les-Mimosas, l'une des communes les plus chères du secteur, portée par son village perché classé, sa façade maritime et sa clientèle internationale. Ces ordres de grandeur masquent de fortes variations selon les micro-quartiers. Pour une évaluation précise sur votre recherche, nous pouvons vous transmettre un point de marché détaillé sur la ou les communes qui vous intéressent. Sources : Observatoire PAP.fr (2025) ; données DVF consolidées.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment se déroule un achat immobilier à Hyères, étape par étape ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'achat immobilier en France suit un processus encadré par la loi, identique à Hyères. 1. L'offre d'achat : proposition écrite adressée au vendeur via l'agence, dont l'acceptation engage les deux parties à poursuivre. 2. Le compromis de vente : signé chez le notaire ou en agence, il fixe le prix, les conditions suspensives (financement, urbanisme), la date de signature finale et un dépôt de garantie (généralement 5 à 10 % du prix). 3. Le délai de rétractation : l'acquéreur dispose de 10 jours calendaires après signature du compromis pour se rétracter sans justification et sans pénalité. 4. La levée des conditions suspensives : généralement 45 à 60 jours pour obtenir l'offre de prêt, vérifier les documents d'urbanisme, purger d'éventuels droits de préemption. 5. La signature de l'acte authentique : chez le notaire, 2 à 3 mois après le compromis — paiement du solde, remise des clés, transfert de propriété. Le délai total entre offre acceptée et remise des clés est généralement de 3 à 4 mois.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûtent les frais de notaire pour un achat à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les frais improprement appelés « frais de notaire » comprennent en réalité, pour l'essentiel, des droits et taxes reversés à l'État et aux collectivités locales (environ 80 %), auxquels s'ajoutent les émoluments du notaire et divers débours. Pour un achat dans l'ancien, ces frais représentent environ 7,5 à 8,5 % du prix de vente selon les Notaires de France. Exemple concret : pour un appartement à Hyères acheté 400 000 €, les frais de notaire s'élèveront à environ 30 000 à 34 000 €. Pour un bien neuf (moins de 5 ans ou VEFA), ces frais sont réduits à environ 2 à 3 % du prix. Depuis juin 2025, certains départements ont augmenté leur part de droits de mutation, ce qui peut faire évoluer légèrement ces pourcentages. Nous vous communiquons un calcul précis adapté à votre projet avant la signature de l'offre. Sources : Notaires de France ; Direction générale des Finances publiques.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels risques naturels vérifier avant d'acheter à Hyères (inondation, incendie, submersion) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hyères est concernée par plusieurs risques naturels qu'il est essentiel de vérifier avant tout achat. La commune dispose d'un Plan de Prévention des Risques Inondation (PPRI) pour les zones proches des cours d'eau (Gapeau, Roubaud), d'un Plan de Prévention des Risques Incendie de Forêt (PPRIF) pour les secteurs boisés (Maurettes, massif des Maures) et de zones soumises au risque de submersion marine sur le littoral bas (double presqu'île de Giens, salins). Ces informations sont obligatoirement fournies à l'acquéreur via l'État des Risques et Pollutions (ERP), document annexé au compromis de vente. Avant toute offre, nous recommandons de consulter le site Géorisques (georisques.gouv.fr), le PLU de Hyères et de poser des questions précises au notaire sur les contraintes applicables au bien. Sources : Géorisques (MTECT) ; PLU de la commune de Hyères ; arrêtés préfectoraux du Var.",
      },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que la loi Littoral et comment s'applique-t-elle à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La loi Littoral (loi n° 86-2 du 3 janvier 1986) encadre l'urbanisme et la construction sur les communes littorales françaises, dont Hyères fait partie. Elle poursuit trois objectifs : protéger les espaces naturels remarquables, préserver les coupures d'urbanisation et maintenir l'accès du public au rivage. Concrètement, cette loi se traduit à Hyères par plusieurs contraintes : la bande des 100 mètres à partir du rivage est en principe inconstructible hors zones déjà urbanisées, l'extension de l'urbanisation doit se faire en continuité avec les zones déjà bâties, et les espaces proches du rivage sont soumis à des règles d'urbanisme renforcées. Pour un acquéreur, cela a des implications concrètes : un terrain situé en zone naturelle ne sera pas constructible, une extension de maison peut être refusée même sur un terrain déjà bâti, et certaines piscines ou annexes peuvent nécessiter des autorisations spécifiques. La vérification du zonage au PLU de Hyères est indispensable avant tout projet. Sources : Loi n° 86-2 du 3 janvier 1986 dite loi Littoral ; PLU de la commune de Hyères.",
      },
    },
    {
      '@type': 'Question',
      name: "Pourquoi investir dans l'immobilier à Hyères plutôt que sur la Côte d'Azur ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hyères offre un positionnement distinct de la Côte d'Azur classique (Cannes, Nice, Saint-Tropez) qui attire une clientèle spécifique. Un rapport qualité-prix plus favorable : les prix au m² à Hyères restent significativement en-deçà de ceux de Saint-Tropez, Ramatuelle ou Cap d'Antibes, pour un littoral de qualité équivalente. Un cadre préservé : Hyères bénéficie d'un environnement naturel exceptionnel avec ses îles (Porquerolles, Port-Cros, Le Levant, toutes en Parc National), ses salins, ses plages de sable et son arrière-pays viticole. La pression touristique y est plus maîtrisée que sur la Côte d'Azur. Une accessibilité solide : l'aéroport de Toulon-Hyères propose des liaisons avec Paris, Londres (saisonnier) et plusieurs villes européennes. La gare TGV est en centre-ville, avec Paris à 4 h. Hyères n'est pas un substitut bon marché à la Côte d'Azur, c'est un positionnement différent : un littoral plus authentique, plus résidentiel et plus discret, qui séduit une clientèle en quête de qualité de vie et de valeur de long terme.",
      },
    },
    {
      '@type': 'Question',
      name: "Un acquéreur étranger peut-il acheter un bien à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, il n'existe aucune restriction de nationalité pour acheter un bien immobilier en France. Un acquéreur étranger, qu'il soit ressortissant de l'Union européenne ou d'un pays tiers, peut acheter librement un appartement ou une maison à Hyères, dans les mêmes conditions qu'un citoyen français. Quelques démarches complémentaires sont toutefois à prévoir pour un non-résident : justification de l'origine des fonds (obligation anti-blanchiment applicable à tous les acquéreurs, mais plus documentée pour les fonds venant de l'étranger), éventuelle traduction des documents officiels, et désignation d'un représentant fiscal si la revente fait ressortir une plus-value taxable au-delà de certains seuils. Aucun visa, aucun titre de séjour, aucune résidence en France ne sont requis pour devenir propriétaire. L'achat peut se faire à distance, avec signature par procuration si nécessaire. Sources : Notaires de France ; Code général des impôts.",
      },
    },
    {
      '@type': 'Question',
      name: "Un non-résident peut-il obtenir un crédit immobilier pour acheter à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, plusieurs banques françaises proposent des crédits immobiliers aux non-résidents. Les conditions sont généralement plus strictes que pour un résident : apport personnel souvent exigé entre 20 et 30 % du prix, durée de prêt plafonnée à 20 ans, taux légèrement supérieurs, et dossier financier solide (revenus, patrimoine, stabilité professionnelle). Les banques les plus actives sur ce segment sont les banques privées (BNP Paribas Wealth Management, Banque Transatlantique, CIC Banque Privée, HSBC) et certaines banques de détail ayant un desk international. Depuis 2023-2024, plusieurs établissements ont assoupli leurs critères pour les acquéreurs britanniques et américains, avec des offres pouvant aller jusqu'à 85 % de LTV (loan-to-value) selon Knight Frank. Il est recommandé d'obtenir un accord de principe de financement avant de formuler une offre : cela rassure le vendeur et accélère le processus. Nous pouvons vous orienter vers des courtiers spécialisés dans le financement international. Sources : Douglas Elliman / Knight Frank Prime France Report ; Banque Transatlantique.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle fiscalité pour un non-résident propriétaire à Hyères (taxe foncière, IFI, plus-value) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un non-résident fiscal propriétaire d'un bien à Hyères est soumis à plusieurs impositions françaises. Taxe foncière : due chaque année par le propriétaire au 1er janvier, quel que soit son pays de résidence. Impôt sur la Fortune Immobilière (IFI) : applicable si la valeur nette du patrimoine immobilier détenu en France dépasse 1,3 million d'euros au 1er janvier — taux progressifs de 0,5 à 1,5 % selon les tranches. Revenus locatifs : si le bien est loué, les revenus sont imposables en France au taux minimum de 20 % (ou 30 % au-delà d'un certain seuil), plus prélèvements sociaux. Plus-value à la revente : imposée dans les mêmes conditions qu'un résident (19 % d'impôt sur le revenu + prélèvements sociaux), avec abattements pour durée de détention (exonération totale d'IR après 22 ans, de prélèvements sociaux après 30 ans). Chaque situation dépend du pays de résidence et des conventions fiscales bilatérales. Il est impératif de consulter un notaire ou un avocat fiscaliste pour votre situation personnelle. Sources : impots.gouv.fr ; Code général des impôts.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment se déroule une signature à distance pour un achat à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La signature à distance est une pratique courante et sécurisée en France, particulièrement depuis la généralisation de l'acte authentique électronique chez les notaires. Trois modalités sont possibles. La procuration notariée : l'acquéreur désigne une personne de confiance (souvent un clerc du notaire français) pour signer en son nom — la procuration est établie soit chez un notaire français avant le départ, soit auprès d'un consulat de France à l'étranger, soit chez un notaire local avec apostille. La signature électronique à distance (AAED) : l'acte authentique électronique à distance permet à l'acquéreur de signer en visioconférence sécurisée, sans avoir à se déplacer. Le déplacement ponctuel : certains acquéreurs préfèrent venir une fois pour la signature finale et gérer les autres étapes à distance. Rivage Immobilier accompagne les acquéreurs internationaux à chaque étape, coordonne les échanges avec le notaire en français et en anglais, et organise les visites virtuelles du bien si nécessaire. Sources : Conseil Supérieur du Notariat ; décret n° 2020-395 du 3 avril 2020.",
      },
    },
    {
      '@type': 'Question',
      name: "L'achat d'une résidence secondaire à Hyères ouvre-t-il droit à un visa ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, devenir propriétaire d'un bien immobilier en France n'ouvre aucun droit automatique à un visa ou à un titre de séjour. La France ne propose pas de « visa d'investisseur immobilier » équivalent à ce qui existe au Portugal, en Grèce ou en Espagne (golden visa). Cependant, la propriété d'un bien peut constituer un élément parmi d'autres dans certaines démarches : le visa de long séjour visiteur (VLS-TS « visiteur »), accessible aux ressortissants non-UE souhaitant séjourner plus de 3 mois en France sans y travailler, sous condition de ressources et d'assurance, pour lequel la propriété d'un logement facilite la démonstration de capacité à résider dignement. Pour un séjour de moins de 90 jours sur une période de 180 jours (visa Schengen de court séjour), il n'existe aucun lien avec la propriété. Pour toute démarche visa ou titre de séjour, consultez le site france-visas.gouv.fr ou un avocat spécialisé en droit des étrangers. Sources : france-visas.gouv.fr ; CESEDA.",
      },
    },
    {
      '@type': 'Question',
      name: "Pourquoi choisir une agence bilingue pour acheter à Hyères ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'achat d'un bien immobilier en France depuis l'étranger implique un vocabulaire juridique et fiscal spécifique (compromis de vente, condition suspensive, acte authentique, plus-value, IFI, loi Littoral, loi Carrez) qui peut être déroutant pour un acquéreur non-francophone, même expérimenté dans l'immobilier international. Une agence bilingue apporte trois avantages concrets. La compréhension exacte des termes et engagements : un compromis mal compris peut engager juridiquement l'acquéreur sur des clauses qu'il n'avait pas anticipées. La coordination fluide avec le notaire, le banquier et les diagnostiqueurs : l'agence sert de point de contact unique, traduit les échanges et les documents, et s'assure que rien n'est perdu dans la traduction. Le conseil culturel et contextuel : les pratiques immobilières françaises (rôle central du notaire, délai de rétractation, diagnostics obligatoires, négociation) diffèrent de celles des pays anglo-saxons. Rivage Immobilier propose un accompagnement bilingue français-anglais à toutes les étapes, de la première visite à la remise des clés.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="px-6 pt-36 pb-20 text-center"
        style={{ background: '#1B3A6B' }}
      >
        <p
          className="text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
        >
          Questions fréquentes
        </p>
        <h1
          className="text-5xl sm:text-6xl text-white"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          Acheter et vendre à Hyères
        </h1>
        <p
          className="mt-6 text-sm max-w-2xl mx-auto"
          style={{
            color: 'rgba(232,213,176,0.75)',
            fontFamily: 'var(--font-jakarta)',
            lineHeight: 1.85,
          }}
        >
          20 réponses sourcées sur l&apos;achat et la vente immobilière à Hyères et sur
          la Côte Varoise — estimation, délais, fiscalité, achat depuis l&apos;étranger.
        </p>
      </section>

      {/* Content */}
      <section className="px-6 py-20 sm:py-28 max-w-3xl mx-auto">

        {/* Bloc 1 — Vendre */}
        <div id="vendre-hyeres" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Bloc 1 — 7 questions
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,169,110,0.2)' }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl mb-2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#1B3A6B',
            }}
          >
            Vendre à Hyères
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}
          >
            Estimation, mandat, honoraires, diagnostics et délais de vente.
          </p>

          <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            <FAQItem id="q1" question="Comment obtenir une estimation gratuite de mon bien à Hyères ?">
              <p style={answerStyle}>
                Chez Rivage Immobilier, l&apos;estimation d&apos;un bien à Hyères repose sur une analyse
                de marché locale et une visite physique du bien. Nous croisons trois sources : les
                transactions récentes comparables issues de la base DVF (Demandes de Valeurs Foncières,
                publique et officielle), les biens actuellement en vente sur le secteur, et notre
                connaissance terrain acquise sur plus de 30 ans d&apos;activité sur la commune.
              </p>
              <p style={answerStyle}>
                L&apos;estimation est réalisée sans engagement, sous 48 à 72 heures après la visite,
                et vous est remise sous forme d&apos;un avis de valeur écrit. Elle tient compte de la
                configuration du bien, de son état, de son exposition, de ses extérieurs, de l&apos;année
                de construction, du quartier (centre-ville, La Capte, L&apos;Almanarre, Costebelle,
                Les Salins, Giens) et de la saisonnalité du marché local.
              </p>
              <p style={answerStyle}>
                Pour demander une estimation, contactez l&apos;agence au 06 11 44 41 87 (Nathalie) ou au 06 16 36 34 87 (Luca), ou via{' '}
                <Link href="/estimation-immobiliere-hyeres" style={linkStyle}>
                  le formulaire d&apos;estimation en ligne
                </Link>
                . Réponse sous 24h.
              </p>
              <p style={sourceStyle}>Sources : Base DVF (etalab.gouv.fr) ; Observatoire PAP.fr.</p>
            </FAQItem>

            <FAQItem id="q2" question="Comment est calculé le prix au m² à Hyères ?">
              <p style={answerStyle}>
                Le prix au m² à Hyères varie fortement selon le type de bien, le quartier et l&apos;état
                du bien. En 2025, les références publiques convergent autour des fourchettes suivantes :
                environ <strong style={{ color: '#1B3A6B' }}>3 879 € / m²</strong> pour un appartement
                et <strong style={{ color: '#1B3A6B' }}>4 701 à 5 284 € / m²</strong> pour une maison,
                selon les sources (DVF, PAP, Netvendeur). Le prix moyen tous biens confondus se situe
                autour de <strong style={{ color: '#1B3A6B' }}>4 046 € / m²</strong> selon
                l&apos;Observatoire PAP, avec une fourchette large entre 2 649 et 7 888 € / m²
                selon SeLoger.
              </p>
              <p style={answerStyle}>
                Ces moyennes ne reflètent qu&apos;un point de départ. Le prix réel d&apos;un bien
                dépend de sa vue (mer, port, arrière-pays), de la proximité immédiate de la plage,
                de la présence d&apos;extérieurs (terrasse, jardin, piscine), du DPE et de l&apos;état
                général. Un bien avec vue mer directe à La Capte ou Giens peut dépasser 7 000 € / m²,
                tandis qu&apos;un appartement en centre-ville sans extérieur se négocie nettement
                en-dessous de la moyenne.
              </p>
              <p style={sourceStyle}>
                Sources : Observatoire PAP.fr (1er octobre 2025) ; SeLoger (novembre 2025) ;
                Immovrai / base DVF (2025).
              </p>
            </FAQItem>

            <FAQItem id="q3" question="Quel est le délai moyen pour vendre un bien immobilier à Hyères ?">
              <p style={answerStyle}>
                Le délai moyen de vente à Hyères varie selon le type de bien, le prix affiché et la
                saison. À titre d&apos;ordre de grandeur, les plateformes nationales (PAP, SeLoger)
                rapportent des délais moyens de <strong style={{ color: '#1B3A6B' }}>3 à 6 mois</strong>{' '}
                sur la commune en 2025. Un bien correctement estimé, en bon état, bien présenté et
                mis en marché au printemps ou en début d&apos;été se vend généralement plus
                rapidement, parfois en quelques semaines.
              </p>
              <p style={answerStyle}>
                À l&apos;inverse, un bien surévalué au départ peut mettre 9 à 12 mois à trouver
                preneur, avec des baisses de prix successives qui envoient un signal défavorable aux
                acquéreurs. C&apos;est pourquoi l&apos;estimation initiale au juste prix est le
                facteur le plus déterminant du délai de vente. Notre expérience sur Hyères nous
                permet de vous conseiller sur le bon positionnement dès le départ.
              </p>
              <p style={sourceStyle}>
                Sources : Indicateurs PAP.fr et SeLoger pour Hyères (2025). Les délais réels varient
                selon chaque bien.
              </p>
            </FAQItem>

            <FAQItem
              id="q4"
              question="Mandat simple ou mandat exclusif : lequel choisir pour vendre à Hyères ?"
            >
              <p style={answerStyle}>
                Le mandat simple vous permet de confier la vente de votre bien à plusieurs agences
                et de vendre vous-même directement. Le mandat exclusif réserve la commercialisation
                à une seule agence pour une durée déterminée (généralement 3 mois).
              </p>
              <p style={answerStyle}>
                Le mandat exclusif présente trois avantages concrets sur le marché de Hyères :
                l&apos;agence s&apos;engage pleinement (moyens publicitaires renforcés, priorité
                dans les visites, mise en avant sur les portails), le bien ne se retrouve pas diffusé
                à des prix différents sur plusieurs sites (ce qui dévalorise la perception), et les
                acquéreurs sérieux savent qu&apos;ils ont un seul interlocuteur. Statistiquement,
                les biens vendus sous mandat exclusif se vendent souvent plus rapidement et plus
                près du prix demandé.
              </p>
              <p style={answerStyle}>
                Le mandat simple reste pertinent si vous souhaitez conserver la main ou tester
                plusieurs agences. Nous{' '}
                <Link href="/contact" style={linkStyle}>
                  discutons avec vous
                </Link>{' '}
                du format le plus adapté à votre projet et à votre bien.
              </p>
            </FAQItem>

            <FAQItem id="q5" question="Quels sont les honoraires d'agence pratiqués à Hyères ?">
              <p style={answerStyle}>
                En France, les honoraires d&apos;agence sont libres mais strictement encadrés :
                chaque agence doit afficher son barème de manière transparente, TTC, en vitrine et
                sur son site internet (loi Hoguet). La moyenne nationale se situe entre 5 et 7 %
                du prix de vente selon les études de marché, avec une moyenne de{' '}
                <strong style={{ color: '#1B3A6B' }}>5,78 %</strong> relevée par l&apos;Autorité
                de la concurrence.
              </p>
              <p style={answerStyle}>
                La pratique la plus répandue est que les honoraires soient à la charge du vendeur
                et inclus dans le prix affiché (mention « FAI », Frais d&apos;Agence Inclus). Cette
                configuration présente un avantage pour l&apos;acquéreur : les frais de notaire
                sont calculés sur le prix net vendeur, donc réduits. Le barème détaillé de Rivage
                Immobilier est disponible sur{' '}
                <Link href="/honoraires" style={linkStyle}>
                  notre page honoraires
                </Link>
                .
              </p>
              <p style={sourceStyle}>
                Sources : Autorité de la concurrence (moyenne 5,78 %) ; loi n° 70-9 du 2 janvier
                1970 dite loi Hoguet.
              </p>
            </FAQItem>

            <FAQItem
              id="q6"
              question="Quels diagnostics sont obligatoires avant de vendre un bien à Hyères ?"
            >
              <p style={answerStyle}>
                Avant toute mise en vente, le propriétaire doit faire réaliser un Dossier de
                Diagnostic Technique (DDT) par un diagnostiqueur certifié. À Hyères, les diagnostics
                les plus courants sont :
              </p>
              <ul style={listStyle}>
                {[
                  'Le DPE (diagnostic de performance énergétique)',
                  "L'état des risques et pollutions (ERP) — obligatoire, la commune est concernée par des risques naturels",
                  'Le diagnostic amiante pour les biens construits avant 1997',
                  'Le diagnostic plomb pour les biens construits avant 1949',
                  "Le diagnostic gaz et électricité si les installations ont plus de 15 ans",
                  "Le diagnostic termites — Hyères est en zone concernée par arrêté préfectoral",
                  'Le mesurage Loi Carrez pour les lots en copropriété',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Le coût total varie généralement entre 400 et 800 € pour un appartement, et
                500 à 1 200 € pour une maison. Un DPE défavorable (F ou G) a un impact direct
                sur le prix de vente.
              </p>
              <p style={sourceStyle}>
                Sources : Ministère de la Transition Écologique ; arrêté préfectoral Var pour la
                zone termites.
              </p>
            </FAQItem>

            <FAQItem
              id="q7"
              question="Faut-il faire des travaux avant de vendre son bien à Hyères ?"
            >
              <p style={answerStyle}>
                La réponse dépend du type de travaux et de l&apos;écart entre leur coût et leur
                retour sur valeur à la revente. Trois cas se présentent généralement :
              </p>
              <ul style={listStyle}>
                {[
                  'Les travaux de rafraîchissement (peinture, petites réparations, nettoyage approfondi) sont presque toujours rentables. Pour quelques centaines d\'euros, ils transforment la perception du bien et accélèrent la vente.',
                  'Les travaux lourds (cuisine, salle de bains, rénovation énergétique) sont rarement rentables à 100 % sur le prix de vente, mais peuvent faire la différence si le bien a un DPE défavorable (F ou G).',
                  'Le home staging léger (dépersonnalisation, désencombrement, mise en valeur des volumes) est systématiquement recommandé : il ne coûte presque rien et améliore significativement la qualité des photos et l\'impression en visite.',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Notre recommandation : ne jamais engager de travaux lourds sans avoir validé le
                positionnement de votre bien avec un professionnel. Un acquéreur préfère souvent
                acheter moins cher et rénover à son goût.
              </p>
            </FAQItem>
          </div>
        </div>

        {/* Bloc 2 — Acheter */}
        <div id="acheter-hyeres" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Bloc 2 — 7 questions
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,169,110,0.2)' }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl mb-2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#1B3A6B',
            }}
          >
            Acheter à Hyères et sur la Côte Varoise
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}
          >
            Quartiers, prix au m², étapes de l&apos;achat, frais de notaire et contraintes littorales.
          </p>

          <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            <FAQItem
              id="q8"
              question="Quels sont les quartiers les plus recherchés à Hyères ?"
            >
              <p style={answerStyle}>
                Hyères présente une diversité rare pour une ville de sa taille, avec des quartiers
                aux atmosphères et aux prix très différents :
              </p>
              <ul style={listStyle}>
                {[
                  'Le centre-ville historique et médiéval — ruelles piétonnes, architecture provençale, commerces de proximité. Recherché pour la résidence principale et le pied-à-terre.',
                  'Costebelle et les hauteurs — villas avec vues panoramiques sur la baie. Segment haut de gamme.',
                  'La Capte — quartier balnéaire sur la double presqu\'île, pins parasols, plage de sable. Recherché pour la résidence secondaire.',
                  'Giens et la presqu\'île — biens vue mer, accès aux plages de l\'Almanarre et de la Badine, port d\'embarquement pour Porquerolles.',
                  'L\'Almanarre — bord de mer, plage emblématique, spot de kitesurf. Résidentiel prisé.',
                  'Les Salins et Ayguade — quartiers plus confidentiels côté est, proches de la mer et du port.',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Chaque quartier a sa logique de prix et sa clientèle. Nous vous orientons selon
                votre projet lors d&apos;un échange préalable. Consultez{' '}
                <Link href="/biens/hyeres" style={linkStyle}>
                  nos biens à Hyères
                </Link>{' '}
                par secteur.
              </p>
            </FAQItem>

            <FAQItem
              id="q9"
              question="Quelle différence de prix entre Hyères, Carqueiranne, La Londe et Bormes-les-Mimosas ?"
            >
              <p style={answerStyle}>
                Les communes du littoral varois présentent des écarts de prix significatifs. À titre
                indicatif pour 2025 :
              </p>
              <ul style={listStyle}>
                {[
                  { label: 'Hyères', href: '/biens/hyeres', desc: 'environ 4 046 € / m² tous biens confondus (Observatoire PAP).' },
                  { label: 'Carqueiranne', href: '/biens/carqueiranne', desc: 'marché généralement plus élevé que Hyères, tiré par la proximité de Toulon et une offre villa vue mer recherchée.' },
                  { label: 'La Londe-les-Maures', href: '/biens/la-londe', desc: 'marché intermédiaire, prisé pour son vignoble, ses plages et son port.' },
                  { label: 'Bormes-les-Mimosas', href: '/biens/bormes', desc: "l'une des communes les plus chères du secteur, portée par son village perché classé, sa façade maritime et sa clientèle internationale." },
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    <Link href={item.href} style={linkStyle}>{item.label}</Link>
                    {' '}: {item.desc}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Ces ordres de grandeur masquent de fortes variations selon les micro-quartiers.
                Contactez-nous pour un point de marché détaillé sur la commune qui vous intéresse.
              </p>
              <p style={sourceStyle}>Sources : Observatoire PAP.fr (2025) ; données DVF consolidées.</p>
            </FAQItem>

            <FAQItem
              id="q10"
              question="Comment se déroule un achat immobilier à Hyères, étape par étape ?"
            >
              <p style={answerStyle}>
                L&apos;achat immobilier en France suit un processus encadré par la loi, identique à
                Hyères :
              </p>
              <ul style={listStyle}>
                {[
                  "L'offre d'achat — proposition écrite adressée au vendeur via l'agence. L'acceptation engage les deux parties à poursuivre.",
                  "Le compromis de vente — signé chez le notaire ou en agence, il fixe le prix, les conditions suspensives (financement, urbanisme), et la date de signature finale avec un dépôt de garantie (généralement 5 à 10 %).",
                  "Le délai de rétractation — l'acquéreur dispose de 10 jours calendaires après signature du compromis pour se rétracter sans justification et sans pénalité.",
                  "La levée des conditions suspensives — généralement 45 à 60 jours pour obtenir l'offre de prêt et vérifier les documents d'urbanisme.",
                  "La signature de l'acte authentique — chez le notaire, 2 à 3 mois après le compromis. Paiement du solde, remise des clés, transfert de propriété.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8, fontWeight: 600 }}>{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Le délai total entre offre acceptée et remise des clés est généralement de{' '}
                <strong style={{ color: '#1B3A6B' }}>3 à 4 mois</strong>. Des questions ?{' '}
                <Link href="/contact" style={linkStyle}>Contactez-nous</Link>.
              </p>
            </FAQItem>

            <FAQItem
              id="q11"
              question="Combien coûtent les frais de notaire pour un achat à Hyères ?"
            >
              <p style={answerStyle}>
                Les frais improprement appelés « frais de notaire » comprennent en réalité, pour
                l&apos;essentiel, des droits et taxes reversés à l&apos;État et aux collectivités
                locales (environ 80 %), auxquels s&apos;ajoutent les émoluments du notaire et
                divers débours. Pour un achat dans l&apos;ancien, ces frais représentent environ{' '}
                <strong style={{ color: '#1B3A6B' }}>7,5 à 8,5 %</strong> du prix de vente selon
                les Notaires de France.
              </p>
              <p style={answerStyle}>
                Exemple concret : pour un appartement à Hyères acheté 400 000 €, les frais de
                notaire s&apos;élèveront à environ{' '}
                <strong style={{ color: '#1B3A6B' }}>30 000 à 34 000 €</strong>. Pour un bien neuf
                (moins de 5 ans ou VEFA), ces frais sont réduits à environ 2 à 3 % du prix.
              </p>
              <p style={answerStyle}>
                Depuis juin 2025, certains départements ont augmenté leur part de droits de
                mutation, ce qui peut faire évoluer légèrement ces pourcentages. Nous vous
                communiquons un calcul précis adapté à votre projet avant la signature de l&apos;offre.
              </p>
              <p style={sourceStyle}>
                Sources : Notaires de France ; Direction générale des Finances publiques.
              </p>
            </FAQItem>

            <FAQItem
              id="q12"
              question="Quels risques naturels vérifier avant d'acheter à Hyères (inondation, incendie, submersion) ?"
            >
              <p style={answerStyle}>
                Hyères est concernée par plusieurs risques naturels qu&apos;il est essentiel de
                vérifier avant tout achat :
              </p>
              <ul style={listStyle}>
                {[
                  "Plan de Prévention des Risques Inondation (PPRI) pour les zones proches des cours d'eau (Gapeau, Roubaud).",
                  "Plan de Prévention des Risques Incendie de Forêt (PPRIF) pour les secteurs boisés (Maurettes, massif des Maures).",
                  "Zones de submersion marine sur le littoral bas (double presqu'île de Giens, salins).",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Ces informations sont obligatoirement fournies à l&apos;acquéreur via l&apos;État
                des Risques et Pollutions (ERP), document annexé au compromis de vente. Avant toute
                offre, nous recommandons de consulter le site{' '}
                <a
                  href="https://www.georisques.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Géorisques (georisques.gouv.fr)
                </a>{' '}
                et de poser des questions précises au notaire.
              </p>
              <p style={sourceStyle}>
                Sources : Géorisques (MTECT) ; PLU de la commune de Hyères ; arrêtés préfectoraux
                du Var.
              </p>
            </FAQItem>

            <FAQItem
              id="q13"
              question="Qu'est-ce que la loi Littoral et comment s'applique-t-elle à Hyères ?"
            >
              <p style={answerStyle}>
                La loi Littoral (loi n° 86-2 du 3 janvier 1986) encadre l&apos;urbanisme et la
                construction sur les communes littorales françaises, dont Hyères fait partie. Elle
                poursuit trois objectifs : protéger les espaces naturels remarquables, préserver
                les coupures d&apos;urbanisation et maintenir l&apos;accès du public au rivage.
              </p>
              <p style={answerStyle}>
                Concrètement, cette loi se traduit à Hyères par plusieurs contraintes : la bande
                des 100 mètres à partir du rivage est en principe inconstructible hors zones déjà
                urbanisées, l&apos;extension de l&apos;urbanisation doit se faire en continuité
                avec les zones déjà bâties, et les espaces proches du rivage sont soumis à des
                règles d&apos;urbanisme renforcées.
              </p>
              <p style={answerStyle}>
                Pour un acquéreur, cela a des implications concrètes : un terrain situé en zone
                naturelle ne sera pas constructible, une extension de maison peut être refusée même
                sur un terrain déjà bâti, et certaines piscines ou annexes peuvent nécessiter des
                autorisations spécifiques. La vérification du zonage au PLU de Hyères est
                indispensable avant tout projet.
              </p>
              <p style={sourceStyle}>
                Sources : Loi n° 86-2 du 3 janvier 1986 dite loi Littoral ; PLU de la commune de
                Hyères.
              </p>
            </FAQItem>

            <FAQItem
              id="q14"
              question="Pourquoi investir dans l'immobilier à Hyères plutôt que sur la Côte d'Azur ?"
            >
              <p style={answerStyle}>
                Hyères offre un positionnement distinct de la Côte d&apos;Azur classique (Cannes,
                Nice, Saint-Tropez) qui attire une clientèle spécifique. Trois atouts ressortent :
              </p>
              <ul style={listStyle}>
                {[
                  "Un rapport qualité-prix plus favorable — les prix au m² à Hyères restent significativement en-deçà de ceux de Saint-Tropez, Ramatuelle ou Cap d'Antibes, pour un littoral de qualité équivalente.",
                  "Un cadre préservé — environnement naturel exceptionnel avec ses îles (Porquerolles, Port-Cros, Le Levant, toutes en Parc National), ses salins, ses plages de sable et son arrière-pays viticole. La pression touristique y est plus maîtrisée.",
                  "Une accessibilité solide — l'aéroport de Toulon-Hyères propose des liaisons avec Paris, Londres (saisonnier) et plusieurs villes européennes. La gare TGV est en centre-ville, avec Paris à 4 h.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Hyères n&apos;est pas un substitut bon marché à la Côte d&apos;Azur, c&apos;est
                un positionnement différent : un littoral plus authentique, plus résidentiel et
                plus discret, qui séduit une clientèle en quête de qualité de vie et de valeur de
                long terme. Consultez{' '}
                <Link href="/biens" style={linkStyle}>
                  nos biens disponibles
                </Link>
                .
              </p>
            </FAQItem>
          </div>
        </div>

        {/* Bloc 3 — Acheter depuis l'étranger */}
        <div id="acheter-etranger" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Bloc 3 — 6 questions
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,169,110,0.2)' }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl mb-2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#1B3A6B',
            }}
          >
            Acheter à Hyères depuis l&apos;étranger
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}
          >
            Cadre juridique, fiscalité spécifique, crédit, signature à distance et accompagnement
            bilingue.
          </p>

          <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            <FAQItem
              id="q15"
              question="Un acquéreur étranger peut-il acheter un bien à Hyères ?"
            >
              <p style={answerStyle}>
                Oui, il n&apos;existe aucune restriction de nationalité pour acheter un bien
                immobilier en France. Un acquéreur étranger, qu&apos;il soit ressortissant de
                l&apos;Union européenne ou d&apos;un pays tiers, peut acheter librement un
                appartement ou une maison à Hyères, dans les mêmes conditions qu&apos;un citoyen
                français.
              </p>
              <p style={answerStyle}>
                Quelques démarches complémentaires sont toutefois à prévoir pour un non-résident :
                justification de l&apos;origine des fonds (obligation anti-blanchiment, contrôle
                TRACFIN assuré par le notaire), éventuelle traduction des documents officiels, et
                désignation d&apos;un représentant fiscal si la revente fait ressortir une
                plus-value taxable au-delà de certains seuils.
              </p>
              <p style={answerStyle}>
                Aucun visa, aucun titre de séjour, aucune résidence en France ne sont requis pour
                devenir propriétaire. L&apos;achat peut se faire à distance, avec signature par
                procuration si nécessaire.
              </p>
              <p style={sourceStyle}>Sources : Notaires de France ; Code général des impôts.</p>
            </FAQItem>

            <FAQItem
              id="q16"
              question="Un non-résident peut-il obtenir un crédit immobilier pour acheter à Hyères ?"
            >
              <p style={answerStyle}>
                Oui, plusieurs banques françaises proposent des crédits immobiliers aux
                non-résidents. Les conditions sont généralement plus strictes que pour un résident :
                apport personnel souvent exigé entre{' '}
                <strong style={{ color: '#1B3A6B' }}>20 et 30 %</strong> du prix, durée de prêt
                plafonnée à 20 ans, taux légèrement supérieurs, et dossier financier solide.
              </p>
              <p style={answerStyle}>
                Les banques les plus actives sur ce segment sont les banques privées (BNP Paribas
                Wealth Management, Banque Transatlantique, CIC Banque Privée, HSBC) et certaines
                banques de détail ayant un desk international. Depuis 2023-2024, plusieurs
                établissements ont assoupli leurs critères, avec des offres pouvant aller jusqu&apos;à
                85 % de LTV (loan-to-value) selon Knight Frank.
              </p>
              <p style={answerStyle}>
                Il est recommandé d&apos;obtenir un accord de principe de financement avant de
                formuler une offre. Nous pouvons vous orienter vers des courtiers spécialisés dans
                le financement international.
              </p>
              <p style={sourceStyle}>
                Sources : Douglas Elliman / Knight Frank Prime France Report ; Banque Transatlantique.
              </p>
            </FAQItem>

            <FAQItem
              id="q17"
              question="Quelle fiscalité pour un non-résident propriétaire à Hyères (taxe foncière, IFI, plus-value) ?"
            >
              <p style={answerStyle}>
                Un non-résident fiscal propriétaire d&apos;un bien à Hyères est soumis à plusieurs
                impositions françaises :
              </p>
              <ul style={listStyle}>
                {[
                  "Taxe foncière — due chaque année par le propriétaire au 1er janvier, quel que soit son pays de résidence.",
                  "Impôt sur la Fortune Immobilière (IFI) — applicable si la valeur nette du patrimoine immobilier détenu en France dépasse 1,3 million d'euros au 1er janvier. Taux progressifs de 0,5 à 1,5 % selon les tranches.",
                  "Revenus locatifs — si le bien est loué, les revenus sont imposables en France au taux minimum de 20 % (ou 30 % au-delà d'un certain seuil), plus prélèvements sociaux.",
                  "Plus-value à la revente — 19 % d'impôt sur le revenu + prélèvements sociaux. Abattements pour durée de détention : exonération totale d'IR après 22 ans, de prélèvements sociaux après 30 ans.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Chaque situation dépend du pays de résidence et des conventions fiscales
                bilatérales. Il est impératif de consulter un notaire ou un avocat fiscaliste pour
                votre situation personnelle.
              </p>
              <p style={sourceStyle}>
                Sources : impots.gouv.fr ; Code général des impôts ; ASFE.
              </p>
            </FAQItem>

            <FAQItem
              id="q18"
              question="Comment se déroule une signature à distance pour un achat à Hyères ?"
            >
              <p style={answerStyle}>
                La signature à distance est une pratique courante et sécurisée en France,
                particulièrement depuis la généralisation de l&apos;acte authentique électronique
                chez les notaires. Trois modalités sont possibles :
              </p>
              <ul style={listStyle}>
                {[
                  "La procuration notariée — l'acquéreur désigne une personne de confiance pour signer en son nom. La procuration est établie chez un notaire français, auprès d'un consulat de France à l'étranger, ou chez un notaire local avec apostille.",
                  "La signature électronique à distance (AAED) — l'acte authentique électronique à distance permet à l'acquéreur de signer en visioconférence sécurisée, sans déplacement. Ce service se généralise chez les notaires français.",
                  "Le déplacement ponctuel — certains acquéreurs préfèrent venir une fois pour la signature finale et gérer les autres étapes à distance.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Rivage Immobilier accompagne les acquéreurs internationaux à chaque étape, coordonne
                les échanges avec le notaire en français et en anglais, et organise les visites
                virtuelles du bien si nécessaire.
              </p>
              <p style={sourceStyle}>
                Sources : Conseil Supérieur du Notariat ; décret n° 2020-395 du 3 avril 2020.
              </p>
            </FAQItem>

            <FAQItem
              id="q19"
              question="L'achat d'une résidence secondaire à Hyères ouvre-t-il droit à un visa ?"
            >
              <p style={answerStyle}>
                Non, devenir propriétaire d&apos;un bien immobilier en France n&apos;ouvre aucun
                droit automatique à un visa ou à un titre de séjour. La France ne propose pas de
                « visa d&apos;investisseur immobilier » équivalent à ce qui existe au Portugal, en
                Grèce ou en Espagne (golden visa).
              </p>
              <p style={answerStyle}>
                Cependant, la propriété d&apos;un bien peut constituer un élément parmi d&apos;autres
                dans certaines démarches :
              </p>
              <ul style={listStyle}>
                {[
                  "Visa de long séjour visiteur (VLS-TS « visiteur ») — pour les séjours de plus de 3 mois sans activité professionnelle, sous condition de ressources. La propriété d'un logement facilite la démonstration de capacité à résider dignement.",
                  "Visa de court séjour Schengen — pour les séjours de moins de 90 jours sur une période de 180 jours. Aucun lien avec la propriété.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Pour toute démarche visa ou titre de séjour, consultez{' '}
                <a
                  href="https://france-visas.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  france-visas.gouv.fr
                </a>{' '}
                ou un avocat spécialisé en droit des étrangers.
              </p>
              <p style={sourceStyle}>Sources : france-visas.gouv.fr ; CESEDA.</p>
            </FAQItem>

            <FAQItem
              id="q20"
              question="Pourquoi choisir une agence bilingue pour acheter à Hyères ?"
            >
              <p style={answerStyle}>
                L&apos;achat d&apos;un bien immobilier en France depuis l&apos;étranger implique
                un vocabulaire juridique et fiscal spécifique (compromis de vente, condition
                suspensive, acte authentique, plus-value, IFI, loi Littoral, loi Carrez) qui peut
                être déroutant pour un acquéreur non-francophone, même expérimenté dans
                l&apos;immobilier international.
              </p>
              <p style={answerStyle}>Une agence bilingue apporte trois avantages concrets :</p>
              <ul style={listStyle}>
                {[
                  "La compréhension exacte des termes et engagements — un compromis mal compris peut engager juridiquement l'acquéreur sur des clauses qu'il n'avait pas anticipées.",
                  "La coordination fluide avec le notaire, le banquier et les diagnostiqueurs — l'agence sert de point de contact unique, traduit les échanges et les documents.",
                  "Le conseil culturel et contextuel — les pratiques immobilières françaises (rôle central du notaire, délai de rétractation, diagnostics obligatoires, négociation) diffèrent de celles des pays anglo-saxons.",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#C9A96E', marginRight: 8 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={answerStyle}>
                Rivage Immobilier propose un accompagnement bilingue français-anglais à toutes les
                étapes, de la première visite à la remise des clés.{' '}
                <Link href="/estimation-immobiliere-hyeres" style={linkStyle}>
                  Demandez votre estimation gratuite
                </Link>
                .
              </p>
            </FAQItem>
          </div>
        </div>

        {/* CTA final */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: '#1B3A6B',
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Votre projet immobilier
          </p>
          <h2
            className="text-3xl sm:text-4xl text-white mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            Une question non couverte ?
          </h2>
          <p
            className="text-sm mb-8"
            style={{
              color: 'rgba(232,213,176,0.7)',
              fontFamily: 'var(--font-jakarta)',
              lineHeight: 1.8,
            }}
          >
            Notre équipe répond à toutes vos questions sur l&apos;achat et la vente
            immobilière à Hyères et sur la Côte Varoise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-[0.99]"
              style={{
                background: '#C9A96E',
                color: '#1B3A6B',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              Nous contacter
            </Link>
            <Link
              href="/estimation-immobiliere-hyeres"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-[0.99]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#E8D5B0',
                border: '1px solid rgba(201,169,110,0.3)',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              Estimation gratuite
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// Shared styles (defined as objects to avoid repetition)
const answerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-jakarta)',
  fontSize: '0.9rem',
  lineHeight: 1.85,
  color: '#4A4845',
  marginBottom: '0.85rem',
}

const sourceStyle: React.CSSProperties = {
  fontFamily: 'var(--font-jakarta)',
  fontSize: '0.75rem',
  color: '#9A9590',
  lineHeight: 1.7,
  marginTop: '0.75rem',
  fontStyle: 'italic',
}

const linkStyle: React.CSSProperties = {
  color: '#1B3A6B',
  textDecoration: 'underline',
  textDecorationColor: 'rgba(201,169,110,0.5)',
  textUnderlineOffset: '3px',
}

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '0.75rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
}

const listItemStyle: React.CSSProperties = {
  fontFamily: 'var(--font-jakarta)',
  fontSize: '0.9rem',
  lineHeight: 1.75,
  color: '#4A4845',
  display: 'flex',
  alignItems: 'flex-start',
}
