import UpdateInquiryStatus from "./update-inquiry-status";
import MarkReadButton from "./mark-read-button";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
};

interface Props {
  inquiries: Inquiry[];
}

export default function InquiryTable({
  inquiries,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">
            Name
          </th>

          <th className="p-3 text-left">
            Email
          </th>

          <th className="p-3 text-left">
            Phone
          </th>

          <th className="p-3 text-left">
            Status
          </th>

          <th className="p-3 text-left">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {inquiries.map((inquiry) => (
          <tr
            key={inquiry.id}
            className="border-b"
          >
            <td className="p-3">
              {inquiry.name}
            </td>

            <td className="p-3">
              {inquiry.email}
            </td>

            <td className="p-3">
              {inquiry.phone}
            </td>

            <td className="p-3">
              <UpdateInquiryStatus
                inquiryId={inquiry.id}
                currentStatus={inquiry.status}
              />
            </td>

            <td className="p-3">
              {inquiry.status === "NEW" && (
                <MarkReadButton
                  inquiryId={inquiry.id}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}