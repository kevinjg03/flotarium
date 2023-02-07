import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  beneficios = [
    {
      name: 'Cuerpo',
      benefits: ['Mejora la recuperación muscular', "Reduce el ácido láctico acumulado", "Alivia los dolores e inflamaciones","Reduce los efectos de la fatiga", "Promueve un sueño profundo y restaurativo"],
    },
    {
      name: 'Mente',
      benefits: ['Sube los niveles de serotonina en la sangre', "Reduce la producción de cortisol", "Ayuda a tener más control ante un ataque de ansiedad", "Reduce a largo plazo los efectos de la ansiedad y la depresión (siempre acompañado de terapia y utilizando la flotación como complemento)"],
    },
    {
      name: 'Espíritu',
      benefits: ['Ayuda a la práctica de meditación', "Induce a las ondas theta en el cerebro (el estado en que entra el cerebro justo antes de dormirnos cuando no estamos del todo despiertos pero tampoco dormidos)", "Promueve el estar más conscientes y presentes en nuestra rutina diaria", "Remueve cualquier distracción o estrés del mundo exterior", "Ayuda a tener una mayor concentración e induce a la creatividad"],
    },
  ];

  faqs = [
    {id: 1, 
      question: "¿En qué consisten las cámaras de flotación?", 
      answer: "Los tanques, que se ven como tinas cerradas, están diseñadas para bloquear cualquier sonido o luz del exterior. Se llenan con 25cm de agua temperada a 34°C y 300 kg de sales Epsom (magnesio y oxigeno) eliminando la gravedad y ayudándolo a flotar sin ningún esfuerzo. \
    Después de unos minutos de quietud, se deja de sentir el agua y con esto restringimos los sentidos de la vista, olfato y tacto.", items: []},
    {id: 2, 
      question: "¿Quienes no deben tomar terapias de flotación?",
      answer: "Cualquier persona puede flotar, pero si usted tiene una condición médica especial deberá contar con la aprobación de su médico.\
    Además, no pueden flotar personas que:",
    items :  [
      "Tiñeron su cabello en los últimos 10 días",
    	"Tienen tatuajes y/o piercings que aún no han sanado",
	    "Presentan alguna herida abierta en la piel",
	    "Tienen alguna enfermedad contagiosa como influenza, COVID-19, etc"
    ]},
    {id: 3, 
      question: "¿Qué tengo que llevar?", 
    answer: "Lo único que te pedimos traer es un par de medias, ya que se entra a las salas de flotación por higiene y hasta protocolo de silencio.\
    Siempre puedes traer tus productos de cuidado personal y tu vestido de baño, en caso de que quieras flotar usándolo.", items: []},
    {id: 4, 
      question: "¿Me puedo ahogar en el tanque?", 
      answer: "No, es prácticamente imposible ahogarse en una cámara de flotación. Al ser el agua tan densa, el cuerpo flota con completa facilidad. Incluso si nos quedamos dormidos, la profundidad del agua es tan baja, que no existe ningún peligro.", items: []},
  ]

  servicePacks = [
    {name: "Sesión individual - 60 minutos", price: "85", action: ""},
    {name: "Sesión individual - 120 minutos", price: "132", action: ""},
    {name: "Sesión individual - 90 minutos", price: "110", action: ""},
    {name: "Pack de 3 sesiones", price: "230", action: ""}
  ]


}




