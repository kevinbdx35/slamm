// FAQ data
const faqData = [
    {
      question: "Faut-il avoir de l'expérience pour commencer le MMA ?",
      answer: "Non, aucune expérience n’est nécessaire. Nos cours sont ouverts à tous les niveaux. Nos encadrants vous accompagnent pas à pas, en vous enseignant les bases avec pédagogie, pour vous permettre de progresser à votre rythme. Une expérience préalable peut aider, mais elle n’est en aucun cas obligatoire."
    },
    {
      question: "À partir de quel âge peut-on pratiquer le MMA ?",
      answer: "L’âge minimum pour adhérer à notre association est de 16 ans."
    },
    {
      question: "Quel équipement est nécessaire pour débuter ?",
      answer: "Pour venir essayer, il vous suffit d’une tenue de sport confortable, d’une bouteille d’eau et éventuellement d’une serviette. Par la suite, il sera nécessaire d’acquérir un équipement spécifique : gants, protège-tibias, protège-dents et coquille ou protection pelvienne. Nos encadrants vous conseilleront sur le choix du matériel dès vos premiers cours."
    },  
    {
      question: "Quelle est la fréquence d'entraînement recommandée ?",
      answer: "Pour progresser régulièrement, nous recommandons de participer à 2 à 3 séances par semaine. Cela dit, même une séance hebdomadaire peut vous permettre d’évoluer et de bénéficier des bienfaits du MMA. Tout dépend de vos objectifs personnels et de votre disponibilité. L’essentiel reste la régularité et l’engagement lors des entraînements"
    },
    {
      question: "Le MMA est-il dangereux ?",
      answer: "Comme tout sport de combat, le MMA comporte des risques. Mais encadré par nos coachs diplômés, avec un équipement adapté et des règles de sécurité strictes, la pratique reste maîtrisée. Nos cours sont progressifs, axés sur la technique et le respect du partenaire."
    },
    {
      question: "Comment se déroule un cours type ?",
      answer: "Un cours typique dure entre 1h30 et 2h. Il débute par un échauffement dynamique, suivi d’exercices techniques propres à la discipline. La séance se poursuit généralement par des mises en application ou du sparring léger, pour ceux qui le souhaitent. Elle se termine par un retour au calme accompagné d’étirements."
    },
    {
      question: "Est-ce que je dois participer à des compétitions ?",
      answer: "Absolument pas. La compétition est entièrement optionnelle et s’adresse uniquement à ceux qui le souhaitent. La majorité de nos membres pratiquent le MMA pour le loisir, la condition physique, l’apprentissage technique ou simplement par plaisir. Nous respectons les objectifs de chacun."
    },
    {
      question: "Comment s'inscrire aux cours d'essai ?",
      answer: "En septembre et octobre, vous avez la possibilité de participer à 2 cours d’essai gratuits. À partir de novembre, les cours d’essai sont proposés au tarif de 5 € par séance, dans la limite de 2 cours maximum par personne. Ce montant sera déduit de l'adhésion si vous vous inscrivez par la suite. Pour réserver, contactez-nous par téléphone au 07 82 77 92 88 ou par email à slamm35800@gmail.com. Merci de prévoir une arrivée 15 minutes avant le début du cours pour l’accueil et la présentation des installations."
    }
  ];
  
  function createFaqElements() {
    const faqContainer = document.querySelector('.faq-container');
  
    if (!faqContainer) {
      console.error('FAQ container not found');
      return;
    }
  
    faqData.forEach((item, index) => {
      // Create elements
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');
  
      const faqQuestion = document.createElement('div');
      faqQuestion.classList.add('faq-question');
      faqQuestion.textContent = item.question;
  
      const faqArrow = document.createElement('span');
      faqArrow.classList.add('faq-arrow');
      faqArrow.innerHTML = '&#9660;';
      faqQuestion.appendChild(faqArrow);
  
      const faqAnswer = document.createElement('div');
      faqAnswer.classList.add('faq-answer');
      faqAnswer.textContent = item.answer;
  
      const separator = document.createElement('hr');
      separator.classList.add('faq-separator');
  
      // Add event listener
      faqQuestion.addEventListener('click', () => {
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allQuestions = document.querySelectorAll('.faq-question');
        const allSeparators = document.querySelectorAll('.faq-separator');
  
        const isAlreadyActive = faqAnswer.classList.contains('active');
  
        // Close all
        allAnswers.forEach(answer => {
          answer.style.maxHeight = null;
          answer.classList.remove('active');
        });
  
        allQuestions.forEach(q => q.classList.remove('active'));
        allSeparators.forEach(s => s.classList.remove('active'));
  
        // Open clicked one if it wasn't already open
        if (!isAlreadyActive) {
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
          faqAnswer.classList.add('active');
          faqQuestion.classList.add('active');
          separator.classList.add('active');
        }
      });
  
      // Append elements
      faqItem.appendChild(faqQuestion);
      faqItem.appendChild(separator);
      faqItem.appendChild(faqAnswer);
      faqContainer.appendChild(faqItem);
    });
  }
  
  
  // Initialize the FAQ on page load
  window.addEventListener('DOMContentLoaded', () => {
    createFaqElements();
  });
  
