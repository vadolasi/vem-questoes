import clsx from "clsx";
import RSelect from "react-select";

interface IProps {
  title: string
  options: { value: string, label: string }[]
  value: { value: string, label: string }[]
  setValue: (value: { value: string, label: string }[]) => void
  fullWitdh?: boolean
}

const Select: React.FC<IProps> = ({ title, value, setValue, options, fullWitdh = false }) => {
  return (
    <div>
      <RSelect
        className={clsx("w-full", !fullWitdh && "md:w-52")}
        classNames={{
          control: () => clsx("w-full text-sm", !fullWitdh && "md:w-52"),
          menu: () => "text-sm"
        }}
        placeholder={title}
        value={value}
        isMulti
        options={options}
        onChange={(options) => setValue([...options])}
      />
    </div>
  )
}

export default Select
