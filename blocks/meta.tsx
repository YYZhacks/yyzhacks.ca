import { NextSeo, EventJsonLd } from "next-seo";

const title = "YYZHacks";
const description = "YYZHacks is a 12 hour high school hackathon  on Nov 12 for high school and upper middle school students regardless of skill. Venue TBD" ;
const url = "https://yyzhacks.ca";

const Meta = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${url}/og.png`,
              width: 1200,
              height: 630,
              alt: "",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <EventJsonLd
        name="YYZHacks Missisauga"
        startDate="2022-09-18T09:00:00-07:00"
        endDate="2022-09-18T21:00:00-07:00"
        eventStatus="https://schema.org/EventScheduled"
        eventAttendanceMode="https://schema.org/OfflineEventAttendanceMode"
        location={{
          name: "TBD",
          address: {
            streetAddress: "TBD",
            addressLocality: "TBD",
            addressRegion: "TBD",
            postalCode: "TBD",
            addressCountry: "TBD",
          },
        }}
        url={url}
        description="YYZHacks is a 12 hour hackathon for all upper-middle school, and high school students in Missisauga. Over 12 hours, Students will get the chance to think out of the box, and expriment with programming regardless if it's your first time or not"
        offers={{
          price: "0",
          priceCurrency: "CAD",
          url: url,
          availability: "https://schema.org/PreOrder",
        }}
        organizer={{
          "@type": "Organization",
          name: "Arav Narula",
          url: "https://",
        }}
        images={[`${url}/og.png`]}
      />
    </>
  );
};

export default Meta;
