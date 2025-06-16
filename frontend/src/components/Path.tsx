import logo from '../assets/images/pathLogo.jpg';

const titulos = [
    {title: 'Trayectoria'},
    {title: 'Cursos, Jornadas, Seminarios y Convenciones'}
];

const trayectoria = [
    {
        year: '2008',
        study: 'ABOGADA',
        description: 'EGRESADA DE LA FACULTAD DE DERECHO DE LA UNIVERSIDAD DE BUENOS AIRES (U.B.A.)'
    },
    {
        year: '2010',
        study: 'ESCRIBANA ADSCRIPTA',
        description: 'REGISTRO NOTARIAL DE LA CIUDAD DE BUENOS AIRES.'
    },
    {
        year: '2014',
        study: 'ESCRIBANA TITULAR',
        description: 'REGISTRO NOTARIAL 389 DE LA CIUDAD DE BUENOS AIRES, CON MENCIÓN ESPECIAL DEBIDO A LA OBTENCIÓN DEL PUNTAJE MÁS ALTO EN LA EVALUACIÓN DE IDONEIDAD.'
    },
    {
        year: '2019',
        study: 'MEDIADORA PÚBLICA',
        description: 'EN CIUDAD DE BUENOS AIRES, NOMBRADA POR LA DIRECCIÓN DE MEDIACIÓN DEPENDIENTE DEL MINISTERIO DE JUSTICIA DE LA NACIÓN.'
    },
    {
        year: '2019',
        study: 'POSGRADO ESPECIALIZACIÓN EN DERECHO DE FAMILIA',
        description: 'DICTADO POR LA FACULTAD DE DERECHO DE LA UNIVERSIDAD DE BUENOS AIRES (EN CURSO).'
    },
    {
        year: '2021',
        study: 'DOCENTE',
        description: 'MATERIA "PRÁCTICA PROFESIONAL NOTARIAL" DE LA FACULTAD DE DERECHO DE LA UNIVERSIDAD DE BUENOS AIRES.'
    },
];

const extras = [
    {
        year: '2008',
        type: 'CONVENCIÓN',
        description: 'XXXV CONVENCIÓN NOTARIAL DEL COLEGIO DE ESCRIBANOS DE LA CIUDAD DE BUENOS AIRES. PARTICIPANTE.'
    },
    {
        year: '2008',
        type: 'SEMINARIO TEÓRICO-PRÁCTICO',
        description: '56° SEMINARIO TEÓRICO PRÁCTICO "LAUREANO ARTURO MOREIRA" ORGANIZADO POR LA ACADEMIA NACIONAL DEL NOTARIADO DE LA REP. ARGENTINA. PARTICIPANTE.'
    },
    {
        year: '2009',
        type: 'SEMINARIO TEÓRICO-PRÁCTICO',
        description: '57° SEMINARIO TEÓRICO PRÁCTICO "LAUREANO ARTURO MOREIRA" ORGANIZADO POR LA ACADEMIA NACIONAL DEL NOTARIADO DE LA REP. ARGENTINA. PARTICIPANTE.'
    },
    {
        year: '2011',
        type: 'CONVENCIÓN',
        description: 'XXXVIII CONVENCIÓN NOTARIAL DEL COLEGIO DE ESCRIBANOS DE LA CIUDAD DE BUENOS AIRES. EXPOSITORA.'
    },
    {
        year: '2011',
        type: 'JORNADA',
        description: 'XXIII JORNADAS NACIONALES DE DERECHO CIVIL 2011 ORGANIZADAS POR LA FACULTAD DE DERECHO Y CIENCIAS SOCIALES DE LA UNIVERSIDAD NACIONAL DE TUCUMÁN. PONENTE. EXPOSITORA.'
    },
    {
        year: '2012',
        type: 'JORNADA',
        description: 'XXX JORNADA NOTARIAL ARGENTINA, MENDOZA. PONENTE. EXPOSITORA.'
    },
    {
        year: '',
        type: 'ASESORA',
        description: 'ASESORAMIENTO BRINDADO EN LA CAMPAÑA DE SERVICIO Y ORIENTACIÓN A LA COMUNIDAD "CUIDÁ LO TUYO" ORGANIZADA POR EL COLEGIO DE ESCRIBANOS DE LA CIUDAD DE BUENOS AIRES, QUE SE REALIZA CADA AÑO EN EL COLEGIO DE ESCRIBANOS.'
    },
    {
        year: '2014',
        type: 'JORNADA',
        description: 'JORNADA NOTARIAL ARGENTINA, CÓRDOBA. PONENTE. EXPOSITORA Y REDACTORA.'
    },
    {
        year: '2016',
        type: 'CURSO',
        description: 'CURSO DE MEDIACIÓN TEÓRICO-PRACTICO DICTADO POR FUNDACIÓN LIBRA.'
    },
    {
        year: '',
        type: 'SEMINARIO',
        description: 'SEMINARIO TEÓRICO-PRÁCTICO DICTADO POR LA DIRECCIÓN DE MEDIACIÓN.'
    },
    {
        year: '',
        type: 'MIEMBRO',
        description: 'MIEMBRO DEL INSTITUTO DE DERECHO CIVIL DEL COLEGIO DE ESCRIBANOS DE LA CIUDAD DE BUENOS AIRES.'
    },
];

const Path = () => {
    return (
        <section className="relative">
            <div className="relative h-[500px] lg:h-[550px]">
                <img
                    src={logo}
                    alt="imagen principal del componente"
                    className="w-full h-full object-cover"
                />
                
                <div
                    className="absolute inset-0 bg-black opacity-60"
                    aria-hidden="true"
                />

                <div className="absolute top-[30%] left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] max-w-2xl px-4 sm:px-0">
                    <h1 className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] text-[#ffe7a8] mb-4 sm:mb-6">
                        Viviana Mariel Villahoz
                    </h1>
                    <p className="text-white text-md sm:text-base md:text-lg lg:text-xl xl:text-[17px] font-light 
                                pr-4 sm:pr-8 md:pr-16 lg:pr-24 
                                max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]">
                        Escribana Pública Titular del Registro Notarial número 389 (Matrícula 5.222) 
                        de la Ciudad de Buenos Aires. –
                    </p>
                </div>

                <div className="absolute bottom-12 right-0 
                                w-[70%] sm:w-[75%] md:w-[70%] lg:w-[85%] xl:w-full 
                                max-w-[1068px] h-[102px] 
                                bg-gradient-to-r from-transparent via-[#ffe7a8]/60 to-[#ffe7a8]" />
            </div>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 max-w-7xl">
                <div className="w-full h-px bg-black/20 mb-8" />
                {titulos.map((titulo, index) => (
                    <div key={index} className="mb-16">

                        <h2 className="text-[40px] font-bold text-black mb-8 tracking-wide text-[22px]">
                            {titulo.title}
                        </h2>

                        <div className="grid gap-y-6">
                            {index === 0
                                ? trayectoria.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="grid md:grid-cols-[150px_1fr_2fr] gap-4 items-start"
                                    >
                                        <div className="text-[#ffe7a8] text-[40px] font-bold"
                                            style={{ textShadow: "0.08em 0.08em 0.08em rgba(10, 5, 5, 0.84)" }}
                                            >
                                            {item.year}
                                        </div>
                                        <div className="font-bold text-gray-800 mt-6">
                                            {item.study}
                                        </div>
                                        <div className="font-medium text-gray-600 mt-6 ml-10">
                                            {item.description}
                                        </div>
                                        
                                    </div>
                                    
                                    
                                ))
                                
                                : (
                                    
                                    <>
                                        {extras.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="grid md:grid-cols-[150px_1fr_2fr] gap-4 items-start"
                                            >
                                                <div className="text-[#ffe7a8] text-[40px] font-bold"
                                                    style={{ textShadow: "0.08em 0.08em 0.08em rgba(10, 5, 5, 0.84)" }}
                                                    >
                                                    {item.year}
                                                </div>
                                                <div className="font-bold text-gray-800 mt-6">
                                                    {item.type || item.type}
                                                </div>
                                                <div className="font-medium text-gray-600 mt-6 ml-10">
                                                    {item.description}
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Path;