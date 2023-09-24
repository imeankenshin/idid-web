"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Column, Row } from "../ui/layout";
import { Button } from "../ui/button";
import { ImageIcon, LaughIcon } from "lucide-react";
import type { FormHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

export default function ComposeDialog({
  action,
}: {
  action: FormHTMLAttributes<HTMLFormElement>["action"];
}) {
  const router = useRouter();
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          router.back();
        }
      }}
      open
    >
      <DialogContent asChild>
        <form
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.metaKey) {
              console.log("submit");
            }
          }}
          action={action}
          onSubmit={console.log}
        >
          <DialogHeader>
            <DialogTitle>Componse</DialogTitle>
          </DialogHeader>
          <Column spacing={2}>
            <Textarea
              id="content"
              name="content"
              placeholder="What's happening?"
              className="w-full resize-none"
            />
          </Column>
          <DialogFooter>
            <Row spacing={1} className="w-full">
              <Button tip="Upload media" variant="ghost" size="icon">
                <ImageIcon strokeWidth={1.75} />
              </Button>
              <Button tip="Pick emoji" variant="ghost" size="icon">
                <LaughIcon strokeWidth={1.75} />
              </Button>
            </Row>
            <Button type="submit">Submit</Button>
          </DialogFooter>
          <DialogClose />
        </form>
      </DialogContent>
    </Dialog>
  );
}
