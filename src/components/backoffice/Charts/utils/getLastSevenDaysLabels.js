function getLastSevenDaysLabels(currentDate) {
  // Array to hold the labels
  const labels = [];

  // Calculate the start date (7 days before today)
  const startDate = new Date(currentDate.setDate(currentDate.getDate() - 7));

  // Loop through the last 7 days starting from the start date
  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate.setDate(startDate.getDate() + 1));
    const formattedDate = day.toISOString().slice(0, 10);
    labels.push(formattedDate);
  }

  // Sort the labels array in ascending order
  labels.sort((a, b) =>  new Date(a) - new Date(b)  );

  return labels;
}
module.exports =  getLastSevenDaysLabels ;
// Path: components/backoffice/Charts/utils/getLastSevenDays.test.js