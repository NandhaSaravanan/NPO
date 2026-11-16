"use client";

import { useState } from "react";
import { foodPantryDemo } from "@content/work";
import { BrowserFrame } from "./BrowserFrame";
import { MiniSite } from "./MiniSite";

/**
 * The one live thing on the page.
 *
 * Lumen's whole argument is that the finished site is registered in the nonprofit's own name,
 * so the visitor types their organization's name and watches it take that place in a real
 * rendered site. Nothing here is a mock-up: it is the same `MiniSite` component the case
 * studies use, with one field swapped.
 *
 * Without JavaScript the input is still a real field and the preview still renders, carrying
 * the default name — the page never depends on the script to be readable.
 */
const DEFAULT_NAME = "Union County Food Pantry";
const MAX = 34;

export function NameYourSite() {
  const [name, setName] = useState(DEFAULT_NAME);
  const shown = name.trim() === "" ? DEFAULT_NAME : name.trim();

  const content = {
    ...foodPantryDemo,
    orgName: shown,
    headline: `Feeding ${shown.split(" ").slice(-2).join(" ")}, one neighbor at a time.`,
  };

  return (
    <div>
      <label htmlFor="org-name" className="block text-sm font-semibold text-sage">
        Put your organization in it
      </label>
      {/*
        The field is set at the lead size and styled as a line of writing rather than a form
        control: on this page it is the headline you can type, not an input to fill in.
      */}
      <input
        id="org-name"
        name="org-name"
        type="text"
        value={name}
        maxLength={MAX}
        autoComplete="organization"
        spellCheck={false}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 w-full border-b-2 border-sage bg-transparent pb-2 font-display text-lg font-extrabold tracking-tight text-linen outline-none transition-colors placeholder:text-sage focus-visible:border-gold"
        placeholder={DEFAULT_NAME}
      />
      <figure className="mt-6">
        <BrowserFrame>
          <MiniSite content={content} />
        </BrowserFrame>
        <figcaption className="mt-4 text-sm text-sage">
          A concept site, not a real client — we have none live yet. The design is ours; the name is yours.
        </figcaption>
      </figure>
    </div>
  );
}
