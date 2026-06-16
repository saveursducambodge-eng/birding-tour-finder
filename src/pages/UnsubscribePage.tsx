import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export default function UnsubscribePage() {
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");
  const token = new URLSearchParams(window.location.search).get("token") || "";

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: SUPABASE_ANON },
    })
      .then(async (r) => {
        const j = await r.json().catch(() => ({}));
        if (r.ok && j?.valid) { setEmail(j.email || ""); setState("valid"); }
        else if (j?.alreadyUsed) setState("already");
        else setState("invalid");
      })
      .catch(() => setState("invalid"));
  }, [token]);

  const confirm = async () => {
    const { error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    setState(error ? "error" : "success");
  };

  return (
    <>
      <Helmet><title>Unsubscribe — PEARAING Birding Trails</title></Helmet>
      <main className="min-h-[60vh] flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl font-serif">Email preferences</h1>
          {state === "loading" && <p>Checking your link…</p>}
          {state === "valid" && (
            <>
              <p>Unsubscribe <strong>{email}</strong> from PEARAING emails?</p>
              <Button onClick={confirm} variant="nature">Confirm unsubscribe</Button>
            </>
          )}
          {state === "success" && <p>You've been unsubscribed. We're sorry to see you go.</p>}
          {state === "already" && <p>This email is already unsubscribed.</p>}
          {state === "invalid" && <p>This unsubscribe link is invalid or expired.</p>}
          {state === "error" && <p>Something went wrong. Please try again later.</p>}
        </div>
      </main>
    </>
  );
}