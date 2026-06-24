"use client";

import { useState } from "react";
import { supabase } from "@/core/lib/supabase-client";
import {
  uploadPropertyImage,
  getImageUrl,
} from "@/core/lib/storage";


export default function PropertyForm() {
  const [images, setImages] = useState<File[]>(
  []
);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [areaSqft, setAreaSqft] = useState("");
  const [propertyType, setPropertyType] =
    useState("RESIDENTIAL_PLOT");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateValue] = useState("");

   async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const { data, error } = await supabase
    .from("properties")
    .insert({
      title,
      slug,
      description,
      property_type: propertyType,
      status: "AVAILABLE",
      price: Number(price),
      area_sqft: Number(areaSqft),
      address,
      city,
      state,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

if (images.length > 0 && data) {
  try {
    for (
      let index = 0;
      index < images.length;
      index++
    ) {
      const image = images[index];

      const fileName = `${Date.now()}-${image.name}`;

      await uploadPropertyImage(
        image,
        fileName
      );

      const imageUrl =
        getImageUrl(fileName);

      const { error: imageError } =
        await supabase
          .from("property_images")
          .insert({
            property_id: data.id,
            url: imageUrl,
            public_id: fileName,
            is_primary: index === 0,
            display_order: index + 1,
          });

      if (imageError) {
        console.error(imageError);
      }
    }
  } catch (uploadError) {
    console.error(uploadError);
  }
}

  alert("Property created successfully!");

  setTitle("");
  setDescription("");
  setPrice("");
  setAreaSqft("");
  setAddress("");
  setCity("");
  setStateValue("");
  setImages([]);
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
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
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
            setPrice(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Area (sqft)
        </label>

        <input
          type="number"
          value={areaSqft}
          onChange={(e) =>
            setAreaSqft(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Property Type
        </label>

        <select
          value={propertyType}
          onChange={(e) =>
            setPropertyType(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="RESIDENTIAL_PLOT">
            RESIDENTIAL_PLOT
          </option>
          <option value="FARM_LAND">
            FARM_LAND
          </option>
          <option value="VILLA">
            VILLA
          </option>
          <option value="APARTMENT">
            APARTMENT
          </option>
          <option value="COMMERCIAL">
            COMMERCIAL
          </option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Address
        </label>

        <input
          type="text"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          City
        </label>

        <input
          type="text"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          State
        </label>

        <input
          type="text"
          value={state}
          onChange={(e) =>
            setStateValue(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

       <div>
  <label className="block mb-2">
    Property Image
  </label>

   <input
  type="file"
  accept="image/*"
  multiple
  className="w-full border rounded-lg p-3"
  onChange={(e) =>
    setImages(
      Array.from(
        e.target.files || []
      )
    )
  }
/>
{images.length > 0 && (
  <div className="text-green-600">
    <p>
      Selected Images:
    </p>

    {images.map((image) => (
      <p key={image.name}>
        • {image.name}
      </p>
    ))}
  </div>
)}
</div>

       

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Save Property
      </button>
    </form>
  );
}