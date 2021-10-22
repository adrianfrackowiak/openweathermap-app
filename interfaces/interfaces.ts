export interface Forecast {
  morningTemp?: number;
  dayTemp?: number;
  nightTemp?: number;
  humidity: number;
  date: string;
}

export interface Stats {
  minimumValue: number;
  maximumValue: number;
  meanValue: number;
  modeValue: number;
}
