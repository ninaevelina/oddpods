interface HeartIconProps {
  onClick: () => void;
  isFilled: boolean;
}

export const HeartIcon = ({ onClick, isFilled }: HeartIconProps) => {
  return (
    <button onClick={onClick}>
      <svg
        viewBox="0 0 20 20"
        fill={isFilled ? "red" : "none"}
        xmlns="http://www.w3.org/2000/svg"
        className="w-[18px]"
        data-cy={
          isFilled
            ? "podcast-labels-heart-filled"
            : "podcast-labels-heart-outlined"
        } //change this
      >
        <path
          clip-rule="evenodd"
          d="M10 6.67c-.94-2.69-2.5-4.03-4.67-4.03-4.01 0-5.48 4.5-3.05 7.3 1.63 1.88 4.28 4.64 7.96 8.3 3.42-3.64 5.94-6.41 7.56-8.3 2.43-2.82.96-7.3-2.66-7.3-2.42 0-4.13 1.34-5.14 4.03Z"
          fill={isFilled ? "red" : "#fff"}
          fill-opacity="0.4"
          stroke="currentColor"
        ></path>
      </svg>
    </button>
  );
};

export default HeartIcon;
