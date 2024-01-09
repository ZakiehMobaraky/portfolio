// در این کامپوننت ما یک خط داریم در واقع به شکل 
//hr هست
const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;