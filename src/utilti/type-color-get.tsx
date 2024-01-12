export default function TypeColorGet(hex: string) {
  let color;

  switch (hex) {
    case "cosmic":
      color = {
        bgcolor: "#EEE1F0",
        secondColor: "#961A88",
      };
      break;
    case "classic":
      color = {
        bgcolor: "#E9EEF6",
        secondColor: "#191978",
      };
      break;
    case "atomic":
      color = {
        bgcolor: "#EAF9F7",
        secondColor: "#00AEB1",
      };
      break;

    default:
      color = hex;
  }

  return color;
}
