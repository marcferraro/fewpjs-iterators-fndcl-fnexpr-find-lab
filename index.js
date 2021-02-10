const superbowlWin = (array) => {
  const win = array.find(record => record.result === "W")
  // console.log(test.year)
  if (win !== undefined){
    return win.year
  } else {
    win
  }
}
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ] 
// superbowlWin(record)