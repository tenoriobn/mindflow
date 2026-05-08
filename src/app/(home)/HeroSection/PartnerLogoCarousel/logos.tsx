import type { PartnerLogo } from './partnerLogoCarousel.type';
import AdobeLogo from 'public/icons/partner-logos/adobe.svg';
import AsanaLogo from 'public/icons/partner-logos/asana.svg';
import CanvaLogo from 'public/icons/partner-logos/canva.svg';
import CoinbaseLogo from 'public/icons/partner-logos/coinbase.svg';
import GithubLogo from 'public/icons/partner-logos/github.svg';
import GrammarlyLogo from 'public/icons/partner-logos/grammarly.svg';
import HubspotLogo from 'public/icons/partner-logos/hubspot.svg';
import LinearLogo from 'public/icons/partner-logos/linear.svg';
import SlackLogo from 'public/icons/partner-logos/slack.svg';
import SpotifyLogo from 'public/icons/partner-logos/spotify.svg';
import StripeLogo from 'public/icons/partner-logos/stripe.svg';

export const partnerLogos: PartnerLogo[] = [
  {
    name: 'Adobe',
    Logo: AdobeLogo,
  },
  {
    name: 'Asana',
    Logo: AsanaLogo,
  },
  {
    name: 'Canva',
    Logo: CanvaLogo,
  },
  {
    name: 'Coinbase',
    Logo: CoinbaseLogo,
  },
  {
    name: 'GitHub',
    Logo: GithubLogo,
  },
  {
    name: 'Grammarly',
    Logo: GrammarlyLogo,
  },
  {
    name: 'HubSpot',
    Logo: HubspotLogo,
  },
  {
    name: 'Linear',
    Logo: LinearLogo,
  },
  {
    name: 'Slack',
    Logo: SlackLogo,
  },
  {
    name: 'Spotify',
    Logo: SpotifyLogo,
  },
  {
    name: 'Stripe',
    Logo: StripeLogo,
  },
] as const;
