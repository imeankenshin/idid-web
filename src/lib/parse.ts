/**
 * shorten a given name to at least 1 character and no more than 2 characters
 */
export function omitName(name: string) {
  switch (name.length) {
    case 0: {
      return "??";
    }
    case 1: {
      return name[0].toUpperCase();
    }
    case 2: {
      return name.toUpperCase();
    }
    default: {
      const [first, second] = name.match(/[A-Z]/g) ?? ["?", undefined];
      // もし大文字が二つない場合は、最初の文字と2文字目を結合する
      if (!second) {
        return `${first}${name[1]}`;
      }
      return `${first}${second}`;
    }
  }
}
