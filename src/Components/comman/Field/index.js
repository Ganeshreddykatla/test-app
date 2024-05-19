import { ErrorMessage, Field, useField } from "formik";

const InputField = ({
  label,
  showError = false,
  name,
  inputSty = "appearance-none font-medium text-13 sm:text-[16px] w-full rounded-xl border border-[#79747E]/20 py-2.5 px-3 text-black-haiti placeholder:text-black-haiti sm:leading-6 outline-none h-[52px]",
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && (
        <p className="text-[12px] font-semibold mb-1.5  text-gray-600">
          {label}
        </p>
      )}
      <div>
        <input
          className="appearance-none font-medium text-13 sm:text-[16px] w-full rounded-xl border border-[#79747E]/20 py-2.5 px-3 text-black-haiti placeholder:text-black-haiti sm:leading-6 outline-none h-[52px]"
          {...field}
          {...props}
        />
        {showError && (
          <ErrorMessage component="span" name={name} className="text-red-500" />
        )}
      </div>
    </div>
  );
};

export default InputField;
