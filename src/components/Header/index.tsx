import Layout from "./Layout";
import { useProps } from "./useProps";

const Header = () => {
  return (
    <Layout {...useProps()}/>
  );
}

export default Header;