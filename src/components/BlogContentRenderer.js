import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogContentRenderer = ({ content }) => {
  const renderContent = () => {
    const baseSpacing = 'mb-8 md:mb-12'; // Consistent spacing between sections

    switch (content.layoutType) {
      case 'text':
        if (content.textContent) {
          return (
            <div
              dangerouslySetInnerHTML={{
                __html: content.textContent.data.childMarkdownRemark.html,
              }}
              className={`${baseSpacing}`}
            />
          );
        }
        break;
      case 'image':
        if (content.imageContent && content.imageContent.imageMedia) {
          const imageData = getImage(content.imageContent.imageMedia.localFile);
          return (
            <div className={`${baseSpacing}`}>
              <GatsbyImage
                image={imageData}
                alt={content.imageContent.imageAlt}
                className="rounded-lg mx-auto"
              />
            </div>
          );
        }
        break;
      case 'textRightImageLeft':
        return (
          <div
            className={`flex flex-col md:flex-row items-center ${baseSpacing}`}
          >
            {content.imageContent && content.imageContent.imageMedia && (
              <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <GatsbyImage
                  image={getImage(content.imageContent.imageMedia.localFile)}
                  alt={content.imageContent.imageAlt}
                  className="rounded-lg"
                />
              </div>
            )}
            {content.textContent && (
              <div className="w-full md:w-1/2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.textContent.data.childMarkdownRemark.html,
                  }}
                />
              </div>
            )}
          </div>
        );
      case 'textLeftImageRight':
        return (
          <div
            className={`flex flex-col md:flex-row items-center ${baseSpacing}`}
          >
            {content.textContent && (
              <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.textContent.data.childMarkdownRemark.html,
                  }}
                />
              </div>
            )}
            {content.imageContent && content.imageContent.imageMedia && (
              <div className="w-full md:w-1/2 md:pl-4">
                <GatsbyImage
                  image={getImage(content.imageContent.imageMedia.localFile)}
                  alt={content.imageContent.imageAlt}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default BlogContentRenderer;
