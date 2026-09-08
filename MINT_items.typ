#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 1.8cm, left: 1.9cm, right: 1.9cm),
  footer: context [
    #set text(8pt, fill: luma(45%))
    #grid(
      columns: (1fr, auto),
      align: (left, right),
      [The Mint: Multimodal Interoception Questionnaire (33 items)],
      [#counter(page).display("1 / 1", both: true)],
    )
  ],
)

#set text(font: ("Segoe UI", "Arial"), size: 9.7pt, lang: "en")
#set par(justify: false, leading: 0.55em)
#show link: set text(fill: rgb("#0b6e4f"))

#let c-awa = rgb("#1b7f79") // Interoceptive Awareness
#let c-def = rgb("#b5541f") // Interoceptive Deficit
#let c-vis = rgb("#3f5fa8") // Visceroception

// ---------------------------------------------------------------- header ----
#block(
  width: 100%,
  inset: (x: 12pt, y: 10pt),
  radius: 4pt,
  fill: rgb("#f2f8f5"),
  stroke: (left: 3pt + rgb("#0b6e4f")),
  [
    #grid(
      columns: (1fr, auto),
      align: (left + horizon, right + horizon),
      column-gutter: 10pt,
      [
        #text(16pt, weight: "bold", fill: rgb("#0b4a35"))[
          The Mint: Multimodal Interoception Questionnaire
        ]
        #v(2pt)
        #text(10pt, fill: luma(35%))[
          Final 33-item version · 11 facets · 3 metaclusters
        ]
      ],
      box(radius: 3pt, clip: true, image("logo.png", width: 52pt)),
    )
  ],
)

#v(6pt)

#block(inset: (left: 2pt), text(8.6pt, fill: luma(35%))[
  Makowski, D., Neves, A., Benn, E., Bennett, M., & Poerio, G. (2026).
  #emph[The Mint Scale: A Fresh Validation of the Multimodal Interoception
  Questionnaire and Comparison to the MAIA, BPQ and IAS] \[Preprint\].
  #link("https://realitybending.github.io/InteroceptionScale/paper/manuscript.pdf")
])

#v(7pt)

*Instructions given to respondents.* "Please answer the following questions based on
how accurately each statement describes you in general."

*Response scale.* 7-point Likert scale, from 0 = _Disagree_ to 6 = _Agree_
(0 · 1 · 2 · 3 · 4 · 5 · 6). No items are reverse-scored.

*Scoring.* Facet scores are the *average* of their 3 items. Metacluster scores are the
*average of all the items* belonging to that metacluster (i.e., 9 items for
Interoceptive Awareness, 15 for Interoceptive Deficit, 9 for Visceroception).

*Administration.* Items are presented in a *random order*; the grouping below is for
scoring purposes only and should not be shown to respondents. An attention-check item
may be interleaved ("I can always accurately answer to the extreme left on this
question to show that I am reading it").

#v(4pt)
#line(length: 100%, stroke: 0.5pt + luma(80%))
#v(2pt)

// ------------------------------------------------------------- structure ----
#let pill(col, body) = box(
  inset: (x: 5pt, y: 2pt),
  radius: 2.5pt,
  fill: col.lighten(85%),
  text(8.5pt, weight: "bold", fill: col.darken(15%), body),
)

#block(breakable: false)[
  #text(11pt, weight: "bold")[Hierarchical structure]
  #v(3pt)
  #set text(8.7pt)
  #table(
    columns: (auto, 1fr),
    stroke: none,
    inset: (x: 4pt, y: 3.5pt),
    row-gutter: 1pt,
    pill(c-awa)[Interoceptive Awareness],
    [Expulsion Accuracy (ExAc) · Relaxation Awareness (RelA) · Sexual Arousal Sensitivity (SexS)],
    pill(c-def)[Interoceptive Deficit],
    [Cardiorespiratory Confusion (CaCo) · Urointestinal Inaccuracy (UrIn) · Dermal
      Hypersensitivity (Derm) · Satiety Noticing (Sati) · Olfactory Contribution (Olfa)],
    pill(c-vis)[Visceroception],
    [Respiroception (Resp) · Cardioception (Card) · Gastroception (Gast)],
  )
]

#v(8pt)

// ----------------------------------------------------------------- items ----
#let meta-head(col, title, sub) = block(
  width: 100%,
  inset: (x: 9pt, y: 6pt),
  radius: 3pt,
  fill: col.lighten(88%),
  breakable: false,
  [
    #text(12pt, weight: "bold", fill: col.darken(25%))[#title]
    #h(6pt)
    #text(8.5pt, fill: col.darken(5%))[#sub]
  ],
)

#let facet(col, code, name, ..rows) = block(breakable: false, above: 8pt, below: 3pt)[
  #text(10pt, weight: "bold", fill: col.darken(20%))[#name]
  #h(4pt)
  #box(
    inset: (x: 4pt, y: 1pt),
    radius: 2pt,
    fill: col.lighten(88%),
    text(8pt, weight: "bold", fill: col.darken(20%), raw(code)),
  )
  #v(-3.5pt)
  #set text(9.5pt)
  #table(
    columns: (auto, 1fr),
    stroke: none,
    inset: (x: 4pt, y: 3pt),
    align: (right + top, left + top),
    fill: (_, y) => if calc.odd(y) { luma(97.5%) },
    ..rows.pos().map(r => (
      text(8.5pt, fill: col.darken(10%), weight: "bold", raw(r.at(0))),
      r.at(1),
    )).flatten()
  )
]

// ============================================ 1. Interoceptive Awareness ====
#meta-head(c-awa)[Interoceptive Awareness][9 items · 3 facets]

#facet(c-awa, "MINT_ExAc", "Expulsion Accuracy",
  ("1", [I can always accurately feel when I am about to fart]),
  ("2", [I can always accurately feel when I am about to sneeze]),
  ("3", [I can always accurately feel when I am about to burp]),)

#facet(c-awa, "MINT_RelA", "Relaxation Awareness",
  ("4", [I always feel in my body if I am relaxed]),
  ("5", [I always know when I am relaxed]),
  ("6", [My body is always in the same specific state when I am relaxed]),)

#facet(c-awa, "MINT_SexS", "Sexual Arousal Sensitivity",
  ("7", [During sex or masturbation, I often feel very strong sensations coming from my
    genital areas]),
  ("8", [My genital organs are very sensitive to pleasant stimulations]),
  ("9", [When I am sexually aroused, I often notice specific sensations in my genital
    area (e.g., tingling, warmth, wetness, stiffness, pulsations)]),)

#v(9pt)

// =============================================== 2. Interoceptive Deficit ====
#meta-head(c-def)[Interoceptive Deficit][15 items · 5 facets]

#facet(c-def, "MINT_CaCo", "Cardiorespiratory Confusion",
  ("10", [Sometimes my breathing becomes erratic or shallow and I often don't know why]),
  ("11", [I often feel like I can't get enough oxygen by breathing normally]),
  ("12", [Sometimes my heart starts racing and I often don't know why]),)

#facet(c-def, "MINT_Urin", "Urointestinal Inaccuracy",
  ("13", [I sometimes feel like I need to urinate or defecate but when I go to the
    bathroom I produce less than I expected]),
  ("14", [I often feel the need to urinate even when my bladder is not full]),
  ("15", [Sometimes I am not sure whether I need to go to the toilet or not (to urinate
    or defecate)]),)

#facet(c-def, "MINT_Derm", "Dermal Hypersensitivity",
  ("16", [In general, my skin is very sensitive]),
  ("17", [My skin is susceptible to itchy fabrics and materials]),
  ("18", [I can notice even very subtle stimulations to my skin (e.g., very light
    touches)]),)

#facet(c-def, "MINT_Sati", "Satiety Noticing",
  ("19", [I don't always feel the need to eat until I am really hungry]),
  ("20", [Sometimes I don't realise I was hungry until I ate something]),
  ("21", [I don't always feel the need to drink until I am really thirsty]),)

#facet(c-def, "MINT_Olfa", "Olfactory Contribution",
  ("22", [I often check the smell of my armpits]),
  ("23", [I often check the smell of my own breath]),
  ("24", [I often check the smell of my farts]),)

#v(9pt)

// ======================================================= 3. Visceroception ====
#meta-head(c-vis)[Visceroception][9 items · 3 facets]

#facet(c-vis, "MINT_Resp", "Respiroception",
  ("25", [In general, I am very sensitive to changes in my breathing]),
  ("26", [I can notice even very subtle changes in my breathing]),
  ("27", [I am always very aware of how I am breathing, even when I am calm]),)

#facet(c-vis, "MINT_Card", "Cardioception",
  ("28", [In general, I am very sensitive to changes in my heart rate]),
  ("29", [I often notice changes in my heart rate]),
  ("30", [I can notice even very subtle changes in the way my heart beats]),)

#facet(c-vis, "MINT_Gast", "Gastroception",
  ("31", [I can notice even very subtle changes in what my stomach is doing]),
  ("32", [In general, I am very sensitive to what my stomach is doing]),
  ("33", [I am always very aware of what my stomach is doing, even when I am calm]),)

// ------------------------------------------------------------- dendrogram ----
#pagebreak()

#text(11pt, weight: "bold")[Structure of the 33 items]

#v(1fr)

#align(center, image("study2/analysis/figures/fig1b.png", width: 100%))

#v(6pt)

#text(8.5pt, fill: luma(40%))[
  Hierarchical clustering of the final 33 items (Study 2, N = 737). Each leaf is an
  item, labelled by its facet and item number; node size reflects the item's cluster
  centrality (the Exploratory Graph Analysis equivalent of a factor loading). The three
  inner nodes are the metaclusters. This structure replicated the one obtained with
  hierarchical Exploratory Graph Analysis, supporting its consistency across methods.
]

#v(1fr)

#line(length: 100%, stroke: 0.5pt + luma(80%))
#v(3pt)

#text(8.2pt, fill: luma(40%))[
  Item variable names follow the pattern `MINT_<Facet>_<item number>` (e.g.,
  `MINT_ExAc_1`, `MINT_Gast_33`), matching the experiment code and the analysis
  scripts. Internal consistency of the metaclusters in Study 2 (N = 737): Interoceptive
  Awareness $omega$ = 0.85, Interoceptive Deficit $omega$ = 0.74, Visceroception
  $omega$ = 0.88. Note that the _Olfa_ facet showed lower structural stability within
  the _Deficit_ metacluster and warrants further research.
  #linebreak()
  Reference: Makowski et al., _Introducing the Mint: Validation of a Fresh Multimodal
  Interoception Questionnaire_. #link("https://github.com/RealityBending/InteroceptionScale")[github.com/RealityBending/InteroceptionScale]
]
