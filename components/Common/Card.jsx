const Card = ({ children, className: classes }) => {
  return <div className={`card ${classes}`}>{children}</div>;
};
export default Card;
