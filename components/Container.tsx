type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full max-w-7xl px-5 mx-auto">{children}</div>;
};

export default Container;
