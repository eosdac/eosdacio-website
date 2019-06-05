---
layout: post
title:  "Голосование за Хранителей eosDAC запущено!"
date:   2018-12-17T12:18:00
external_link: https://steemit.com/eos/@shadow82/golosovanie-za-khranitelei-eosdac-zapusheno
---
Мы рады объявить, что голосование за кандидатов в Хранители eosDAC запущено! Как только проголосуют 15% от всех держателей токенов EOSDAC, управление DAC будет автоматически передано 12 избранным кандидатам-хранителям с помощью изменения разрешений в учетной записи <a href="https://www.bloks.io/account/dacauthority">dacauthority</a>.

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmcvHaNcGEMPxBNBf8wBBLMCBtq14kZgy3rsWTMjHSghkY/image.png

Все сообщество eosDAC приложило много сил, чтобы достичь этого важного момента в нашей истории, достижение этой цели потребовало от нас решения многих задач, например, <a href="https://steemit.com/eosio/@eosdac/eosdac-announce-the-formation-of-the-dac-foundation"> создания DAC Foundation</a> и <a href="https://steemit.com/eosio/@eosdac/eosdac-prepares-transition-arrangements-into-custodian-governance">согласования всех необходимых для работы условий с сервисной компанией</a>, а именно Dacoco Gmbh. Все зарегистрированные участники eosDAC теперь смогут проголосовать за кандидатов-хранителей, которым они доверяют, чтобы обеспечить долгосрочное развитие DAC.

This post is also available in English: <a href="https://steemit.com/eosdac/@eosdac/eosdac-custodian-candidate-voting-is-live"> eosDAC Custodian Candidate Voting Is Live! </a>
Ссылка на статью в официальной группе <a href="https://vk.com/@eosdac-golosovanie-za-hranitelei-eosdac-zapuscheno">ВКонтакте</a>

Вы можете сами создать децентрализованного клиента участника EOS и запустить его локально, используя код <a href="https://github.com/eosdac/eosdactoolkit/releases">на нашем Github здесь</a>, чтобы проголосовать за ваших любимых кандидатов. Или просто использовать версию, размещенную на https://members.eosdac.io/, выберите слева пункт меню Хранители, внимательно просмотрите профили кандидатов, нажмите кнопку + рядом с пятью Хранителями, которые вам нравятся, а затем нажмите Отправить мои голоса.

Всё просто!

После достижения обязательного 15% порога, разрешения DAC будут изменены и полный контроль над всеми операциями и фондами перейдет к Хранителям, которых выберут на блокчейне зарегистрированные держатели токенов EOSDAC. Это большой шаг вперёд для нас, как, принадлежащего сообществу, производителя блоков EOS и создателя DAC. Наша цель - обеспечение технических инноваций и лидерство всего сообщества EOS. Мы прокладываем путь к децентрализованному будущему и не только создаем, но и используем инструменты для создания децентрализованных автономных сообществ.

Более подробно о текущей технической структуре DAC читайте далее!


<center><h1>С точки зрения учетных записей EOS и кода, что такое eosDAC?</h1></center>

Основная учетная запись EOS, управляющая DAC, называется <a href="https://www.bloks.io/account/dacauthority">dacauthority</a>. Нажмите на "разрешения" в bloks.io explorer, чтобы увидеть, как он настроен:

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmWmhbZJCs5L8WuhTqMvX656GujG4kojTQTf2Z65r6GWy9/image.png

Первое время, текущая команда по производству блоков Роб, Майкл и Люк сохранят доступ к ключу владельца EOS5XZMyRHJdq8DaCQbeK63SoAo1vmCLbw9bnvbifpgysgesbvnxp, чтобы иметь возможность исправить любые проблемы, которые могут возникнуть, например, технический сбой, препятствующий избранным Хранителям выполнять свою роль или некоторые другие ошибки кода, которые не могут быть исправлены другим способом. После этого этот ключ также будет передан сообществу. Разрешения high, mid и low соответствуют порогу голосования и изложены в <a href="https://members.eosdac.io/constitution">Конституции eosDAC</a>. Как только DAC достигнет 15% порога, разрешения high, medium, low и one будут обновлены и станут учетными записями избранных Хранителей.
Учетная запись производителя блоков <a href="https://members.eosdac.io/constitution">eosdacserver</a> также в настоящее время контролируется через мультиподписи Робом, Майклом и Люком, как вы можете увидеть здесь:

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmWevaNKUC2BAsWhPqjLZiLy3mhttwmGWQ9N8EoS6xWg6s/image.png

Существуют также дополнительные разрешения, настроенные для определенных действий на блокчейне, таких как получение вознаграждений от производства блоков.
У Роба, Майкла и Люка есть <a href="https://eosdac.io/active-worker-proposals/">действующие рабочие предложения</a> по предоставлению услуг по производству блоков для DAC, однако в будущем контроль над этой учетной записью также будет передан сообществу, чтобы держатели токенов могли через своих представителей-хранителей заменить Роба, Майкла и Люка, и у них будет возможность это сделать. Это важно, поскольку мы являемся полностью децентрализованным сообществом.
Следующая часть DAC – это учетная запись <a href="https://www.bloks.io/account/eosdactokens">eosdactokens</a>, которая имеет весь код для токенов EOSDAC, включая регистрацию Участников, который <a href="https://github.com/eosdac/eosdactoken">можно просмотреть здесь</a>. Как вы можете видеть, полный контроль над этой учетной записью находится в руках dacauthority, который будет контролироваться Хранителями, когда мы достигнем порога голосования в 15%, необходимого для запуска DAC:

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmaTvqkp2iELEowKCYpbiFTjdceVHE4rZ7SE3cUPW6CW2p/image.png

Основной функционал DAC содержится в этой учетной записи <a href="https://www.bloks.io/account/daccustodian">daccustodian</a>, с кодом можно <a href="https://github.com/eosdac/daccustodian">ознакомиться здесь</a>. Он включает в себя такие функции, как получение оплаты, назначение Хранителей, голосование, обновление конфигураций и многое другое:

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmbvMR54dRq3r4H6umBuivbaM7S3sU1steJWvxv5gZycrq/image.png

Все разрешения этой учетной записи контролируются dacauthority с дополнительным xfer-разрешением с временной задержкой, поэтому все инициированные кодом транзакции будут задерживаться на 1 час. Цель этой задержки – проверка того, что код работает как ожидалось, и если где-то в коде передачи есть ошибки, то DAC сможет исправить это, прежде чем отправит средства не по назначению.

https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmSBhfdpqx5c4WmezoWvv9z3neWfmFcvr4yA2sAPtu6MAV/image.png

Основные средства DAC хранятся в аккаунте <a href="https://www.bloks.io/account/eosdacthedac">eosdacthedac</a>, который также контролируется dacauthority, и имеет теже xfer-разрешение с временной задержкой.

Код, над которым мы продолжаем сейчас работать, включает в себя функции, помогающие Хранителям <a href="https://github.com/eosdac/dacmultisigs">утверждать предложения с мультиподписями</a> на блокчейне через наш клиент-участника. Мы также создаем полноценную <a href="https://github.com/eosdac/dacproposals">систему рабочих предложений</a>, которая облегчит всю работу, которую делает DAC.

Мы продолжим развивать и совершенствовать процессы необходимые для запуска DAC на программном обеспечение EOSIO, а также поддерживать нашу <a href="https://steemit.com/eos/@shadow82/iniciativa-dac-anons-i-issledovanie-saidchein-dlya-seti-eos-preimushestvo-dlya-decentralizovannykh-avtonomnykh-soobshestv">инициативу DAC</a> по добавлению и развитию нового функционала для будущих DAC на контрактах системного уровня.

Ждем ваших отзывов и предложения на нашем канале в discord: http://discord.io/eosdac

Еще раз спасибо за Вашу поддержку, мы бы не смогли этого добиться без Вас!

А теперь самое время пойти и проголосовать за кандидатов eosDAC! :) http://members.eosdac.io

Автор статьи: Luke Stokes
Перевод: Прохор Борисов
<center>
![Screen Shot 2018-06-12 at 11.00.55 PM.png](https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Голосуйте за eosdacserver</h1></center>

Присоединяйтесь к нашей <a href="https://eosdac.io/news/#newsletter">новостной рассылке</a>, чтобы оставаться в курсе последних событий и следите за нами во всех социальных сетях:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://t.me/eosdac_russian" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdacrussia" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a> | <a href="http://weibo.com/eosdac" target=”_blank”>Weibo</a>| <a href="https://vk.com/eosdac" target="_blank">VK</a>| <a href="https://bihu.com/people/586348" target="_blank">Bihu</a></sub>
