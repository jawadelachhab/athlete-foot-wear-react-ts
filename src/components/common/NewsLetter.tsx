import {footerData} from "@data"
import { Container, Button } from "@components/ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";

const NewsLetter = () => {

  const {title,content} = footerData.newsLetter
  return (
    <section className="py-16 bg-dark">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        <div className="flex items-center xl:divide-x divide-white">
          <HugeiconsIcon
            icon={Mail01Icon}
            size={80}
            color="#ffffff"
            className="hidden xl:block xl:pr-6"
          />

          <div className="xl:pl-6 text-white">
            <h2 className="text-3xl font-bold capitalize mb-4">
             {title}
            </h2>
            <p className="text-white">
             {content}
            </p>
          </div>
        </div>
        <form className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full py-3 px-6 h-[59px] mb-6 md:mb-0"
            aria-label="Email address for newsletter"
          />
          <Button type="submit" className=" md:!absolute md:top-1 md:right-1">
            Subscribe
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default NewsLetter;
