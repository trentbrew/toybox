prop('Type') == 'Task'
  ? prop('Status') != 'Done'
    ? concat(
        formatDate(prop('Date'), 'M/D/YY') == formatDate(now(), 'M/D/YY')
          ? '❗️ DUE'
          : prop('Date') < now()
          ? '❗️ PAST DUE'
          : abs(dateBetween(now(), prop('Date'), 'days')) < 14
          ? '❗️ URGENT'
          : ''
      )
    : ''
  : ''
