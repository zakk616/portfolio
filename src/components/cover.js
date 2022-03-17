import "../styles.css";

export default function Cover() {
  return (
    <div id="particles-js">
      <div id="js-dim"></div>
      <a id="js-download" className="download" href="#"></a>
      <div className="cv-role" id="cv-role">
        <a
          href="./public/cv-dotnet.pdf"
          className="js-dismiss"
          data-os="Dotnet FullStack"
        >
          <img
            className="img-icon"
            src="images/img-dotnet.svg"
            alt="dotnet icon"
          />
        </a>
        <a
          href="./public/cv-ml.pdf"
          className="js-dismiss"
          data-os="Machine Learning"
        >
          <img
            className="img-icon"
            src="images/img-tensorflow.svg"
            alt="tensorflow icon"
          />
        </a>
      </div>

      <div className="header">
        <h1>
          <span className="site-title">MUHAMMAD ZAKARIA</span>
          <div className="site-description">
            <p id="typed" className="typed"></p>
          </div>
        </h1>

        <div className="header-links">
          <a className="link" href="#about" data-scroll>
            About Me
          </a>
          <a className="link" href="#skills" data-scroll>
            Skills
          </a>
        </div>
      </div>
      <a className="down" href="#about" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>
  );
}
