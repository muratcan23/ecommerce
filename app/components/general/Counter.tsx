import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyles =
    "w-8 h-8 border flex items-center justify-center text-lg rounded-md cursor-pointer";

  return (
    <div className="flex items-center gap-2 ">
      <div className={buttonStyles} onClick={decreaseFunc}>
        -
      </div>
      <div className="text-lg md:xl text-red-500">{cardProduct?.quantity} </div>
      <div className={buttonStyles} onClick={increaseFunc}>
        +
      </div>
    </div>
  );
};
