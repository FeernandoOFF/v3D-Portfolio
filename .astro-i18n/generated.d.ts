type DefaultLangCode = "en"
type SupportedLangCode = "es"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/about" | "/blog/[...slug]" | "/blog" | "/snippets/[...slug]" | "/snippets" | "/404" | "/" | "/portfolio" 
type RouteParams = {"/about": undefined; "/blog/[...slug]": { "...slug": string; }; "/blog": undefined; "/snippets/[...slug]": { "...slug": string; }; "/snippets": undefined; "/404": undefined; "/": undefined; "/portfolio": undefined; }
type TranslationPath = "hello" | "home.title" | "home.hero.title" | "home.hero.title-highlight" | "home.hero.subtitle" | "home.services.title" | "home.services.subtitle" | "home.services.service" | "home.interested" | "home.learn-more" | "home.contact" | "home.contact-highlight" | "snippets.title" | "snippets.heading" | "snippets.heading-2"
type TranslationOptions = { "hello": {} | undefined; "home.title": {} | undefined; "home.hero.title": {} | undefined; "home.hero.title-highlight": {} | undefined; "home.hero.subtitle": {} | undefined; "home.services.title": {} | undefined; "home.services.subtitle": {} | undefined; "home.services.service": { i: number; }; "home.interested": {} | undefined; "home.learn-more": {} | undefined; "home.contact": {} | undefined; "home.contact-highlight": {} | undefined; "snippets.title": {} | undefined; "snippets.heading": {} | undefined; "snippets.heading-2": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: keyof RouteParams extends Uri
			? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
