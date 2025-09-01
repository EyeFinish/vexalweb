// ===== CONFIGURACIÓN DE VEXAL WEBSITE =====
// Este archivo contiene todas las configuraciones personalizables
// Modifica estos valores según tus necesidades

window.VexalConfig = {
    
    // ===== INFORMACIÓN DE LA EMPRESA =====
    company: {
        name: "Vexal",
        tagline: "Innovación y Tecnología al Alcance de Todos",
        description: "Transformamos ideas en soluciones tecnológicas que marcan la diferencia",
        founded: "2020",
        industry: "Tecnología y Desarrollo de Software"
    },
    
    // ===== INFORMACIÓN DE CONTACTO =====
    contact: {
        email: "info@vexal.com",
        phone: "+1 (555) 123-4567",
        address: "Ciudad, País",
        website: "https://www.vexal.com",
        workingHours: "Lun - Vie: 9:00 AM - 6:00 PM"
    },
    
    // ===== REDES SOCIALES =====
    social: {
        linkedin: "https://linkedin.com/company/vexal",
        twitter: "https://twitter.com/vexaltech",
        facebook: "https://facebook.com/vexaltech",
        instagram: "https://instagram.com/vexaltech",
        github: "https://github.com/vexal"
    },
    
    // ===== SERVICIOS =====
    services: [
        {
            id: "software-development",
            title: "Desarrollo de Software a Medida",
            description: "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
            icon: "fas fa-code",
            features: ["Aplicaciones web", "Aplicaciones móviles", "Software empresarial", "APIs y microservicios"]
        },
        {
            id: "consulting",
            title: "Consultoría Tecnológica",
            description: "Asesoramos a tu empresa para tomar las mejores decisiones tecnológicas y optimizar tu infraestructura digital.",
            icon: "fas fa-comments",
            features: ["Auditoría tecnológica", "Arquitectura de sistemas", "Migración a la nube", "Optimización de procesos"]
        },
        {
            id: "integration",
            title: "Integración de Sistemas",
            description: "Conectamos y sincronizamos todos tus sistemas para crear un ecosistema tecnológico unificado y eficiente.",
            icon: "fas fa-link",
            features: ["APIs personalizadas", "Middleware empresarial", "Sincronización de datos", "Automatización de flujos"]
        },
        {
            id: "automation",
            title: "Automatización de Procesos",
            description: "Implementamos soluciones que automatizan tareas repetitivas y liberan tiempo para actividades estratégicas.",
            icon: "fas fa-robot",
            features: ["RPA (Robotic Process Automation)", "Workflows inteligentes", "Chatbots empresariales", "Machine Learning"]
        }
    ],
    
    // ===== VALORES CORPORATIVOS =====
    values: [
        {
            title: "Innovación",
            description: "Buscamos constantemente nuevas formas de resolver desafíos tecnológicos",
            icon: "fas fa-lightbulb",
            color: "#0066ff"
        },
        {
            title: "Eficiencia",
            description: "Optimizamos procesos para maximizar resultados con recursos mínimos",
            icon: "fas fa-chart-line",
            color: "#00ccff"
        },
        {
            title: "Confiabilidad",
            description: "Construimos soluciones robustas y seguras que inspiran confianza",
            icon: "fas fa-shield-alt",
            color: "#008080"
        },
        {
            title: "Accesibilidad",
            description: "Hacemos la tecnología accesible para empresas de todos los tamaños",
            icon: "fas fa-handshake",
            color: "#0066ff"
        },
        {
            title: "Compromiso",
            description: "Nos comprometemos con el éxito de nuestros clientes al 100%",
            icon: "fas fa-heart",
            color: "#00ccff"
        }
    ],
    
    // ===== RAZONES PARA ELEGIR VEXAL =====
    reasons: [
        {
            number: "01",
            title: "Experiencia",
            description: "Años de experiencia en el desarrollo de soluciones tecnológicas para diversos sectores",
            icon: "fas fa-award"
        },
        {
            number: "02",
            title: "Tecnología Adaptada",
            description: "Utilizamos las tecnologías más modernas y las adaptamos a tus necesidades específicas",
            icon: "fas fa-cogs"
        },
        {
            number: "03",
            title: "Soporte",
            description: "Soporte técnico continuo y mantenimiento preventivo para garantizar el funcionamiento óptimo",
            icon: "fas fa-headset"
        },
        {
            number: "04",
            title: "Enfoque en Resultados",
            description: "Nos enfocamos en generar valor real y resultados medibles para tu negocio",
            icon: "fas fa-target"
        },
        {
            number: "05",
            title: "Innovación Constante",
            description: "Nos mantenemos actualizados con las últimas tendencias y tecnologías emergentes",
            icon: "fas fa-rocket"
        }
    ],
    
    // ===== CONFIGURACIÓN DE ANIMACIONES =====
    animations: {
        enabled: true,
        duration: 600,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        delay: 100,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    },
    
    // ===== CONFIGURACIÓN DE PERFORMANCE =====
    performance: {
        lazyLoading: false,
        preloadImages: false,
        enableServiceWorker: false,
        cacheStrategy: "network-first",
        maxImageSize: "0px"
    },
    
    // ===== CONFIGURACIÓN DE ANALYTICS =====
    analytics: {
        enabled: false,
        googleAnalyticsId: "",
        facebookPixelId: "",
        linkedinInsightId: "",
        trackEvents: true,
        trackScroll: true,
        trackClicks: true
    },
    
    // ===== CONFIGURACIÓN DE SEO =====
    seo: {
        title: "Vexal - Innovación y Tecnología al Alcance de Todos",
        description: "Vexal es una empresa dedicada a ofrecer soluciones tecnológicas modernas, innovadoras y accesibles para empresas y emprendedores.",
        keywords: "desarrollo de software, consultoría tecnológica, integración de sistemas, automatización de procesos, tecnología empresarial",
        author: "Vexal",
        ogImage: "/images/og-image.jpg",
        twitterCard: "summary_large_image"
    },
    
    // ===== CONFIGURACIÓN DE FORMULARIOS =====
    forms: {
        contact: {
            enabled: true,
            fields: ["name", "email", "company", "message"],
            required: ["name", "email", "message"],
            submitEndpoint: "/api/contact",
            successMessage: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
            errorMessage: "Ha ocurrido un error. Por favor, intenta nuevamente."
        },
        newsletter: {
            enabled: false,
            fields: ["email"],
            required: ["email"],
            submitEndpoint: "/api/newsletter",
            successMessage: "¡Gracias por suscribirte a nuestro newsletter!",
            errorMessage: "Error al suscribirse. Por favor, intenta nuevamente."
        }
    },
    
    // ===== CONFIGURACIÓN DE NOTIFICACIONES =====
    notifications: {
        enabled: true,
        position: "top-right",
        duration: 3000,
        showProgress: true,
        closeOnClick: true,
        pauseOnHover: true
    },
    
    // ===== CONFIGURACIÓN DE NAVEGACIÓN =====
    navigation: {
        sticky: true,
        hideOnScroll: true,
        mobileBreakpoint: 768,
        smoothScroll: true,
        scrollOffset: 80
    },
    
    // ===== CONFIGURACIÓN DE TEMA =====
    theme: {
        mode: "light", // "light" o "dark"
        primaryColor: "#0066ff",
        secondaryColor: "#00ccff",
        accentColor: "#008080",
        textColor: "#2c2c2c",
        backgroundColor: "#ffffff",
        enableDarkMode: false,
        autoDetectSystemTheme: false
    },
    
    // ===== CONFIGURACIÓN DE IDIOMA =====
    language: {
        default: "es",
        supported: ["es", "en"],
        fallback: "es",
        autoDetect: false,
        translations: {
            es: {
                // Traducciones en español
            },
            en: {
                // Traducciones en inglés
            }
        }
    },
    
    // ===== CONFIGURACIÓN DE ACCESIBILIDAD =====
    accessibility: {
        enableHighContrast: false,
        enableLargeText: false,
        enableReducedMotion: false,
        enableScreenReader: true,
        keyboardNavigation: true,
        focusIndicators: true
    },
    
    // ===== CONFIGURACIÓN DE DESARROLLO =====
    development: {
        debugMode: false,
        logLevel: "info", // "debug", "info", "warn", "error"
        enableHotReload: false,
        sourceMaps: false,
        minify: true
    }
};

// ===== FUNCIONES DE CONFIGURACIÓN =====

// Función para obtener configuración
function getConfig(key) {
    const keys = key.split('.');
    let value = window.VexalConfig;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return undefined;
        }
    }
    
    return value;
}

// Función para establecer configuración
function setConfig(key, value) {
    const keys = key.split('.');
    let config = window.VexalConfig;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in config) || typeof config[k] !== 'object') {
            config[k] = {};
        }
        config = config[k];
    }
    
    config[keys[keys.length - 1]] = value;
}

// Función para validar configuración
function validateConfig() {
    const required = ['company.name', 'company.tagline', 'contact.email'];
    const errors = [];
    
    required.forEach(key => {
        if (!getConfig(key)) {
            errors.push(`Configuración requerida faltante: ${key}`);
        }
    });
    
    if (errors.length > 0) {
        console.error('Errores de configuración:', errors);
        return false;
    }
    
    return true;
}

// Función para aplicar configuración
function applyConfig() {
    if (!validateConfig()) {
        console.error('No se puede aplicar la configuración debido a errores');
        return;
    }
    
    // Aplicar título de la página
    if (getConfig('seo.title')) {
        document.title = getConfig('seo.title');
    }
    
    // Aplicar meta description
    if (getConfig('seo.description')) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = getConfig('seo.description');
    }
    
    // Aplicar colores del tema
    if (getConfig('theme.primaryColor')) {
        document.documentElement.style.setProperty('--primary-blue', getConfig('theme.primaryColor'));
    }
    
    console.log('Configuración aplicada correctamente');
}

// Exportar funciones de configuración
window.VexalConfigUtils = {
    get: getConfig,
    set: setConfig,
    validate: validateConfig,
    apply: applyConfig
};

// Aplicar configuración cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
}

console.log('Configuración de Vexal cargada correctamente');
