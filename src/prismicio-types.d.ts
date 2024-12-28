// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
	| ProjectsSlice
	| ExperienceSlice
	| BiographySlice
	| HeroSlice
	| RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
	/**
	 * Link field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Name field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Nav Item field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

	/**
	 * Linkedin Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.linkedin_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkedin_link: prismic.LinkField;

	/**
	 * Github Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.github_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField;

	/**
	 * LeetCode Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.leetcode_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	leetcode_link: prismic.LinkField /**
	 * Meta Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_title
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Primary content in *Biography → Default → Primary*
 */
export interface BiographySliceDefaultPrimary {
	/**
	 * Heading field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Description field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Button Label field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button Link field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Avatar field in *Biography → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: biography.default.primary.avatar
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Biography Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BiographySliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Biography*
 */
type BiographySliceVariation = BiographySliceDefault;

/**
 * Biography Shared Slice
 *
 * - **API ID**: `biography`
 * - **Description**: Biography
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySlice = prismic.SharedSlice<'biography', BiographySliceVariation>;

/**
 * Item in *Experience → Default → Primary → Item*
 */
export interface ExperienceSliceDefaultPrimaryGroupItem {
	/**
	 * Title field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Time Period field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[].time_period
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	time_period: prismic.KeyTextField;

	/**
	 * Institution field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[].institution
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	institution: prismic.KeyTextField;

	/**
	 * Description field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Link field in *Experience → Default → Primary → Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Primary content in *Experience → Default → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
	/**
	 * Heading field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.group[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	group: prismic.GroupField<Simplify<ExperienceSliceDefaultPrimaryGroupItem>>;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ExperienceSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<'experience', ExperienceSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * First Name field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.first_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	first_name: prismic.KeyTextField;

	/**
	 * Last Name field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.last_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	last_name: prismic.KeyTextField;

	/**
	 * Tag Line field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.tag_line
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *Projects → Default → Primary → Item*
 */
export interface ProjectsSliceDefaultPrimaryGroupItem {
	/**
	 * Title field in *Projects → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Role field in *Projects → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[].role
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	role: prismic.KeyTextField;

	/**
	 * Time Period field in *Projects → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[].time_period
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	time_period: prismic.KeyTextField;

	/**
	 * Description field in *Projects → Default → Primary → Item*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * GitHub Link field in *Projects → Default → Primary → Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[].github_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField;
}

/**
 * Primary content in *Projects → Default → Primary*
 */
export interface ProjectsSliceDefaultPrimary {
	/**
	 * Heading field in *Projects → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *Projects → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.group[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	group: prismic.GroupField<Simplify<ProjectsSliceDefaultPrimaryGroupItem>>;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ProjectsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Projects*
 */
type ProjectsSliceVariation = ProjectsSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: Projects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSlice = prismic.SharedSlice<'projects', ProjectsSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavItemItem,
			AllDocumentTypes,
			BiographySlice,
			BiographySliceDefaultPrimary,
			BiographySliceVariation,
			BiographySliceDefault,
			ExperienceSlice,
			ExperienceSliceDefaultPrimaryGroupItem,
			ExperienceSliceDefaultPrimary,
			ExperienceSliceVariation,
			ExperienceSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ProjectsSlice,
			ProjectsSliceDefaultPrimaryGroupItem,
			ProjectsSliceDefaultPrimary,
			ProjectsSliceVariation,
			ProjectsSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault
		};
	}
}
