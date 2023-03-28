import { Input } from './styles';
import styles from './styles.module.css'

const currencyNames = {
    uah: 'UAH',
    usd: 'USD'
};

const Price = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  }

  let fieldProps = { };
  if (props.currency === 'uah') {
      fieldProps = {
          uah: true
      };
  }

  return (
    <fieldset>
      <legend>PRICE [{currencyNames[props.currency]}]:</legend>
      <Input {...fieldProps} value={props.amount}
             onChange={e => handleChange(e)} readOnly/>
    </fieldset>
  );
}

export default Price;