import { motion } from "framer-motion";
import arrow from "../../assets/icons/Arrow.svg";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        w-full
        max-w-[520px]
        mx-auto

        rounded-sm
        bg-[#F8F4EC]

        px-6
        py-8

        sm:px-8
        sm:py-10

        md:px-10

        lg:px-10
        lg:py-12
      "
    >
      {/* Heading */}

      <h2
        className="
          font-eb-garamond
          font-semibold
          leading-tight
          text-[#631015]

          text-[30px]
          sm:text-[34px]
          lg:text-[38px]
        "
      >
        Send Us a Message
      </h2>

      <p
        className="
          mt-4

          font-inter
          font-normal

          text-[14px]
          leading-6

          text-[#7A7A7A]
        "
      >
        Complete the form below and our coordination office
        <br />
        will respond within 24-48 hours.
      </p>

      {/* Form */}

      <form className="mt-8 space-y-6">
        {/* Full Name */}
        <div>
          <label
            className="
              mb-2
              block

              font-inter
              font-medium

              text-[12px]

              text-[#6E6E6E]
            "
          >
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="
h-[46px]
w-full

border-0
border-b-[1.5px]
border-[#631015]/30

bg-white

p-2


font-inter
font-medium
text-[15px]
text-[#1A1C1B]

placeholder:font-medium
placeholder:text-[#1A1C1B]/50

outline-none

transition-all
duration-300

focus:border-[#631015]
focus:ring-0
"
          />
        </div>
        {/* Email */}
        <div>
          <label
            className="
              mb-2
              block

              font-inter
              font-medium

              text-[12px]

              text-[#6E6E6E]
            "
          >
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@mail.com"
            className="
h-[46px]
w-full

border-0
border-b-[1.5px]
border-[#631015]/30

bg-white

p-2


font-inter
font-medium
text-[15px]
text-[#1A1C1B]

placeholder:font-medium
placeholder:text-[#1A1C1B]/50

outline-none

transition-all
duration-300

focus:border-[#631015]
focus:ring-0
"
          />
        </div>
        {/* Subject */}
        <div>
          <label
            className="
              mb-2
              block

              font-inter
              font-medium

              text-[12px]

              text-[#6E6E6E]
            "
          >
            Subject of Enquiry
          </label>

          <select
            className="
              h-[46px]
              w-full

              border-0
              border-b-[1.5px]
              border-[#631015]/30

              bg-white

            p-2


              font-inter
              font-medium

              text-[15px]

              outline-none

              transition-all

              focus:border-[#631015]
            "
          >
            <option>Select a category...</option>
            <option>General Enquiry</option>
            <option>Admissions</option>
            <option>Partnership</option>
            <option>Research</option>
          </select>
        </div>
        {/* Organization */}
        <div>
          <label
            className="
              mb-2
              block

              font-inter
              font-medium

              text-[12px]

              text-[#6E6E6E]
            "
          >
            Organization / Institution
          </label>

          <input
            type="text"
            placeholder="Optional"
            className="
h-[46px]
w-full

border-0
border-b-[1.5px]
border-[#631015]/30

bg-white

p-2

font-inter
font-medium
text-[15px]
text-[#1A1C1B]

placeholder:font-medium
placeholder:text-[#1A1C1B]/50


outline-none

transition-all
duration-300

focus:border-[#631015]
focus:ring-0
"
          />
        </div>
        {/* Message */}
        <div>
          <label
            className="
              mb-2
              block

              font-inter
              font-medium

              text-[12px]

              text-[#6E6E6E]
            "
          >
            Your Message
          </label>

          <textarea
            rows={6}
            placeholder="How can we assist you?"
            className="
              min-h-[180px]
              w-full

              resize-none

             border-0
border-b-[1.5px]
border-[#631015]/30

bg-white

p-2


              font-inter
              font-medium

              text-[15px]
              text-[#1A1C1B]

              placeholder:text-[#A1A1A1]
              placeholder:font-medium

              outline-none

              transition-all
              duration-300

              focus:border-[#631015]
            "
          />
        </div>
        <button
          type="submit"
          className="
    group
    mt-2
    flex
    h-[56px]
    w-full
    items-center
    justify-center
    rounded-[3px]
    bg-[#631015]
    text-white
    font-inter
    font-semibold
    text-[17px]
    hover:bg-[#4E0D11]
    transition-all
    duration-300
  "
        >
          <div className="flex items-center gap-1.5">
            <span>Send Message</span>

            <img
              src={arrow}
              alt="Arrow"
              className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
            />
          </div>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
