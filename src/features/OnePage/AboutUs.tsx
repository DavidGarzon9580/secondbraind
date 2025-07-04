import { useTranslations } from 'next-intl';

export default function AboutUs() {
    const t = useTranslations("abuotus");


    return (
        <>
            <section className="section  section--about" id="about-us">
                <div className="divisions">
                    <h1 className="title">{t("title")}</h1>
                    <p className="paragraph_about">{t("paragraph1")}</p>
                </div>
                <div className="divisions">
                    <h2 className="subtitle_about">{t("subtitle")}</h2>
                    <ul className="list_about">
                        <li className="list_about_line">
                            {" "}
                            <span className=" Arrow_list">→</span>
                            {t("listaboutwhy.0")}
                        </li>
                        <li className="list_about_line">
                            {" "}
                            <span className=" Arrow_list">→</span>{" "}
                            {t("listaboutwhy.1")}
                        </li>
                        <li className="list_about_line">
                            {" "}
                            <span className=" Arrow_list">→</span>
                            {t("listaboutwhy.2")}
                        </li>
                    </ul>
                </div>
            </section>


                <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1>Mi Página</h1>
    </main>

        </>
    );
};