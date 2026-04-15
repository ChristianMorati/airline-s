import Button from "../ui/Button";
import styles from './LandingPage.module.css'
import { OurContent } from "./OurContent/OurContent";

export function LandingPage() {
    return (
        <div className="flex flex-col
        roboto-mono-italic
        ">
            <div className="
                relative
                w-full h-[90vh]
                max-w-[1200px]
                mx-auto
                flex flex-col md:flex-row
                overflow-hidden
            ">
                <div className="
                    absolute
                    hidden md:flex
                    py-10 w-[30%]
                    bg-white
                    border-y
                    rotate-[-45deg]
                    top-0
                    left-[-10%]
                    justify-center items-center
                ">
                    <h3
                        className="
                            hidden md:block
                            text-4xl
                            text-black
                            font-bold
                        "
                    >100%</h3>
                </div>
                <div className="
                    h-[100vh]
                    items-start
                    flex flex-col gap-8
                    pt-2
                    md:pt-0
                    md:justify-center
                    w-full md:w-[50%]
                    relative
                    pl-10 pr-2
                ">
                    <h1 className="
                    text-bold
                    text-xl md:text-4xl
                    uppercase
                    md:text-nowrap
                ">Evolua seus <span
                            className="
                        text-black
                        bg-white
                        rounded-full
                        px-2
                        py-1
                        inline-block
                        ">conhecimentos
                        </span>
                        <br />
                        para alcançar <span className={[styles.underlineAnim] + `
                    text-yellow-200
                `}>aprovação!</span>
                    </h1>
                    <h3 className="
                    text-xl
                ">Treine com diversas questões e passe no simulado x
                    </h3>
                    <div className="
                        flex gap-4 
                        flex-col md:flex-row
                    ">
                        <Button variant="slim">
                            EVOLUIR AGORA
                        </Button>
                        <Button className="
                            !bg-yellow-200
                        " variant="slim">
                            ENTRAR
                        </Button>
                    </div>
                </div>

                <div className="
                    flex flex-row
                    items-end
                    justify-end
                    w-[50%]
                ">
                    <div className="
                        h-[80%]
                        rounded-tl-3xl
                        bg-white
                        w-[80%]
                    "></div>
                </div>
            </div>
            <div className="relative w-16 h-20">
                <div className={`${styles.arrow} ${styles.arrow1} ${styles.levelUp}`}>
                    <img src="/images/arrow-up.png" alt="" />
                </div>
                <div className={`${styles.arrow} ${styles.arrow2} ${styles.levelUp}`}>
                    <img src="/images/arrow-up.png" alt="" />
                </div>
                <div className={`${styles.arrow} ${styles.arrow3} ${styles.levelUp}`}>
                    <img src="/images/arrow-up.png" alt="" />
                </div>
            </div>
            <div className="
                text-white
                max-w-[1200px]
                mx-auto
            ">
                <OurContent />
            </div>
            
        </div>
    )
}