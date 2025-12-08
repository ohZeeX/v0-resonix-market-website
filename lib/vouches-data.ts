export const BASE_VOUCHES = [
  // R6 Credits
  {
    service: "R6 Credits",
    text: "Got 60,480 R6 Credits for only $90! The cheapest I've found, transfer was quick and secure, 10/10.",
  },
  {
    service: "R6 Credits",
    text: "Paid $30 and got my 15,120 R6 Credits instantly. Resonix Market is the most reliable vendor for bulk credits.",
  },
  {
    service: "R6 Credits",
    text: "Just bought the massive 151,200 pack for $150. Saved a fortune, and the credit transfer took less than 10 minutes.",
  },
  {
    service: "COD Points",
    text: "Got 39,000 COD Points for $99.99. The best deal online! The points were loaded directly to my account fast.",
  },
  {
    service: "COD Points",
    text: "52,000 COD Points for $129.99 is unbeatable. No ban issues, and delivery was within the hour. Trusted seller.",
  },
  {
    service: "Robux",
    text: "Purchased the huge 500,000 Robux package for $499.99. Unbelievable price for that amount. Account details were secure.",
  },
  {
    service: "Robux",
    text: "100,000 Robux for $149.99 is a steal. The transfer was quick. Finally got all the items I wanted on Roblox!",
  },
  {
    service: "Headless & Korblox",
    text: "Headless & Korblox Account for $69.99. The account was clean, and I changed the email/password instantly. Highly recommend Resonix.",
  },
  {
    service: "Korblox 2.0 Account",
    text: "Korblox 2.0 Account for $99.99. Perfect condition. Saved hundreds of dollars compared to buying it manually.",
  },
  {
    service: "V-Bucks",
    text: "Bought 108,000 V-Bucks for $149.99. My account is stacked now. The delivery method is safe and instant.",
  },
  {
    service: "V-Bucks",
    text: "Got the 27,000 V-Bucks deal for $39.99. Worked perfectly! Best V-Bucks vendor I've found on Discord.",
  },
  {
    service: "Valorant Points",
    text: "Got 49,350 VP for $79.99. The code worked right away, no region issues. Saved enough money for two skins!",
  },
  {
    service: "Valorant Points",
    text: "The 250,000 VP bulk deal for $299.99 is incredible. Transfer was handled professionally and quickly.",
  },
]

export const USER_NAMES = [
  "Liam Nelson",
  "Olivia Henderson",
  "Jackson Williams",
  "Emma Rodriguez",
  "Noah Davis",
  "Sophia Martinez",
  "William Brown",
  "Isabella Garcia",
  "James Miller",
  "Ava Wilson",
  "Benjamin Moore",
  "Charlotte Taylor",
  "Elijah Anderson",
  "Amelia Thomas",
  "Lucas Jackson",
  "Mia White",
  "Henry Harris",
  "Harper Martin",
  "Alexander Clark",
  "Evelyn Lewis",
  "Daniel Walker",
  "Abigail Hall",
  "Matthew Allen",
  "Emily Young",
  "Jack Baker",
  "Chloe Scott",
  "David Adams",
  "Grace Green",
  "Ryan King",
  "Zoe Carter",
  "Nathan Wright",
  "Lily Perez",
  "Samuel Torres",
  "Avery Rivera",
  "Owen Gomez",
  "Victoria Flores",
  "Gabriel Cooper",
  "Addison Bell",
  "Andrew Murphy",
  "Scarlett Rogers",
  "Jaxon Bailey",
  "Penelope Cox",
  "Dylan Isaac",
  "Tyler Sanders",
  "xX_SniperElite_Xx",
  "MikeTango47",
  "Gaming_Dad_35",
  "Viper_Queen",
  "GhostlyTrader",
  "ApexLegend77",
  "ShadowHunter",
  "ToxicGamer21",
  "CodeBreaker_1",
  "TheMasterPro",
  "KingCrimson_99",
  "DarkSlayer",
  "StealthModeON",
  "AlphaPvP",
  "VoidRunner",
  "LegendaryMike",
  "R6S_Prodigy",
  "RobloxGeek88",
  "FN_Boss",
  "CodSkinsGuy",
  "ValorantKing",
  "Mikey_V",
  "TangoFoxtrot",
  "EchoDelta_23",
  "GamerGirl_95",
  "CyberPhoenix",
  "NeonSpecter",
  "ZeroLatency",
  "RaidBoss_EU",
  "SoloQ_Carry",
  "FastCashFlow",
  "CryptoLord",
  "DigitalNomad",
  "PixelWarrior",
]

export function generateUniqueUsername(index: number, availableNames: string[]): string {
  if (index < availableNames.length) {
    const randomIndex = Math.floor(Math.random() * availableNames.length)
    const selectedName = availableNames[randomIndex]
    availableNames.splice(randomIndex, 1)
    return selectedName.replace(/_/g, " ")
  } else {
    const fallbackName = USER_NAMES[index % USER_NAMES.length]
    return fallbackName.replace(/_/g, " ")
  }
}

export function generateTimeAgo(vouchIndex: number): string {
  if (vouchIndex < 20) {
    const hours = vouchIndex + 1
    return `${hours} hour${hours > 1 ? "s" : ""} ago`
  } else {
    const start = new Date(2025, 9, 1) // October 1
    const end = new Date(2025, 10, 1) // November 1
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return randomDate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }
}
