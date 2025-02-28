const TextField = ({
  iconInput = false,
  icon,
  className,
  type = 'text',
  placeholder,
  name,
  register,
  validationSchema,
  errors,
}) => {
  return iconInput ? (
    <div className="flex flex-col gap-y-1">
      <div className="relative">
        <input
          type={type}
          className={`app-input--icon${className ? ' ' + className : ''}${
            errors?.[name] ? ' app-input--error' : ''
          }`}
          placeholder={placeholder}
          {...register(name, validationSchema)}
        />
        {icon}
      </div>
      {errors?.[name] && (
        <span className="text-xs text-right text-red-500">
          {errors[name].message}
        </span>
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-y-1">
      <input
        type={type}
        className={`app-input${className ? ' ' + className : ''}${
          errors?.[name] ? ' app-input--error' : ''
        }`}
        placeholder={placeholder}
        {...register(name, validationSchema)}
      />
      {errors?.[name] && (
        <span className="text-xs text-right text-red-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default TextField;
