import {match} from "assert";

export function parse(input: string) {
    return input
}

export function partOne(input: ReturnType<typeof parse>) {
    // go through each line of the input and check the first number it sees in the string
    const lines = input.split('\n');
    // for each character in the line check if its a number. Get the first and last number and add them to a total
    let total = 0;
    for (const line of lines) {
        const numbers = line.match(/\d/g);
        if (numbers && numbers.length === 1) {
            total += parseInt(numbers[0])
        } else if (numbers) {
            total += parseInt(numbers.at(0) + "" + numbers.at(-1))
        }
    }

    return total

}

export function partTwo(input: ReturnType<typeof parse>) {
    const lines = input.split("\n");
    let total = 0;
  for (const line of lines) {
        let numbers = []
        for (const digit of digits) {
            if (line.includes(digit.word)) {
                numbers.push(
                    {
                        "index": line.indexOf(digit.word),
                        "value": digit.value
                    }
                );
            }
        }


        const chars = [...line]
        chars.map( (value, index) => {
          if (parseInt(value)) {
            numbers.push({
              "index": index,
              "value": parseInt(value)
            })
          }
        })

        if (numbers && numbers.length === 1) {
          // @ts-ignore
          total += numbers[0].value
        } else if (numbers && numbers.length > 1) {
          let lowest = numbers.reduce((acc, num) => acc.index < num.index ? acc : num);
          let highest = numbers.reduce((acc, num) => acc.index > num.index ? acc : num);
          const result = lowest.value + "" + highest.value
          total += parseInt(result) ;
        }

    }
  return total
}

// a constant with keys and values of spelled out
export const digits = [
    {"word": "one", "value": 1},
    {"word": "two", "value": 2},
    {"word": "three", "value": 3},
    {"word": "four", "value": 4},
    {"word": "five", "value": 5},
    {"word": "six", "value": 6},
    {"word": "seven", "value": 7},
    {"word": "eight", "value": 8},
    {"word": "nine", "value": 9},
]

