"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/core/lib/supabase-client";
import {
  uploadPropertyImage,
  getImageUrl,
} from "@/core/lib/storage";

export default function PropertyForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState<File[]>([]);
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

    setLoading(true);

    try {
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
        throw error;
      }

      if (images.length > 0 && data) {
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
      }

      router.push("/admin/properties");
      router.refresh();

    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong.");
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-3xl bg-white p-8 shadow-sm"
    >

        {/* Property Details */}
      <div>
        <h2 className="text-2xl font-bold">
          Property Details
        </h2>

        <p className="text-gray-500">
          Basic information about the property.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Title *
        </label>

        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description *
        </label>

        <textarea
          rows={5}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <hr />

      {/* Pricing */}
      <div>
        <h2 className="text-2xl font-bold">
          Pricing
        </h2>

        <p className="text-gray-500">
          Pricing and property information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Price *
          </label>

          <input
            type="number"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Area (sqft) *
          </label>

          <input
            type="number"
            required
            value={areaSqft}
            onChange={(e) =>
              setAreaSqft(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block font-medium">
          Property Type
        </label>

        <select
          value={propertyType}
          onChange={(e) =>
            setPropertyType(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="RESIDENTIAL_PLOT">
            Residential Plot
          </option>

          <option value="FARM_LAND">
            Farm Land
          </option>

          <option value="VILLA">
            Villa
          </option>

          <option value="APARTMENT">
            Apartment
          </option>

          <option value="COMMERCIAL">
            Commercial
          </option>
        </select>
      </div>

      <hr />

      {/* Location */}
      <div>
        <h2 className="text-2xl font-bold">
          Location
        </h2>

        <p className="text-gray-500">
          Property location details.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>

        <input
          type="text"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            City *
          </label>

          <input
            type="text"
            required
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            type="text"
            value={state}
            onChange={(e) =>
              setStateValue(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>

      <hr />

      {/* Images */}
      <div>
        <h2 className="text-2xl font-bold">
          Images
        </h2>

        <p className="text-gray-500">
          Upload one or more property images.
        </p>
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) =>
          setImages(
            Array.from(e.target.files || [])
          )
        }
        className="w-full rounded-lg border p-3"
      />

      {images.length > 0 && (
        <div className="rounded-lg border bg-green-50 p-4">

          <p className="mb-3 font-semibold text-green-700">
            Selected Images ({images.length})
          </p>

          <ul className="space-y-1 text-sm text-gray-700">
            {images.map((image) => (
              <li key={image.name}>
                • {image.name}
              </li>
            ))}
          </ul>

        </div>
      )}

      <div className="flex justify-end gap-4 border-t pt-8">

        <button
          type="button"
          onClick={() => router.back()}
          disabled={loading}
          className="rounded-lg border px-6 py-3 hover:bg-gray-100 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving Property..." : "Save Property"}
        </button>

      </div>

    </form>
  );
}