import './Footer.css';

function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          © {current_year} Baboon Technologies. Todos los derechos reservados.
        </p>

        <a
          href="https://www.enisa.es"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-enisa"
          aria-label="Empresa financiada por ENISA (abre enisa.es)"
        >
          <img
            src="/sello-enisa.jpg"
            alt="Financiada por ENISA — Ministerio de Industria, Comercio y Turismo"
            className="footer-enisa-img"
            width="300"
            height="247"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
