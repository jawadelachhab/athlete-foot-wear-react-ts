import { Breadcrumb } from "@components/ui";
import { Team, Intro , Stages} from "@components/pages/aboutus";
const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About us" />
      <Intro />
      <Stages/>
      <Team />
    </>
  );
};

export default AboutUs;
