import Head from 'next/head';
import Header from '../components/MyHeader';
import Banner from '../components/Banner';
import fs from 'fs';
import path from 'path';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';


export default function Home({ exploreData, cardsData }) {


  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-4 sm:px-10'>
        <section className='pt-3'>
          <h2 className='text-4xl font-semibold pb-4 px-1'>Explore Nearby</h2>

          {/* Pull data from a server - API Endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location} />
            ))}
          </div>

        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
          

            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <section>
              <LargeCard
              img='https:links.papareact.com/4cj'
              title='The Greatest of All Time'
              description='Top Gs only'
              buttonText='Get Ready'
              />

        </section>
      </main>

      <Footer/>

    </div>
  );
}

export async function getStaticProps() {
  const exploreFilePath = path.join(process.cwd(), 'Location.json');
  const exploreFileContents = fs.readFileSync(exploreFilePath, 'utf8');
  const exploreData = JSON.parse(exploreFileContents);

  const cardsFilePath = path.join(process.cwd(), 'Type.json');
  const cardsFileContents = fs.readFileSync(cardsFilePath, 'utf8');
  const cardsData = JSON.parse(cardsFileContents);

  return {
    props: {
      exploreData,
      cardsData
    },
  };
}


