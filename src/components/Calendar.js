import PropTypes from 'prop-types';
import moment from 'moment';

function Calendar(props) {
  const { date } = props;

  const days1 = [{
    day: date.date(),
    class: 'ui-datepicker-today' 
  }];

  let pointer = moment(date);

  while (pointer.date() !== 1) {
    pointer.date(pointer.date() - 1);
    days1.unshift({
      day: pointer.date(),
      class: null       
    });
  }

  while (pointer.day() !== 1) {
    pointer.date(pointer.date() - 1);
    days1.unshift({
      day: pointer.date(),
      class: 'ui-datepicker-other-month'       
    });
  }

  pointer = moment(date);
  pointer.date(pointer.date() + 1);

  while (pointer.month() === date.month()) {
    days1.push({
      day: pointer.date(),
      class: null      
    });
    pointer.date(pointer.date() + 1);
  }

  while (pointer.day() !== 1) {
    days1.push({
      day: pointer.date(),
      class: 'ui-datepicker-other-month'       
    });
    pointer.date(pointer.date() + 1);
  }

  const days = [];
  while (days1.length) {
    days.push(days1.splice(0, 7));
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{date.format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.format('D')}</div>
          <div className="ui-datepicker-material-month">{date.format('MMM')}</div>
          <div className="ui-datepicker-material-year">{date.format('YYYY')}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{date.format('YYYY')}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {days.map((week, i) => 
            <tr key={i}>
              {week.map((day, i) => <td className={day.class} key={i}>{day.day}</td>)}
            </tr>
          )}
        </tbody>
      </table>     
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired
}

export default Calendar;