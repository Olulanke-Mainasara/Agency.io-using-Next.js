import Image from "next/image";
import { notFound } from "next/navigation";

import getContent from "@/lib/getContent";
import { Country } from "@/types/Country";
import SharedPageLocationCarousel from "@/components/UI/Carousel/SharedPageLocationCarousel";
import BlogCarousel from "@/components/UI/Carousel/BlogCarousel";
import FaqCard from "@/components/UI/Cards/FaqCard";
import DestinationCarousel from "@/components/UI/Carousel/DestinationCarousel";

export default async function Country({
  params: { country },
}: {
  params: { country: string };
}) {
  const countryInfo: Country[] = await getContent("getCountry", country);

  if (countryInfo.length === 0) {
    notFound();
  }

  const location = countryInfo[0];
  const { displayImage, flag, name, description, pictures, essentials, posts, destinations, whyWeLove, faqs } = location;

  return (
    <main className="mx-auto max-w-[1440px] space-y-40">
      <section>
      <section className="flex items-center h-screen max-h-[900px] gap-8 px-6 xl:px-8">
        <div className="h-[550px] basis-1/2 grid grid-cols-2 gap-10">
          {pictures.map((picture) => <div key={Math.floor(Math.random() * Date.now())} className="relative w-full h-full overflow-hidden rounded-lg">
        <Image
          src={picture.url}
          fill
          alt="Vacation pictures"
          className="object-cover"
        />
      </div>)}
          
        </div>

        <div className="space-y-8 basis-1/2">
          <div className="flex items-center gap-2">
            <div className="relative w-24 h-14">
              <Image src={flag.url} fill alt={flag.alt} />
            </div>
            <h1 className="text-4xl dark:text-white md:text-8xl">{name}</h1>
          </div>

          <p className="text-lg">{description}</p>
        </div>
      </section>


      <section className="mt-0 space-y-8">
        <p className="px-6 text-4xl md:text-5xl dark:text-white xl:px-8">Essentials</p>

        {essentials ? essentials.map(essential => {
          return <div key={essential._key} className="flex gap-8">

            <p className="text-4xl">{essential.title}</p>

            <SharedPageLocationCarousel
              items={essential.locations || []}
            />
          </div>
        }) : <SharedPageLocationCarousel items={[]} />}


      </section>
      </section>

      <section className="space-y-8">
        <p className="px-6 text-4xl md:text-5xl xl:px-8">Popular destinations</p>

        <DestinationCarousel items={destinations} />
      </section>

      <section className="space-y-8">
        <p className="px-6 text-4xl md:text-5xl xl:px-8">Posts</p>

        <BlogCarousel blog={posts} />
      </section>

      <section className="space-y-8">
        <p className="px-6 text-4xl md:text-5xl dark:text-white xl:px-8">Why we love {name}</p>

        {whyWeLove ? whyWeLove.map(reason => {
          return <div key={reason._key} className="flex gap-8">

            <p className="text-4xl">{reason.title}</p>

            <SharedPageLocationCarousel
              items={reason.locations || []}
            />
          </div>
        }) : <SharedPageLocationCarousel items={[]} />}


      </section>

      <section className="px-6 space-y-8 xl:px-8">
        <p className="text-4xl md:text-5xl dark:text-white">FAQs</p>

        <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => {
            return <FaqCard key={faq._key} faq={faq} />;
          })}
        </div>
      </section>
    </main>
  );
}
