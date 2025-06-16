const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Escribanía Villahoz</h3>
            <p className="text-gray-400">
              Servicios notariales de excelencia con más de 30 años de experiencia.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Horario de Atención</h3>
            <p className="text-gray-400">
              Lunes a Viernes<br />
              9:00 - 18:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Escribanía Villahoz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;