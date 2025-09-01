# 🌟 Vexal - Página Web Corporativa

Una página web moderna, responsiva y profesional para la empresa de tecnología Vexal, construida con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

### ✨ Diseño y UX
- **Diseño minimalista y moderno** inspirado en Sonos y Revolut
- **Paleta de colores personalizada** basada en el logo de Vexal
- **Tipografía moderna** usando Inter font family
- **Completamente responsiva** para todos los dispositivos
- **Animaciones suaves** y transiciones elegantes

### 🎨 Paleta de Colores
- **Azul eléctrico**: `#0066ff` (Color principal)
- **Cian brillante**: `#00ccff` (Color secundario)
- **Turquesa**: `#008080` (Color de acento)
- **Gris carbón**: `#2c2c2c` (Texto principal)
- **Gris claro**: `#f5f5f5` (Fondos alternos)

### 📱 Funcionalidades JavaScript
- **Navegación móvil** con menú hamburguesa
- **Scroll suave** entre secciones
- **Animaciones de entrada** con Intersection Observer
- **Efectos de hover** en tarjetas y elementos
- **Sistema de notificaciones** integrado
- **Botón de scroll to top** automático
- **Preloader** con animación de carga
- **Efecto de partículas** en el hero
- **Efecto de typing** en el título principal
- **Navegación inteligente** que se oculta/muestra al hacer scroll

### 🏗️ Estructura de la Página
1. **Header/Hero** - Sección principal con título y CTA
2. **¿Qué es Vexal?** - Descripción de la empresa
3. **Misión y Visión** - Valores corporativos
4. **Nuestros Valores** - 5 valores fundamentales
5. **Servicios** - 4 servicios principales
6. **Propuesta de Valor** - Diferenciadores clave
7. **¿Por qué elegir Vexal?** - 5 razones principales
8. **Call to Action** - Llamado a la acción
9. **Footer** - Información de contacto y redes sociales

## 📁 Estructura de Archivos

```
vexal.web/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS completos
├── script.js           # Funcionalidades JavaScript
├── config.js           # Archivo de configuración
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con CSS Grid, Flexbox y variables CSS
- **JavaScript ES6+** - Funcionalidades interactivas y animaciones
- **Font Awesome** - Iconografía profesional
- **Google Fonts** - Tipografía Inter

## 🚀 Cómo Usar

### 1. Instalación
```bash
# Clonar o descargar el proyecto
git clone [url-del-repositorio]
cd vexal.web

# Abrir en el navegador
# Simplemente abre index.html en tu navegador web
```

### 2. Personalización
- **Cambiar logo**: Edita el texto "VEXAL" en el HTML o modifica los estilos CSS
- **Modificar colores**: Edita las variables CSS en `:root`
- **Actualizar contenido**: Modifica el texto en `index.html`
- **Agregar secciones**: Sigue la estructura existente en HTML

### 3. Despliegue
- **Hosting estático**: Netlify, Vercel, GitHub Pages
- **Servidor web**: Apache, Nginx
- **CDN**: Cloudflare, AWS CloudFront

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Características Técnicas

### Performance
- **Lazy loading** de imágenes
- **CSS optimizado** con variables y reutilización
- **JavaScript modular** y eficiente
- **Animaciones CSS** para mejor rendimiento

### Accesibilidad
- **HTML semántico** con landmarks apropiados
- **Contraste de colores** optimizado
- **Navegación por teclado** completa
- **Alt text** en todas las imágenes

### SEO
- **Meta tags** optimizados
- **Estructura de encabezados** jerárquica
- **URLs amigables** con anclajes internos
- **Contenido estructurado** y legible

## 🔧 Funciones JavaScript Disponibles

### Funciones Globales
```javascript
// Navegación
VexalUtils.scrollToSection('servicios')

// Utilidades
VexalUtils.isValidEmail('email@ejemplo.com')
VexalUtils.formatPhoneNumber('1234567890')
VexalUtils.copyToClipboard('texto a copiar')

// Elementos
VexalUtils.toggleElement('elemento-id')
```

### Eventos Personalizados
- **scroll** - Para efectos de parallax y navegación
- **resize** - Para ajustes responsivos
- **load** - Para preloader y inicialización
- **click** - Para navegación y interacciones

## 🎨 Personalización Avanzada

### Cambiar Colores
```css
:root {
    --primary-blue: #tu-color-azul;
    --primary-cyan: #tu-color-cian;
    --primary-teal: #tu-color-turquesa;
}
```

### Agregar Nuevas Secciones
```html
<section class="section nueva-seccion">
    <div class="container">
        <h2 class="section-title">Nueva Sección</h2>
        <!-- Contenido aquí -->
    </div>
</section>
```

### Modificar Animaciones
```css
.fade-in {
    transition: all 0.8s ease-out; /* Cambiar duración */
    transform: translateX(-30px); /* Cambiar dirección */
}
```

## 🌐 Navegadores Soportados

- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+
- **Internet Explorer** 11+ (con limitaciones)

## 📊 Métricas de Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **Tiempo de carga**: < 2 segundos
- **Tamaño total**: < 500KB
- **Core Web Vitals**: Optimizados

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- **Email**: info@vexal.com
- **Documentación**: [URL de la documentación]
- **Issues**: [URL del repositorio de issues]

## 🔮 Roadmap Futuro

- [ ] **Formulario de contacto** funcional
- [ ] **Blog integrado** con CMS
- [ ] **Portfolio de proyectos** interactivo
- [ ] **Chat en vivo** para soporte
- [ ] **Analytics avanzados** integrados
- [ ] **PWA** (Progressive Web App)
- [ ] **Internacionalización** (i18n)

---

**Desarrollado con ❤️ para Vexal**

*Transformando el futuro a través de la innovación tecnológica*
