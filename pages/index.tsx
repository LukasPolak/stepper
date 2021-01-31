import { Step } from "../components/step";
import { Stepper } from "../components/stepper";

export default function Home() {
  return (
    <Stepper
      canSwitch={false}
      activeIndex={2}
      onChange={(activeIndex) => {
        console.log({ activeIndex });
      }}
    >
      {[...new Array(5)].map((_, i) => {
        return (
          <Step key={i} title={`Step ${i + 1}`}>
            <br />
            {`Content ${i + 1}`}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
            expedita, dolorem maxime exercitationem et corrupti eligendi iusto.
            Est exercitationem mollitia explicabo quae odio cupiditate iusto
            nesciunt voluptatum neque quasi?
            <br />
          </Step>
        );
      })}
    </Stepper>
  );
}
