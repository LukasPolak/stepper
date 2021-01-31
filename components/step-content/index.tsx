export const StepContent = ({ children, visible }) => {
  return (
    <div
      style={{
        // visibility: visible ? "visible" : "hidden",
        overflow: "hidden",
        maxHeight: visible ? "500px" : "0px",
        transition: "all 0.8s linear",
      }}
    >
      {children}
    </div>
  );
};
