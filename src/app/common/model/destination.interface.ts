import { ImageFormat } from "./image.interface";

export interface Destination {
  name: string,
  images: ImageFormat,
  description: string,
  distance: string,
  travel: string,
}
