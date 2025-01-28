import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button variant={"primary"} size={"xs"}>
        Primary
      </Button>

      <Button variant = "secondary"> 
        Secondary
      </Button>

      <Button variant = "destructive"> 
        destructive
      </Button>

      <Button variant = "ghost"> 
        ghost
      </Button>

      <Button variant = "link"> 
        link
      </Button>

      <Button variant = "muted"> 
        muted
      </Button>

      <Button variant = "teritary"> 
        tertitary
      </Button>
    </div>
  );
}
