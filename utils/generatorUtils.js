export const generateName = (props = { nameLength: 1, fixed: false }) => {
  const { nameLength, fixed } = props;
  const n1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  const n2 = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Zero"
  ];
  const n3 = ["Earth", "Water", "Fire", "Wind", "Void", "Heaven"];
  const arrVal = [n1, n2, n3];

  const getRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const length = fixed ? nameLength : getRandom(nameLength) + 1;
  let name = "";

  for (let step = 0; step < length; step++) {
    const selectedArray = arrVal[getRandom(nameLength) % arrVal.length];
    name += `${step === 0 ? "" : " "}${
      selectedArray[getRandom(selectedArray?.length)]
    }`;
  }
  return name;
};

export const generateString = (props) => {
  const { length, prefix = "", type = [] } = props;
  let number = "0123456789";
  let charLower = "abcdefghijklmnopqrstuvwxyz";
  let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let characters =
    type.length > 0
      ? `${type.includes("number") ? number : ""}${
          type.includes("uppercase") ? charUpper : ""
        }${type.includes("lowercase") ? charLower : ""}`
      : `${number}${charUpper}${charLower}`;
  let charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${prefix}${result}`;
};
