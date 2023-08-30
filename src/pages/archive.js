import React from 'react';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';

const data = [
  {
    title: 'Frank X. Tolbert 2',
    type: 'memorials',
    link: '/memorials/frank-x-tolbert-2',
  },
  {
    title: 'Laury McCullough',
    type: 'memorials',
    link: '/memorials/laury-mccullough',
  },
  { title: '2022', type: 'collages', link: '/collages/2022' },

  { title: '2022', type: 'champions', link: '/champions/2022' },
  { title: 'Resources', type: 'misc', link: '/resources' },
  {
    title: '2022 Cook Off Announcement',
    type: 'misc',
    link: '/terlingua-international-chili-cook-off', // change to 2022?
  },
];

const PageLink = ({ title, link }) => (
  <Link
    to={link}
    className="border border-tertiary bg-tertiary shadow-sm p-2 rounded-md text-primary hover:bg-secondary hover:text-tertiary-light transition duration-200 ease-in-out m-2"
  >
    {title}
  </Link>
);

export default function ArchivePage() {
  return (
    <Layout>
      <Seo title="Archive Page" />
      <h1 className="text-2xl md:text-4xl mb-8">Archive</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {['memorials', 'collages', 'champions', 'misc'].map((type) => (
          <div key={type}>
            <h2 className="font-bold text-lg mb-2 capitalize">{type}</h2>
            <div className="flex flex-col">
              {data
                .filter((page) => page.type === type)
                .map((page) => (
                  <PageLink
                    key={page.title}
                    title={page.title}
                    link={page.link}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
