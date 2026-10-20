/* ===== ДАННЫЕ ПОРТФОЛИО: чтобы добавить работу, скопируйте объект в PROJECTS и поменяйте поля. Верстку править не нужно =====
   id               уникальный id (латиницей)
   type             text | video | audio | gallery | presentation
   tag              подтип для текстов: эссе, лонгрид, заметка, пост (показывается бейджем)
   title            заголовок;  shortDescription: 1–2 предложения о сути материала
   task / role / result / learned   блоки «Задача», «Моя роль», «Результат», «Чему научилась»
   images           массив картинок для карусели (gallery: images/gallery/…, presentation: слайды как картинки, images/slides/…).
                    Слайды из PDF экспортируйте в PNG/JPG и положите в images/slides/
   pdfSrc           PDF презентации в docs/ (покажется iframe, если images пустой; плюс ссылка «Скачать PDF»)
   videoSrc         видео в videos/;  audioSrc: аудио в audio/ (звучит через общий плеер)
   text             полный текст для type: text, HTML разрешён: <img class="article-image" src="images/…" alt="…"> или <figure><img class="article-image" …><figcaption>подпись</figcaption></figure>;  thumb: своё превью карточки */
const PROJECTS = [
      { 
    id: 'komi-perm', 
    type: 'text', 
    tag: 'статья', 
    title: 'Коми-пермяцкий язык: история и особенности', 
    shortDescription: 'Материал об исчезающем языке: от древних алфавитов до современной лексики.',
    thumb: 'docs/komi-anbur.png', 
    task: 'Изучить историю и лингвистические особенности коми-пермяцкого языка.', 
    role: 'Автор: сбор фактуры, написание текста, подбор иллюстраций.', 
    result: 'Подготовлена статья с исторической справкой и разбором особенностей.', 
    learned: 'Работать с научными источниками и структурировать объемный материал.',
    text: 
      '<h3>Коми-пермяцкий кыв: о чем речь?</h3>' +
      '<p>Коми-пермяцкий язык — это одна из двух литературных разновидностей коми языка (вторая — коми-зырянский), которая совместно с удмуртским языком относится к пермской ветви финно-угорской (уральской) языковой семьи. Подавляющее большинство говорящих на нем проживает в самом Коми-Пермяцком округе, но есть и немногочисленная группа носителей языка в Афанасьевском районе Кировской области. Общая численность людей, владеющих языком, по данным последней переписи населения в 2020 году, насчитывается около 41 447 человек, тогда как по оценкам различных исследований на рубеже последнего столетия число носителей колебалось от 94 300 до 110 000 человек. Из-за резкого снижения числа носителей языка — ЮНЕСКО стал относить коми-пермяцкий (наравне с коми-зырянским) к категории «с угрозой исчезновения».</p>' +

      '<h3>История коми-пермяцкого языка и письменности</h3>' +
      '<p>Появление коми-пермяцкого языка стало происходить в IV веке после начала переселения пленен коми на север в сторону бассейнов Вычегды и Печеры. С этого момента постепенно начинается территориальное разделение коми и потеря связей между отдельными племенами. Впоследствии, те, кто остались в бассейне Камы стали называться коми-пермяками, а те, кто мигрировали на север именовались как коми-зыряне. Различия в месте проживания поспособствовали закреплению диалектных особенностей: фонетики, лексики и грамматики.</p>' +

      '<p>В 1372 году русский миссионер Святой Стефан Пермский (известный также как Степан Храп) разработал первый алфавит для языка коми. Эта письменность, названная по первым двум буквам — «анбур», базировалась на элементах греческого, кириллического письма и традиционных родовых знаков коми — «рӧдвуж пас». Алфавит использовался для перевода религиозных текстов и применялся до XVII века, пока его не заменила более привычная кириллица.</p>' +

      '<figure>' +
        '<img class="article-image" src="docs/komi-anbur.png" alt="Алфавит анбур">' +
        '<figcaption>Алфавит «анбур». Источник фото: komiinform.ru</figcaption>' +
      '</figure>' +

      '<figure>' +
        '<img class="article-image" src="docs/komi-trinity.png" alt="Зырянская Троица">' +
        '<figcaption>Источник фото: ru.wikipedia.org</figcaption>' +
      '</figure>' +

      '<p>Окончательное разделение коми-языка на два — коми-пермяцкий и коми-зырянский — произошло примерно в XIV-XV веках. Значительную роль в этом процессе сыграл социально-политический фактор: примерно с XII века земли коми подпали под зависимость от Новгорода и были поделены на два княжества, Пермь Великую (на Каме) и Пермь Вычегодскую (на Вычегде). Тем не менее, когда в XIV веке миссионер Стефан разрабатывал письменность и литературную норму для коми, диалекты еще сохраняли достаточное сходство, поэтому у них остался общий алфавит и языковая норма.</p>' +

      '<p>С XVIII столетия для коми-пермяцкого языка применяется кириллический алфавит, адаптированный русскими миссионерами и учёными. Первые печатные памятники этого периода (конец XVIII — начало XIX веков) носят преимущественно религиозный и просветительский характер.</p>' +

      '<figure>' +
        '<img class="article-image" src="docs/komi-dictionary.png" alt="Русско-пермяцкий словарь 1869 года">' +
        '<figcaption>Первый русско-пермяцкий словарь Н. А. Рогова, 1869 год. Источник: komi-permarchiv.ru</figcaption>' +
      '</figure>' +

      '<figure>' +
        '<img class="article-image" src="docs/komi-primer.png" alt="Букварь 1894 года">' +
        '<figcaption>«Выддемь пермякъ понда» — первый букварь, 1894 год. Источник: ar.culture.ru</figcaption>' +
      '</figure>' +

      '<p>В 1918–1930 и 1936–1938 годах для записи коми-пермяцкого стали использовать так называемый «алфавит Молодцова» (молдовцовка) — расширенную кириллицу с дополнительными буквами и диграфами, призванными точнее отражать фонетику языка.</p>' +

      '<figure>' +
        '<img class="article-image" src="docs/komi-molodtsov.png" alt="Алфавит Молодцова">' +
        '<figcaption>Алфавит В. А. Молодцова. Источник: en.wikipedia.org</figcaption>' +
      '</figure>' +

      '<p>В 1938 году был утверждён современный алфавит на основе кириллицы: 35 букв русского алфавита плюс Ò ò и I i и диграфы дж, дз, тш. Объёмная падежная система включает до 18 грамматических и локативных падежей, а максимальное число возможных форм подходит к 30. Эта система остаётся действующей поныне и применяется во всех официальных текстах, учебниках и СМИ Коми-Пермяцкого округа.</p>' +

      '<h3>Особенности коми-пермяцкого языка</h3>' +
      '<ul>' +
        '<li><strong>Собственные «бранные» слова практически отсутствуют</strong> — большая часть экспрессивной лексики заимствована из русского языка и лишь частично адаптирована в виде кальки или фонетической трансформации. В нормативных и диалектных словарях Коми-Пермяцкого округа бранные слова фиксируются редко, что отражает общее табуирование «мата» в письменной традиции. В старину ругательства порой использовались и в магических обрядах для «проклятия» или «отпугивания» злых духов. Изредка встречаются собственно коми-пермяцкие обзывательства — например, слово мымра переводиться как «угрюмый» с негативным оттенком. Со временем значение слова «мымра» расширилось, и им стали называть просто нелюдимого, скучного, серого и угрюмого человека, как правило, женщину.</li>' +
      '</ul>' +

      '<blockquote>Часто для смягчения грубой лексики коми-пермяки используют эвфемизмы: шйдӧрыс «чёрт побери» вместо бранных выражений, сӧнгыд «дурень» вместо прямых оскорблений.</blockquote>' +

      '<ul>' +
        '<li><strong>Активно используются заимствованные русские слова</strong>, например: шкапӧ (от «шкаф»), машына (от «машина») и школа. Эти слова могут употребляться как наряду с исконными коми-пермяцкими эквивалентами, так и самостоятельно. При заимствовании происходит фонетическая адаптация: в разговорном произношении русские звуки Ф, Х и Ц часто заменяются на П, К и Ч соответственно (например: Пёрма вместо «ферма», Кӧзяин вместо «хозяин», Конеч вместо «конец»). Кроме того, русские существительные, попадая в коми-пермяцкий язык, часто получают местные суффиксы для образования множественного числа, например: шкапӧ зы («шкафы») и телевизор лы («телевизоры»).</li>' +
      '</ul>'
  },

      { 
    id: 'perm-mirror', 
    type: 'text', 
    tag: 'эссе', 
    title: 'Город как зеркало: ода повседневности к 300-летию Перми', 
    shortDescription: 'Эссе о документальном проекте «Я — Пермь», где город показан через кадры самих горожан.',
    thumb: 'docs/O-perm-mirror.png', 
    task: 'Написать авторский текст о документальном проекте «Я — Пермь» (реж. Ольга Аверкиева, Семен Соснин) для портфолио.', 
    role: 'Автор текста: анализ фильма, поиск смысловых акцентов, работа с фактурой.', 
    result: 'Получилось эссе, которое показывает, как документальное кино превращает обыденность в искусство.', 
    learned: 'Анализировать визуальный язык кино и удерживать внимание читателя на длинном тексте.',
    text: 
      '<p>Документальный проект «Я — Пермь» (реж. Ольга Аверкиева, Семен Соснин) — это, пожалуй, самая экспериментальная часть масштабного цикла «Пермь как фильм», созданного к 300-летию города. Это не классическая парадная хроника, которую привыкли видеть в юбилейные даты, а уникальный пример соучастного проектирования в кино. В её основу легли не только профессиональные съемки, но и «народные» кадры — сотни видеозаписей, присланных самими горожанами в ответ на открытый призыв авторов.</p>' +
      '<p>Такой формат превращает фильм в живой, дышащий и слегка хаотичный портрет города, собранный из тысяч мгновений. Основная концепция заложена в самом названии: город здесь не определяется архитектурой или заводами, он равен своим жителям. «Я — Пермь» — это декларация каждого, кто попал в объектив, от случайного прохожего на заснеженной набережной до оператора-любителя. Фильм работает с ощущением времени. Кадры старых теплоходов на Каме и советских трамваев не просто отдают дань истории, они создают фундамент для современности. Трамвай в этом фильме становится главной связующей нитью: от старых архивных вагонов до современных «Львят». Это не просто транспорт, а подвижная точка обзора, из окна которой каждый из нас ежедневно пишет свою историю города.</p>' +
      '<p>Особое очарование фильму придает его тактильность и внимание к обычному людскому быту. Мы видим Пермь через интимные детали: пар от горячего чая в зимнем лесу, брызги фонтанов, радостную суету во время летнего ливня. Город предстает как пространство для жизни, а не просто точка на карте. При этом авторы не идеализируют реальность: город здесь не всегда дружелюбен — кадры с летним потопом, где машины буквально плывут по улицам, напоминают о стихийной, непредсказуемой силе Урала, которую горожане принимают с ироничным спокойствием. Особое настроение создает работа со светом: закатное «золото», отражающееся в Каме, и мягкое сияние вечерних огней моста превращают индустриальную Пермь в пространство почти сказочное, глубоко поэтичное.</p>' +
      '<p>Интересным художественным решением (и одновременно вызовом для зрителя) стало использование материалов от обычных горожан. Смешение профессиональных панорам с любительскими вертикальными видео создает эффект «народного кино». Принципиальный отказ от действующих лиц превращает фильм в чистое наблюдение. Здесь нет постановки: герои фильма сами горожане в их естественной среде. Город достаточно самобытен, чтобы рассказать свою историю. Это лишает ленту фальши, создавая ощущение, что главным действующим лицом является коллективное «мы».</p>' +
      '<p>Однако стоит признать, что это решение несет и технические издержки. В некоторых местах стыковка вертикальных кадров с основным рядом и использование коллажей из трех окон создают избыточный визуальный шум. Взгляд не всегда успевает зафиксировать смыслы в дробном кадре, что немного выбивает из медитативного ритма остального фильма. С другой стороны, отсутствие стабилизации в ряде сцен и «дрожащая камера» добавляют видеоряду искренности, превращая зрителя в соучастника прогулки, того самого фланёра, изучающего город изнутри. Саундтрек не перебивает картинку, а подчеркивает её ритм — от спокойного созерцания до динамики городского движения. Музыкальное сопровождение выступает не просто фоном, а эмоциональным проводником. Мелодия плавно адаптируется под ритм города: она затихает в моменты созерцания заснеженных аллей и набирает силу в кадрах с движущимся транспортом или потоками людей.</p>' +
      '<p>Достаточно сильным решением становится финальное возвращение к архивной хронике. Когда на экране вновь появляются черно-белые теплоходы и лица людей из прошлого века, возникает чувство узнавания. Это осознание себя частью огромного потока жизни, который начался задолго до нас и продолжится после. Закольцованность сюжета превращает фильм из простого набора кадров в цельное высказывание. Мы видим, как современные набережные и кофейни прорастают сквозь старые кадры.</p>' +
      '<p>«Я — Пермь» выглядит как признание в любви, полное искреннего тепла. Фильм оставляет послевкусие дома. Это кино о городе, в котором мы так привыкли жить, порой не замечая красоты в закате над Камой. В конечном счете, Пермь — не просто точка на карте. Это каждый из нас.</p>'
  },

    { id: 'scn', type: 'presentation', title: 'Видеопроект «Самые честные новости»', shortDescription: 'Анализ новостного проекта Артемия Лебедева, его специфики и успеха.', images: ['images/slides/file-001.png', 'images/slides/file-002.png', 'images/slides/file-003.png', 'images/slides/file-004.png', 'images/slides/file-005.png', 'images/slides/file-006.png', 'images/slides/file-007.png', 'images/slides/file-008.png', 'images/slides/file-009.png', 'images/slides/file-010.png', 'images/slides/file-011.png'], thumb: ['images/slides/file-001.png'],
    task: 'В рамках ВКР подготовить исследование о видеопроекте, выявить его яркие черты и обозначить факторы, которые служат успехом "Самых честных новостей".', role: 'Автор.', result: 'Научный руководитель и приглашенные эксперты из редакций высоко оценили теоретическую и исследовательскую основу работы.', learned: 'Проводить качественное исследование диджитал-феноменов.' },

    { id: 'fmi', type: 'gallery', title: 'Информационные карточки физико-математического института', shortDescription: 'Карточки, выполненные в рамках контент-плана для абитуриентов ПГНИУ.', images: ['images/fmi0.png', 'images/fmi1.png', 'images/fmi2.png', 'images/fmi3.png', 'images/fmi4.png', 'images/fmi5.png', 'images/fmi6.png', 'images/fmi7.png'], thumb: ['images/O-fmi.png'],
    task: 'Создать понятные последовательные карточки, которые смогут сориентировать будущих студентов.', role: 'Автор.', result: 'Готовые информационные карточки, отвечающие существующему фирстилю и модернизированным дизайном.', learned: 'Включать в материалы удобные QR-коды для удобства аудитории.' },

  { id: 'ld1', type: 'video', title: 'VK-клип со студентами', shortDescription: 'Выполнено в рамках PR-кампании направления «Лесное дело» в ПГНИУ.', videoSrc: 'videos/ld1.mp4', thumb: ['videos/pr-ld1.png'],
    task: 'Смонтировать короткий ролик для VK-клипов официальных сетей вуза.', role: 'Монтажёр.', result: 'Работа стала официальной частью PR-кампании и принесла успех.', learned: 'Поняла, каково активно общаться с заказчиком для качественного создания материала.' },

      { id: 'ld2', type: 'video', title: 'VK-клип с экспертами', shortDescription: 'Выполнено в рамках PR-кампании направления «Лесное дело» в ПГНИУ.', videoSrc: 'videos/ld2.mp4', thumb: ['videos/pr-ld2.png'],
    task: 'Смонтировать короткий ролик для VK-клипов официальных сетей вуза.', role: 'Монтажёр.', result: 'Работа стала официальной частью PR-кампании и принесла успех.', learned: 'Освоила новые возможности CapCut.' },

    { id: 'bsolutno-ne-smeshhnoe-video-o-pravilah', type: 'video', title: '«Абсолютно не смешное видео о правилах»', shortDescription: 'Интерактивное UGC-видео о правилах поведения в цифровой среде в стиле Twitter/Threads.', videoSrc: 'videos/absolutno-ne-smeshhnoe-video-o-pravilah.mp4', thumb: ['videos/O-ne-smeshno.png'],
    task: 'Сделать медиапроект о правилах цифрового этикета в любой форме.', role: 'Автор идеи, монтажёр.', result: 'Преподаватель и студенты отметили креатив и качественное вплетение контекста межстуденческого бытового общения в работу.', learned: 'Создавать интерактивные юмористические контексты в стиле Twitter/Threads: персонаж в начале ролика смотрит существующую видеоработу другой студентки, которая якобы написала мне оскорбление в соцсети в рамках такой же работы, на что я и ответила своим материалом.' },

  { id: 'lit-ai', type: 'audio', title: 'Аудиопроект «ЛИТ-ИИ» (пока что не доступно)', shortDescription: 'Развлекательный аудиоматериал с озвучкой двух ведущих и ИИ.', audioSrc: 'audio/your-track.mp3', thumb: 'images/max-lit-ai.png',
    task: 'Создать готовую авторскую рубрику/подкаст в паре.', role: 'Сценарий, озвучка, работа с ИИ, монтаж звука.', result: 'Подкаст готов к публикации.', learned: 'Работать со студийной звукозаписывающей аппаратурой, работать с ElevenLabs.' },

  { id: 'sk', type: 'gallery', title: 'Карточки «Снежная королева»', shortDescription: 'Маскот и карточки для социальных сетей магазина.', images: ['images/sk1.jpeg', 'images/sk2.jpeg', 'images/sk3.jpeg', 'images/sk4.jpeg', 'images/sk5.jpeg'], thumb: ['images/O-sk.png'],
    task: 'Разработать маскота, который подходит целевой аудитории магазина, и найти идею для рубрики с участием маскота.', role: 'Автор.', result: 'Готовая карусель с оригинальным персонажем.', learned: 'Использовать нейросети для получения статичного изображения предмета (даже если он находится на модели).' },

    { id: 'trailer-is', type: 'video', title: 'Трейлер-переосмысление «Иронии судьбы»', shortDescription: 'Нестандартная видео-компиляция известного фильма.', videoSrc: 'videos/trailer-is.mp4', thumb: ['videos/O-is.png'],
    task: 'Пересобрать привычный медиатекст в новый жанр с помощью нелинейного монтажа.', role: 'Монтажёр.', result: 'Успешная деконструкция фильма на современный лад.', learned: 'Искать новый контекст в привычных вещах.' },

  { id: 'zr', type: 'presentation', title: 'Журнал «Ретроспектива»', shortDescription: 'Презентация проекта гиковского журнала о поп-культуре.', images: ['images/slides/zr-001.png', 'images/slides/zr-002.png', 'images/slides/zr-003.png', 'images/slides/zr-004.png', 'images/slides/zr-005.png', 'images/slides/zr-006.png', 'images/slides/zr-007.png', 'images/slides/zr-008.png', 'images/slides/zr-009.png', 'images/slides/zr-010.png', 'images/slides/zr-011.png', 'images/slides/zr-012.png', 'images/slides/zr-013.png'], thumb: ['images/slides/zr-001.png'],
    task: 'Упаковать идею проекта, указать целевую аудиторию, формат, актуальность и конкуретность.', role: 'Координатор команды, дизайнер, аналитик актуальности и конкурентов, автор итоговой презентации.', result: 'Преподаватель и приглашенные эксперты из редакции 59.ru высоко оценили проект журнала.', learned: 'Сводить работу команды в единый рассказ.' },

    { id: 'afisha-obshhestvennogo-golosovania', type: 'gallery', title: 'Афиша общественного голосования', shortDescription: 'Карточка для номинанта Строгановской премии.', images: ['images/afisha-obshhestvennogo-golosovania.png'], thumb: ['images/O-afisha-obshhestvennogo-golosovania.png'],
    task: 'Сделать тематическую карточку для официального интернет-голосования Пермского края в конкурсе за Строгановскую премию.', role: 'Автор.', result: 'Одобренная преподователем карточка, использовавшаяся в официальных источниках.', learned: 'Работать с техническим заданием.' },

    { id: 'cherep', type: 'gallery', title: 'Карточка с векторным изображением', shortDescription: 'Инфографика с анатомией черепа.', images: ['images/cherep.png'], thumb: ['images/O-cherep.png'],
    task: 'Сделать любую оригинальную инфографику в векторном редакторе.', role: 'Автор, художник.', result: 'Отрисованная при помощи графического планшета инфографика.', learned: 'Искать необычные идеи в свободных условиях.' },

    { id: 'chto-dlya-vas-lubov', type: 'video', title: 'Опрос «Что для вас любовь?»', shortDescription: 'Видеоролик с интервью у студентов, где они рассуждают о любви.', videoSrc: 'videos/chto-dlya-vas-lubov.mp4', thumb: ['videos/O-cdvl.png'],
    task: 'Снять групповое интервью в настоящей студии.', role: 'Монтажёр, второй оператор.', result: 'Преподаватель отметил внимание на общую стройную линию повествования.', learned: 'Как работать с профессиональной камерой.' },

    { id: 'ja', type: 'presentation', title: 'Анализ пермского акцента', shortDescription: 'Короткая аналитическая презентация журналистского анализа.', images: ['images/slides/ja1.png', 'images/slides/ja2.png', 'images/slides/ja3.png', 'images/slides/ja4.png', 'images/slides/ja5.png'], thumb: ['images/slides/ja1.png'],
    task: 'Сделать аутентичную презентацию анализа, уместив суть максимально коротко, не превышая пяти слайдов.', role: 'Организатор группового анализа, автор итоговой презентации и её концепции.', result: 'Яркая и акцентная работа.', learned: 'Максимально отрезать лишнее, передавая смысл при помощи «облака тегов».' },

    { id: 'kto-ya-takaya', type: 'video', title: 'Самопрезентация в формате мем-видео', shortDescription: 'Креативное развлекательное видео-знакомство.', videoSrc: 'videos/kto-ya-takaya.mp4', thumb: ['videos/O-kto-ya-takaya.png'],
    task: 'Снять видео для знакомства с преподавателем и студентами.', role: 'Автор идеи, монтажёр.', result: 'Преподаватель и студенты отметили яркий развлекательный и творческий формат видео.', learned: 'Применять свой юмор и самоиронию в материале.' },

        { id: 'figma-maket-tovara', type: 'gallery', title: 'Макет товара', shortDescription: 'Графическое изображение титульной части сайта с товаром.', images: ['images/figma-maket-tovara.png'], thumb: ['images/O-figma-maket-tovara.png'],
    task: 'Сделать понятный макет для страницы товара, отвечающего основным правилам дизайна.', role: 'Графический дизайнер.', result: 'Стандартный лаконичный макет.', learned: 'Использовать средства программы Figma.' },

    { id: 'garmonix', type: 'presentation', title: 'Салон красоты «Гармония»', shortDescription: 'Проект обновления соцсетей салона красоты в Горнозаводске.', images: ['images/slides/garmonix1.png', 'images/slides/garmonix2.png', 'images/slides/garmonix3.png', 'images/slides/garmonix4.png', 'images/slides/garmonix5.png', 'images/slides/garmonix6.png', 'images/slides/garmonix7.png', 'images/slides/garmonix8.png', 'images/slides/garmonix9.png', 'images/slides/garmonix10.png', 'images/slides/garmonix11.png', 'images/slides/garmonix12.png', 'images/slides/garmonix13.png', 'images/slides/garmonix14.png', 'images/slides/garmonix15.png'], thumb: ['images/slides/garmonix5.png'],
    task: 'Выбрать социальные сети любого бизнеса и воссоздать план по их изменению: проанализировать ближайших конкурентов в городе, определить целевую аудиторию, создать фирстиль, подходящую цветовую гамму и рубрики для продвижения.', role: 'Координатор команды, дизайнер, автор итоговой презентации.', result: 'Преподаватель оценила smm-проект на отлично.', learned: 'Подбирать подходящую гамму для брендов.' },

    { id: 'mm', type: 'gallery', title: 'Личный проект по локализации мемов', shortDescription: 'Перерисовка популярных мемов под конкретных людей/персонажей/маскотов.', images: ['images/mm01.png', 'images/mm02.png', 'images/mm03.png'], thumb: ['images/mm00.png'],
    task: 'Придумать способ адаптировать мемы так, чтобы они подходили под локальный контекст.', role: 'Автор, художник.', result: 'Готовая концепция мемов и их стилизации, которые можно адаптировать под любых людей или персонажей.', learned: 'Изучила новые функции Clip Studio Paint.' },
];
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const THUMB = { text: 'article', video: 'video', audio: 'audio', gallery: 'gallery', presentation: 'presentation' };
document.getElementById('grid').innerHTML = PROJECTS.map(p => {
  const t = THUMB[p.type];
  return '<article class="card" data-type="' + p.type + '" data-id="' + p.id + '"' + (p.tag ? ' data-tag="' + esc(p.tag) + '"' : '') + ' tabindex="0" role="button">' +
    '<div class="thumb"><img src="' + (p.thumb || 'images/preview-' + t + '.svg') + '" alt="Превью проекта «' + esc(p.title) + '» (заглушка)"><span class="badge badge-' + t + '">' + p.type + '</span>' +
    (p.tag ? '<span class="tag-badge">' + esc(p.tag) + '</span>' : '') + '</div><h3>' + esc(p.title) + '</h3><p>' + esc(p.shortDescription) + '</p></article>';
}).join('');

/* ТЕМА: переключатель + запоминание выбора */
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  toggle.classList.toggle('flip'); // рычажок: поворот 180° + scale(.9)
});

/* НАВИГАЦИЯ: подсветка активного пункта */
const links = [...document.querySelectorAll('.nav a')];
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => io.observe(s));

/* ФИЛЬТРЫ ПОРТФОЛИО */
const cards = [...document.querySelectorAll('.card')];
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn); });
  const f = btn.dataset.filter;
  let k = 0; // порядок появления: задержка 40 мс на карточку (см. --i в CSS)
  cards.forEach(c => {
    const show = f === 'all' || c.dataset.type === f;
    c.hidden = !show;
    c.classList.remove('enter');
    if (show) { c.style.setProperty('--i', k++); void c.offsetWidth; c.classList.add('enter'); }
  });
}));

/* МОДАЛКА: содержимое собирается из PROJECTS */
const modal = document.getElementById('modal');
const body = document.getElementById('modalBody');
const titleEl = document.getElementById('modalTitle');
const loader = document.getElementById('loader');
let lastFocus = null, loadT, car = { n: 0, i: 0, imgs: [] };
const CAT = { text: 'Текст', video: 'Видео', audio: 'Аудио', gallery: 'Галерея', presentation: 'Презентации' };
const LABELS = [['task', 'Задача'], ['role', 'Моя роль'], ['result', 'Результат'], ['learned', 'Чему научилась']];
function blocksHTML(p) {
  return '<div class="case-grid">' + LABELS.map(([k, l]) => '<section class="case-block"><h4>' + l + '</h4>' + (p[k] ? '<p>' + esc(p[k]) + '</p>' : '<p class="empty">Описание будет добавлено</p>') + '</section>').join('') + '</div>';
}
/* КАРУСЕЛЬ: стрелки, точки-квадратики, счётчик «1 / 5», клавиши ← → */
function carouselHTML(imgs) {
  const many = imgs.length > 1;
  // Передаем в лайтбокс индекс текущего слайда (0, 1, 2...)
  return '<div class="car" role="group" aria-roledescription="карусель" aria-label="Слайды"><div class="car-view"><img class="car-img" alt="" style="cursor:zoom-in;" onclick="openLightbox(' + car.i + ')"><span class="car-count"></span>' +
    (many ? '<button type="button" class="btn car-btn car-prev" aria-label="Предыдущий слайд">‹</button><button type="button" class="btn car-btn car-next" aria-label="Следующий слайд">›</button>' : '') + '</div>' +
    (many ? '<div class="car-dots">' + imgs.map((_, k) => '<button type="button" class="car-dot" data-i="' + k + '" aria-label="Слайд ' + (k + 1) + '"></button>').join('') + '</div>' : '') + '</div>';
}
function showSlide(i) {
  const v = body.querySelector('.car'); if (!v || !car.n) return;
  car.i = (i + car.n) % car.n;
  const img = v.querySelector('.car-img'); img.src = car.imgs[car.i]; img.alt = 'Слайд ' + (car.i + 1) + ' из ' + car.n;
  v.querySelector('.car-count').textContent = (car.i + 1) + ' / ' + car.n;
  v.querySelectorAll('.car-dot').forEach((d, k) => { d.classList.toggle('on', k === car.i); d.setAttribute('aria-current', k === car.i); });
}
/* ТЕКСТ МАТЕРИАЛА: можно писать HTML (картинки, подписи, ссылки, <b>). Блоки разделяются пустой строкой.
   Символы < > & в обычном тексте пишите как &lt; &gt; &amp; */
function textHTML(t) {
  return t.split('\n\n').map(b => /^\s*<(figure|img|p|h[1-6]|ul|ol|blockquote)\b/i.test(b) ? b : '<p>' + b + '</p>').join('');
}
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  lastFocus = document.activeElement;
  titleEl.textContent = p.title;
  document.getElementById('crumbs').innerHTML = '<span class="seg" style="--s:0">Портфолио &gt; </span><span class="seg" style="--s:1">' + CAT[p.type] + (p.tag ? ' (' + esc(p.tag) + ')' : '') + ' &gt; </span><span class="seg" style="--s:2"><b>' + esc(p.title) + '</b></span>';
  let html = '<p class="modal-lead">' + esc(p.shortDescription) + '</p>';
  car = { n: 0, i: 0, imgs: [] };
  if (p.type === 'video') html += '<video controls preload="metadata" src="' + p.videoSrc + '"></video>';
  else if (p.type === 'audio') html += '<div class="ap ap-big">' + playerHTML(true) + '</div>';
  else if (p.type === 'gallery' || p.type === 'presentation') {
    if (p.images && p.images.length) { car = { n: p.images.length, i: 0, imgs: p.images }; html += carouselHTML(p.images); }
    else if (p.pdfSrc) html += '<iframe src="' + p.pdfSrc + '" title="' + esc(p.title) + '"></iframe>';
    if (p.pdfSrc) html += '<p class="modal-dl"><a class="btn btn-sm" href="' + p.pdfSrc + '" download>Скачать PDF</a></p>';
  } else if (p.text) html += '<div class="modal-text">' + textHTML(p.text) + '</div>';
  body.innerHTML = html + blocksHTML(p);
  showSlide(0);
  // syncPlayers();
  modal.hidden = false;
  // «загрузка» 0.5 с: полосатый индикатор, затем содержимое
  body.hidden = true; loader.hidden = false; clearTimeout(loadT);
  loadT = setTimeout(() => { loader.hidden = true; body.hidden = false; }, 500);
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}
function closeModal() {
  if (modal.hidden || modal.classList.contains('closing')) return;
  clearTimeout(loadT);
  modal.classList.add('closing'); // анимация закрытия 100 мс
  setTimeout(() => {
    modal.hidden = true; modal.classList.remove('closing'); body.innerHTML = ''; car = { n: 0, i: 0, imgs: [] };
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }, 100);
}
cards.forEach(c => {
  c.addEventListener('click', () => openModal(c.dataset.id));
  c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(c.dataset.id); } });
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
body.addEventListener('click', e => {
  if (e.target.closest('.car-prev')) showSlide(car.i - 1);
  else if (e.target.closest('.car-next')) showSlide(car.i + 1);
  else { const d = e.target.closest('.car-dot'); if (d) showSlide(+d.dataset.i); }
});
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') closeModal();
  if (car.n > 1 && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); showSlide(car.i + (e.key === 'ArrowLeft' ? -1 : 1)); }
});

/* SCROLL-АНИМАЦИИ: мягкое появление блоков (fade-in + подъём) */
const revealEls = document.querySelectorAll('.section h2, .about > *, .timeline > li, .bento, .edu-wrap, .filters, .grid, .contact-list, #resume h3');
const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = e.target; t.classList.add('in'); setTimeout(() => t.classList.add('done'), 270); rio.unobserve(t); } }), { threshold: 0.12 });
revealEls.forEach(el => { el.classList.add('reveal'); rio.observe(el); });


/* ОКНА НАВЫКОВ: кнопка в заголовке = переключатель (— / +), клик по заголовку тоже разворачивает */
function setCollapsed(win, state) {
  win.classList.toggle('collapsed', state);
  if (!state) { win.classList.remove('lines'); void win.offsetWidth; win.classList.add('lines'); } // строки снова появляются по очереди
  const b = win.querySelector('.wbtn');
  if (b) { b.textContent = state ? '+' : '—'; b.setAttribute('aria-label', state ? 'Развернуть окно' : 'Свернуть окно'); b.setAttribute('aria-expanded', !state); }
}
document.addEventListener('click', e => {
  const win = e.target.closest('.win'); if (!win) return;
  if (e.target.closest('.win-btns .wbtn')) { setCollapsed(win, !win.classList.contains('collapsed')); return; }
  if (e.target.closest('.win-bar') && win.classList.contains('collapsed')) setCollapsed(win, false);
});
document.addEventListener('keydown', e => {
  if (!(e.key === 'Enter' || e.key === ' ') || !e.target.matches || !e.target.matches('.win-bar[tabindex]')) return;
  e.preventDefault(); const w = e.target.closest('.win'); setCollapsed(w, !w.classList.contains('collapsed'));
});

/* ПОЯВЛЕНИЕ ОКОН НАВЫКОВ: scaleY + построчный вывод (по 25 мс на строку) */
const wins = [...document.querySelectorAll('.win')];
wins.forEach(w => { w.querySelectorAll('.win-pad h4, .win-pad p, .win-pad li').forEach((l, i) => l.style.setProperty('--l', i)); w.classList.add('pre'); });
const wio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); e.target.classList.add('play', 'lines'); wio.unobserve(e.target); } }), { threshold: 0.1 });
wins.forEach(w => wio.observe(w));

/* ===== АУДИОПЛЕЕР: ВРЕМЕННО ОТКЛЮЧЕН ===== */
/* 
const TRACK = { title: 'Название трека', cover: 'images/cover.jpg', fallback: 'images/mini-lit-ai.png', project: 'au1' };
const audio = document.getElementById('global-audio');
const fp = document.getElementById('floatPlayer');
const AUP = PROJECTS.find(p => p.type === 'audio'); 

const coverImg = () => '<img class="ap-cover" src="' + TRACK.cover + '" alt="Обложка трека (заглушка)" onerror="this.onerror=null;this.src=\'' + TRACK.fallback + '\'">';
const progHTML = '<input class="rng ap-prog" type="range" min="0" max="1000" value="0" aria-label="Перемотка">';
const volHTML = '<label class="ap-vol">VOL <input class="rng ap-volume" type="range" min="0" max="100" aria-label="Громкость"></label>';

function playerHTML(big) {
  const play = '<button type="button" class="btn ap-btn ap-play" aria-label="Играть">▶</button>';
  if (big) return '<div class="ap-cover-wrap">' + coverImg() + '</div><div class="ap-main"><div class="ap-title"></div>' + progHTML + '<div class="ap-row">' + play + volHTML + '</div></div>';
  return '<button type="button" class="ap-cover-btn" aria-label="Свернуть или развернуть плеер" aria-expanded="true">' + coverImg() + '</button><div class="ap-main"><div class="ap-title"></div>' + progHTML + volHTML + '</div><div class="ap-btns">' + play + '<button type="button" class="btn ap-btn ap-open" aria-label="Открыть в портфолио" title="Открыть в портфолио">↗</button></div>';
}

function syncPlayers() {
  if (!document.querySelector('.ap')) return;
  const d = audio.duration, pct = isFinite(d) && d > 0 ? audio.currentTime / d * 100 : 0;
  const title = audio.error ? 'Файл не найден' : TRACK.title;
  document.querySelectorAll('.ap').forEach(p => {
    p.classList.toggle('playing', !audio.paused);
    p.querySelector('.ap-title').textContent = title;
    const pr = p.querySelector('.ap-prog'); pr.value = pct * 10; pr.style.setProperty('--p', pct + '%');
    const v = p.querySelector('.ap-volume'); v.value = audio.volume * 100; v.style.setProperty('--p', v.value + '%');
    const b = p.querySelector('.ap-play');
    if (b) { b.textContent = audio.paused ? '▶' : '❚❚'; b.setAttribute('aria-label', audio.paused ? 'Играть' : 'Пауза'); }
  });
}
*/

/* Теперь скрипт идет дальше, не спотыкаясь об плеер */

// Восстанавливаем открытие проектов, но без вызова syncPlayers
function openProject() {
  // Здесь мы не используем TRACK и audio, чтобы не падало
  const card = document.querySelector('.card[data-id="au1"]'); 
  if (card) {
    if (card.hidden) {
      const btn = document.querySelector('.filter[data-filter="all"]');
      if (btn) btn.click();
    }
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => openModal('au1'), 450);
  }
}

/* ЛАЙТБОКС: полноэкранный просмотр со свайпами и стрелками */
window.openLightbox = function(startIndex) {
  let currentIdx = startIndex;
  const imgs = car.imgs; // Берем текущий массив картинок из глобальной переменной car
  
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;user-select:none;';
  
  // Кнопка закрытия
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'position:absolute;top:20px;right:20px;color:#fff;font-size:40px;cursor:pointer;z-index:10;line-height:1;';
  closeBtn.onclick = (e) => { e.stopPropagation(); lb.remove(); };
  
  // Картинка
  const img = document.createElement('img');
  img.style.cssText = 'max-width:100vw;max-height:100vh;object-fit:contain;pointer-events:none;';
  
  // Функция обновления картинки
  function update() {
    img.src = imgs[currentIdx];
  }
  update();
  
  // Стрелки (если картинок больше одной)
  if (imgs.length > 1) {
    const prev = document.createElement('div');
    prev.innerHTML = '‹';
    prev.style.cssText = 'position:absolute;left:10px;color:#fff;font-size:60px;cursor:pointer;padding:20px;z-index:10;';
    prev.onclick = (e) => { e.stopPropagation(); currentIdx = (currentIdx - 1 + imgs.length) % imgs.length; update(); };
    
    const next = document.createElement('div');
    next.innerHTML = '›';
    next.style.cssText = 'position:absolute;right:10px;color:#fff;font-size:60px;cursor:pointer;padding:20px;z-index:10;';
    next.onclick = (e) => { e.stopPropagation(); currentIdx = (currentIdx + 1) % imgs.length; update(); };
    
    lb.appendChild(prev);
    lb.appendChild(next);

    // Свайпы для телефона
    let touchStartX = 0;
    lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
    lb.addEventListener('touchend', e => {
      let touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) { currentIdx = (currentIdx + 1) % imgs.length; update(); } // Свайп влево
      if (touchEndX > touchStartX + 50) { currentIdx = (currentIdx - 1 + imgs.length) % imgs.length; update(); } // Свайп вправо
    }, {passive: true});
  }
  
  // Закрытие по клику на фон
  lb.onclick = () => lb.remove();
  
  lb.appendChild(closeBtn);
  lb.appendChild(img);
  document.body.appendChild(lb);
};