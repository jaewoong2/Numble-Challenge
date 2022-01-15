export const getDDay = (day_: string) => {
  const setDate = new Date("20" + day_);

  const now = new Date();

  const distance = setDate.getTime() - now.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));

  return day;
};

export const getDay = (day_: string) => {
  const setDate = new Date("20" + day_);
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const day = setDate.getDay();
  if (day - 1 === -1) {
    return days[6];
  }

  return days[day];
};
