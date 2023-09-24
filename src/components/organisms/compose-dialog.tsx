"use client";

import { Dialog, DialogContent, DialogFooter, DialogTitle } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Column, Row } from "../ui/layout";
import { Button } from "../ui/button";
import { ImageIcon, LaughIcon } from "lucide-react";
import type { FormHTMLAttributes } from "react";

export default function ComposeDialog({
  action,
}: {
  action: FormHTMLAttributes<HTMLFormElement>["action"];
}) {
  return (
    <form action={action} onSubmit={console.log}>
      <DialogContent>
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
      </DialogContent>
    </form>
  );
}
