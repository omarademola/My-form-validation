// =============================================================
//  translations.js  — All UI strings for every supported language.
//
//  HOW IT WORKS (Plain English):
//  ─────────────────────────────
//  This file is one big JavaScript object called `translations`.
//  Think of it like a dictionary with 5 languages on the shelf.
//  Each language (en, fr, es, ar, de) is another dictionary whose
//  keys (e.g. "pageTitle") map to the matching translated phrase.
//
//  When the user picks a language, script.js reads the correct
//  sub-dictionary and replaces every piece of text on the page.
//
//  Loading order: this file must be listed BEFORE script.js in
//  index.html, because script.js uses the `translations` variable
//  defined here.
// =============================================================

const translations = {
  // ──────────────────────────────────────────────
  //  ENGLISH  (default)
  // ──────────────────────────────────────────────
  en: {
    // Header & intro
    headerSubtitle: "Profile registration",
    eyebrow: "PERSONAL DETAILS",
    pageTitle: "Create your account",
    pageSubtitle: "Enter your details below to get started.",
    // Step indicators
    step1Label: "Account & profile",
    step2Label: "Family & consent",
    step1Heading: "Account & profile",
    step2Heading: "Family & consent",
    // Field labels
    labelLastName: "Last name (surname)",
    labelFirstName: "First name",
    labelOtherName: "Other name",
    optionalNote: "optional",
    labelEmail: "Email address",
    labelGender: "Gender",
    labelPassword: "Password",
    labelConfirmPassword: "Confirm password",
    labelPhone: "Phone number",
    labelNationality: "Nationality",
    labelStateOfOrigin: "State of origin",
    labelLga: "LGA / local area",
    labelAddress: "Residential address",
    labelHouseImage: "House address image",
    labelDob: "Date of birth",
    labelNextOfKinName: "Next of kin full name",
    labelKinPhone: "Next of kin phone number",
    labelNin: "National Identification Number (NIN)",
    labelDisabilityType: "Please specify the type",
    labelChildrenCount: "Number of children",
    // Placeholders & hints
    placeholderEmail: "name@example.com",
    placeholderPhone: "8012345678",
    placeholderNationality: "Type a country name",
    placeholderState: "Choose or type a state",
    placeholderLga: "Choose or type an area",
    placeholderAddress: "Enter full residential street address (min 30 characters)",
    placeholderNin: "11 digits",
    hintHouseImage: "Accepts image files only (PNG, JPG, WebP, etc. No PDF). Size must be between 1 KB and 200 KB.",
    // Select options
    genderChoose: "Choose an option",
    genderMale: "Male",
    genderFemale: "Female",
    childrenCountChoose: "Choose a number",
    // Disability / married / children
    disabilityLegend: "Do you have a disability?",
    marriedLegend: "Are you married?",
    childrenLegend: "Do you have children?",
    answerNo: "No",
    answerYes: "Yes",
    withoutChildren: "Without children",
    withChildren: "With children",
    // Password strength
    passwordRules:
      "Use 8+ characters with uppercase, lowercase, a number, and a symbol.",
    passwordStrengthLabel: "Password strength",
    strengthNotSet: "Not set",
    strengthWeak: "Weak",
    strengthMedium: "Medium",
    strengthStrong: "Strong",
    btnShow: "Show",
    btnHide: "Hide",
    // Terms
    termsText: "I accept the",
    termsLink: "Terms and Conditions",
    termsSummary: "Read the Terms and Conditions",
    termsBody:
      "By submitting, you confirm that the details are accurate and consent to sending them to Urban-Silhoutte. Password fields are never sent.",
    // Buttons
    btnNext: "Next",
    btnBack: "Back",
    btnSignUp: "Sign up",
    btnSending: "Sending\u2026",
    // Status
    statusSending: "Sending your registration securely\u2026",
    // Thank you screen
    thankYouEyebrow: "REGISTRATION RECEIVED",
    thankYouTitle: "Thank you for your response.",
    thankYouBody: "You can now close this form.",
    // Footer
    footerText: "All Rights Reserved. Created by Omabell 2026",
    // Language switcher
    langAriaLabel: "Choose language",
    // Validation errors
    errorRequired: "This field is required.",
    errorEmail: "Enter a valid email address.",
    errorTooShort: "Enter at least {min} characters.",
    errorAddressTooShort: "Address must be at least 30 characters.",
    errorImageOnly: "Please upload an image file (PDF is not allowed).",
    errorImageTooSmall: "Image size must be at least 1 KB.",
    errorImageTooLarge: "Image size must not exceed 200 KB.",
    errorPasswordPattern:
      "Use uppercase and lowercase letters, a number, and a symbol.",
    errorNinPattern: "Enter exactly 11 digits.",
    errorPhonePattern: "Enter 7 to 15 digits, without the country code.",
    errorFutureDate: "Choose a date that is not in the future.",
    errorMinAge: "You must be at least 16 years old to register.",
    errorPasswordMismatch: "Passwords do not match.",
    errorRadio: "Choose an option.",
    errorFallback: "Check this value and try again.",
    errorFileProtocol:
      "This form must be hosted on a web server to submit. It cannot run from a file:// URL.",
    errorSubmitPrefix: "We could not send your response.",
    errorNoConnection:
      "The request could not reach FormSubmit. Check your internet connection and that this page is hosted over HTTPS.",
    errorActivation:
      "If this is the first submission, confirm the activation email sent by FormSubmit.",
    // API dropdown fallback
    apiUnavailable: "Suggestions unavailable \u2014 type your answer manually.",
  },

  // ──────────────────────────────────────────────
  //  FRENCH
  // ──────────────────────────────────────────────
  fr: {
    headerSubtitle: "Inscription du profil",
    eyebrow: "INFORMATIONS PERSONNELLES",
    pageTitle: "Cr\u00e9ez votre compte",
    pageSubtitle: "Entrez vos informations ci-dessous pour commencer.",
    step1Label: "Compte et profil",
    step2Label: "Famille et consentement",
    step1Heading: "Compte et profil",
    step2Heading: "Famille et consentement",
    labelLastName: "Nom de famille",
    labelFirstName: "Pr\u00e9nom",
    labelOtherName: "Autre pr\u00e9nom",
    optionalNote: "facultatif",
    labelEmail: "Adresse e-mail",
    labelGender: "Genre",
    labelPassword: "Mot de passe",
    labelConfirmPassword: "Confirmer le mot de passe",
    labelPhone: "Num\u00e9ro de t\u00e9l\u00e9phone",
    labelNationality: "Nationalit\u00e9",
    labelStateOfOrigin: "\u00c9tat d\u2019origine",
    labelLga: "Zone locale / LGA",
    labelAddress: "Adresse r\u00e9sidentielle",
    labelHouseImage: "Photo de l\u2019adresse du domicile",
    labelDob: "Date de naissance",
    labelNextOfKinName: "Nom complet du contact d\u2019urgence",
    labelKinPhone: "T\u00e9l\u00e9phone du contact d\u2019urgence",
    labelNin: "Num\u00e9ro d\u2019identification national (NIN)",
    labelDisabilityType: "Veuillez pr\u00e9ciser le type",
    labelChildrenCount: "Nombre d\u2019enfants",
    placeholderEmail: "nom@exemple.com",
    placeholderPhone: "8012345678",
    placeholderNationality: "Tapez un nom de pays",
    placeholderState: "Choisissez ou tapez un \u00e9tat",
    placeholderLga: "Choisissez ou tapez une zone",
    placeholderAddress: "Entrez l\u2019adresse r\u00e9sidentielle compl\u00e8te (min. 30 caract\u00e8res)",
    placeholderNin: "11 chiffres",
    hintHouseImage: "Fichiers image uniquement (PNG, JPG, WebP, etc. Pas de PDF). La taille doit \u00eatre comprise entre 1 Ko et 200 Ko.",
    genderChoose: "Choisissez une option",
    genderMale: "Homme",
    genderFemale: "Femme",
    childrenCountChoose: "Choisissez un nombre",
    disabilityLegend: "Avez-vous un handicap\u00a0?",
    marriedLegend: "\u00cates-vous mari\u00e9(e)\u00a0?",
    childrenLegend: "Avez-vous des enfants\u00a0?",
    answerNo: "Non",
    answerYes: "Oui",
    withoutChildren: "Sans enfants",
    withChildren: "Avec enfants",
    passwordRules:
      "Utilisez 8+ caract\u00e8res avec majuscules, minuscules, un chiffre et un symbole.",
    passwordStrengthLabel: "Force du mot de passe",
    strengthNotSet: "Non d\u00e9fini",
    strengthWeak: "Faible",
    strengthMedium: "Moyen",
    strengthStrong: "Fort",
    btnShow: "Afficher",
    btnHide: "Masquer",
    termsText: "J\u2019accepte les",
    termsLink: "Conditions g\u00e9n\u00e9rales",
    termsSummary: "Lire les conditions g\u00e9n\u00e9rales",
    termsBody:
      "En soumettant, vous confirmez que les informations sont exactes et consentez \u00e0 leur envoi \u00e0 Urban-Silhoutte. Les mots de passe ne sont jamais envoy\u00e9s.",
    btnNext: "Suivant",
    btnBack: "Retour",
    btnSignUp: "S\u2019inscrire",
    btnSending: "Envoi\u2026",
    statusSending: "Envoi s\u00e9curis\u00e9 de votre inscription\u2026",
    thankYouEyebrow: "INSCRIPTION RE\u00c7UE",
    thankYouTitle: "Merci pour votre r\u00e9ponse.",
    thankYouBody: "Vous pouvez maintenant fermer ce formulaire.",
    footerText:
      "Tous droits r\u00e9serv\u00e9s. Cr\u00e9\u00e9 par Omabell 2026",
    langAriaLabel: "Choisir la langue",
    errorRequired: "Ce champ est obligatoire.",
    errorEmail: "Entrez une adresse e-mail valide.",
    errorTooShort: "Entrez au moins {min} caract\u00e8res.",
    errorAddressTooShort: "L\u2019adresse doit comporter au moins 30 caract\u00e8res.",
    errorImageOnly: "Veuillez t\u00e9l\u00e9verser un fichier image (le format PDF n\u2019est pas autoris\u00e9).",
    errorImageTooSmall: "La taille de l\u2019image doit \u00eatre d\u2019au moins 1 Ko.",
    errorImageTooLarge: "La taille de l\u2019image ne doit pas d\u00e9passer 200 Ko.",
    errorPasswordPattern:
      "Utilisez des majuscules, minuscules, un chiffre et un symbole.",
    errorNinPattern: "Entrez exactement 11 chiffres.",
    errorPhonePattern:
      "Entrez 7 \u00e0 15 chiffres, sans l\u2019indicatif pays.",
    errorFutureDate: "Choisissez une date qui n\u2019est pas dans le futur.",
    errorMinAge: "Vous devez avoir au moins 16 ans pour vous inscrire.",
    errorPasswordMismatch: "Les mots de passe ne correspondent pas.",
    errorRadio: "Choisissez une option.",
    errorFallback: "V\u00e9rifiez cette valeur et r\u00e9essayez.",
    errorFileProtocol:
      "Ce formulaire doit \u00eatre h\u00e9berg\u00e9 sur un serveur web pour \u00eatre soumis.",
    errorSubmitPrefix: "Nous n\u2019avons pas pu envoyer votre r\u00e9ponse.",
    errorNoConnection:
      "La requ\u00eate n\u2019a pas pu atteindre FormSubmit. V\u00e9rifiez votre connexion et que la page est h\u00e9berg\u00e9e en HTTPS.",
    errorActivation:
      "S\u2019il s\u2019agit de la premi\u00e8re soumission, confirmez l\u2019e-mail d\u2019activation envoy\u00e9 par FormSubmit.",
    apiUnavailable:
      "Suggestions indisponibles \u2014 saisissez votre r\u00e9ponse manuellement.",
  },

  // ──────────────────────────────────────────────
  //  SPANISH
  // ──────────────────────────────────────────────
  es: {
    headerSubtitle: "Registro de perfil",
    eyebrow: "DATOS PERSONALES",
    pageTitle: "Crea tu cuenta",
    pageSubtitle: "Introduce tus datos a continuaci\u00f3n para comenzar.",
    step1Label: "Cuenta y perfil",
    step2Label: "Familia y consentimiento",
    step1Heading: "Cuenta y perfil",
    step2Heading: "Familia y consentimiento",
    labelLastName: "Apellido",
    labelFirstName: "Nombre",
    labelOtherName: "Otro nombre",
    optionalNote: "opcional",
    labelEmail: "Correo electr\u00f3nico",
    labelGender: "G\u00e9nero",
    labelPassword: "Contrase\u00f1a",
    labelConfirmPassword: "Confirmar contrase\u00f1a",
    labelPhone: "N\u00famero de tel\u00e9fono",
    labelNationality: "Nacionalidad",
    labelStateOfOrigin: "Estado de origen",
    labelLga: "\u00c1rea local / LGA",
    labelAddress: "Direcci\u00f3n residencial",
    labelHouseImage: "Foto de la direcci\u00f3n de la casa",
    labelDob: "Fecha de nacimiento",
    labelNextOfKinName: "Nombre completo del familiar",
    labelKinPhone: "Tel\u00e9fono del familiar",
    labelNin: "N\u00famero de Identificaci\u00f3n Nacional (NIN)",
    labelDisabilityType: "Por favor, especifica el tipo",
    labelChildrenCount: "N\u00famero de hijos",
    placeholderEmail: "nombre@ejemplo.com",
    placeholderPhone: "8012345678",
    placeholderNationality: "Escribe un nombre de pa\u00eds",
    placeholderState: "Elige o escribe un estado",
    placeholderLga: "Elige o escribe un \u00e1rea",
    placeholderAddress: "Introduce la direcci\u00f3n residencial completa (m\u00edn. 30 caracteres)",
    placeholderNin: "11 d\u00edgitos",
    hintHouseImage: "Solo archivos de imagen (PNG, JPG, WebP, etc. No PDF). El tama\u00f1o debe estar entre 1 KB y 200 KB.",
    genderChoose: "Elige una opci\u00f3n",
    genderMale: "Masculino",
    genderFemale: "Femenino",
    childrenCountChoose: "Elige un n\u00famero",
    disabilityLegend: "\u00bfTienes alguna discapacidad?",
    marriedLegend: "\u00bfEst\u00e1s casado/a?",
    childrenLegend: "\u00bfTienes hijos?",
    answerNo: "No",
    answerYes: "S\u00ed",
    withoutChildren: "Sin hijos",
    withChildren: "Con hijos",
    passwordRules:
      "Usa 8+ caracteres con may\u00fasculas, min\u00fasculas, un n\u00famero y un s\u00edmbolo.",
    passwordStrengthLabel: "Fortaleza de la contrase\u00f1a",
    strengthNotSet: "No establecida",
    strengthWeak: "D\u00e9bil",
    strengthMedium: "Media",
    strengthStrong: "Fuerte",
    btnShow: "Mostrar",
    btnHide: "Ocultar",
    termsText: "Acepto los",
    termsLink: "T\u00e9rminos y Condiciones",
    termsSummary: "Leer los T\u00e9rminos y Condiciones",
    termsBody:
      "Al enviar, confirmas que los datos son correctos y consientes enviarlos a Urban-Silhoutte. Las contrase\u00f1as nunca se env\u00edan.",
    btnNext: "Siguiente",
    btnBack: "Atr\u00e1s",
    btnSignUp: "Registrarse",
    btnSending: "Enviando\u2026",
    statusSending: "Enviando tu registro de forma segura\u2026",
    thankYouEyebrow: "REGISTRO RECIBIDO",
    thankYouTitle: "Gracias por tu respuesta.",
    thankYouBody: "Ahora puedes cerrar este formulario.",
    footerText: "Todos los derechos reservados. Creado por Omabell 2026",
    langAriaLabel: "Elegir idioma",
    errorRequired: "Este campo es obligatorio.",
    errorEmail: "Introduce una direcci\u00f3n de correo v\u00e1lida.",
    errorTooShort: "Introduce al menos {min} caracteres.",
    errorAddressTooShort: "La direcci\u00f3n debe tener al menos 30 caracteres.",
    errorImageOnly: "Por favor, sube un archivo de imagen (no se permite PDF).",
    errorImageTooSmall: "El tama\u00f1o de la imagen debe ser de al menos 1 KB.",
    errorImageTooLarge: "El tama\u00f1o de la imagen no debe superar los 200 KB.",
    errorPasswordPattern:
      "Usa may\u00fasculas, min\u00fasculas, un n\u00famero y un s\u00edmbolo.",
    errorNinPattern: "Introduce exactamente 11 d\u00edgitos.",
    errorPhonePattern:
      "Introduce entre 7 y 15 d\u00edgitos, sin el c\u00f3digo de pa\u00eds.",
    errorFutureDate: "Elige una fecha que no sea en el futuro.",
    errorMinAge: "Debes tener al menos 16 a\u00f1os para registrarte.",
    errorPasswordMismatch: "Las contrase\u00f1as no coinciden.",
    errorRadio: "Elige una opci\u00f3n.",
    errorFallback: "Comprueba este valor e int\u00e9ntalo de nuevo.",
    errorFileProtocol:
      "Este formulario debe estar alojado en un servidor web para enviarse.",
    errorSubmitPrefix: "No pudimos enviar tu respuesta.",
    errorNoConnection:
      "La solicitud no pudo llegar a FormSubmit. Comprueba tu conexi\u00f3n y que la p\u00e1gina est\u00e9 alojada en HTTPS.",
    errorActivation:
      "Si es el primer env\u00edo, confirma el correo de activaci\u00f3n enviado por FormSubmit.",
    apiUnavailable:
      "Sugerencias no disponibles \u2014 escribe tu respuesta manualmente.",
  },

  // ──────────────────────────────────────────────
  //  ARABIC  (right-to-left layout)
  // ──────────────────────────────────────────────
  ar: {
    headerSubtitle:
      "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a",
    eyebrow:
      "\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629",
    pageTitle: "\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643",
    pageSubtitle:
      "\u0623\u062f\u062e\u0644 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0623\u062f\u0646\u0627\u0647 \u0644\u0644\u0628\u062f\u0621.",
    step1Label:
      "\u0627\u0644\u062d\u0633\u0627\u0628 \u0648\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a",
    step2Label:
      "\u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629",
    step1Heading:
      "\u0627\u0644\u062d\u0633\u0627\u0628 \u0648\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a",
    step2Heading:
      "\u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629",
    labelLastName:
      "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629",
    labelFirstName:
      "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",
    labelOtherName: "\u0627\u0633\u0645 \u0622\u062e\u0631",
    optionalNote: "\u0627\u062e\u062a\u064a\u0627\u0631\u064a",
    labelEmail:
      "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
    labelGender: "\u0627\u0644\u062c\u0646\u0633",
    labelPassword:
      "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    labelConfirmPassword:
      "\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    labelPhone: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
    labelNationality: "\u0627\u0644\u062c\u0646\u0633\u064a\u0629",
    labelStateOfOrigin:
      "\u0648\u0644\u0627\u064a\u0629 \u0627\u0644\u0623\u0635\u0644",
    labelLga:
      "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u062d\u0644\u064a\u0629",
    labelAddress:
      "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0643\u0646",
    labelHouseImage:
      "\u0635\u0648\u0631\u0629 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644",
    labelDob:
      "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
    labelNextOfKinName:
      "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0623\u0642\u0631\u0628 \u0627\u0644\u0623\u0642\u0627\u0631\u0628",
    labelKinPhone:
      "\u0647\u0627\u062a\u0641 \u0623\u0642\u0631\u0628 \u0627\u0644\u0623\u0642\u0627\u0631\u0628",
    labelNin:
      "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 (NIN)",
    labelDisabilityType:
      "\u064a\u0631\u062c\u0649 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0646\u0648\u0639",
    labelChildrenCount:
      "\u0639\u062f\u062f \u0627\u0644\u0623\u0637\u0641\u0627\u0644",
    placeholderEmail:
      "\u0627\u0644\u0627\u0633\u0645@\u0645\u062b\u0627\u0644.com",
    placeholderPhone: "8012345678",
    placeholderNationality:
      "\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u062f\u0648\u0644\u0629",
    placeholderState:
      "\u0627\u062e\u062a\u0631 \u0623\u0648 \u0627\u0643\u062a\u0628 \u0648\u0644\u0627\u064a\u0629",
    placeholderLga:
      "\u0627\u062e\u062a\u0631 \u0623\u0648 \u0627\u0643\u062a\u0628 \u0645\u0646\u0637\u0642\u0629",
    placeholderAddress:
      "\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0643\u0646 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 (30 \u062d\u0631\u0641\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644)",
    placeholderNin: "11 \u0631\u0642\u0645\u064b\u0627",
    hintHouseImage:
      "\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0635\u0648\u0631 \u0641\u0642\u0637 (PNG \u0648JPG \u0648WebP \u0625\u0644\u062e. \u0644\u0627 \u064a\u064f\u0642\u0628\u0644 PDF). \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u062d\u062c\u0645 \u0628\u064a\u0646 1 \u0643\u064a\u0644\u0648\u0628\u0627\u064a\u062a \u0648200 \u0643\u064a\u0644\u0648\u0628\u0627\u064a\u062a.",
    genderChoose:
      "\u0627\u062e\u062a\u0631 \u062e\u064a\u0627\u0631\u064b\u0627",
    genderMale: "\u0630\u0643\u0631",
    genderFemale: "\u0623\u0646\u062b\u0649",
    childrenCountChoose:
      "\u0627\u062e\u062a\u0631 \u0639\u062f\u062f\u064b\u0627",
    disabilityLegend:
      "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0625\u0639\u0627\u0642\u0629\u061f",
    marriedLegend:
      "\u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0632\u0648\u062c\u061f",
    childrenLegend:
      "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0623\u0637\u0641\u0627\u0644\u061f",
    answerNo: "\u0644\u0627",
    answerYes: "\u0646\u0639\u0645",
    withoutChildren: "\u0628\u062f\u0648\u0646 \u0623\u0637\u0641\u0627\u0644",
    withChildren: "\u0645\u0639 \u0623\u0637\u0641\u0627\u0644",
    passwordRules:
      "\u0627\u0633\u062a\u062e\u062f\u0645 8+ \u0623\u062d\u0631\u0641 \u062a\u0634\u0645\u0644 \u0623\u062d\u0631\u0641\u064b\u0627 \u0643\u0628\u064a\u0631\u0629 \u0648\u0635\u063a\u064a\u0631\u0629 \u0648\u0631\u0642\u0645\u064b\u0627 \u0648\u0631\u0645\u0632\u064b\u0627.",
    passwordStrengthLabel:
      "\u0642\u0648\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    strengthNotSet: "\u063a\u064a\u0631 \u0645\u062d\u062f\u062f\u0629",
    strengthWeak: "\u0636\u0639\u064a\u0641\u0629",
    strengthMedium: "\u0645\u062a\u0648\u0633\u0637\u0629",
    strengthStrong: "\u0642\u0648\u064a\u0629",
    btnShow: "\u0625\u0638\u0647\u0627\u0631",
    btnHide: "\u0625\u062e\u0641\u0627\u0621",
    termsText: "\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649",
    termsLink:
      "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645",
    termsSummary:
      "\u0627\u0642\u0631\u0623 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645",
    termsBody:
      "\u0628\u0627\u0644\u0625\u0631\u0633\u0627\u0644\u060c \u062a\u0624\u0643\u062f \u0623\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062f\u0642\u064a\u0642\u0629 \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0625\u0644\u0649 Urban-Silhoutte. \u0644\u0627 \u062a\u064f\u0631\u0633\u0644 \u062d\u0642\u0648\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0623\u0628\u062f\u064b\u0627.",
    btnNext: "\u0627\u0644\u062a\u0627\u0644\u064a",
    btnBack: "\u0631\u062c\u0648\u0639",
    btnSignUp: "\u062a\u0633\u062c\u064a\u0644",
    btnSending:
      "\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026",
    statusSending:
      "\u062c\u0627\u0631\u064d \u0625\u0631\u0633\u0627\u0644 \u062a\u0633\u062c\u064a\u0644\u0643 \u0628\u0634\u0643\u0644 \u0622\u0645\u0646\u2026",
    thankYouEyebrow:
      "\u062a\u0645 \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644",
    thankYouTitle:
      "\u0634\u0643\u0631\u064b\u0627 \u0639\u0644\u0649 \u0631\u062f\u0643.",
    thankYouBody:
      "\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0625\u063a\u0644\u0627\u0642 \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062c.",
    footerText:
      "\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629. \u0623\u0646\u0634\u0623\u0647 Omabell 2026",
    langAriaLabel: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u063a\u0629",
    errorRequired:
      "\u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628.",
    errorEmail:
      "\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u0627\u0644\u062d\u064b\u0627.",
    errorTooShort:
      "\u0623\u062f\u062e\u0644 {min} \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    errorAddressTooShort:
      "\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 30 \u062d\u0631\u0641\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    errorImageOnly:
      "\u064a\u0631\u062c\u0649 \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0635\u0648\u0631\u0629 (\u0644\u0627 \u064a\u064f\u0633\u0645\u062d \u0628\u0645\u0644\u0641\u0627\u062a PDF).",
    errorImageTooSmall:
      "\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u062d\u062c\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 1 \u0643\u064a\u0644\u0648\u0628\u0627\u064a\u062a \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    errorImageTooLarge:
      "\u064a\u062c\u0628 \u0623\u0644\u0627 \u064a\u062a\u062c\u0627\u0648\u0632 \u062d\u062c\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 200 \u0643\u064a\u0644\u0648\u0628\u0627\u064a\u062a.",
    errorPasswordPattern:
      "\u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u062d\u0631\u0641\u064b\u0627 \u0643\u0628\u064a\u0631\u0629 \u0648\u0635\u063a\u064a\u0631\u0629 \u0648\u0631\u0642\u0645\u064b\u0627 \u0648\u0631\u0645\u0632\u064b\u0627.",
    errorNinPattern:
      "\u0623\u062f\u062e\u0644 11 \u0631\u0642\u0645\u064b\u0627 \u0628\u0627\u0644\u0636\u0628\u0637.",
    errorPhonePattern:
      "\u0623\u062f\u062e\u0644 \u0645\u0646 7 \u0625\u0644\u0649 15 \u0631\u0642\u0645\u064b\u0627 \u0628\u062f\u0648\u0646 \u0631\u0645\u0632 \u0627\u0644\u062f\u0648\u0644\u0629.",
    errorFutureDate:
      "\u0627\u062e\u062a\u0631 \u062a\u0627\u0631\u064a\u062e\u064b\u0627 \u0644\u064a\u0633 \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644.",
    errorMinAge:
      "\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u0645\u0631\u0643 16 \u0639\u0627\u0645\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u062a\u0633\u062c\u064a\u0644.",
    errorPasswordMismatch:
      "\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646.",
    errorRadio:
      "\u0627\u062e\u062a\u0631 \u062e\u064a\u0627\u0631\u064b\u0627.",
    errorFallback:
      "\u062a\u062d\u0642\u0642 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645\u0629 \u0648\u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.",
    errorFileProtocol:
      "\u064a\u062c\u0628 \u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0639\u0644\u0649 \u062e\u0627\u062f\u0645 \u0648\u064a\u0628 \u0644\u0625\u0631\u0633\u0627\u0644\u0647.",
    errorSubmitPrefix:
      "\u062a\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0631\u062f\u0643.",
    errorNoConnection:
      "\u062a\u0639\u0630\u0651\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 FormSubmit. \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u062a\u0635\u0627\u0644\u0643 \u0648\u0623\u0646 \u0627\u0644\u0635\u0641\u062d\u0629 \u0645\u0633\u062a\u0636\u0627\u0641\u0629 \u0639\u0628\u0631 HTTPS.",
    errorActivation:
      "\u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0647\u0630\u0647 \u0623\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0625\u0631\u0633\u0627\u0644\u060c \u064a\u0631\u062c\u0649 \u062a\u0623\u0643\u064a\u062f \u0628\u0631\u064a\u062f \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062d\u0633\u0627\u0628 \u0645\u0646 FormSubmit.",
    apiUnavailable:
      "\u0627\u0644\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u2014 \u0627\u0643\u062a\u0628 \u0625\u062c\u0627\u0628\u062a\u0643 \u064a\u062f\u0648\u064a\u064b\u0627.",
  },

  // ──────────────────────────────────────────────
  //  GERMAN
  // ──────────────────────────────────────────────
  de: {
    headerSubtitle: "Profilregistrierung",
    eyebrow: "PER\u00d6NLICHE DATEN",
    pageTitle: "Konto erstellen",
    pageSubtitle: "Geben Sie Ihre Daten unten ein, um loszulegen.",
    step1Label: "Konto und Profil",
    step2Label: "Familie und Zustimmung",
    step1Heading: "Konto und Profil",
    step2Heading: "Familie und Zustimmung",
    labelLastName: "Nachname",
    labelFirstName: "Vorname",
    labelOtherName: "Weiterer Name",
    optionalNote: "optional",
    labelEmail: "E-Mail-Adresse",
    labelGender: "Geschlecht",
    labelPassword: "Passwort",
    labelConfirmPassword: "Passwort best\u00e4tigen",
    labelPhone: "Telefonnummer",
    labelNationality: "Nationalit\u00e4t",
    labelStateOfOrigin: "Herkunftsstaat",
    labelLga: "Lokaler Bereich / LGA",
    labelAddress: "Wohnadresse",
    labelHouseImage: "Foto der Hausadresse",
    labelDob: "Geburtsdatum",
    labelNextOfKinName: "Vollst\u00e4ndiger Name des Notfallkontakts",
    labelKinPhone: "Telefon des Notfallkontakts",
    labelNin: "Nationale Identifikationsnummer (NIN)",
    labelDisabilityType: "Bitte Art angeben",
    labelChildrenCount: "Anzahl der Kinder",
    placeholderEmail: "name@beispiel.de",
    placeholderPhone: "8012345678",
    placeholderNationality: "L\u00e4ndernamen eingeben",
    placeholderState: "Staat ausw\u00e4hlen oder eingeben",
    placeholderLga: "Bereich ausw\u00e4hlen oder eingeben",
    placeholderAddress: "Vollst\u00e4ndige Wohnadresse eingeben (mind. 30 Zeichen)",
    placeholderNin: "11 Ziffern",
    hintHouseImage: "Nur Bilddateien (PNG, JPG, WebP usw. Kein PDF). Gr\u00f6\u00dfe muss zwischen 1 KB und 200 KB liegen.",
    genderChoose: "Option ausw\u00e4hlen",
    genderMale: "M\u00e4nnlich",
    genderFemale: "Weiblich",
    childrenCountChoose: "Zahl ausw\u00e4hlen",
    disabilityLegend: "Haben Sie eine Behinderung?",
    marriedLegend: "Sind Sie verheiratet?",
    childrenLegend: "Haben Sie Kinder?",
    answerNo: "Nein",
    answerYes: "Ja",
    withoutChildren: "Ohne Kinder",
    withChildren: "Mit Kindern",
    passwordRules:
      "Verwenden Sie 8+ Zeichen mit Gro\u00df-, Kleinbuchstaben, einer Zahl und einem Symbol.",
    passwordStrengthLabel: "Passwortkraft",
    strengthNotSet: "Nicht gesetzt",
    strengthWeak: "Schwach",
    strengthMedium: "Mittel",
    strengthStrong: "Stark",
    btnShow: "Anzeigen",
    btnHide: "Verbergen",
    termsText: "Ich akzeptiere die",
    termsLink: "Allgemeinen Gesch\u00e4ftsbedingungen",
    termsSummary: "Allgemeine Gesch\u00e4ftsbedingungen lesen",
    termsBody:
      "Mit dem Absenden best\u00e4tigen Sie, dass die Angaben korrekt sind und stimmen der \u00dcbermittlung an Urban-Silhoutte zu. Passw\u00f6rter werden nie \u00fcbertragen.",
    btnNext: "Weiter",
    btnBack: "Zur\u00fcck",
    btnSignUp: "Registrieren",
    btnSending: "Senden\u2026",
    statusSending: "Ihre Registrierung wird sicher gesendet\u2026",
    thankYouEyebrow: "REGISTRIERUNG ERHALTEN",
    thankYouTitle: "Vielen Dank f\u00fcr Ihre Antwort.",
    thankYouBody: "Sie k\u00f6nnen dieses Formular jetzt schlie\u00dfen.",
    footerText: "Alle Rechte vorbehalten. Erstellt von Omabell 2026",
    langAriaLabel: "Sprache w\u00e4hlen",
    errorRequired: "Dieses Feld ist erforderlich.",
    errorEmail: "Geben Sie eine g\u00fcltige E-Mail-Adresse ein.",
    errorTooShort: "Geben Sie mindestens {min} Zeichen ein.",
    errorAddressTooShort: "Die Adresse muss mindestens 30 Zeichen lang sein.",
    errorImageOnly: "Bitte laden Sie eine Bilddatei hoch (PDF ist nicht erlaubt).",
    errorImageTooSmall: "Die Bildgr\u00f6\u00dfe muss mindestens 1 KB betragen.",
    errorImageTooLarge: "Die Bildgr\u00f6\u00dfe darf 200 KB nicht \u00fcberschreiten.",
    errorPasswordPattern:
      "Verwenden Sie Gro\u00df- und Kleinbuchstaben, eine Zahl und ein Symbol.",
    errorNinPattern: "Geben Sie genau 11 Ziffern ein.",
    errorPhonePattern:
      "Geben Sie 7 bis 15 Ziffern ohne L\u00e4ndervorwahl ein.",
    errorFutureDate:
      "W\u00e4hlen Sie ein Datum, das nicht in der Zukunft liegt.",
    errorMinAge:
      "Sie m\u00fcssen mindestens 16 Jahre alt sein, um sich zu registrieren.",
    errorPasswordMismatch: "Die Passw\u00f6rter stimmen nicht \u00fcberein.",
    errorRadio: "W\u00e4hlen Sie eine Option.",
    errorFallback:
      "\u00dcberpr\u00fcfen Sie diesen Wert und versuchen Sie es erneut.",
    errorFileProtocol:
      "Dieses Formular muss auf einem Webserver gehostet werden, um es absenden zu k\u00f6nnen.",
    errorSubmitPrefix: "Wir konnten Ihre Antwort nicht senden.",
    errorNoConnection:
      "Die Anfrage konnte FormSubmit nicht erreichen. \u00dcberpr\u00fcfen Sie Ihre Verbindung und ob die Seite \u00fcber HTTPS gehostet wird.",
    errorActivation:
      "Wenn dies die erste Einreichung ist, best\u00e4tigen Sie bitte die Aktivierungs-E-Mail von FormSubmit.",
    apiUnavailable:
      "Vorschl\u00e4ge nicht verf\u00fcgbar \u2014 geben Sie Ihre Antwort manuell ein.",
  },
};
