#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const argv = require("yargs").argv;

const lang = argv.lang || "en";

const options = {
  padding: 1,
  margin: 2,
  borderStyle: "double",
  borderColor: "#4AF626",
};

const data = {
  logo: chalk.white(`     8888888b.            .d888                  888      888b     d888 d8b 888 888                  
  888   Y88b          d88P"                   888      8888b   d8888 Y8P 888 888                  
  888    888          888                     888      88888b.d88888     888 888                  
  888   d88P  8888b.  888888 8888b.   .d88b.  888      888Y88888P888 888 888 888  .d88b.  888d888 
  8888888P"      "88b 888       "88b d8P  Y8b 888      888 Y888P 888 888 888 888 d8P  Y8b 888P"   
  888 T88b   .d888888 888   .d888888 88888888 888      888  Y8P  888 888 888 888 88888888 888     
  888  T88b  888  888 888   888  888 Y8b.     888      888   "   888 888 888 888 Y8b.     888     
  888   T88b "Y888888 888   "Y888888  "Y8888  888      888       888 888 888 888  "Y8888  888      `),
  name: chalk.white(" Rafael Miller /"),
  mail: {
    en: chalk.hex("#4AF626")("me@rafaelmiller.com"),
    pt: chalk.hex("#4AF626")("eu@rafaelmiller.com"),
  },
  pronoun: {
    en: chalk.white("(he/him/his)"),
    pt: chalk.white("(ele/dele)"),
  },
  work: {
    en: chalk.white("CTO @ FRST"),
    pt: chalk.white("CTO / FRST - Falconi Road of Skills and Talents"),
  },
  twitter: chalk.hex("#4AF626")("https://twitter.com/rafaelmmiller"),
  github: chalk.hex("#4AF626")("https://github.com/rafaelmmiller"),
  web: chalk.hex("#4AF626")("https://rafaelmiller.com"),
  npx: chalk.white("npx rafaelmiller"),
};

const defaultLabel = {
  en: {
    work: chalk.white.bold("      Work:"),
    twitter: chalk.white.bold("   Twitter:"),
    github: chalk.white.bold("    GitHub:"),
    web: chalk.white.bold("       Web:"),
    npx: chalk.white.bold("      Card:"),
  },
};

const label = {
  ...defaultLabel,
  pt: {
    ...defaultLabel.en,
    work: chalk.white.bold("  Trabalho:"),
    npx: chalk.white.bold("    Cartão:"),
  },
};

const output = `${data.logo}

${data.name} ${data.mail[lang]} ${data.pronoun[lang]}


${label[lang].work}  ${data.work[lang]}

${label[lang].web}  ${data.web}

${label[lang].twitter}  ${data.twitter}
${label[lang].github}  ${data.github}
${label[lang].unsplash}  ${data.unsplash}
${label[lang].picpay}  ${data.picpay}

${label[lang].npx}  ${data.npx}`;

console.clear();
console.log(`
`);
console.log(chalk.magenta(boxen(output, options)));
