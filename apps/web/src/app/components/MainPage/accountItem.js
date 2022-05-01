import icons from 'currency-icons';
const AccountItem = (props) => {
  return (
    <>
      <div>{icons[`${props.currency}`].symbol}</div>
      <div>{props.name}</div>
      <div>{props.currency}</div>
      <div>{props.accountNumber}</div>
    </>
  );
};

export default AccountItem;
