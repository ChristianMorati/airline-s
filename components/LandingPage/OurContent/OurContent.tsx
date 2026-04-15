import styles from './OurContent.module.css';

export function OurContent() {
    return (
        <>
            <div className="
                flex flex-col justify-center items-center
                gap-6
            ">
                <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-4xl uppercase">
                    Nosso Conteúdo
                </h1>
                <div className='
                    flex flex-row justify-center flex-wrap
                    gap-6 lg:gap-4
                '>
                    <div className={[styles.card] + ``}>
                        <img src="" alt="" />
                        <h3>Análise Avançada</h3>
                        <p>Otimize seu tempo de estudo por identificar seus pontos fortes e fracos</p>
                    </div>
                    <div className={[styles.card] + ``}>
                        <img src="" alt="" />
                        <h3>Análise Avançada</h3>
                        <p>Melhore suas fraquezas, Aumente seu resultado!</p>
                    </div>
                    <div className={[styles.card] + ``}>
                        <img src="" alt="" />
                        <h3>50.000 Questões</h3>
                        <p>Temos o suficiente para compor uma base sólida no assunto</p>
                    </div>
                    <div className={[styles.card] + ``}>
                        <img src="" alt="" />
                        <h3>50.000 Questões</h3>
                        <p>Temos o suficiente para compor uma base sólida no assunto</p>
                    </div>
                </div>
            </div>
        </>
    )
}