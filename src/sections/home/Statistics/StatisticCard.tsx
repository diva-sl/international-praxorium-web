import useCountUp from "../../../hooks/useCountUp";

interface Props {
  value: number;
  suffix: string;
  title: string;
}

const StatisticCard = ({ value, suffix, title }: Props) => {
  const count = useCountUp(value);

  return (
    <>
      <h3
        className="
    font-inter
    font-semibold
    text-[40px]
    sm:text-[44px]
    lg:text-[50px]
    leading-none
    text-white
    text-center
  "
      >
        {count}
        {suffix}
      </h3>

      <p
        className="
    mt-2

    font-inter
    font-medium

    text-[13px]
    sm:text-[14px]
    lg:text-[15px]

    leading-5

    text-white/90

    text-center

    whitespace-normal
    lg:whitespace-nowrap
  "
      >
        {title}
      </p>
    </>
  );
};

export default StatisticCard;
