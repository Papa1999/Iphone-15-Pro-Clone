import { hero } from "../assets/videos";

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center text-white h-screen justify-evenly">
      <h2 className="title">iPhone 15 Pro</h2>
      <div id="video_wrapper">
        <video autoPlay loop muted>
          <source src={hero} />
        </video>
      </div>

      <button className="btn">Buy</button>
      <div>
        <p>From $199/month or $999. </p>
      </div>
    </section>
  );
}
