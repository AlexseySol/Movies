import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <div>@ {new Date().getFullYear()} Copyright text</div>
        <a href="#">Movies</a>
      </div>
    </footer>
  );
};
