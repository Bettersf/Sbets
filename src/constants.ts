// src\constants.ts
import { PublicKey } from "@solana/web3.js";
import Whitepaper from "../../public/SBETS V1 Whitepaper.pdf";


/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          PLATFORM FEES               │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05; // 5% !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.01; // 0.1%

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.005; // 1%

// Toggle live toast events - (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "https://t.me/SBetsCasino",
    title: "Telegram",
  },
  {
    href: "https://t.me/SbetsAnnouncements",
    title: "Announcements",
  },
  {
    href: "SBETS V1 Whitepaper.pdf",
    title: "Whitepaper(TBA)",
  },
  {
    href: "https://explorer.gamba.so/platform/Avh5aRG3N3uuDNYETLAnhwQ9krSmVPvjcHZkY6FEAVC8",
    title: "Explorer",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://x.com/SbetsSolana",
  title: "© 2024 SBets",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "SBets - Casino",
  description:
    "Onchain Solana Casino.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://s-bets.fun",
    title: "SBets - Casino",
    description:
      "Onchain Solana Casino.",
    images: [
      {
        url: "https://s-bets.fun/seo.png",
        alt: "SBets - Casino",
      },
    ],
    site_name: "SBets - Casino",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://twitter.com/",
    handle: "@Sbets",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [

  {
    mint: new PublicKey("FakeCDoCX1NWywV9m63fk7gmV9S4seMoyqzcNYEmRYjy"),
    name: "Test Token",
    symbol: "FAKE",
    image: "/fakemoney.png",
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // GUAC
  {
    mint: new PublicKey("AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR"),
    name: "Guacamole",
    symbol: "GUAC",
    image:
      "https://bafkreiccbqs4jty2yjvuxp5x7gzgepquvv657ttauaqgxfhxghuz5us54u.ipfs.nftstorage.link/",
    decimals: 5,
    baseWager: 2000000e5,
  },
  
  // Jupiter
   {
     mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
     name: "Jupiter",
     symbol: "JUP",
     image: "https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7374617469632e6a75702e61672f6a75702f69636f6e2e706e67",
     decimals: 6,
     baseWager: 0.01e9,
   },

  // BONK
   {
     mint: new PublicKey("DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"),
     name: "BONK",
     symbol: "BONK",
     image: "https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f617277656176652e6e65742f685169505a4f73525a584758424a645f3832506856646c4d5f68414373545f713677717766356353593749",
     decimals: 5,
     baseWager: 0.01e5,
   },

  // WormHOle Token
   {
     mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
     name: "WormHole",
     symbol: "W",
     image: "https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f776f726d686f6c652e636f6d2f746f6b656e2e706e67",
     decimals: 6,
     baseWager: 0.01e6,
   },

  // Add New Public pool
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },

  // Add New Private pool
  // {
  //   mint: new PublicKey(""),
  //   poolAuthority: new PublicKey(""), // REQUIRED FOR PRIVATE POOLS ONLY
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
