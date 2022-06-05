import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// GLOBAL
export enum IconPosition {
  'left' = 'LEFT',
  'right' = 'RIGHT',
  'none' = 'NONE',
}
export interface CTAButton {
  title: string;
  href: string;
  isExternal: boolean;
  icon?: IconDefinition;
}
export interface CTAButtonProps {
  button: CTAButton;
  variant: string;
  iconPosition: IconPosition;
}

export interface Img {
  light: string; // light image (not mode)
  dark: string; // dark image (not mode)
  alt: string;
}

// HERO
export interface HeroProps {
  title: string;
  subtitle: string;
  image: Img;
  buttons: CTAButton[];
}

// BULLETS
export interface BulletsSectionProps {
  title: string;
  bullets?: Bullet[]; // include bullet XOR description
  description?: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  image: Img;
}
export interface Bullet {
  title: string;
  icon: IconDefinition;
}

// ICON CARDS
export interface IconCardsProps {
  cards: IconCard[];
}
export interface IconCard {
  title: string;
  icon: IconDefinition;
}

// TABS
export interface TabsSectionProps {
  id?: string;
  title: string;
  tabNames: string[];
  panels: TabsSectionPanel[];
}
export interface TabsSectionPanel {
  title: string;
  bullets: string[];
  image: Img;
  button: CTAButton;
}
export interface TabsListProps {
  tabNames: string[];
}
export interface TabsPanelsProps {
  panels: TabsSectionPanel[];
}

// VIDEO
export interface VideoSectionProps {
  title: string;
  description: string;
  videoTitle: string;
  videoSrc: string;
  buttons: [CTAButton, CTAButton];
  bigButton: boolean;
}

// TEXT CARDS SECTION
export enum TextCardOrientation {
  'vertical' = 'column',
  'horizontal' = 'row',
}
export interface TextCard {
  title: string;
  description: string;
  icon: IconDefinition;
  button?: CTAButton;
}
export interface TextCardsSectionProps {
  title: string;
  caption: string;
  image?: Img;
  cards: [TextCard, TextCard, TextCard];
  orientation: TextCardOrientation;
  buttons?: CTAButton[];
}

// CTA Grid
export interface CTAGridItem {
  title: string;
  description: string;
  button: CTAButton;
}
export interface CTAHalfGridProps {
  items: [CTAGridItem, CTAGridItem];
}
export interface CTAGridProps {
  items: [CTAGridItem, CTAGridItem, CTAGridItem, CTAGridItem];
}
export interface ImageLink {
  cta: CTAButton;
  image: Img;
}

// PRODUCTS
export interface ProductSectionTabName {
  title: string;
  description: string;
}
export interface ProductSectionPanel {
  image: Img;
  href: string;
}
export interface ProductSectionProps {
  title: string;
  tabNames: ProductSectionTabName[];
  panels: ProductSectionPanel[];
}

// TESTIMONIES SECTION
export interface TestimonyAuthor {
  image: Img;
  name: string;
  description: string;
}
export interface Testimony {
  quote: string;
  author: TestimonyAuthor;
}
export interface TestimoniesSectionProps {
  title: string;
  testimonies: [Testimony, Testimony, Testimony];
}

// LOGOS GROUP
export enum LogoButtonVariant {
  subtle = 'subtle',
  normal = 'normal',
}
export interface LogoButton {
  href: string;
  image: Img;
}
export interface LogoButtonProps {
  variant: LogoButtonVariant;
  buttons: LogoButton[];
}

// PARTNERS SECTION
export interface PartnersLogoGroup {
  title: string;
  buttons: LogoButton[];
}
export interface PartnersSectionProps {
  bgImage: Img;
  groups: PartnersLogoGroup[];
}

// BLOG PREVIEW
export interface BlogPreview {
  title: string;
  description: string;
  image: Img;
  href: string;
}
export interface BlogPreviewSectionProps {
  title: string;
  blogs: [BlogPreview, BlogPreview, BlogPreview];
}

export interface CommunityLink {
  title: string;
  description: string;
  href: string;
  icon: IconDefinition;
  ariaLabel: string;
  brandColor: string;
}

export interface SimpleTextAndImageProps {
  title: string;
  description: string;
  image: Img;
  button?: CTAButton;
  id?: string;
}

// THREE STEPS SECTION
export interface StepsCard {
  title?: string;
  description: string;
}
export interface ThreeStepsSectionProps {
  title: string;
  cards: [StepsCard, StepsCard, StepsCard];
  buttons?: CTAButton[];
}

// SQUARE CARDS SECTION
export interface SquareCard {
  title: string;
  description: string;
  image: Img;
}

export interface FourSquaresSectionProps {
  cards: SquareCard[];
}

//
export interface Stat {
  title: string;
  amount: number;
}
export interface ThreeStatsSectionProps {
  stats: Stat[];
}

//
export interface Slide {
  title: string;
  description: string;
  image: Img;
  icon: IconDefinition;
}
export interface ValuesSlidesProps {
  slides: Slide[];
}

//
export interface Person {
  href: string;
  name: string;
  title: string;
  imgSrc: string;
  altText: string;
}
export interface TeamSection {
  title: string;
  people: Person[];
}
export interface TeamProps {
  title: string;
  sections: TeamSection[];
}

//
export enum InputType {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  dateTimeLocal = 'date-time-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week',
}
export interface FormGroup {
  id: string;
  label?: string;
  type: InputType;
  placeholder?: string;
  helperText?: string;
  required: boolean;
  icon?: IconDefinition;
}

export enum LogoVariationBgMode {
  none = 'none',
  light = 'light-bg',
  dark = 'dark-bg',
}
export interface LogoVariation {
  id: string;
  imgSrcName: string;
  backgroundMode: LogoVariationBgMode;
  imagePaths: Object;
}

export interface Article {
  title: string;
  description: string;
  image: Img;
  author: string;
  authorImg: Img;
  href: string;
  date: string;
}

export interface TxtPlusIconCardsProps {
  title: string;
  description: string[];
  cards: IconCard[];
  button?: CTAButton;
}

export interface Career {
  title: string;
  description: string;
  button: CTAButton;
}

export interface Faq {
  q: string;
  a: string[];
}

export interface RoadmapItem {
  title: string;
  badge: string;
  bullets: string[];
  quarter: number;
  year: number;
}
export interface RoadmapStage {
  title: string;
  subtitle: string;
  items: RoadmapItem[];
}
export interface RoadmapProps {
  seoTitle: string;
  seoDescription: string;
  title: string;
  stages: RoadmapStage[];
}
