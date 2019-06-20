import React from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import { createGlobalStyle, css } from "styled-components";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import {
    RelatedArticle,
    TeaserFigure,
    TeaserFigureStyle,
    TeaserFooter,
    TeaserFooterStyle,
    TeaserRelated,
    TeaserRelatedStyle,
    UpdateLabel,
    UpdateLabelStyle,
    ImageType,
    SourceSet} from "@fdmg/fd-teaser";

export interface Props {
    alt: string;
    baseUrl: string;
    bookmarked?: boolean;
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
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    title: string;
    updated?: boolean;
    url: string;
}

export default function OpeningTeaser(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle ? props.cardStyle : 'default'} id={props.id} className={`fd-opening-teaser${props.className ? ` ${props.className}` : ''}`}>
                <a href={props.url}>
                    <TeaserFigure
                        figCaption={props.figCaption}
                        image={props.image}
                        sourceSets={props.sourceSets}
                    />
                    <div className="meta">
                        {props.updated ? <UpdateLabel/> : <span className="prefix">{props.subject}</span>}
                        <time>{props.readableAge}</time>
                    </div>
                    <div className="text-container">
                        <TypoGraphy textStyle="opening-teaser-h"><h1>{props.title}</h1></TypoGraphy>
                        {props.description ? <p className="intro">{props.description}</p> : null}
                    </div>
                </a>
                <TeaserRelated
                    items={props.related}
                />
                {props.hideFooter ? null : <TeaserFooter
                    baseUrl={props.baseUrl}
                    bookmarked={props.bookmarked}
                    comments={props.comments}
                    date={props.date}
                    description={props.description}
                    onBookmark={props.onBookmark}
                    shareTitle={props.shareTitle}
                    subject={props.subject}
                    teaserId={props.id}
                    title={props.title}
                    url={props.url}
                />}
            </Card>
        </>
    );
}

const styles = css`
.fd-opening-teaser {
    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;

    .meta,
    .text-container {
        padding: 0 10px;
        @media only screen and (min-width: 641px) {
            padding: 0 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 0 15px;
        }
    }

    > a {
        width: 100%;
        color: #191919;
        display: inline-block;
        text-decoration: none;
        &:hover h1 {
            color: #49a4a2;
        }

        h1 {
            margin: 0;
        }

        figure {
            width: auto;
            margin: 0;
            margin-bottom: .625rem;
            @media only screen and (min-width: 641px) {
                margin-bottom: 1rem;
            }
            float: none;
            img {
                display: block;
                width: 100%;
            }
        }

        > .meta {
            font-family: 'ProximaNovaRegular',sans-serif;
            line-height: 1.2em;
            color: #677381;
            position: static;
            font-size: 0.8125rem;
            @media only screen and (min-width: 641px) {
                font-size: 0.875rem;
            }
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            margin: 0 0 .5rem 0;
        }

        .text-container {
            margin-bottom: .5rem;
            p {
                margin: .2rem 0 .5rem 0;
                font-size: 1rem;
                @media only screen and (min-width: 641px) {
                    font-size: 1.0625rem;
                }
            }
        }
    }
    &.longread a:hover h1 {
        color: #f05031;
    }
}
`;

/**
 * Used for the FD Style Guide Kitchensink
 */
export const OpeningTeaserStyle = css`
${getAllCardStyles()}
${getAllTextStyles(['opening-teaser-h'])}
${UpdateLabelStyle}
${TeaserFigureStyle}
${TeaserRelatedStyle}
${TeaserFooterStyle}
${styles}
`;

const GlobalStyle = createGlobalStyle`${OpeningTeaserStyle}`;
