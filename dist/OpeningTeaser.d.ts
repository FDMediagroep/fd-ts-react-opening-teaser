import { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
import { RelatedArticle, ImageType, SourceSet } from "@fdmg/fd-teaser";
export interface Props {
    alt: string;
    baseUrl: string;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    cropRectangle?: string;
    date: string;
    description: string;
    figCaption?: string;
    hideFooter?: boolean;
    id: string;
    image: ImageType;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    title: string;
    updated?: boolean;
    url: string;
}
export default class OpeningTeaser extends PureComponent<Props, any> {
    render(): JSX.Element;
}
/**
 * Used for the FD Style Guide Kitchensink
 */
export declare const OpeningTeaserStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
