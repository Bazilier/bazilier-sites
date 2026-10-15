// SteadyEye landing copy, one entry per language. Portuguese (Brazil) and
// Spanish (Latin America: Mexico, Colombia, Chile) are written for those
// audiences, not translated line by line from English. App terms match the
// app's own String Catalog (e.g. "Salvar na galeria", "Guardar en la galería").
// Headings use <br> for their line breaks; the last line is the accent.

export type Lang = 'en' | 'pt-br' | 'es';

export const LANGS: { code: Lang; path: string; hreflang: string; htmlLang: string; ogLocale: string; label: string; name: string }[] = [
  { code: 'en', path: '/', hreflang: 'en', htmlLang: 'en', ogLocale: 'en_US', label: 'EN', name: 'English' },
  { code: 'pt-br', path: '/pt-br/', hreflang: 'pt-BR', htmlLang: 'pt-BR', ogLocale: 'pt_BR', label: 'PT', name: 'Português' },
  { code: 'es', path: '/es/', hreflang: 'es-419', htmlLang: 'es-419', ogLocale: 'es_LA', label: 'ES', name: 'Español' },
];

type Feature = { icon: 'word' | 'eye' | 'wave' | 'sparkles' | 'video' | 'mic' | 'globe' | 'drop'; title: string; body: string; tag?: string };

export type Copy = {
  meta: { title: string; description: string; ogImage: string; ogImageAlt: string };
  nav: { how: string; features: string; faq: string; download: string };
  hero: { chip: string; h1: [string, string]; h1Long?: boolean; lead: string; note: string; badge: string; badgeAlt: string; phoneAlt: string };
  problem: { h2: [string, string]; body: string; eyesAlt: string };
  how: {
    h2: [string, string];
    s1: { h3: string; p: string; notesLabel: string; readyLabel: string; notes: string; ready: string[] };
    s2: { h3: string; p: string; overlay: string };
    s3: { h3: string; p: string; one: string; three: string };
    s4: { h3: string; tag: string; p: string; original: string; studio: string; save: string };
    s5: { h3: string; p: string; toast: string };
  };
  features: { h2: [string, string]; items: Feature[] };
  faq: { h2: [string, string]; items: [string, string][] };
  final: { h2: [string, string]; lead: string };
  footer: { builtBy: string; privacy: string; terms: string };
  words: string[];
  ld: { description: string; featureList: string[] };
};

export const copy: Record<Lang, Copy> = {
  en: {
    meta: {
      title: 'SteadyEye: Teleprompter App for iPhone with Real Eye Contact',
      description: 'The iPhone teleprompter for creators, bloggers and influencers. Your script appears one word at a time under the camera, so you keep eye contact. Free to start.',
      ogImage: '/img/steadyeye/og-image.jpg',
      ogImageAlt: 'SteadyEye: teleprompter for real eye contact, with the script right under the iPhone camera',
    },
    nav: { how: 'How it works', features: 'Features', faq: 'FAQ', download: 'Download' },
    hero: {
      chip: 'AI eye-contact tracking',
      h1: ['Teleprompter<br>for real', 'eye contact.'],
      lead: 'Built for creators, bloggers and influencers. SteadyEye shows your script one word at a time, right under the camera lens. Your eyes stay locked. Your audience sees confidence, not reading.',
      note: 'Free to start · iPhone',
      badge: '/img/steadyeye/app-store-badge.svg',
      badgeAlt: 'Download SteadyEye on the App Store',
      phoneAlt: 'SteadyEye teleprompter on iPhone in three-line mode, the script right under the front camera',
    },
    problem: {
      h2: ['No more<br>wandering', 'eyes.'],
      body: 'Scrolling text makes your eyes scan left to right, and viewers notice instantly. SteadyEye keeps every word in one spot under the lens, so you look at your audience the whole time.',
      eyesAlt: 'Eyes reading a scrolling teleprompter drift sideways; with SteadyEye they look straight into the camera',
    },
    how: {
      h2: ['How it', 'works.'],
      s1: {
        h3: 'Add your script — or generate one.',
        p: 'Paste notes as messy as you like, or give AI a topic. Either way you get a script that’s easy to read aloud.',
        notesLabel: 'Your notes',
        readyLabel: 'Ready to read',
        notes: 'landing page — 5 parts and most people get the proportions completely wrong. Headline = 5% of the page. Pain points — 15%. Benefits = 20%. Product — 40%!!! And the Offer w/ CTA — 20%. most founders spend 80% on product & skip pain + benefits…',
        ready: ['Your landing page has five parts.', 'And most people get the proportions wrong.', 'Here is the formula.', 'Headline: five percent of the page.', 'Pain points: fifteen percent.', 'Benefits: twenty percent.'],
      },
      s2: { h3: 'Hit record.', p: 'Front camera in up to 4K, stabilized, with whatever mic you have — AirPods, wired or DJI.', overlay: 'One take. Done.' },
      s3: { h3: 'Read without looking away.', p: 'Words appear one at a time right under the lens — or three lines, if you like more context. Your eyes stay on the camera.', one: '1 line', three: '3 lines' },
      s4: { h3: 'Make it sound like a studio.', tag: 'New', p: 'One tap removes background noise and echo and evens out your voice. Flip between the original and Studio to hear the difference.', original: 'Original', studio: 'Studio', save: 'Save to Camera Roll' },
      s5: { h3: 'Export and post.', p: 'Save the take to your Camera Roll and post it wherever your audience is. No watermark with a subscription.', toast: 'Saved to Camera Roll' },
    },
    features: {
      h2: ['Everything for', 'one clean take.'],
      items: [
        { icon: 'word', title: 'One word, under the lens.', body: 'Your script appears right where the camera is. Prefer more context? Switch to three lines.' },
        { icon: 'eye', title: 'Eye-contact score.', body: 'After every take, see how much of it you held the camera’s gaze.' },
        { icon: 'wave', title: 'Studio sound.', body: 'Your voice without background noise or echo. One tap after recording.', tag: 'New' },
        { icon: 'sparkles', title: 'AI scripts.', body: 'Paste messy notes or just a topic. Get a script that’s ready to read aloud.' },
        { icon: 'video', title: '4K, stabilized.', body: 'Sharp and steady front-camera video, at the frame rate you pick.' },
        { icon: 'mic', title: 'Any microphone.', body: 'AirPods, Bluetooth, wired or DJI. Plug in and record.' },
        { icon: 'globe', title: 'Any language.', body: 'Spanish to Russian, Arabic to Japanese — with proper right-to-left and CJK support.' },
        { icon: 'drop', title: 'No watermark.', body: 'With a subscription, post your takes exactly as they are.' },
      ],
    },
    faq: {
      h2: ['Questions,', 'answered.'],
      items: [
        ['What is SteadyEye?', 'SteadyEye is a teleprompter app for iPhone. It shows your script one word at a time (or three lines, if you prefer) right under the front camera, so you keep eye contact with your audience while you read.'],
        ['How is it different from a scrolling teleprompter?', 'A scrolling teleprompter makes your eyes scan across lines, and viewers notice. SteadyEye keeps every word in the same spot under the lens, so your gaze stays on the camera for the whole take.'],
        ['Is SteadyEye free?', 'You can download SteadyEye and start recording for free. A subscription removes the watermark and adds more AI scripts and Studio Sound enhancements.'],
        ['Can I use it for TikTok, Reels, Shorts and YouTube?', 'Yes. Record with the front camera in up to 4K, then save the take to your Camera Roll and post it wherever your audience is.'],
        ['Can AI write my script?', 'Yes. Paste messy notes and AI turns them into a script that’s easy to read aloud, or give it a topic and it drafts one for you.'],
        ['What is Studio Sound?', 'One tap after recording removes background noise and echo and evens out your voice. Only the audio is processed; the video stays on your phone.'],
        ['Which languages and microphones does it support?', 'Scripts can be in any language, including right-to-left Arabic and Chinese, Japanese and Korean. Use the iPhone microphone, AirPods, Bluetooth, wired or DJI mics.'],
        ['Which iPhones does SteadyEye run on?', 'Any iPhone with iOS 17 or later.'],
      ],
    },
    final: { h2: ['Start recording', 'for free.'], lead: 'Stop memorizing scripts. Start making eye contact.' },
    footer: { builtBy: 'Built by', privacy: 'Privacy', terms: 'Terms' },
    words: ['SteadyEye', 'keeps', 'your', 'eyes', 'right', 'under', 'the', 'lens.', 'One', 'word', 'at', 'a', 'time.', 'No', 'more', 'wandering', 'eyes.'],
    ld: {
      description: 'Teleprompter app for iPhone that shows your script one word at a time right under the front camera, so you keep eye contact. AI scripts, studio sound, 4K recording.',
      featureList: ['Word-by-word teleprompter under the camera lens', 'Three-line mode', 'Eye-contact score', 'AI script writing and optimization', 'Studio Sound noise and echo removal', '4K stabilized front-camera recording', 'External microphones', 'Any language, including RTL and CJK'],
    },
  },

  'pt-br': {
    meta: {
      title: 'SteadyEye: teleprompter para iPhone com contato visual de verdade',
      description: 'O teleprompter para criadores, blogueiros e influenciadores. O roteiro aparece palavra por palavra embaixo da câmera, e você não tira o olho dela. Grátis.',
      ogImage: '/img/steadyeye/og-image-pt-br.jpg',
      ogImageAlt: 'SteadyEye: leia o roteiro sem tirar o olho da câmera do iPhone',
    },
    nav: { how: 'Como funciona', features: 'Recursos', faq: 'Dúvidas', download: 'Baixar' },
    hero: {
      chip: 'Contato visual medido por IA',
      h1: ['Leia o roteiro.<br>Sem tirar o olho', 'da câmera.'],
      h1Long: true,
      lead: 'Feito para criadores de conteúdo, blogueiros e influenciadores. O SteadyEye mostra o roteiro palavra por palavra, bem embaixo da lente. Você grava olhando para quem assiste — e ninguém percebe que você está lendo.',
      note: 'Grátis para começar · iPhone',
      badge: '/img/steadyeye/app-store-badge-pt-br.svg',
      badgeAlt: 'Baixar o SteadyEye na App Store',
      phoneAlt: 'Teleprompter SteadyEye no iPhone em três linhas, com o roteiro bem embaixo da câmera frontal',
    },
    problem: {
      h2: ['Chega de<br>olhar', 'perdido.'],
      body: 'Com o texto rolando, seus olhos correm de um lado para o outro — e quem assiste percebe na hora. No SteadyEye, cada palavra aparece no mesmo lugar, logo abaixo da lente. Você fala olhando nos olhos do público do começo ao fim.',
      eyesAlt: 'Olhos lendo um teleprompter que rola desviam para o lado; com o SteadyEye eles olham direto para a câmera',
    },
    how: {
      h2: ['Como', 'funciona.'],
      s1: {
        h3: 'Cole suas anotações — ou peça um roteiro.',
        p: 'Pode colar do jeito que estiver, bagunçado mesmo. Ou dê só o tema para a IA. Em segundos você tem um texto pronto para falar em voz alta.',
        notesLabel: 'Suas anotações',
        readyLabel: 'Pronto para gravar',
        notes: 'landing page — 5 partes e quase todo mundo erra a proporção. Título = 5% da página. Dores — 15%. Benefícios = 20%. Produto — 40%!!! E a oferta c/ CTA — 20%. a maioria gasta 80% no produto e pula dor + benefício…',
        ready: ['Uma landing page tem cinco partes.', 'E quase todo mundo erra a proporção.', 'Aqui vai a fórmula.', 'Título: cinco por cento da página.', 'Dores: quinze por cento.', 'Benefícios: vinte por cento.'],
      },
      s2: { h3: 'Aperte o REC.', p: 'Câmera frontal em até 4K, com estabilização e o microfone que você tiver: AirPods, com fio ou DJI.', overlay: 'Gravou de primeira.' },
      s3: { h3: 'Leia sem desviar o olhar.', p: 'As palavras aparecem uma de cada vez, logo abaixo da lente. Quer mais contexto? Mude para três linhas. Seu olhar continua na câmera.', one: '1 linha', three: '3 linhas' },
      s4: { h3: 'Som de estúdio num toque.', tag: 'Novo', p: 'Tire o ruído de fundo e o eco e deixe a voz equilibrada com um toque. Alterne entre o original e o Studio e ouça a diferença.', original: 'Original', studio: 'Studio', save: 'Salvar na galeria' },
      s5: { h3: 'Salve e poste.', p: 'O vídeo vai para a sua galeria, pronto para o Reels, TikTok, Shorts ou YouTube. Com a assinatura, sem marca d’água.', toast: 'Salvo na galeria' },
    },
    features: {
      h2: ['Tudo para gravar', 'de primeira.'],
      items: [
        { icon: 'word', title: 'Uma palavra, embaixo da lente.', body: 'O roteiro aparece onde a câmera está. Prefere mais contexto? Use três linhas.' },
        { icon: 'eye', title: 'Nota de contato visual.', body: 'Depois de cada take, veja quanto tempo você manteve o olhar na câmera.' },
        { icon: 'wave', title: 'Som de estúdio.', body: 'Sua voz sem ruído de fundo nem eco. Um toque depois de gravar.', tag: 'Novo' },
        { icon: 'sparkles', title: 'Roteiros com IA.', body: 'Cole anotações soltas ou só o tema. Saia com um roteiro pronto para falar.' },
        { icon: 'video', title: '4K com estabilização.', body: 'Vídeo nítido e firme na câmera frontal, no frame rate que você escolher.' },
        { icon: 'mic', title: 'Qualquer microfone.', body: 'AirPods, Bluetooth, com fio ou DJI. Conectou, gravou.' },
        { icon: 'globe', title: 'Qualquer idioma.', body: 'Do português ao japonês, com suporte de verdade a árabe e outros idiomas escritos da direita para a esquerda.' },
        { icon: 'drop', title: 'Sem marca d’água.', body: 'Com a assinatura, você posta o vídeo do jeito que ele saiu.' },
      ],
    },
    faq: {
      h2: ['Perguntas', 'frequentes.'],
      items: [
        ['O que é o SteadyEye?', 'É um app de teleprompter para iPhone. Ele mostra o seu roteiro palavra por palavra (ou em três linhas, se preferir) bem embaixo da câmera frontal, para você ler sem perder o contato visual com quem assiste.'],
        ['Qual a diferença para um teleprompter comum?', 'No teleprompter tradicional, o texto rola e seus olhos acompanham as linhas — e isso aparece no vídeo. No SteadyEye, cada palavra surge sempre no mesmo ponto, logo abaixo da lente. Seu olhar fica na câmera o take inteiro.'],
        ['O SteadyEye é grátis?', 'Você baixa e começa a gravar de graça. A assinatura tira a marca d’água e libera mais roteiros com IA e mais melhorias de Som de estúdio.'],
        ['Dá para usar no Reels, TikTok, Shorts e YouTube?', 'Dá, sim. Grave com a câmera frontal em até 4K, salve na galeria e poste onde estiver o seu público.'],
        ['A IA escreve o roteiro para mim?', 'Escreve. Cole anotações soltas e a IA transforma tudo num texto fácil de falar em voz alta — ou dê só o tema e ela cria o roteiro para você.'],
        ['O que é o Som de estúdio?', 'Com um toque depois de gravar, ele tira o ruído de fundo e o eco e deixa sua voz equilibrada. Só o áudio é processado; o vídeo continua no seu celular.'],
        ['Quais idiomas e microfones ele aceita?', 'O roteiro pode estar em qualquer idioma, inclusive árabe (da direita para a esquerda), chinês, japonês e coreano. Funciona com o microfone do iPhone, AirPods, Bluetooth, microfones com fio e DJI.'],
        ['Em quais iPhones funciona?', 'Em qualquer iPhone com iOS 17 ou mais recente.'],
      ],
    },
    final: { h2: ['Comece a gravar', 'de graça.'], lead: 'Pare de decorar roteiro. Comece a olhar para o seu público.' },
    footer: { builtBy: 'Criado por', privacy: 'Privacidade', terms: 'Termos' },
    words: ['SteadyEye', 'mantém', 'seu', 'olhar', 'bem', 'embaixo', 'da', 'lente.', 'Uma', 'palavra', 'de', 'cada', 'vez.', 'Nada', 'de', 'olhar', 'perdido.'],
    ld: {
      description: 'App de teleprompter para iPhone que mostra o roteiro palavra por palavra embaixo da câmera frontal, para você manter o contato visual. Roteiros com IA, som de estúdio e gravação em 4K.',
      featureList: ['Teleprompter palavra por palavra embaixo da lente', 'Modo de três linhas', 'Nota de contato visual', 'Roteiros escritos e ajustados por IA', 'Som de estúdio: remoção de ruído e eco', 'Gravação em 4K com estabilização na câmera frontal', 'Microfones externos', 'Qualquer idioma, inclusive árabe, chinês, japonês e coreano'],
    },
  },

  es: {
    meta: {
      title: 'SteadyEye: teleprompter para iPhone con contacto visual real',
      description: 'El teleprompter para creadores de contenido e influencers. Tu guion aparece palabra por palabra bajo la cámara y nunca le quitas la mirada. Gratis para empezar.',
      ogImage: '/img/steadyeye/og-image-es.jpg',
      ogImageAlt: 'SteadyEye: lee tu guion sin dejar de mirar a la cámara del iPhone',
    },
    nav: { how: 'Cómo funciona', features: 'Funciones', faq: 'Preguntas', download: 'Descargar' },
    hero: {
      chip: 'Contacto visual medido con IA',
      h1: ['Lee tu guion.<br>Sin dejar de mirar', 'a la cámara.'],
      h1Long: true,
      lead: 'Hecho para creadores de contenido, bloggers e influencers. SteadyEye te muestra el guion palabra por palabra, justo debajo del lente. Hablas mirando a tu audiencia y nadie nota que estás leyendo.',
      note: 'Gratis para empezar · iPhone',
      badge: '/img/steadyeye/app-store-badge-es-mx.svg',
      badgeAlt: 'Descargar SteadyEye en el App Store',
      phoneAlt: 'Teleprompter SteadyEye en iPhone en modo de tres líneas, con el guion justo debajo de la cámara frontal',
    },
    problem: {
      h2: ['Adiós a la<br>mirada', 'perdida.'],
      body: 'Con el texto en movimiento, tus ojos van de un lado a otro y el público lo nota al instante. En SteadyEye cada palabra aparece en el mismo lugar, justo debajo del lente, así miras a tu audiencia de principio a fin.',
      eyesAlt: 'Ojos que leen un teleprompter en movimiento se desvían; con SteadyEye miran directo a la cámara',
    },
    how: {
      h2: ['Cómo', 'funciona.'],
      s1: {
        h3: 'Pega tus notas — o pide un guion.',
        p: 'Pégalas como estén, aunque sean un desorden. O dale solo el tema a la IA. En segundos tienes un texto listo para decir en voz alta.',
        notesLabel: 'Tus notas',
        readyLabel: 'Listo para grabar',
        notes: 'landing page — 5 partes y casi todos se equivocan en la proporción. Título = 5% de la página. Dolores — 15%. Beneficios = 20%. Producto — ¡¡40%!! Y la oferta c/ CTA — 20%. la mayoría gasta 80% en producto y se salta dolor + beneficios…',
        ready: ['Una landing page tiene cinco partes.', 'Y casi todos se equivocan en la proporción.', 'Esta es la fórmula.', 'Título: cinco por ciento de la página.', 'Dolores: quince por ciento.', 'Beneficios: veinte por ciento.'],
      },
      s2: { h3: 'Dale a grabar.', p: 'Cámara frontal hasta 4K, con estabilización y el micrófono que tengas: AirPods, con cable o DJI.', overlay: 'Sale a la primera.' },
      s3: { h3: 'Lee sin apartar la vista.', p: 'Las palabras aparecen una a una, justo debajo del lente. ¿Quieres más contexto? Cambia a tres líneas. Tu mirada sigue en la cámara.', one: '1 línea', three: '3 líneas' },
      s4: { h3: 'Sonido de estudio, con un toque.', tag: 'Nuevo', p: 'Quita el ruido de fondo y el eco, y empareja tu voz con un solo toque. Cambia entre el original y Studio para escuchar la diferencia.', original: 'Original', studio: 'Studio', save: 'Guardar en la galería' },
      s5: { h3: 'Guarda y publica.', p: 'El video se guarda en tu galería, listo para Reels, TikTok, Shorts o YouTube. Con la suscripción, sin marca de agua.', toast: 'Guardado en la galería' },
    },
    features: {
      h2: ['Todo para grabar', 'a la primera.'],
      items: [
        { icon: 'word', title: 'Una palabra, bajo el lente.', body: 'Tu guion aparece donde está la cámara. ¿Prefieres más contexto? Usa tres líneas.' },
        { icon: 'eye', title: 'Puntaje de contacto visual.', body: 'Después de cada toma, ve cuánto tiempo sostuviste la mirada a la cámara.' },
        { icon: 'wave', title: 'Sonido de estudio.', body: 'Tu voz sin ruido de fondo ni eco. Un toque después de grabar.', tag: 'Nuevo' },
        { icon: 'sparkles', title: 'Guiones con IA.', body: 'Pega notas sueltas o solo el tema. Obtén un guion listo para decir en voz alta.' },
        { icon: 'video', title: '4K con estabilización.', body: 'Video nítido y estable con la cámara frontal, a los fps que elijas.' },
        { icon: 'mic', title: 'Cualquier micrófono.', body: 'AirPods, Bluetooth, con cable o DJI. Lo conectas y grabas.' },
        { icon: 'globe', title: 'Cualquier idioma.', body: 'Del español al japonés, con soporte real para árabe y otros idiomas que se escriben de derecha a izquierda.' },
        { icon: 'drop', title: 'Sin marca de agua.', body: 'Con la suscripción, publicas tus videos tal como quedaron.' },
      ],
    },
    faq: {
      h2: ['Preguntas', 'frecuentes.'],
      items: [
        ['¿Qué es SteadyEye?', 'Es una app de teleprompter para iPhone. Te muestra el guion palabra por palabra (o en tres líneas, si lo prefieres) justo debajo de la cámara frontal, para que leas sin perder el contacto visual con tu audiencia.'],
        ['¿En qué se diferencia de un teleprompter normal?', 'En un teleprompter tradicional el texto se desplaza y tus ojos siguen las líneas, y eso se nota en el video. En SteadyEye cada palabra aparece siempre en el mismo punto, justo debajo del lente, así tu mirada se queda en la cámara toda la toma.'],
        ['¿SteadyEye es gratis?', 'Lo descargas y empiezas a grabar gratis. La suscripción quita la marca de agua y te da más guiones con IA y más mejoras de Sonido de estudio.'],
        ['¿Sirve para Reels, TikTok, Shorts y YouTube?', 'Sí. Graba con la cámara frontal hasta en 4K, guarda el video en tu galería y publícalo donde esté tu audiencia.'],
        ['¿La IA puede escribir mi guion?', 'Sí. Pega tus notas sueltas y la IA las convierte en un texto fácil de decir en voz alta, o dale solo el tema y te escribe el guion.'],
        ['¿Qué es el Sonido de estudio?', 'Con un toque después de grabar, quita el ruido de fondo y el eco y empareja tu voz. Solo se procesa el audio; el video se queda en tu teléfono.'],
        ['¿Qué idiomas y micrófonos admite?', 'Tu guion puede estar en cualquier idioma, incluidos el árabe (de derecha a izquierda), el chino, el japonés y el coreano. Funciona con el micrófono del iPhone, AirPods, Bluetooth, micrófonos con cable y DJI.'],
        ['¿En qué iPhone funciona?', 'En cualquier iPhone con iOS 17 o posterior.'],
      ],
    },
    final: { h2: ['Empieza a grabar', 'gratis.'], lead: 'Deja de memorizar guiones. Empieza a mirar a tu audiencia.' },
    footer: { builtBy: 'Hecho por', privacy: 'Privacidad', terms: 'Términos' },
    words: ['SteadyEye', 'mantiene', 'tu', 'mirada', 'justo', 'bajo', 'el', 'lente.', 'Una', 'palabra', 'a', 'la', 'vez.', 'Adiós', 'a', 'la', 'mirada', 'perdida.'],
    ld: {
      description: 'App de teleprompter para iPhone que te muestra el guion palabra por palabra justo debajo de la cámara frontal, para que mantengas el contacto visual. Guiones con IA, sonido de estudio y grabación en 4K.',
      featureList: ['Teleprompter palabra por palabra bajo el lente', 'Modo de tres líneas', 'Puntaje de contacto visual', 'Guiones escritos y optimizados con IA', 'Sonido de estudio: eliminación de ruido y eco', 'Grabación 4K estabilizada con la cámara frontal', 'Micrófonos externos', 'Cualquier idioma, incluidos árabe, chino, japonés y coreano'],
    },
  },
};
