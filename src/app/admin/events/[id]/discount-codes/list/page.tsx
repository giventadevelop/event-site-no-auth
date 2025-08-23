import { fetchEventDetailsServer } from "@/app/admin/ApiServerActions";
import DiscountCodeListClient from "./DiscountCodeListClient";
import { fetchDiscountCodesForEvent } from "./ApiServerActions";

export default async function DiscountCodeListPage(props: { params: Promise<{ id: string }> | { id: string } }) {
  const { params } = props;
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const eventId = resolvedParams.id;

  // fetchEventDetailsServer expects a number, fetchDiscountCodesForEvent expects a string
  const eventDetails = await fetchEventDetailsServer(Number(eventId));
  const discountCodes = await fetchDiscountCodesForEvent(eventId);

  return (
    <DiscountCodeListClient
      eventId={eventId}
      initialDiscountCodes={discountCodes}
      eventDetails={eventDetails}
    />
  );
}