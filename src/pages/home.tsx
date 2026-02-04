import { useState, useEffect } from 'react';
import { Scale, Shield, Users, Award, BookOpen, ChevronRight, X, Menu, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function LawFirmLanding() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const LoginModal = () => (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div className="bg-white w-full max-w-md rounded-none shadow-2xl relative"
                style={{ animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <button onClick={() => setShowLogin(false)}
                    className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors">
                    <X size={24} />
                </button>

                <div className="p-10">
                    <h2 className="text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Bienvenido
                    </h2>
                    <p className="text-neutral-500 mb-8" style={{ fontFamily: 'Crimson Pro, serif' }}>
                        Acceda a su portal legal
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                CORREO ELECTRÓNICO
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="su.correo@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                CONTRASEÑA
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-neutral-900" />
                                <span className="text-neutral-600">Recordarme</span>
                            </label>
                            <a href="#" className="text-neutral-900 hover:underline">¿Olvidó su contraseña?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10" style={{ letterSpacing: '0.1em' }}>INICIAR SESIÓN</span>
                            <div className="absolute inset-0 bg-neutral-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                    </form>

                    <p className="text-center mt-6 text-neutral-600">
                        ¿No tiene cuenta?{' '}
                        <button
                            onClick={() => { setShowLogin(false); setShowRegister(true); }}
                            className="text-neutral-900 hover:underline font-medium"
                        >
                            Regístrese aquí
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

    const RegisterModal = () => (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div className="bg-white w-full max-w-md rounded-none shadow-2xl relative max-h-[90vh] overflow-y-auto"
                style={{ animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <button onClick={() => setShowRegister(false)}
                    className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10">
                    <X size={24} />
                </button>

                <div className="p-10">
                    <h2 className="text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Crear Cuenta
                    </h2>
                    <p className="text-neutral-500 mb-8" style={{ fontFamily: 'Crimson Pro, serif' }}>
                        Únase a nuestra comunidad legal
                    </p>

                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                    NOMBRE
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                    APELLIDO
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                CORREO ELECTRÓNICO
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="su.correo@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                TELÉFONO
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="+57 300 000 0000"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                CONTRASEÑA
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-neutral-700" style={{ letterSpacing: '0.05em' }}>
                                CONFIRMAR CONTRASEÑA
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer text-sm text-neutral-600">
                            <input type="checkbox" className="mt-1 accent-neutral-900" />
                            <span>
                                Acepto los términos y condiciones y la política de privacidad
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10" style={{ letterSpacing: '0.1em' }}>REGISTRARSE</span>
                            <div className="absolute inset-0 bg-neutral-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                    </form>

                    <p className="text-center mt-6 text-neutral-600">
                        ¿Ya tiene cuenta?{' '}
                        <button
                            onClick={() => { setShowRegister(false); setShowLogin(true); }}
                            className="text-neutral-900 hover:underline font-medium"
                        >
                            Inicie sesión
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-50" style={{ fontFamily: 'Crimson Pro, serif' }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Crimson+Pro:wght@300;400;500;600&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        
        .border-gradient {
          position: relative;
        }
        
        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, #262626, #737373);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo-r.png"
                            alt="Logo"
                            className="w-50 h-30 object-contain"
                        />
                        
                    </div>


                    <div className="hidden md:flex items-center gap-8">
                        <a href="#servicios" className="text-neutral-700 hover:text-neutral-900 transition-colors">Servicios</a>
                        <a href="#equipo" className="text-neutral-700 hover:text-neutral-900 transition-colors">Equipo</a>
                        {/*<a href="#casos" className="text-neutral-700 hover:text-neutral-900 transition-colors">Casos de Éxito</a> */}
                        <a href="#contacto" className="text-neutral-700 hover:text-neutral-900 transition-colors">Contacto</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setShowLogin(true)}
                            className="px-6 bg-neutral-400 py-2 text-neutral-900 hover:bg-neutral-300 transition-colors cursor-pointer "
                            style={{ letterSpacing: '0.05em' }}
                        >
                            INICIAR SESIÓN
                        </button>
                        <button
                            onClick={() => setShowRegister(true)}
                            className="px-6 py-2 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                            style={{ letterSpacing: '0.05em' }}
                        >
                            REGISTRARSE
                        </button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={28} className="text-neutral-900" />
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-neutral-200">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#servicios" className="block text-neutral-700">Servicios</a>
                            <a href="#equipo" className="block text-neutral-700">Equipo</a>
                            <a href="#casos" className="block text-neutral-700">Casos de Éxito</a>
                            <a href="#contacto" className="block text-neutral-700">Contacto</a>
                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={() => { setShowLogin(true); setMobileMenuOpen(false); }}
                                    className="w-full px-6 py-2 text-neutral-900 border border-neutral-900"
                                >
                                    INICIAR SESIÓN
                                </button>
                                <button
                                    onClick={() => { setShowRegister(true); setMobileMenuOpen(false); }}
                                    className="w-full px-6 py-2 bg-neutral-900 text-white"
                                >
                                    REGISTRARSE
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-stone-100"></div>
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #404040 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-slide-in-left stagger-1">
                            <div className="inline-block px-4 py-1 bg-neutral-900 text-white text-sm mb-6" style={{ letterSpacing: '0.1em' }}>
                                INICIA TU ASISTENTE LEGAL IA
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
                                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                                Excelencia Legal
                                <br />
                                <span className="text-neutral-600">para un Futuro</span>
                                <br />
                                Más Justo
                                <br />
                                <span className="text-neutral-600">y Automatizado</span>

                            </h1>
                        </div>

                        <p className="text-xl text-neutral-600 leading-relaxed animate-slide-in-left stagger-2">
                            Te ayudamos a realizar tus tramites juridicos con asistencia de IA para automatizarlos.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-slide-in-left stagger-3">
                            <button className="group px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                <span style={{ letterSpacing: '0.05em' }}>CONSULTA GRATUITA</span>
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer">
                                <span style={{ letterSpacing: '0.05em' }}>NUESTROS SERVICIOS</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-300 animate-slide-in-left stagger-4">
                            <div>
                                <div className="text-4xl font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>200+</div>
                                <div className="text-sm text-neutral-600" style={{ letterSpacing: '0.05em' }}>TRAMITES REALIZADOS</div>
                            </div>
                            <div>
                                <div className="text-4xl font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>10</div>
                                <div className="text-sm text-neutral-600" style={{ letterSpacing: '0.05em' }}>AÑOS DE EXPERIENCIA</div>
                            </div>
                            <div>
                                <div className="text-4xl font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>98%</div>
                                <div className="text-sm text-neutral-600" style={{ letterSpacing: '0.05em' }}>SATISFACCIÓN</div>
                            </div>
                        </div>
                    </div>



                    <div className="relative animate-slide-in-right stagger-2">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">

                            {/* Imagen */}
                            <img
                                src="/imagen3.png"
                                alt="IA aplicada al derecho"
                                className="absolute inset-0 w-full h-full object-cover scale-105"
                            />

                            {/* Overlay elegante */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Cita */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p
                                    className="text-white text-lg italic"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    "La justicia es la verdad en acción"
                                </p>
                                <p className="text-white/70 text-sm mt-2">— Joseph Joubert</p>
                            </div>

                        </div>
                    </div>



                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                            Áreas de Práctica
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Servicios legales especializados adaptados a sus necesidades
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield size={40} strokeWidth={1.5} />,
                                title: "Derecho Corporativo",
                                description: "Asesoría integral para empresas, fusiones, adquisiciones y compliance corporativo."
                            },
                            {
                                icon: <Users size={40} strokeWidth={1.5} />,
                                title: "Derecho Laboral",
                                description: "Defensa de derechos laborales, negociaciones colectivas y resolución de conflictos."
                            },
                            {
                                icon: <BookOpen size={40} strokeWidth={1.5} />,
                                title: "Derecho Civil",
                                description: "Contratos, responsabilidad civil, derecho de familia y sucesiones."
                            },
                            {
                                icon: <Award size={40} strokeWidth={1.5} />,
                                title: "Propiedad Intelectual",
                                description: "Protección de marcas, patentes, derechos de autor y activos intangibles."
                            },
                            {
                                icon: <Scale size={40} strokeWidth={1.5} />,
                                title: "Litigio y Arbitraje",
                                description: "Representación experta en procesos judiciales y métodos alternativos de resolución."
                            },
                            {
                                icon: <Shield size={40} strokeWidth={1.5} />,
                                title: "Derecho Penal",
                                description: "Defensa penal estratégica con enfoque en la protección de sus derechos."
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 border border-neutral-200 hover:border-neutral-900 transition-all duration-300 cursor-pointer relative overflow-hidden bg-white"
                            >
                                <div className="absolute inset-0 bg-neutral-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-neutral-900 group-hover:text-white transition-colors mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl mb-3 group-hover:text-white transition-colors"
                                        style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 group-hover:text-white/80 transition-colors">
                                        {service.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-neutral-900 group-hover:text-white transition-colors">
                                        <span className="text-sm" style={{ letterSpacing: '0.05em' }}>MÁS INFORMACIÓN</span>
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 48%, #fff 49%, #fff 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, #fff 49%, #fff 51%, transparent 52%)',
                    backgroundSize: '20px 20px'
                }}></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                        ¿Necesita Asesoría Legal Experta?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 leading-relaxed">
                        Agende una consulta gratuita con nuestros especialistas.
                        Estamos aquí para proteger sus derechos y defender sus intereses.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-10 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 cursor-pointer">
                            <span style={{ letterSpacing: '0.05em' }}>AGENDAR CONSULTA</span>
                        </button>
                        <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-all duration-300">
                            <span style={{ letterSpacing: '0.05em' }}>+57 (320) 789 1733</span>
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="border-l-2 border-white/30 pl-6 text-center">
                            <div className="text-3xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>24/7</div>
                            <div className="text-sm text-white/70" style={{ letterSpacing: '0.05em' }}>DISPONIBILIDAD</div>
                        </div>
                        <div className="border-l-2 border-white/30 pl-6 text-center">
                            <div className="text-3xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                            <div className="text-sm text-white/70" style={{ letterSpacing: '0.05em' }}>CONFIDENCIAL</div>
                        </div>
                        <div className="border-l-2 border-white/30 pl-6 text-center">
                            <div className="text-3xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>1ª</div>
                            <div className="text-sm text-white/70" style={{ letterSpacing: '0.05em' }}>CONSULTA GRATIS</div>
                        </div>
                        <div className="border-l-2 border-white/30 pl-6 text-center">
                            <div className="text-3xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>+20</div>
                            <div className="text-sm text-white/70" style={{ letterSpacing: '0.05em' }}>ESPECIALISTAS</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-950 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale size={32} strokeWidth={1.5} />
                                <div>
                                    <div className="text-xl font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Ai-sistente Juridico
                                    </div>
                                    <div className="text-xs tracking-widest text-neutral-500">ABOGADOS</div>
                                </div>
                            </div>
                            <p className="text-neutral-400 mb-6 leading-relaxed">
                                Firma de abogados comprometida con la excelencia legal y la defensa
                                apasionada de los derechos de nuestros clientes.
                            </p>

                            <div className="flex gap-4">
                                <button className="w-10 h-10 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center">
                                    <Linkedin size={18} />
                                </button>

                                <button className="w-10 h-10 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center">
                                    <Twitter size={18} />
                                </button>

                                <button className="w-10 h-10 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center">
                                    <Facebook size={18} />
                                </button>
                            </div>


                        </div>

                        <div>
                            <h3 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Enlaces Rápidos</h3>
                            <ul className="space-y-2 text-neutral-400">
                                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Equipo Legal</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Publicaciones</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contacto</h3>
                            <ul className="space-y-3 text-neutral-400 text-sm">
                                <li>Carrera 7 #7-7<br />Dosquebradas, Colombia</li>
                                <li>+57 (320) 789 1733</li>
                                <li>info@aisistente.com</li>
                                <li className="pt-2">
                                    <span className="text-xs text-neutral-500" style={{ letterSpacing: '0.05em' }}>
                                        LUNES - VIERNES: 8AM - 6PM
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                        <p>© 2026 Ai-sistente Juridico. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Ética Profesional</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            {showLogin && <LoginModal />}
            {showRegister && <RegisterModal />}

        </div>
    );
}