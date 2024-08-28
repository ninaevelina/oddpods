import Link from "next/link";
import Image from "next/image";
import audiowavesImage from "../../../public/audiowaves.png";

export const LandingPageGrid = () => {
  return (
    <>
      <section className="grid grid-cols-1 self-start mt-[100px] mb-28">
        <div className="w-full flex flex-wrap ml-2.5">
          <div className="flex-grow-1 w-2/3">
            <h2 className="text-2xl mb-3 font-semibold">
              Podsearch offers you a wide selection of the newest comedy
              podcasts from SR
            </h2>
            <Link
              href={"/podcasts"}
              className="uppercase font-medium underline"
            >
              Go to podcasts
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-[60px]">
        <div className="flex justify-center">
          <Image
            src={audiowavesImage.src}
            height={200}
            width={200}
            alt="Audiowaves"
          />
        </div>
        <div className="place-content-center md:w-[80%]">
          <h3 className="font-semibold text-2xl ml-2.5 mb-[10px]">
            Cheerful listening
          </h3>
          <p className="mx-2.5">
            Are you ready to dive into a world of laughter? With OddPods,
            finding the latest and greatest comedy podcasts has never been
            easier. Whether you&apos;re into stand-up, improv, or witty banter,
            we&apos;ve got something that will tickle your funny bone.
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPageGrid;
