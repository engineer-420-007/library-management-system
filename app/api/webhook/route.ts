import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const secret = process.env.WEBHOOK_SECRET;

  if (!secret) {
    return new Error("dfd");
  }

  const headerPayload = headers();

  const svix_id = (await headerPayload).get("svix-id");
  const svix_timestamp = (await headerPayload).get("svix-timestamp");
  const svix_signature = (await headerPayload).get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Error("dfgfd");
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(secret);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-signature": svix_signature,
      "svix-timestamp": svix_timestamp,
    }) as WebhookEvent;
  } catch (error) {
    console.log(error);
    return new Response("dfgdg");
  }

  const { id } = evt.data;

  if (evt.type === "user.created") {
    try {
      const { email_addresses, primary_email_address_id } = evt.data;
      console.log(email_addresses, " ", primary_email_address_id);
      return new Response(primary_email_address_id);
    } catch (error) {
      return new Response("dfgdg");
    }
  }
}
