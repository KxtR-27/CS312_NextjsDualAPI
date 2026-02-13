// as a stub - arbitrary
//const sum = (data: number[]): number => 999;
//export { sum }

// as a fake - bare minimum to ensure fibonacci works
//const sum = (data: number[]): number => data[0] + data[1];
//export { sum }

// as a true mock - total control
const results: { [key: string]: number } = {
	"0 + 0": 0,
	"0 + 1": 1,
	"1 + 0": 1,
	"1 + 1": 2,
	"2 + 1": 3,
};

const sum = (data: number[]): number => results[data.join(" + ")];

export { sum };
