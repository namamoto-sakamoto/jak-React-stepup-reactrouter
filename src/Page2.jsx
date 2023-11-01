import { Link } from "react-router-dom";

export const page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/100?neme=hogehoge">Query Parameter</Link>
    </div>
  );
};
