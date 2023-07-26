import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';

export default function FrankXTolbert2Page({ data: { memorialImg } }) {
  const textStyles = 'text-sm md:text-lg !leading-loose indent-10';
  const linkStyle = 'text-primary underline hover:text-secondary';

  return (
    <div>
      <Layout>
        <Seo
          title={'In Loving Memory of Frank X. Tolbert 2 - July 13, 2023'}
          description={`A dedicated page in honor of Frank X. Tolbert 2, a renowned artist and a beloved figure in the art community, who passed away on July 13, 2023. Read more about his life and contributions to the art world.`}
          keywords={[
            `Frank X. Tolbert 2`,
            `artist`,
            `Houston`,
            `Texas`,
            `painting`,
            `drawing`,
            `Texas and Mexican culture and legend`,
            'obituary',
            'memorial',
            'epitaph',
          ]}
        />
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-secondary py-4 shadow-md rounded-lg mb-10 md:mb-10 md:-skew-x-12 border-gray-light-1 border-2 max-w-3xl mx-auto">
            <h1 className="underline md:no-underline py-4 md:py-0 md:skew-x-12 inline-block text-2xl md:text-3xl lg:text-4xl text-gray-light-1">
              Frank X. Tolbert 2
            </h1>
          </div>
          <div className="mb-10 shadow-md max-w-xl mx-auto border-gray-light-1 border-2 rounded-lg">
            <GatsbyImage
              image={getImage(memorialImg?.image.localFile)}
              alt="Frank X. Tolbert 2"
              className="rounded-lg"
            />
          </div>
          <div className="bg-gray-light-1 p-10 px-4 md:px-8 shadow-md mb-10 text-left rounded-lg border-2 max-w-5xl mx-auto flex flex-col gap-6">
            <p className={textStyles}>
              Artist and son of a Texas legend, Frank X. Tolbert 2, continued
              the legacy of his father, both in the artistic realm and the
              unique world of Texas chili. His works have been showcased in
              renowned museums such as the Modern of Fort Worth and Dallas
              Museum of Art (DMA). Tolbert 2’s work featured colorful, stylized
              renderings of birds, his unique artistic eye captured in pieces
              such as "
              <a
                href="https://foltzgallery.com/art/bluejay-with-peanut-by-frank-x-tolbert-2"
                target="_blank"
                className={linkStyle}
              >
                Bluejay with Peanut
              </a>
              " (2017).
            </p>

            <p className={textStyles}>
              Frank X. Tolbert 2 embraced his Texas roots, reflected both in his
              popularity as an artist and his personal connection to the state's
              cultural events, most notably the Terlingua Chili Cookoff. This
              event was the brainchild of his father,{' '}
              <a
                href="https://en.wikipedia.org/wiki/Frank_X._Tolbert"
                target="_blank"
                className={linkStyle}
              >
                Frank X. Tolbert
              </a>
              , who sought to immortalize the traditional Texas chili recipe and
              engage the community in a light-hearted culinary competition. The
              Cookoff, which began in 1967 in Terlingua, Texas, formed an
              integral part of Tolbert 2's upbringing and offered a rich,
              cultural context that influenced his later works.
            </p>

            <p className={textStyles}>
              On July 13, at his home in Houston, Tolbert passed away at the age
              of 77. Friends remember him as a man blessed with a legendary wit
              and gentlemanly manners, a person who found humor in any
              situation. Despite hailing from a legendary Texas family, Tolbert
              managed to carve out his own identity, distinguishing himself
              through his distinctive artistic style.
            </p>

            <p className={textStyles}>
              Former art critic for the Houston Post, Susan Chadwick, is among
              the many mourning the loss of Tolbert 2, describing his work as
              "witty and imaginative". His pieces often delved into themes of
              mortality, self, birds, nature, and of course, his Texas roots.
            </p>

            <p className={textStyles}>
              Tolbert 2, along with his wife and fellow artist, Ann Stautberg,
              shared decades of travel, crisscrossing the globe, always carrying
              their love for their home state with them. In recent years, he
              turned his focus to the{' '}
              <a
                href="https://www.frankxtolbert2.com/texas-bird-project-2022"
                target="_blank"
                className={linkStyle}
              >
                Texas Bird Project
              </a>
              ," a series of colorful, stylized renderings of native Texas
              birds.
            </p>

            <p className={textStyles}>
              Despite being born in Washington, D.C., the younger Tolbert spent
              considerable time exploring Texas with his legendary father. He
              followed in his father's footsteps, contributing to the legacy of
              the Terlingua Chili Cookoff and continuing the tradition of
              celebrating the unique flavors of Texas.
            </p>

            <p className={textStyles}>
              The Tolbert family's commitment to Texas extends beyond chili.
              Kathleen Tolbert Ryan, Frank 2’s younger sister, continues to
              operate Tolbert’s Chili Parlor, initially founded by their father
              in downtown Dallas.
            </p>

            <p className={textStyles}>
              Frank 2, an alumnus of Thomas Jefferson High School in Dallas and
              Texas Tech University where he studied art, is survived by his
              wife and sister. The Tolbert family has asked for donations in
              Frank 2’s memory to be made to{' '}
              <a
                href="https://research.glasstire.com/"
                target="_blank"
                className={linkStyle}
              >
                Glasstire
              </a>
              , a nonprofit Texas visual art magazine, a fitting tribute to a
              man who gave so much to the art world of Texas.
            </p>

            <p className="text-lg md:text-2xl leading-loose text-center">
              Rest in peace, Frank X. Tolbert 2.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query FrankXTolbert2MemorialQuery {
    memorialImg: strapiGalleryImage(title: { eq: "Frank X. Tolbert 2" }) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
