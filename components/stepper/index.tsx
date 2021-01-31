import { cloneElement, Children, useState } from "react";
import { StepContent } from "../step-content";

export const Stepper = ({
  children,
  canSwitch = true,
  activeIndex: activeIndexArgument,
  onChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexArgument || 0);

  const childrenWithProps = Children.map(children, (child, index) => {
    const canPrevious = activeIndex > 0;
    const canNext = activeIndex < children.length - 1;
    const isPrevious = activeIndex > index;
    const isVisible = activeIndex === index;

    return cloneElement(child, {
      children: (
        <div
          onClick={() => {
            canSwitch && setActiveIndex(index);
          }}
          style={{ backgroundColor: "white" }}
        >
          <div>{`${child.props.title} ${isPrevious ? "✓" : ""}`}</div>
          <StepContent visible={isVisible}>
            {child.props.children}
            <br />
            <button
              disabled={!canPrevious}
              onClick={async (e) => {
                e.stopPropagation();

                if (canPrevious) {
                  setActiveIndex(index - 1);
                }
              }}
            >
              previous
            </button>
            <button
              onClick={async (e) => {
                e.stopPropagation();

                if (canNext) {
                  setActiveIndex(index + 1);
                }
              }}
              disabled={!canNext}
            >
              next
            </button>
          </StepContent>
          <hr />
        </div>
      ),
    });
  });

  return <div onChange={onChange(activeIndex)}>{childrenWithProps}</div>;
};
