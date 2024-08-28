import Image from "next/image";
import heroImage from "../../../public/hero-img.jpg";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full outline-black outline-1">
        <Image
          src={heroImage.src}
          height={650}
          width={400}
          alt="hero image"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
