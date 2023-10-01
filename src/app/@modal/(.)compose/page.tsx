import ComposeDialog from "@/components/organisms/compose-dialog";
import { revalidatePath } from "next/cache";

async function action(formData: FormData) {
  "use server";
  console.log(formData.get("content"));
}

export default function ComposeModal() {
  return <ComposeDialog action={action} />;
}
