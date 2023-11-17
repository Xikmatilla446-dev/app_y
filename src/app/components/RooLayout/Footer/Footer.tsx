import Image from "next/image";


import { Container } from "@/components";
import classes from "./Footer.module.scss";
import Ring from "@/assets/svg/ring.svg";
import Globus from "@/assets/svg/globus.svg";
import Telegram from "@/assets/svg/telegram.svg";

const Footer = () => {


  const network = [
    {
      title: "(71) 123-45-67",
      icon: <Ring/>
    },
    {
      title: "https://yangiyulshahar.uz",
      icon: <Globus/>
    },
    {
      title: "https://t.me/yangiyulshahar",
      icon: <Telegram/>
    }
  ]

  return (
    <div className={classes.wrapper}>
      <Container>
        <section  >
          <div className={classes.logo_wrapper}  >
            <Image
                className={classes.logo}
                src={"/images/logo.svg"} alt="e-imzo" width={180} height={60} style={{width: "auto"}}/>
          </div>
          <div  >
            <div className={classes.network}  >
              {network.map(({title, icon}:any,  i)=> (
                  <a key={i} className={"d-flex"} href={title}>{icon}&nbsp;{title}</a>
                ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Footer;
