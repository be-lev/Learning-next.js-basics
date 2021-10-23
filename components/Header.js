import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDeb</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>

      {/* //! conditional styling  */}
      {/* <style jsx>
        {`
          .title {
            color: ${x>3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
