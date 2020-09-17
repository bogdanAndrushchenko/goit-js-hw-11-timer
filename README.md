goit-js-hw-11-timer-ba

Таймер обратного отсчета Создай плагин настраиваемого таймера, который ведет
обратный отсчет до предварительно определенной даты. Такой плагин может
использоваться в блогах и интернет-магазинах, страницах регистрации событий, во
время технического обслуживания и т. д.

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более
чем двух цифр.

<!-- <div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div> -->

Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с
настройками.

new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Jul 17, 2019'),
}); Для подсчета значений используй следующие готовые формулы, где time -
разница между targetDate и текущей датой.

/\*

- Оставшиеся дни: делим значение UTC на 1000 _ 60 _ 60 \* 24, количество
- миллисекунд в одном дне (миллисекунды _ секунды _ минуты _ часы) _/ const days
  = Math.floor(time / (1000 _ 60 _ 60 \* 24));

/\*

- Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
- остатка % и делим его на количество миллисекунд в одном часе
- (1000 _ 60 _ 60 = миллисекунды _ минуты _ секунды) _/ const hours =
  Math.floor((time % (1000 _ 60 _ 60 _ 24)) / (1000 _ 60 _ 60));

/\*

- Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
- миллисекунд в одной минуте (1000 _ 60 = миллисекунды _ секунды) _/ const mins
  = Math.floor((time % (1000 _ 60 _ 60)) / (1000 _ 60));

/\*

- Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
- миллисекунд в одной секунде (1000) _/ const secs = Math.floor((time % (1000 _
  60)) / 1000);


git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/bogdanAndrushchenko/goit-js-hw-11-timer.git
git push -u origin master