import img from '../assets/images/history.jpg';
import divider from '../assets/images/dividers/dividerPath2.svg'
import divider2 from '../assets/images/dividers/divider.svg';
import { motion } from 'framer-motion';


const History = () => {
    return(
        <section id='historia'>
            <div>
                <img
                src={divider}
                alt="Divider Path"
                className="w-full h-[16vh] "
                />
            </div>              
            <div className='flex flex-col md:flex-row my-5 mx-auto max-w-6xl gap-16 px-4'>
                <motion.div 
                    id="right" 
                    className='md:w-3/5'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    <h2 className='text-[#edbb5f] text-[14px] font-bold mb-4'>2 DE OCTUBRE - DÍA DEL ESCRIBANO</h2>
                    <h1 className='text-xl md:text-[38px] mb-8 font-playfair font-bold text-[#333] tracking-normal'>ALGO DE HISTORIA</h1>
                    <div id='divider' className='w-16 h-0.5 bg-[#edbb5f] mb-6'></div>
                    <p className='text-left font-light text-[15px]'>
                        Allá en el tiempo… en la época del Imperio antiguo, eran los “scribas” quienes 
                        compilaban los manuscritos religiosos de la época. Si bien eran colaboradores del imperio, se cuenta que 
                        no tenían facultad fedante. En la cultura hebrea, los “escribas” estaban categorizados según su función: escribas del rey, 
                        escribas del Estado, escribas de la ley y escribas del pueblo. El “escriba del pueblo” era quien redactaba los documentos, posibilitando 
                        que los ciudadanos lograran reflejar su voluntad en acuerdos justos. Y el escriba de la ley, era el intérprete de la ley y se equiparaba al 
                        rango sacerdotal, lo cual le adicionaba una carga moral superior que influía en dicha interpretación y la aplicación de la ley. Pero definitivamente, 
                        como señala Pondé (Pondé, Eduardo Bautista. Origen e historia del Notariado, p.) 35 (Depalma, Buenos Aires, 1967), el antecesor del notariado es el “tabelión”
                        del Imperio Romano, quien presentaba conocimiento del derecho y además de su capacidad redactora, actuaba como asesor jurídico, y conservador de documentos 
                        sin ser funcionario del estado. Con el correr del tiempo, se fue asimilando cada vez más a la función del escribano tal cual existe en nuestros tiempos. 
                        Pero solo con esta pequeña reseña histórica de nuestros antepasados, se advierten las dos grandes condiciones que debe tener todo escribano para cumplir 
                        correctamente su función; y ellas son la excelencia académica y profesional y la conducta moral irreprochable en el ejercicio de la función fedataria 
                        delegada por el Estado.
                    </p>
                </motion.div>
        
              
                <motion.div
                    id="left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="md:w-3/5 mt-6 md:mt-0">

                    <img
                        src={img}
                        alt='history'
                        className='w-full h-auto object-cover shadow-lg'
                    />
                </motion.div>


               
            </div>

            <img 
                src={divider2}
                alt="Divider"
                className="w-full h-[19vh] mt-14"
            />
            
        </section>
    )
}

export default History;