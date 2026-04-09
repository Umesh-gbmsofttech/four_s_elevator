export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxLED66_SeKEQzhxHlZDr-3BP84TnwnoGQ8bvO-ngVngynZq3N1u4POjEXvj-tNA6Si/exec";

export async function submitContactLead(payload) {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
