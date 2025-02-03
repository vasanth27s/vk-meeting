export const generateMeetingID = () => {
  let meetingID = "";
  const chars =
    "BMZiKjmwo4-8Rk4O5SorRETJF2m7Dx1hceg3gTcvqyQGmcSocy8tN0Y3HbAClY0qtLIextg8pheLcgFC4gsZoHI";
  const maxPos = chars.length;

  for (let i = 0; i < 8; i++) {
    meetingID += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return meetingID;
};
