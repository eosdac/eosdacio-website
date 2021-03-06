﻿![](https://i.imgur.com/tM0sTGz.png)

3 января, 2020


**НОВОСТИ: Клиенты смогут автоматически входить в WAX dApps с помощью нового портала WAX Developer Portal.**
=================================================================================================


Мы добавили функцию в WAX Cloud Wallet, которая **позволяет клиентам dApp автоматически входить в свои любимые WAX dApps, что делает запуск приложений на WAX еще быстрее и проще**.

Благодаря [быстрому запуску WaxJS](https://developer.wax.io/waa/use-waxjs/) разработчики могут выполнить простую безопасную проверку, которая позволит клиентам автоматически входить в dApp в любое время, когда они захотят получить к нему доступ.

Прежде чем вы сможете начать подписывать транзакции из вашего dApp, клиент должен войти в систему. WaxJS включает функцию isAutoLoginAvailable, которая:

-   Надежно проверяет учетные данные WAX Cloud Wallet
-   Проверяет, находится ли ваш dApp в белом списке

Если оба условия выполняются, userAccount и открытые ключи клиента устанавливаются в вашем объекте WaxJS, и вам не нужно вызывать функцию login(). У вас также будет доступ к wax.userAccount и wax.pubKeys.

Клиенты смогут экономить свое время и клики, и могут начать использовать ваше приложение за считанные секунды.

Хотите посмотреть, как это работает? Функция автологина в действии [здесь](https://developer.wax.io/waa/waxjs-demo/).

![](https://i.imgur.com/uyAyqUf.png)

---

Посетите [пул разработчиков WAX](https://developer.wax.io/) для получения доступа ко всем ресурсам для разработчиков и присоединяйтесь к сообществам, чтобы быть в курсе самых последних разработок WAX:

-   [Канал разработчиков WAX в Telegram](https://t.me/waxdevelopers)
-   [Канал для обсуждений WAX в Telegram](https://t.me/wax_io)
-   [Канал объявлений WAX в Telegram](https://t.me/waxtokenannoucements)
-   [WAX Twitter](https://twitter.com/wax_io)