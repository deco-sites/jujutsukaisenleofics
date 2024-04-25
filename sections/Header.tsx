
interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  /**
  * @description The description of image.
  */
  image?: string;
}

export default function Section({ name = "Capy", image = "capy.jpg" }: Props) {
  return (
    <div class="bg-white p-8 rounded-md shadow-md">
      <img src={image} alt="Component Image" class="mb-4">
      <h2 class="text-2xl font-semibold mb-4">{name}</h2>
      <div class="p-4 bg-gray-200">
        <p class="text-gray-600">Add your text or other components here</p>
      </div>
    </div>
  )
}
