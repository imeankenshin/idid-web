import { omitName } from "@/lib/parse";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Row } from "../ui/layout";
import { Badge } from "../ui/badge";

interface PostProps {
  userName: string;
  content: string;
  avatarImage?: string;
  createdAt: Date;
}

export default function Post(props: PostProps) {
  const shortName = omitName(props.userName);
  const daysAgo = Math.floor(
    (Date.now() - props.createdAt.getTime()) / 1000 / 60 / 60 / 24
  );
  const agoLabel = () => {
    switch (daysAgo) {
      case 0: {
        return "Today";
      }
      case 1: {
        return "Yesterday";
      }
      default: {
        return `${daysAgo} days ago`;
      }
    }
  };
  return (
    <article>
      <Card className="w-full">
        <CardHeader className="flex-row justify-between">
          <Row gap={3} items="center">
            <Avatar>
              <AvatarImage src={props.avatarImage} />
              {!props.avatarImage && (
                <AvatarFallback>{shortName}</AvatarFallback>
              )}
            </Avatar>
            <span className="font-medium">@{props.userName}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {agoLabel()}
            </span>
          </Row>
          <Badge>1h ago</Badge>
        </CardHeader>
        <CardContent>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </CardContent>
      </Card>
    </article>
  );
}
