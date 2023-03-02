import { Input } from './styles';

const currencyNames = {
    uah: 'UAH',
    usd: 'USD'
};

const Price = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>PRICE [{currencyNames[props.currency]}]:</legend>
      <Input value={props.amount}
             onChange={e => handleChange(e)} readOnly/>
    </fieldset>
  );
}

export default Price;