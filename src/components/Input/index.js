
export const Input = ({ name, onChange=, ...rest }) => (
  <input onChange={e => onChange(e.target.value)} name="name" {...rest} />
);
