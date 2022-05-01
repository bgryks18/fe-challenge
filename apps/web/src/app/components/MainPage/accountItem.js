const AccountItem = (props) => {
  return (
    <>
      <div>{props.currency}</div>
      <div>{props.name}</div>
      <div>{props.currency}</div>
      <div>{props.accountNumber}</div>
    </>
  );
};

export default AccountItem;
