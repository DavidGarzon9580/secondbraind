import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations("");

  return (
    <footer className="footer">
      <p className=" footer__text">© 2025 Second Brain — {t("footer.builtfor")}.</p>
      <div className="footer__links">
        <a  className="footer__link" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          {t("footer.linkprivacy")}
        </a>
        <a  className="footer__link" href="/terms-of-service" target="_blank" rel="noopener noreferrer">
          {t("footer.linkterms")}
        </a>
        <a  className="footer__link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          {t("footer.linkgithub")}
        </a>
      </div>
    </footer>
  );
}
