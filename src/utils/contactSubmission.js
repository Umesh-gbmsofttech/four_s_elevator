export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnbqgGX3VvETLl3bQYc09sKTWaH7YPbZcCPQXZIN6xQWyXxI40VL8bYnomWWBJlF4Tqw/exec";

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
