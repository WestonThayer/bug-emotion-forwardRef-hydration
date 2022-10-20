import React from "react";

const Button = React.forwardRef((props, ref) => (
  <button css={{ backgroundColor: "blue" }} ref={ref} {...props} />
));

// Does not cause a hydration error
// const Button = (props) => (
//   <button css={{ backgroundColor: "blue" }} {...props} />
// );

const Index = () => (
  <div>
    <Button>Hi</Button>
  </div>
);

export default Index;
