// Urgency

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

  // Urgency String

  concat((not empty(prop("Due")) and prop("Status") != "Cancelled" and not empty(prop("Urgency"))) ? concat(prop("Urgency"), " (", formatDate(prop("Due"), "MM/DD/YY"), ")") : concat(formatDate(prop("Due"), "🗓️ MM/DD/YY")))
