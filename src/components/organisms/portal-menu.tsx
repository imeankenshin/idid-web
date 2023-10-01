"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Column } from "../ui/layout";
import DigitalClock from "./digital-clock";
import { Feather, Home, Settings2, User } from "lucide-react";

export default function PortalMenu() {
  return (
    <Column element="aside" gap={4} className="p-6">
      <DigitalClock />
      <Column element="ul" className="gap-2 mb-8">
        <li>
          <Button asChild variant="link">
            <Link href="/" className={"flex gap-4"}>
              <Home />
              Entrance
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/" className="flex gap-4">
              <User />
              Profile
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/setting" className="flex gap-4">
              <Settings2 />
              Setting
            </Link>
          </Button>
        </li>
      </Column>
      <Button asChild size="lg">
        <Link href="compose">
          <Feather size={22} className="mr-2" />
          Compose
        </Link>
      </Button>
    </Column>
  );
}
