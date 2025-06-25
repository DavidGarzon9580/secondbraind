
import Button from '@/shared/ui/Button/Button';
import { useTranslations } from 'next-intl';
import ImageBrain from '@/../public/images/Brain.png';
import Image from 'next/image';

 
export default function Home() {
    const t = useTranslations("home");
  return (
    <>
        <section className="section section--home" id="home">
          <div className="divisions">
            <h1 className="title">{t("title")}</h1>
            <h2 className="subtitle_home">{t("subtitle")}</h2>
            <Button href="login">{t("button")}</Button>
          </div>
          <div className="divisions">
          <Image
            src={ImageBrain}
            className="section--home--components    brain-image"
            alt="Brain Illustration"
          />
          </div>
        </section>

    </>
  );
};