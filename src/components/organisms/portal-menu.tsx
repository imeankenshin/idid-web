"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Column } from "../ui/layout";
import DigitalClock from "./digital-clock";
import {
  Feather,
  Home,
  type LucideIcon,
  Settings2,
  User,
  CheckCheck,
} from "lucide-react";

interface ItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

function Item({ href, icon: Icon, label }: ItemProps) {
  return (
    <li>
      <Button asChild variant="link">
        <Link href={href} className="flex gap-4">
          <Icon />
          {label}
        </Link>
      </Button>
    </li>
  );
}

export default function PortalMenu() {
  return (
    <Column element="aside" gap={4} className="p-6">
      <DigitalClock />
      <Column element="ul" className="gap-2 mb-8">
        <Item href="/" icon={Home} label="Home" />
        <Item href="/" icon={User} label="Profile" />
        <Item href="/setting" icon={Settings2} label="Setting" />
        <Item href="/todo" icon={CheckCheck} label="Todo" />
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
