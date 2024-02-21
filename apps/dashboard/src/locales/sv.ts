export default {
  categories: {
    meals: "Mat",
    travel: "Resa",
    software: "Mjukvara",
    office_supplies: "Kontorsmaterial",
    fees: "Avgifter",
    internet_and_telephone: "Internet och telefon",
    rent: "Hyra",
    equipment: "Utrustning",
    salary: "Lön",
    income: "Inkomst",
    transfer: "Överföring",
    activity: "Aktivitet",
    other: "Annan",
    uncategorized: "Okategoriserad",
    taxes: "Skatter",
    facilities_expenses: "Anläggningskostnader",
  },
  transaction_methods: {
    card_purchase: "Kortbetalning",
    payment: "Betalning",
    card_atm: "Kort bankomat",
    transfer: "Överföring",
    other: "Annan",
  },
  language: {
    title: "Språk",
    description: "Ändra språket som används i användargränssnittet.",
    placeholder: "Välj språk",
  },
  languages: {
    en: "Engelska",
    sv: "Svenska",
  },
  inbox_filter: {
    all: "Alla",
    completed: "Slutförda",
  },
  spending_period: {
    this_month: "Den här månaden",
    last_month: "Förra månaden",
    this_year: "Det här året",
    last_year: "Förra året",
  },
  transactions_period: {
    all: "All",
    income: "Inkomst",
    outcome: "Utgifter",
  },
  chart_type: {
    profit: "Vinst",
    revenue: "Omsättning",
  },
  folders: {
    all: "Alla",
    exports: "Exporteringar",
  },
  mfa_status: {
    verified: "Verifierad",
    unverified: "Overifierad",
  },
  roles: {
    owner: "Ägare",
    member: "Medlem",
  },
  tracker_status: {
    in_progress: "Pågående",
    completed: "Färdig",
  },
} as const;
