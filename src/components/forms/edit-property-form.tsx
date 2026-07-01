"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

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

    setLoading(true);

    try {
      await updateProperty(property.id, {
        title,
        city,
        price,
      });

      router.push("/admin/properties");
      router.refresh();

    } catch (error) {
      console.error(error);

      alert("Failed to update property.");
    } finally {
      setLoading(false);
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

      router.refresh();

    } catch (error) {
      console.error(error);

      alert("Failed to delete image.");
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
          Update the basic property
          information.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Title *
        </label>

        <input
          required
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
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
            Price *
          </label>

          <input
            required
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(
                Number(e.target.value)
              )
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>

      <hr />

      {/* Images */}

      <div>
        <h2 className="text-2xl font-bold">
          Property Images
        </h2>

        <p className="text-gray-500">
          Manage uploaded images.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <Image
              src={image.url}
              alt="Property"
              width={500}
              height={350}
              className="h-48 w-full object-cover"
            />

            <div className="space-y-3 p-4">

              {image.is_primary ? (
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Primary Image
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    handleDeleteImage(
                      image.id
                    )
                  }
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Delete Image
                </button>
              )}

            </div>
          </div>
        ))}

      </div>

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
          {loading
            ? "Updating..."
            : "Update Property"}
        </button>

      </div>

    </form>
  );
}