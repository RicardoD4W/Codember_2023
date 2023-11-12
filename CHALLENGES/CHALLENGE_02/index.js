const MSG =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

const miniCompilador = (input) => {
  let value = 0;
  return input
    .split("&")
    .slice(0, -1)
    .reduce((acc, curr) => {
      [...curr].forEach((item, _) => {
        if (item === "#") value++;
        if (item === "@") value--;
        if (item === "*") value *= value;
      });
      return (acc += value);
    }, "");
};

// console.log(miniCompilador(MSG));
