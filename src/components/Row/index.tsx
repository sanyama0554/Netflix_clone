import { useProps } from "./useProps";
import Layout from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  return (
    <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
  );
}

export default Row;