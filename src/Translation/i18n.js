import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navMenu: [
          "HOME",
          "HOTELS",
          "ABOUT US",
          "CONTACTS",
          "RESERVATION",
          "LOGIN",
          "ACCOUNT",
        ],
        homePage: {
          welcomeSection: {
            title: "WELCOME",
            text: "Welcome visitors to your site with a short, engaging introduction. Double click to edit and add your own text.",
            button: "Start now",
          },
          aboutHotel: {
            title: "About our hotel",
            title2: "Information and amenities",
            text: "Continental is your guide to the world of comfortable relaxation. Our site offers a wide selection of hotels around the world, where everyone will find the ideal accommodation for an unforgettable vacation. We provide detailed information about each hotel, including room photos and descriptions. Our convenient search will help you quickly select and book the desired accommodation.",
            button: "Learn more",
          },
          reviews: {
            title: "Reviews",
            txt: "Satisfied clients",
            thanksSpeech:
              "Thank you Continental for the excellent service! We had a wonderful holiday thanks to your site.",
          },
        },
        hotelsPage: {
          title: "All Hotels",
          search: "Search",
          infoLink: "More details",
          noHotels: "No hotel found",
        },
        aboutPage: {
          topSection: {
            title: "Hello",
            text: "This is your About page. Tell us in detail about who you are, what you do and what your business offers. Double click on this text to edit it and add useful information about you and your company.",
          },
          about: {
            title: "About us",
            text1:
              "This is a page about you. Tell us in detail who you are, what you do, what your website offers. Users are always interested in getting to know the personality behind the brand, and this is an opportunity to create a friendly and trustworthy atmosphere on the site.",
            text2:
              "Every brand has a story, and your visitors will want to know yours. This is a good opportunity to share interesting facts, funny stories, or unexpected twists that ultimately helped you achieve your goal.",
            text3:
              "Double click here to replace this text with your own. If you are a business owner, tell us how you got started. Write about your brand values, what your customers mean to you, and how you are different from your competitors. Describe the most interesting details of your work process. Add a video, photo or gallery.",
          },
        },
        contactPage: {
          contactSection1: {
            leftSide: {
              title: "Write",
              text: 'This is the text in the "Contacts" section. Invite site visitors to contact you with questions.',
              phone: "Phone",
              email: "Email",
              website: "Social Media",
            },
            form: {
              name: "Name",
              surname: "Surname",
              email: "Email",
              message: "Message",
              send: "Send",
            },
          },
          contactInfo: {
            title: "Visit us",
            text: 'This is the text in the "Contacts" section. Invite site visitors to contact you with questions or comments. Click on the contact form to edit it.',
            address: "Address",
            wHours: "Working hours",
            weekDays: ["MO-FRI", "SAT", "SUN"],
          },
        },
        weatherPage: {
          back: "Back",
          weather: ["Current Weather", "Hourly Forecast", "5 Day Forecast"],
        },
        hotelPage: {
          hotelInfo: ["Country", "City", "Address", "Phone"],
          weatherButton: "Weather for 5 days",
          moreAboutHotel: "More about room",
        },
        roomPage: {
          infoRoomReserve: {
            forNight: "for night",
            checkIn: "Check-in date",
            checkOut: "Check-out date",
            adults: "Adults",
            children: "Childrens",
            night: "night",
            tax: "Tax",
            summery: "Summery",
            reserveButton: "Reserve",
            forReserveText: "Please log in to make a reservation",
            logIn: "Log in",
            errors: {
              required: "Required",
              capacityMax: "maximum  people",
            },
          },
          infoRoom: {
            parameters: {
              title: "Parameters",
              capacity: "Capacity",
              beds: "Beds",
              area: "Area",
              areaUnit: "sq. ft",
            },
            aboutRoom: "About Room",
            amenities: "Amenities",
          },
        },
        reservation: {
          formSection: {
            title: "Enter your details",
            name: {
              inputName: "Name",
              placeholder: "Add your name",
            },
            surname: {
              inputName: "Surname",
              placeholder: "Add your surname",
            },
            email: {
              inputName: "Email",
              placeholder: "Add your email",
            },
            phone: {
              inputName: "Phone",
              placeholder: "Add your phone",
            },
            country: {
              inputName: "Country",
              russia: "Russia",
              usa: "USA",
              armenia: "Armenia",
              italy: "Italy",
            },
            textarea: {
              inputName: "Special Requests",
              placeholder: "How can we do better next time?",
            },
          },
          reserveSection: {
            title: "Order details",
            typeOfRoom: "Type of Room",
            date: "Date",
            nights: "Nights",
            guests: "Guests",
            withoutTax: "Without Tax",
            tax: "Tax",
            summery: "Summery",
            reserveButton: "Reserve",
          },
        },
        reservationSuccess: {
          reservationInfo1: {
            title: "Room reservation",
            ready: "Ready",
            successText: "your reservation request has been received",
            text: "You will receive an email when your reservation is confirmed.",
            buttonBack: "Back",
            checkIn: "Check-in time",
            checkOut: "Check-out time",
            infoTitle: "Hotels info",
            phone: "Phone",
            email: "Email",
            address: "Address",
          },
        },
        reservationPage: {
          nav: ["Active", "Past"],
          cart: {
            activeText: "Active reserves",
            pastText: "History",
            clearAllBtns: ["Clear cart", "Clear history"],
            cartEmpty: "You have no active reserves",
            cartHistoryEmpty: "Cart history is empty",
          },
          cartItem: {
            roomType: "Type of Room",
            date: "Date",
            nights: "Nights",
            guests: "Guests",
            withoutTax: "Without Tax",
            tax: "Tax",
            summary: "Summary",
          },

          removeItemModal: {
            activeTitle: "Remove active reservation",
            pastTitle: "Remove past reservation",
            text: "Are you sure you want to remove the reservation?",
          },
          removeAllModal: {
            activeTitle: "Remove cart",
            pastTitle: "Remove history",
            text: "Are you sure you want to remove all reservations?",
          },
          editModal: {
            title: "Edit Reservation",
           btns : ["Confirm", "Cancel"]
          },

          modalBtns: ["Remove", "Cancel"],
          seeClose: ["See more", "Close"],
        },
        signUpPage: {
          title: "Sign up",
          buttonSignUp: "Sign up",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm Password",

          haveAccountText: ["Already have an account?", "Click here to login."],
        },
        signInPage: {
          title: "Sign in",
          buttonSignIn: "Sign in",
          email: "Email",
          password: "Password",
          rememberMe: "Remember Me",
          notAccount: ["Don't have an account yet?", "Register"],
        },
        accountPage: {
          title: "Account",
          menu: [
            "Edit Profile",
            "Privacy & Security",
            "Notifications",
            "Help & Support",
            "Add Account",
            "Delete Account",
            "Log out",
          ],
          editProfile: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            password: "Password",
            passwordPlaceholder: "Write your new password",
          },
          delete: "Delete",
          cencel: "Cencel",
          save: "Save",
          logOut: {
            logOut: "Log out",
            logOutText: "Are you sure you want to log-off from",
          },
          deleteAccount: {
            title: "Delete Account",
            text: "Are you sure you want to delete the account linked to",
            rangeText:
              "I understand that I won't be able to recover my account",
          },
        },
        errors: {
          required: "Required",
          short: "Too short",
          long: "Too long",
          invalidSymbol: "Invalid character",
          invalidEmail: "Invalid email format",
          password: "Password must be at least 6 characters",
          passwordMatches:
            "Password must include uppercase, lowercase, number, and special character",

          roomPage: {
            capacityMax: "maximum people ",
            mustBeNumber: "Must be a number",
            mustBeGreater: "Must be greater than 0",
            notNegative: "Cannot be negative",
          },
          datePicker: {
            invalidDates: "Invalid check-out date! Please select another.",
            checkInFirst: "Please select check-in date first!",
            checkOutNext: "Check-out must be at least the next day!",
            alreadyBooked: "This date is already booked.",
            checkOutTooClose:
              "The day after check-in is already booked, please choose another date.",
          },
          reservationPage: {
            phoneFormat: "Phone number must start with + sign",
            minDigit: "Minimum 6 digits",
            maxDigit: "Maximum 15 digits",
          },
          signUp: {
            passwordMutch: "Passwords must match",
          },
          errorPage: {
            title: "Page Not Found",
            text: "Sorry, this page doesn’t exist. It may have been moved or deleted.",
            button: "Return to Homepage",
          },
        },

        footer: ["st. Arbat, 1a, 119019", "Moscow", "Russia"],
      },
    },
    ru: {
      translation: {
        navMenu: [
          "ГЛАВНАЯ",
          "ОТЕЛИ",
          "О НАС",
          "КОНТАКТЫ",
          "БРОНИРОВАНИЕ",
          "ВОЙТИ",
          "АККАУНТ",
        ],
        homePage: {
          welcomeSection: {
            title: "ДОБРО ПОЖАЛОВАТЬ",
            text: "Приветствуйте посетителей вашего сайта коротким и интересным вступлением. Дважды щелкните, чтобы отредактировать и добавить свой текст.",
            button: "Начать сейчас",
          },
          aboutHotel: {
            title: "О нашем отеле",
            title2: "Информация и удобства",
            text: "Continental – ваш проводник в мир комфортного отдыха. Наш сайт предлагает широкий выбор отелей по всему миру, где каждый найдет идеальное жилье для незабываемого отдыха. Мы предоставляем подробную информацию о каждом отеле, включая фотографии и описания номеров. Наш удобный поиск поможет вам быстро выбрать и забронировать нужное жилье.",
            button: "Узнать больше",
          },
          reviews: {
            title: "Отзывы",
            txt: "Клиенты Сатисфилда",
            thanksSpeech:
              "Спасибо Continental за отличный сервис! Благодаря вашему сайту у нас был замечательный отпуск.",
          },
        },
        hotelsPage: {
          title: "Все Отели",
          search: "Поиск",
          infoLink: "Подробнее",
          noHotels: "Отель не найден",
        },
        aboutPage: {
          topSection: {
            title: "Привет",
            text: "Это страница о вас. Расскажите здесь подробно, кто вы, чем занимаетесь, что предлагает ваш сайт и бизнес. Кликните по этому тексту дважды, чтобы отредактировать его и добавить полезную информацию о себе и своей компании для посетителей сайта.",
          },
          about: {
            title: "О Нас",
            text1:
              "Это страница о вас. Расскажите здесь подробно, кто вы, чем занимаетесь, что предлагает ваш сайт. Пользователям всегда интересно узнать поближе личность, стоящую за брендом, и это возможность создать на сайте дружелюбную и доверительную атмосферу.",
            text2:
              "У каждого бренда есть история, и ваши посетители захотят узнать вашу. Это хорошая возможность поделиться интересными фактами, забавными случаями или неожиданными поворотами, которые помогли вам в итоге добиться цели.",
            text3:
              "Кликните здесь дважды, чтобы заменить этот текст своим. Если вы владелец бизнеса, расскажите, как вы начинали и как нашли себя. Напишите о ценностях бренда, что для вас значат клиенты и в чем вы отличаетесь от конкурентов. Как эксперт своего дела опишите самые интересные детали рабочего процесса. Добавьте видео, фото или галерею.",
          },
        },
        contactPage: {
          contactSection1: {
            leftSide: {
              title: "Написать",
              text: "Это текст в разделе «Контакты». Предложите посетителям сайта связаться с вами и задать вопросы.",
              phone: "Телефон",
              email: "Эл. почта",
              website: "Социальные сети",
            },
            form: {
              name: "Имя",
              surname: "Фамилия",
              email: "Эл. почта",
              message: "Сообщение",
              send: "Отправить",
            },
          },
          contactInfo: {
            title: "Приходите к нам",
            text: "Это текст в разделе «Контакты». Предложите посетителям сайта связаться с вами, чтобы задать вопросы или оставить комментарии. Нажмите на контактную форму, чтобы изменить ее.",
            address: "Адрес",
            wHours: "Часы работы",
            weekDays: ["ПН–ПТ", "СБ", "ВС"],
          },
        },
        weatherPage: {
          back: "Назад",
          weather: ["Текущая погода", "Почасовой прогноз", "Прогноз на 5 дней"],
        },
        hotelPage: {
          hotelInfo: ["Страна", "Город", "Адрес", "Телефон"],
          weatherButton: "Погода на 5 дней",
          moreAboutHotel: "Подробнее об номере",
        },
        roomPage: {
          infoRoomReserve: {
            forNight: "за ночь",
            checkIn: "Выезд",
            checkOut: "Заезд",
            adults: "Взрослых",
            children: "Детей",
            night: "ночь",
            tax: "Налог",
            summery: "Итог",
            reserveButton: "Бронировать",
            forReserveText: "Пожалуйста, войдите, чтобы сделать бронирование",
            logIn: "Войти",
            errors: {
              required: "Поле обязательно",
              capacityMax: "человека максимум",
            },
          },
          infoRoom: {
            parameters: {
              title: "Параметры",
              capacity: "Вместимость",
              beds: "Кровати",
              area: "Площадь",
              areaUnit: "кв. фт",
            },
            aboutRoom: "О Номере",
            amenities: "Удобства",
          },
        },
        reservation: {
          formSection: {
            title: "Введите свои данные",
            name: {
              inputName: "Имя",
              placeholder: "Введите ваше имя",
            },
            surname: {
              inputName: "Фамилия",
              placeholder: "Введите вашу фамилию",
            },
            email: {
              inputName: "Электронная почта",
              placeholder: "Введите вашу электронную почту",
            },
            phone: {
              inputName: "Телефон",
              placeholder: "Введите ваш телефон",
            },
            country: {
              inputName: "Страна",
              russia: "Россия",
              usa: "США",
              armenia: "Армения",
              italy: "Италия",
            },

            textarea: {
              inputName: "Особые пожелания",
              placeholder: "Как мы можем улучшить наш сервис в следующий раз?",
            },
          },
          reserveSection: {
            title: "Детали заказа",
            typeOfRoom: "Тип номера",
            date: "Дата",
            nights: "Ночи",
            guests: "Гости",
            withoutTax: "Без налога",
            tax: "Налог",
            summery: "Итог",
            reserveButton: "Бронировать",
          },
        },
        reservationSuccess: {
          reservationInfo1: {
            title: "Бронирование номера",
            ready: "Готово",
            successText: "Ваш запрос на бронирование получен",
            text: "Когда ваше бронирование будет подтверждено, вы получите уведомление по электронной почте.",
            buttonBack: "Назад",
            checkIn: "Время заезда",
            checkOut: "Время выезда",
            infoTitle: "Информация об отеле",
            phone: "Телефон",
            email: "Электронная почта",
            address: "Адрес",
          },
        },
        reservationPage: {
          nav: ["Активный", "Прошлое"],
          cart: {
            activeText: "Активные резервы",
            pastText: "История",
            clearAllBtns: ["Очистить корзину", "Очистить историю"],
            cartEmpty: "У вас нет активных бронирований",
            cartHistoryEmpty: "История бронирований пуста",
          },
          cartItem: {
            roomType: "Тип номера",
            date: "Дата",
            nights: "Ночи",
            guests: "Гости",
            withoutTax: "Без налога",
            tax: "Налог",
            summary: "Итог",
          },

          removeItemModal: {
            activeTitle: "Удалить активное бронирование",
            pastTitle: "Удалить предыдущее бронирование",
            text: "Вы уверены, что хотите удалить бронирование?",
          },
          removeAllModal: {
            activeTitle: "Удалить корзину",
            pastTitle: "Удалить историю",
            text: "Вы уверены, что хотите удалить все резервирования?",
          },
          editModal: {
            title: "Редактировать бронирование",
            btns : ["Изменить", "Отмена"]
          },

          modalBtns: ["Удалить", "Отмена"],
          seeClose: ["Посмотреть больше", "Закрыть"],
        },
        signUpPage: {
          title: "Зарегистрироваться",
          buttonSignUp: "Зарегистрироваться",
          firstName: "Имя",
          lastName: "Фамилия",
          email: "Эл. почта",
          password: "Пароль",
          confirmPassword: "Повторите пароль",

          haveAccountText: [
            "У вас уже есть учетная запись?",
            "Нажмите здесь, чтобы войти.",
          ],
        },
        signInPage: {
          title: "Войти",
          buttonSignIn: "Войти",
          email: "Эл. почта",
          password: "Пароль",
          rememberMe: "Запомнить ",
          notAccount: ["У вас еще нет учетной записи?", "Зарегистрироваться"],
        },
        accountPage: {
          title: "Аккаунт",
          menu: [
            "Редактировать профиль",
            "Конфиденциальность и безопасность",
            "Уведомления",
            "Помощь и поддержка",
            "Добавить аккаунт",
            "Удалить аккаунт",
            "Выйти",
          ],
          editProfile: {
            firstName: "Имя",
            lastName: "Фамилия",
            email: "Эл. почта",
            password: "Пароль",
            passwordPlaceholder: "Напишите свой новый пароль",
          },
          delete: "Удалить",
          cencel: "Отмена",
          save: "Сохранить",
          logOut: {
            logOut: "Выйти",
            logOutText: "Вы уверены, что хотите выйти из",
          },
          deleteAccount: {
            title: "Удалить аккаунт",
            text: "Вы уверены, что хотите удалить учетную запись, связанную с",
            rangeText: "Я понимаю, что не смогу восстановить свой аккаунт",
          },
        },
        errors: {
          required: "Это поле обязательно",
          short: "Слишком коротко",
          long: "Слишком длинно",
          invalidSymbol: "Недопустимый символ",
          invalidEmail: "Неверный формат электронной почты",
          password: "Пароль должен быть не менее 6 символов",
          passwordMatches:
            "Пароль должен содержать заглавную, строчную букву, цифру и специальный символ",

          roomPage: {
            capacityMax: "максимум человек ",
            mustBeNumber: "Должно быть числом",
            mustBeGreater: "Должно быть больше 0",
            notNegative: "Не может быть отрицательным",
          },
          datePicker: {
            invalidDates: "Неверная дата выезда! Пожалуйста, выберите другую.",
            checkInFirst: "Сначала выберите дату заезда!",
            checkOutNext:
              "Дата выезда должна быть как минимум на следующий день!",
            alreadyBooked: "Эта дата уже забронирована.",
            checkOutTooClose:
              "На следующий день после заезда уже есть бронь, пожалуйста, выберите другую дату.",
          },

          reservationPage: {
            phoneFormat: "Номер телефона должен начинаться с символа +",
            minDigit: "Минимум 6 цифр",
            maxDigit: "Максимум 15 цифр",
          },
          signUp: {
            passwordMutch: "Пароли должны совпадать",
          },
          errorPage: {
            title: "Страница не найдена",
            text: "Извините, такой страницы не существует. Возможно, она была перемещена или удалена.",
            button: "Вернуться на главную",
          },
        },

        footer: ["ул. Арбат, 1а, 119019,", "Москва", "Россия"],
      },
    },
    am: {
      translation: {
        navMenu: [
          "ԳԼԽԱՎՈՐ",
          "ՀՅՈՒՐԱՆՈՑՆԵՐ",
          "ՄԵՐ ՄԱՍԻՆ",
          "ԿՈՆՏԱԿՏՆԵՐ",
          "ԱՄՐԱԳՐՈՒՄ",
          "ՄՈՒՏՔ",
          "ՀԱՇԻՎ",
        ],
        homePage: {
          welcomeSection: {
            title: "ԲԱՐԻ ԳԱԼՈՒՍՏ",
            text: "Ողջունեք այցելուներին ձեր կայք կարճ, գրավիչ ներածությամբ: Կրկնակի սեղմեք՝ ձեր սեփական տեքստը խմբագրելու և ավելացնելու համար:",
            button: "Սկսել հիմա",
          },
          aboutHotel: {
            title: "Մեր հյուրանոցի մասին",
            title2: "Տեղեկատվություն և հարմարություններ",
            text: "Continental-ը ձեր ուղեցույցն է դեպի հարմարավետ հանգստի աշխարհ: Մեր կայքը առաջարկում է հյուրանոցների լայն ընտրանի ամբողջ աշխարհում, որտեղ յուրաքանչյուրը կգտնի իդեալական կացարան անմոռանալի հանգստի համար: Մենք տրամադրում ենք մանրամասն տեղեկատվություն յուրաքանչյուր հյուրանոցի մասին, ներառյալ սենյակների լուսանկարները և նկարագրությունները: Մեր հարմար որոնումը կօգնի ձեզ արագ ընտրել և ամրագրել ցանկալի կացարանը:",
            button: "Իմանալ ավելին",
          },
          reviews: {
            title: "Կարծիքներ",
            txt: "Տպավորված հաճախորդներ",
            thanksSpeech:
              "Շնորհակալություն Continental-ին գերազանց ծառայության համար: Մենք հիանալի արձակուրդ անցկացրինք ձեր կայքի շնորհիվ։",
          },
        },
        hotelsPage: {
          title: "Բոլոր Հյուրանոցները",
          search: "Որոնում",
          infoLink: "Ավելին",
          noHotels: "Հյուրանոց չի գտնվել",
        },
        aboutPage: {
          topSection: {
            title: "Բարև",
            text: "Սա ձեր մասին էջ է: Այստեղ մանրամասն պատմեք մեզ, թե ով եք դուք, ինչով եք զբաղվում, ինչ է առաջարկում ձեր կայքը և բիզնեսը: Կրկնակի սեղմեք այս տեքստի վրա՝ այն խմբագրելու և կայքի այցելուների համար ձեր և ձեր ընկերության մասին օգտակար տեղեկություններ ավելացնելու համար:",
          },
          about: {
            title: "Մեր մասին",
            text1:
              "Սա ձեր մասին էջ է: Այստեղ մանրամասն պատմեք, թե ով եք դուք, ինչով եք զբաղվում, ինչ է առաջարկում ձեր կայքը։ Օգտատերերը միշտ հետաքրքրված են ճանաչելու բրենդի ետևում գտնվող անհատականությունը, և սա հնարավորություն է կայքում ստեղծել բարեկամական և վստահելի մթնոլորտ:",
            text2:
              "Յուրաքանչյուր ապրանքանիշ ունի իր պատմությունը, և ձեր այցելուները կցանկանան իմանալ ձերը: Սա լավ հնարավորություն է կիսվելու հետաքրքիր փաստերով, զվարճալի պատմություններով կամ անսպասելի շրջադարձերով, որոնք ի վերջո օգնեցին ձեզ հասնել ձեր նպատակին:",
            text3:
              "Կրկնակի սեղմեք այստեղ՝ այս տեքստը ձեր սեփականով փոխարինելու համար: Եթե ​​դուք բիզնեսի սեփականատեր եք, պատմեք մեզ, թե ինչպես եք սկսել և ինչպես եք հայտնվել: Գրեք ձեր ապրանքանիշի արժեքների մասին, ինչ նշանակություն ունեն ձեր հաճախորդները ձեզ համար և ինչպես եք դուք տարբերվում ձեր մրցակիցներից: Որպես ձեր ոլորտի փորձագետ, նկարագրեք ձեր աշխատանքային գործընթացի ամենահետաքրքիր մանրամասները: Ավելացնել տեսանյութ, լուսանկար կամ պատկերասրահ:",
          },
        },
        contactPage: {
          contactSection1: {
            leftSide: {
              title: "Կապ մեզ հետ",
              text: "Սա «Կոնտակտներ» բաժնի տեքստն է: Հրավիրեք կայքի այցելուներին կապվել ձեզ հետ հարցերով:",
              phone: "Հեռախոս",
              email: "Էլ․ փոստ",
              website: "Սոցիալական մեդիա",
            },
            form: {
              name: "Անուն",
              surname: "Ազգանուն",
              email: "Էլ․ փոստ",
              message: "Հաղորդագրություն",
              send: "Ուղարկել",
            },
          },
          contactInfo: {
            title: "Այցելեք մեզ",
            text: "Սա «Կոնտակտներ» բաժնի տեքստն է: Հրավիրեք կայքի այցելուներին կապվել ձեզ հետ հարցերով կամ մեկնաբանություններով: Սեղմեք կոնտակտային ձևի վրա՝ այն խմբագրելու համար:",
            address: "Հասցե",
            wHours: "Աշխատանքային ժամեր",
            weekDays: ["ԵՐԿ–ՈՒՐԲ", "ՇԲ", "ԿԻՐ"],
          },
        },
        weatherPage: {
          back: "Հետ ",
          weather: [
            "Ընթացիկ եղանակ",
            "Ժամային կանխատեսում",
            "Հնգօրյա կանխատեսում",
          ],
        },
        hotelPage: {
          hotelInfo: ["Երկիր", "Քաղաք", "Հասցե", "Հեռախոս"],
          weatherButton: "Հնգօրյա եղանակ",
          moreAboutHotel: "Ավելին սենյակի մասին",
        },
        roomPage: {
          infoRoomReserve: {
            forNight: "մեկ գիշերը",
            checkIn: "Սկիզբ",
            checkOut: "Ավարտ",
            adults: "Մեծահասակներ",
            children: "Երեխաներ",
            night: "գիշեր",
            tax: "Հարկ",
            summery: "Ընդամենը",
            reserveButton: "Ամրագրել",
            forReserveText: "Ամրագրման համար խնդրում եմ մուտք գործեք հաշիվ",
            logIn: "Մուտք",
          },
          infoRoom: {
            parameters: {
              title: "Պարամետրեր",
              capacity: "Տարողություն",
              beds: "Մահճակալներ",
              area: "Տարածք",
              areaUnit: "քվ. ֆտ",
            },
            aboutRoom: "Սենյակի մասին",
            amenities: "Հարմարություններ",
          },
        },
        reservation: {
          formSection: {
            title: "Մուտքագրեք ձեր տվյալները",
            name: {
              inputName: "Անուն",
              placeholder: "Ավելացրեք ձեր անունը",
            },
            surname: {
              inputName: "Ազգանուն",
              placeholder: "Ավելացրեք ձեր ազգանունը",
            },
            email: {
              inputName: "Էլ․ փոստ",
              placeholder: "Ավելացրեք ձեր էլ․ փոստը",
            },
            phone: {
              inputName: "Հեռախոս",
              placeholder: "Ավելացրեք ձեր հեռախոսահամարը",
            },
            country: {
              inputName: "Երկիր",
              russia: "Ռուսաստան",
              usa: "ԱՄՆ",
              armenia: "Հայաստան",
              italy: "Իտալիա",
            },
            textarea: {
              inputName: "Հատուկ խնդրանքներ",
              placeholder:
                "Ինչպես կարող ենք ավելի լավ ծառայություն մատուցել հաջորդ անգամ?",
            },
          },
          reserveSection: {
            title: "Պատվերի մանրամասները",
            typeOfRoom: "Սենյակի տեսակը",
            date: "Ամսաթիվ",
            nights: "Գիշերներ",
            guests: "Հյուրեր",
            withoutTax: "Առանց հարկի",
            tax: "Հարկ",
            summery: "Ընդհանուր",
            reserveButton: "Ամրագրել",
          },
        },
        reservationSuccess: {
          reservationInfo1: {
            title: "Սենյակի ամրագրում",
            ready: "Պատրաստ է",
            successText: "Ձեր ամրագրման հայտը ստացվել է",
            text: "Երբ ձեր ամրագրումը հաստատվի, դուք էլ․ փոստով կստանաք ծանուցում։",
            buttonBack: "Վերադառնալ",
            checkIn: "Գրանցման ժամանակ",
            checkOut: "Հանձնման ժամանակ",
            infoTitle: "Հյուրանոցի տվյալները",
            phone: "Հեռախոս",
            email: "Էլ․ փոստ",
            address: "Հասցե",
          },
        },
        reservationPage: {
          nav: ["Ակտիվ", "Անցյալ"],
          cart: {
            activeText: "Ակտիվ ամրագրումներ",
            pastText: "Պատմություն",
            clearAllBtns: ["Մաքրել զամբյուղը", "Մաքրել պատմությունը"],
            cartEmpty: "Դուք չունեք ակտիվ ամրագրումներ",
            cartHistoryEmpty: "Դուք չունեք անցած ամրագրումներ",
          },
          cartItem: {
            roomType: "Սենյակի տեսակ",
            date: "Ամսաթիվ",
            nights: "Գիշերներ",
            guests: "Հյուրերի քանակ",
            withoutTax: "Առանց հարկի",
            tax: "Հարկ",
            summary: "Ընդհանուր",
          },
          removeItemModal: {
            activeTitle: "Ջնջել ակտիվ ամրագրումը",
            pastTitle: "Ջնջել անցած ամրագրումը",
            text: "Վստա՞հ եք, որ ցանկանում եք ջնջել այս ամրագրումը։",
          },
          removeAllModal: {
            activeTitle: "Ջնջել ամրագրումները",
            pastTitle: "Ջնջել պատմությունը",
            text: "Վստա՞հ եք, որ ցանկանում եք ջնջել բոլոր ամրագրումները։",
          },
          editModal: {
            title: "Խմբագրել ամրագրումը",
            btns : ["Հաստատել", "Չեղարկել"]
          },

          modalBtns: ["Ջնջել", "Չեղարկել"],
          seeClose: ["Տեսնել ավելին", "Փակել"],
        },
        signUpPage: {
          title: "Գրանցում",
          buttonSignUp: "Գրանցվել",
          firstName: "Անուն",
          lastName: "Ազգանուն",
          email: "Էլ․ փոստ",
          password: "Գաղտնաբառ",
          confirmPassword: "Կրկնել գաղտնաբառը",
          haveAccountText: [
            "Արդեն ունե՞ք հաշիվ:",
            "Մուտք գործելու համար սեղմեք այստեղ:",
          ],
        },
        signInPage: {
          title: "Մուտք",
          buttonSignIn: "Մուտք",
          email: "Էլ․ փոստ",
          password: "Գաղտնաբառ",
          rememberMe: "Հիշել ինձ",
          notAccount: ["Դեռ չունե՞ք հաշիվ", "Գրանցվել"],
        },
        accountPage: {
          title: "Հաշիվ",
          menu: [
            "Խմբագրել պրոֆիլը",
            "Գաղտնիություն և անվտանգություն",
            "Ծանուցումներ",
            "Օգնություն և աջակցություն",
            "Ավելացնել հաշիվ",
            "Ջնջել հաշիվը",
            "Դուրս գալ",
          ],
          editProfile: {
            firstName: "Անուն",
            lastName: "Ազգանուն",
            email: "Էլ․ փոստ",
            password: "Գաղտնաբառ",
            passwordPlaceholder: "Գրեք ձեր նոր գաղտնաբառը",
          },
          delete: "Ջնջել",
          cencel: "Չեղարկել",
          save: "Պահպանել",
          logOut: {
            logOut: "Դուրս գալ",
            logOutText: "Համոզվա՞ծ եք, որ ցանկանում եք դուրս գալ հաշվից",
          },
          deleteAccount: {
            title: "Ջնջել հաշիվը",
            text: "Վստա՞հ եք, որ ցանկանում եք ջնջել հաշիվը",
            rangeText: "Ես հասկանում եմ, որ չեմ կարողանա վերականգնել իմ հաշիվը",
          },
        },
        errors: {
          required: "Այս դաշտը պարտադիր է",
          short: "Չափազանց կարճ է",
          long: "Չափազանց երկար է",
          invalidSymbol: "Անվավեր նշան",
          invalidEmail: "Էլ․ փոստի անվավեր ձևաչափ",
          password: "Գաղտնաբառը պետք է լինի առնվազն 6 նիշ",
          passwordMatches:
            "Գաղտնաբառը պետք է պարունակի մեծատառ, փոքրատառ, թիվ և հատուկ նիշ",

          roomPage: {
            capacityMax: "անձ առավելագույնը ",
            mustBeNumber: "Պետք է լինի թիվ",
            mustBeGreater: "Պետք է լինի 0-ից մեծ",
            notNegative: "Բացասական լինել չի կարող",
          },
          datePicker: {
            invalidDates:
              "Ելքի ամսաթվի ընտրությունը սխալ է։ Խնդրում ենք ընտրել մեկ այլ ամսաթիվ։",
            checkInFirst: "Խնդրում ենք նախ ընտրել մուտքի ամսաթիվը։",
            checkOutNext: "Ելքի ամսաթիվը պետք է լինի առնվազն հաջորդ օրը։",
            alreadyBooked: "Այս ամսաթիվն արդեն ամրագրված է։",
            checkOutTooClose:
              "Մուտքի հաջորդ օրը արդեն ամրագրված է, խնդրում ենք ընտրել այլ օր։",
          },
          reservationPage: {
            phoneFormat: "Հեռախոսահամարը պետք է սկսվի + նշանով",
            minDigit: "Նվազագույնը 6 նիշ",
            maxDigit: "Առավելագույնը 15 նիշ",
          },
          signUp: {
            passwordMutch: "Գաղտնաբառերը պետք է համընկնեն",
          },
          errorPage: {
            title: "Էջը չի գտնվել",
            text: "Կներես, նման էջ գոյություն չունի։ Հնարավոր է այն տեղափոխվել է կամ ջնջվել։",
            button: "Վերադառնալ գլխավոր էջ",
          },
        },
        footer: ["փ․ Առբատ, 1ա, 119019,", "Մոսկվա", "Ռուսաստան"],
      },
    },
  },
  lng: localStorage.getItem("lang") || "am",
  fallbackLng: "am",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
