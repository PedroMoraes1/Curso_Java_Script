import Fundo from '../../assets/image/wallpaper.png'
import './style.css'
import { Card } from '../card'

export const MainSection = () => {
    return (
        <main>
            <div className='main1'>
                <img src={Fundo} alt="imagem de fundo" />
                <div className='main2'>
                    <h2>Aprendendo REACT básico com projetos reais</h2>

                    <p className='p1'>
                        Nossa plataforma oferece cursos práticos, com foco em desenvolvimento de projetos do zero.
                        Aprenda na prática com aulas simples, didáticas e acessíveis
                    </p>
                </div>
            </div>

            <div className="card-grid">
                <Card
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card
                    title="ReactJS na prática"
                    description="Componentes, props, hooks e muito código"
                />
                <Card
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card
                    title="ReactJS na prática"
                    description="Componentes, props, hooks e muito código"
                />
                <Card
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card
                    title="ReactJS na prática"
                    description="Componentes, props, hooks e muito código"
                />
                <Card
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card
                    title="ReactJS na prática"
                    description="Componentes, props, hooks e muito código"
                />
                <Card
                    title="ReactJS na prática"
                    description="Componentes, props, hooks e muito código"
                />

            </div>

        </main>
    )
}