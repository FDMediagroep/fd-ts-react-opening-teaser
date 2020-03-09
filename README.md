[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-opening-teaser.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-opening-teaser)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-opening-teaser/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-opening-teaser?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-opening-teaser.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-opening-teaser)


# fd-opening-teaser
FD-themed opening teaser.

# Installation
* Run `npm i -D @fdmg/fd-opening-teaser`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/opening-teaser/demo.html)

# Usage
```
import OpeningTeaser from '@fdmg/fd-opening-teaser';
...
<OpeningTeaser
    id="1286450"
    baseUrl="https://fd.nl"
    url="https://fd.nl/beurs/1286450/analisten-twijfelen-aan-renteverhoging-ecb"
    image={{
        src: 'https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663',
        alt: "Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks' flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
    }}
    alt="Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
    sourceSets={[{
        media: "(max-width: 640px)",
        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
    }, {
        media: "(max-width: 860px)",
        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=.20625%2C.0%2C.66625%2C.9999999999999999`
    }, {
        media: "(min-width: 861px)",
        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=300&h=169&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
    }]}
    figCaption="Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks' flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
    subject="Monetair"
    readableAge="7 uur"
    date="17 Nov 1981"
    title="Analisten twijfelen aan renteverhoging ECB"
    description="Economische groei en de inflatie ontwikkelen zich niet zoals verwacht."
    related={[{
        longread: true,
        title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
        url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
        uuid: "1235280"
    }, {
        title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
        url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
        uuid: "1235274"
    }]}
/>
```
