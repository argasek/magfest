var launchDate = moment('2018-12-03T16:00:00+01:00').toDate();

var timerId = countdown(
  launchDate,
  function(ts) {
    document.getElementById('pageTimer').innerHTML = ts.toHTML("span");
  },
  countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS
);
