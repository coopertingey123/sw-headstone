import Navbar from "./navbar";
import Footer from "./footer";

export default function Contact() {
  return (
    <body>
      <Navbar />
      <div className="container about-wrapper">
        <div className="about-container">
          <p>
            <b>North Shore Cleaning</b> provides various cleaning services to{" "}
            <b>homes, office buildings, and short-term rentals</b> to ensure
            that they are clean, healthy, and hygienic. The following are the
            services that we provide to a typical home:{" "}
          </p>
          <ul>
            <li>
              <b>General Cleaning:</b> This includes dusting, vacuuming,
              sweeping, and mopping the floors, cleaning the windows, mirrors,
              and glass surfaces, and wiping down all surfaces.
            </li>
            <br />
            <li>
              <b>Bathroom Cleaning:</b> This includes cleaning and disinfecting
              the toilets, sinks, bathtubs, showers, and mirrors, wiping down
              the counters and cabinets, and mopping the floors.
            </li>
            <br />
            <li>
              <b>Kitchen Cleaning:</b> This includes cleaning and disinfecting
              the countertops, sink, stove, and refrigerator, wiping down the
              cabinets and drawers, and mopping the floors. It also includes
              cleaning the inside of the appliances like the oven and microwave.
            </li>
            <br />
            <li>
              <b>Laundry:</b> Laundry ONLY INCLUDES bedding materials (sheets,
              blankets, pillowcases) and towels. North Shore Cleaning ONLY does
              laundry IF a washing machine and dryer are provided at the
              property.
            </li>
            <br />
            <li>
              <b>Move-In/Move-Out Cleaning:</b> This includes cleaning the
              entire home thoroughly to ensure that it's ready for the new
              occupants or the homeowner.
            </li>
            <br />
            <b>North Shore Cleaning</b> typically provides these services on a
            regular basis, such as weekly, bi-weekly, or monthly, or as a
            one-time service for a specific occasion like a party or event. The
            cleaning business may also provide customized cleaning plans based
            on the homeowner's needs and preferences. These plans will be
            discussed between the homeowner and the cleaner. Prices are subject
            to change (different than the calculator) if custom cleaning is to
            be provided.
          </ul>
        </div>
      </div>
      <Footer />
    </body>
  );
}
