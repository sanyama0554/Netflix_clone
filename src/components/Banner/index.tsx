import { useProps } from "./useProps";
import Layout from "./Layout";

const Banner = () => {
  return <Layout {...useProps()}/>;
}

export default Banner;