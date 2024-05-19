const Button = ({
  className = "text-13 sm:text-base w-full bg-distemper-main/80 inline-block py-3 px-5 text-md font-medium text-center text-white rounded-lg transition duration-200 hover:bg-distemper-main",
  buttonTitle = "submit",
  ...restProps
}) => {
  return (
    <button className={className} {...restProps}>
      {buttonTitle}
    </button>
  );
};

export default Button;
