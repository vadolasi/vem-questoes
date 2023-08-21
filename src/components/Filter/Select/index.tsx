import RSelect from "react-select";

interface IProps {
  title: string
  options: { value: string, label: string }[]
  value: { value: string, label: string }[]
  setValue: (value: { value: string, label: string }[]) => void
}

const Select: React.FC<IProps> = ({ title, value, setValue, options }) => {
  return (
    <div>
      <RSelect
        classNames={{
          control: () => "w-52 text-sm",
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
