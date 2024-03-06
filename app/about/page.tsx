import BannerCta from "@/components/sections/BannerCta";
import Testimonials from "@/components/sections/Testimonials";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="relative  min-h-[700px] py-32 flex justify-center items-center">
        <div className="absolute inset-0 bg-secondary/60 z-10"></div>
        <Image
          src="/business-team-working-office-worker-concept.jpg"
          alt="business team working office worker concept"
          fill={true}
          className="object-cover"
        ></Image>
        <div className="container-x relative z-20">
          <h1 className="text-6xl font-bold max-w-4xl">
            Our Vision Is To{" "}
            <span className="underline underline-offset-8 decoration-primary">
              Help You Achieve Your Vision.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 justify-items-center">
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <MapPinned size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Address</h4>
              <p>885 Woodstock Road Suite 430-365 Roswell GA 30075-2274</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <PhoneCall size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Phone</h4>
              <p>
                Phone:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  012 3456 789
                </a>
              </p>
              <p>
                Fax:{" "}
                <a
                  className="underline decoration-primary underline-offset-4"
                  href="tel:"
                >
                  {" "}
                  0011 222 3344
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center max-w-72">
              <Mail size={48} strokeWidth={1.2} />
              <h4 className="text-2xl font-medium">Address</h4>
              <p>885 Woodstock Road Suite 430-365 Roswell GA 30075-2274</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="container-x">
          <h2 className="text-4xl font-medium text-primary">
            We are a motley crew of impossibly talented, endlessly passionate,
            and uncomfortably generous eclectic souls, all united by one common
            denominator: We live to serve. We don’t mean that in a lip service,
            shake-hands-and-kiss-babies kind of way; we mean that we all share a
            servant’s heart. And that’s precisely how we all scored this
            seriously sweet gig despite the odds.
          </h2>
          <div className="mt-10">
            <p>
              What we don’t all share? A state or city. A zip or even area code.
              We come from all walks of life, all lifestyles, all interests.
              <br />
            </p>
            <p>
              That’s our secret sauce, actually. We all recognize that we are
              greater than the sum of our parts, so we strive every day to hold
              space for one another and our clients and fill it with kindness,
              honesty, gratitude, fun, and integrity.
            </p>
            <p>
              And while we don’t take ourselves seriously, we take those values
              very seriously.
            </p>
            <p>
              As such, we recognize that our people are our lifeblood. Our
              boots-on-the-ground. The wind beneath our wings. We could go on
              but … you get the point.
            </p>
            <p>
              BELAY is headquartered in Atlanta, but our team is spread out
              across 48 states in the U.S. because in not-so-shocking news, the
              workforce has changed a lot since the Industrial Revolution. So
              while many companies don’t have conveyor belts and assembly lines
              anymore, they still operate like they do – and treat their
              employees like they do, too. In fact, if you think about what
              offices look like today, it’s the same thing: They put people in
              lines of cubicles and put managers around them to make sure
              they’re doing what they need to do.
              <br />
            </p>
            <p>Not BELAY.</p>
            <p>
              Think of us as Sam-I-Am: We know our people can work their magic
              from near to far and here to there. We trust our people to work
              from anywhere.
            </p>
            <p>
              BELAY was created with every person who had become disillusioned
              with working in an office in mind. For all those who considered
              leaving to take care of their families but always felt something
              was missing.
            </p>
            <p>
              Remote work is here, and we’re proud to lead the charge in
              disrupting the status quo and dismantling the ‘way things have
              always been done.’ The future is now. So the more people told us
              we couldn’t create a virtual culture, the more we believed we
              could.
            </p>
            <p>
              Our culture is not Secret Santa gift exchanges, karaoke contests,
              Nerf gun fights, catered food truck lunches or a zip-lining
              outward-bound excursion with co-workers. It’s not ping pong
              tables, fully-stocked beer fridges, and nap pods.
            </p>
            <p>
              Though admittedly, those things are decidedly awesome (and we’ve
              totally done&nbsp;<em>all</em> of those things except ping pong).
            </p>
            <p>But culture is not environmental ornamentation.</p>
            <p>
              Since 2010, we’ve proven that a shared vision – not a shared space
              – creates a culture. Our collective sense of belonging ensures we
              all identify with our mission, vision and values.
            </p>
            <p>
              We’ve won major culture and business awards from prominent
              national magazines and outlets despite the fact that not a single
              one of our team members shares an office. Why? Because we
              understand how culture is really created. So we instill our
              mission and values of gratitude, teamwork, vision, passion, fun,
              and God into every one of our nearly 1,200 remote workforce team
              members.
            </p>
            <p>
              We know that culture isn’t something that you can see, taste,
              touch, or smell; it is the only environment that you can feel.
              It’s that feeling in the pit of your stomach when you dread going
              to work or the excitement you feel when you’re actually eager to
              go to work. For us – and this may seem contrived – not being
              encumbered by having to go to an office every day means we really,
              truly have fun working together.
            </p>
            <p>And our vibrant culture makes it possible.</p>
            <p>
              It’s inextricably linked to our vision with no margin for ‘kinda
              sorta’ cultural commitments; you’ve got to be all in. Our culture
              is a hum. A verve. A vibe. An electricity.
            </p>
            <p>
              So in everything we do, in all that we are, we are our culture.
              Our people are our culture. And everything else falls perfectly
              into place.
            </p>
            <br />
          </div>
        </div>
      </section>
      <Testimonials />
      <BannerCta />
    </>
  );
};

export default About;
