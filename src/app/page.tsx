import Post from "@/components/organisms/post";
import { Column } from "@/components/ui/layout";

export default function Home() {
  const userName = "LinoRino";
  const date = new Date();
  const message = () => {
    switch (date.getHours()) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 23:
      case 24: {
        return "Go right to bed";
      }
      case 4:
      case 5:
      case 6:
      case 7:
      case 8: {
        return "Good morning";
      }
      case 9:
      case 10:
      case 11: {
        return "Keep it up";
      }
      case 12:
      case 13:
      case 14: {
        return "Lunch time";
      }
      case 15:
      case 16:
      case 17: {
        return "Take a break";
      }
      case 18:
      case 19:
      case 20: {
        return "Good evening";
      }
      default: {
        return "Good night";
      }
    }
  };
  return (
    <>
      <main className="min-h-screen max-w-4xl w-full">
        <h1>
          {message()}, {userName}!
        </h1>
        <Column element="section" spacing={4} className="flex p-4">
          <Post
            userName={userName}
            avatarImage="/linn.png"
            content="Quick brown fox jumps over the lazy dog."
            createdAt={new Date("2023-09-04")}
          />
          <Post
            userName="Rick Sanchez"
            content="Never gonna give you up, never gonna let you down."
            createdAt={new Date("2023-01-01")}
          />
          <Post
            userName="Drake"
            content="Started from the bottom now we're here."
            createdAt={new Date("2023-01-01")}
          />
          <Post
            userName="Pythonista"
            createdAt={new Date("2021-01-01")}
            content={`import antigravity`}
          />
        </Column>
      </main>
      <Column element="aside" className="p-6"></Column>
    </>
  );
}
