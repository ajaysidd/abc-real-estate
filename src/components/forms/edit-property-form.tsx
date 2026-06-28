"use client";

import Image from "next/image";
import { useState } from "react";
import {
  updateProperty,
  deletePropertyImage,
} from "@/core/lib/property";
interface Props {
  property: {
    id: string;
    title: string;
    city: string;
    price: number;
  };

  images: {
    id: string;
    url: string;
    is_primary: boolean;
  }[];
}

export default function EditPropertyForm({
  property,
  images,
}: Props) {
  const [title, setTitle] = useState(
    property.title
  );

  const [city, setCity] = useState(
    property.city
  );

  const [price, setPrice] = useState(
    property.price
  );

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await updateProperty(
        property.id,
        {
          title,
          city,
          price,
        }
      );

      alert(
        "Property updated successfully!"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update property."
      );
    }
  }
async function handleDeleteImage(
  imageId: string
) {
  const confirmed = confirm(
    "Delete this image?"
  );

  if (!confirmed) return;

  try {
    await deletePropertyImage(imageId);

    alert("Image deleted.");

    window.location.reload();
  } catch (error) {
    console.error(error);

    alert(
      "Failed to delete image."
    );
  }
}
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2">
          Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          City
        </label>

        <input
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Price
        </label>

        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(
              Number(e.target.value)
            )
          }
          className="w-full border rounded-lg p-3"
        />
      </div>
      
       <div>
  <h2 className="text-2xl font-semibold mb-4">
    Property Images
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  
    {images.map((image) => (
      <div
        key={image.id}
        className="border rounded-lg p-2"
      >
        <Image
          src={image.url}
          alt="Property"
          width={300}
          height={200}
          className="rounded-lg w-full h-32 object-cover"
        />

        {image.is_primary && (
          <p className="text-green-600 text-sm mt-2">
            Primary Image
          </p>
        )}
     
       {!image.is_primary && (
  <button
    type="button"
    onClick={() =>
      handleDeleteImage(image.id)
    }
    className="mt-2 text-red-600 text-sm hover:underline"
  >
    Delete Image
  </button>
)} 

      </div>
    ))}
  </div>
</div>
       
        

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Update Property
      </button>
    </form>
  );
}