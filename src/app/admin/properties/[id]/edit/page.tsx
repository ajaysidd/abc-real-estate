import EditPropertyForm from "@/components/forms/edit-property-form";
import {
  getPropertyById,
  getPropertyImages,
} from "@/core/lib/property";
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({
  params,
}: Props) {
  const { id } = await params;

  const property =
    await getPropertyById(id);
  const images =
  await getPropertyImages(id);  

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Edit Property
      </h1>

     <EditPropertyForm
  property={property}
  images={images}
/>
    </main>
  );
}