// Configuración centralizada de la landing. Reemplazar estos valores
// con los datos del negocio real para adaptar la plantilla a un cliente.

export interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Testimonio {
  nombre: string;
  rol: string;
  texto: string;
}

export interface PasoInscripcion {
  numero: string;
  titulo: string;
  descripcion: string;
}

export const siteConfig = {
  sector: 'academias o cursos especializados',
  nombre_generico: 'Academia de Cursos Especializados',
  eslogan_sugerido:
    'Formación que transforma carreras. Aprende de expertos, certifícate y da el siguiente paso en tu profesión.',
  propuesta_hero:
    'Cursos especializados diseñados por profesionales en activo. Mentoría real, certificación válida y una comunidad que te impulsa a crecer.',
  servicios: [
    {
      titulo: 'Cursos Técnicos Especializados',
      descripcion:
        'Programas enfocados en competencias concretas y demanda real del mercado, con contenido actualizado y casos prácticos.',
      imagen:
        'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Certificaciones Profesionales',
      descripcion:
        'Preparación para certificaciones reconocidas que validan tu experiencia y abren puertas en el sector laboral.',
      imagen:
        'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Mentoría Personalizada',
      descripcion:
        'Acompañamiento uno a uno con expertos del sector para acelerar tu progreso y resolver dudas de tu trayectoria.',
      imagen:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Talleres Prácticos en Vivo',
      descripcion:
        'Sesiones intensivas con proyectos reales, retroalimentación inmediata y trabajo colaborativo entre pares.',
      imagen:
        'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
  ] as Servicio[],
  problema_tipo:
    'Muchos profesionales con talento se quedan estancados por falta de formación estructurada, mentoría o una certificación que valide sus habilidades ante el mercado.',
  pasos_inscripcion: [
    {
      numero: '01',
      titulo: 'Elige tu programa',
      descripcion:
        'Explora los cursos disponibles y selecciona el que se alinea con tu objetivo profesional.',
    },
    {
      numero: '02',
      titulo: 'Reserva tu cupo',
      descripcion:
        'Completa la inscripción en minutos y recibe el acceso inmediato a la plataforma.',
    },
    {
      numero: '03',
      titulo: 'Aprende y certifícate',
      descripcion:
        'Avanza con el acompañamiento de mentores y obtén tu certificación al finalizar.',
    },
  ] as PasoInscripcion[],
  testimonios: [
    {
      nombre: 'Estudiante de ejemplo',
      rol: 'Participante del programa',
      texto:
        'La mentoría hizo la diferencia. Pasé de aprender por mi cuenta a tener un plan claro y un certificado que mi empleador reconoció.',
    },
    {
      nombre: 'Profesional de ejemplo',
      rol: 'Egresada del curso técnico',
      texto:
        'El contenido es práctico y actualizado. Los proyectos reales me dieron la confianza para aplicar lo aprendido desde el primer día.',
    },
    {
      nombre: 'Participante de ejemplo',
      rol: 'Certificación profesional',
      texto:
        'La estructura del curso y el acompañamiento de los instructores superaron mis expectativas. Recomendado totalmente.',
    },
  ] as Testimonio[],
  cta_principal: 'Reserva tu cupo',
  datos_contacto_placeholder: {
    telefono: '+57 300 000 0000',
    whatsapp: '+57 300 000 0000',
    direccion: 'Ciudad, Colombia',
    horario: 'Lunes a viernes, 8am - 6pm',
  },
  hero_imagenes: [
    'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
