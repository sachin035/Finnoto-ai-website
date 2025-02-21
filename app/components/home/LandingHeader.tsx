export const LandingHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className="text-4xl leading-[3.5rem] lg:text-[76px] font-semibold lg:leading-[6rem]">
      {children}
    </h1>
  );
};
